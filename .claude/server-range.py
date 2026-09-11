#!/usr/bin/env python3
"""Statický server, který umí HTTP Range. Bez toho nejde ve videu přetáčet,
takže se hero vrstvy nedají lokálně ověřit (Vercel Range umí, tohle je jen náhled)."""
import http.server, os, re, socketserver, sys

KOREN = os.path.abspath(sys.argv[2]) if len(sys.argv) > 2 else os.path.dirname(os.path.abspath(__file__))
PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 8475

class H(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *a, **kw):
        super().__init__(*a, directory=KOREN, **kw)

    def end_headers(self):
        self.send_header("Accept-Ranges", "bytes")
        self.send_header("Cache-Control", "no-store")
        super().end_headers()

    def send_head(self):
        rozsah = self.headers.get("Range")
        if not rozsah:
            return super().send_head()
        cesta = self.translate_path(self.path)
        if not os.path.isfile(cesta):
            return super().send_head()
        m = re.match(r"bytes=(\d*)-(\d*)", rozsah.strip())
        if not m:
            return super().send_head()
        velikost = os.path.getsize(cesta)
        od = int(m.group(1)) if m.group(1) else 0
        do = int(m.group(2)) if m.group(2) else velikost - 1
        do = min(do, velikost - 1)
        if od > do:
            self.send_response(416)
            self.send_header("Content-Range", "bytes */%d" % velikost)
            self.end_headers()
            return None
        f = open(cesta, "rb")
        f.seek(od)
        self.send_response(206)
        self.send_header("Content-Type", self.guess_type(cesta))
        self.send_header("Content-Range", "bytes %d-%d/%d" % (od, do, velikost))
        self.send_header("Content-Length", str(do - od + 1))
        self.end_headers()
        self.zbyva = do - od + 1
        return f

    def copyfile(self, zdroj, cil):
        if not hasattr(self, "zbyva"):
            return super().copyfile(zdroj, cil)
        n = self.zbyva
        del self.zbyva
        while n > 0:
            kus = zdroj.read(min(65536, n))
            if not kus:
                break
            cil.write(kus)
            n -= len(kus)

class S(socketserver.ThreadingTCPServer):
    allow_reuse_address = True
    daemon_threads = True

print("range server na http://localhost:%d (koren %s)" % (PORT, KOREN), flush=True)
S(("", PORT), H).serve_forever()
