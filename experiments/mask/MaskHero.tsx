"use client";

import { useEffect, useRef, useCallback, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const BG = "#010101";
const BRUSH_RADIUS = 80;
const FADE_DELAY = 2500;
const FADE_DURATION = 3000;
const UNLOCK_THRESHOLD = 150;

export default function MaskHero({ children }: { children?: React.ReactNode }) {
  // Two visible canvases (left/right halves) + one offscreen paint mask
  const canvasLeftRef = useRef<HTMLCanvasElement>(null);
  const canvasRightRef = useRef<HTMLCanvasElement>(null);
  const maskImgLeftRef = useRef<HTMLImageElement>(null);
  const maskImgRightRef = useRef<HTMLImageElement>(null);
  const jakubImgRef = useRef<HTMLImageElement | null>(null);
  const layoutRef = useRef({ W: 0, H: 0, imgW: 0, imgH: 0, imgX: 0, imgY: 0 });
  const stateRef = useRef({ lastMoveTime: 0, hasHoles: false, ready: false, moveCount: 0 });
  const debugRef = useRef({ active: false, offsetY: 200, offsetX: -13, scale: 140 });
  const maskCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const hudRef = useRef<HTMLDivElement>(null);

  const [scrollUnlocked, setScrollUnlocked] = useState(false);
  const [canvasReady, setCanvasReady] = useState(false);
  const unlockedRef = useRef(false);

  // Parallax scroll
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Split: left half moves left, right half moves right
  const leftX = useTransform(scrollYProgress, [0, 0.5], ["0%", "-110%"]);
  const rightX = useTransform(scrollYProgress, [0, 0.5], ["0%", "110%"]);
  const heroOpacity = useTransform(scrollYProgress, [0.2, 0.5], [1, 0]);

  const calcLayout = useCallback(() => {
    const W = window.innerWidth;
    const H = window.innerHeight;
    const imgW = Math.min(W * 0.7, 900);
    const imgH = imgW * (2048 / 2144);
    const imgX = (W - imgW) / 2;
    const imgY = (H - imgH) / 2;
    layoutRef.current = { W, H, imgW, imgH, imgX, imgY };
  }, []);

  // Lock scroll on mount
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = "unset"; };
  }, []);

  useEffect(() => {
    if (scrollUnlocked) document.body.style.overflow = "unset";
  }, [scrollUnlocked]);

  useEffect(() => {
    if (!canvasLeftRef.current || !canvasRightRef.current || !maskImgLeftRef.current) return;
    // Non-null after the guard above; the `!` keeps the narrowing inside nested closures (resize, onKeyDown…)
    const cL = canvasLeftRef.current!;
    const cR = canvasRightRef.current!;
    const maskImgL = maskImgLeftRef.current!;
    const ctxL = cL.getContext("2d");
    const ctxR = cR.getContext("2d");
    if (!ctxL || !ctxR) return;

    // Offscreen canvas for paint mask
    const maskCanvas = document.createElement("canvas");
    const maskCtx = maskCanvas.getContext("2d")!;
    maskCanvasRef.current = maskCanvas;

    const img = new Image();
    img.src = "/jakubskupin-hp-black.png";
    jakubImgRef.current = img;

    function resize() {
      calcLayout();
      const { W, H } = layoutRef.current;
      cL.width = W; cL.height = H;
      cR.width = W; cR.height = H;
      maskCanvas.width = W; maskCanvas.height = H;
      maskCtx.clearRect(0, 0, W, H);
    }

    img.onload = () => {
      stateRef.current.ready = true;
      resize();
      setCanvasReady(true);
    };
    const onResize = () => { resize(); stateRef.current.hasHoles = false; };

    function paintAt(x: number, y: number) {
      if (debugRef.current.active) return;
      stateRef.current.lastMoveTime = Date.now();
      stateRef.current.hasHoles = true;
      stateRef.current.moveCount++;
      const grad = maskCtx.createRadialGradient(x, y, 0, x, y, BRUSH_RADIUS);
      grad.addColorStop(0, "rgba(255,255,255,1)");
      grad.addColorStop(0.5, "rgba(255,255,255,0.6)");
      grad.addColorStop(1, "rgba(255,255,255,0)");
      maskCtx.globalCompositeOperation = "source-over";
      maskCtx.fillStyle = grad;
      maskCtx.fillRect(x - BRUSH_RADIUS, y - BRUSH_RADIUS, BRUSH_RADIUS * 2, BRUSH_RADIUS * 2);
    }

    function checkUnlock() {
      if (!unlockedRef.current && stateRef.current.moveCount >= UNLOCK_THRESHOLD) {
        unlockedRef.current = true;
        setScrollUnlocked(true);
      }
    }

    const onMouseMove = (e: MouseEvent) => { paintAt(e.clientX, e.clientY); checkUnlock(); };
    const onTouchMove = (e: TouchEvent) => {
      if (!unlockedRef.current) e.preventDefault();
      const t = e.touches[0];
      if (t) paintAt(t.clientX, t.clientY);
      checkUnlock();
    };
    const onTouchEnd = () => { stateRef.current.lastMoveTime = Date.now(); };

    // Debug
    function updateHud() {
      const hud = hudRef.current; if (!hud) return;
      const d = debugRef.current;
      const info = hud.querySelector("#debug-info");
      if (info) info.textContent = `offsetY: ${d.offsetY}px | offsetX: ${d.offsetX}px | scale: ${d.scale}%`;
    }
    function applyDebugTransform() {
      const d = debugRef.current;
      const t = `translateY(calc(12% + ${d.offsetY}px)) translateX(${d.offsetX}px) scale(${d.scale / 100})`;
      maskImgL.style.transform = t;
      const r = maskImgRightRef.current;
      if (r) r.style.transform = t;
      updateHud();
    }
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "d" || e.key === "D") {
        const d = debugRef.current; d.active = !d.active;
        const hud = hudRef.current;
        if (hud) hud.style.display = d.active ? "block" : "none";
        if (d.active) {
          cL.style.opacity = "0.5"; cR.style.opacity = "0.5";
          let refImg = document.getElementById("debug-jakub") as HTMLImageElement;
          if (!refImg) {
            refImg = document.createElement("img"); refImg.id = "debug-jakub";
            refImg.src = "/jakubskupin-hp-black.png";
            maskImgL.parentElement?.parentElement?.appendChild((() => {
              const wrap = document.createElement("div"); wrap.id = "debug-jakub-wrap";
              wrap.style.cssText = "position:absolute;inset:0;display:flex;align-items:center;justify-content:center;pointer-events:none;z-index:0;";
              const { imgW, imgH } = layoutRef.current;
              refImg.style.cssText = `width:${imgW}px;height:${imgH}px;object-fit:contain;opacity:0.5;pointer-events:none;`;
              wrap.appendChild(refImg); return wrap;
            })());
          }
          cL.style.display = "none"; cR.style.display = "none";
          maskImgL.style.filter = "brightness(2.5)"; maskImgL.style.opacity = "0.6";
          const mr = maskImgRightRef.current;
          if (mr) { mr.style.filter = "brightness(2.5)"; mr.style.opacity = "0.6"; }
        } else {
          cL.style.display = "block"; cL.style.opacity = "1";
          cR.style.display = "block"; cR.style.opacity = "1";
          document.getElementById("debug-jakub-wrap")?.remove();
          maskImgL.style.filter = "none"; maskImgL.style.opacity = "1";
          const mr = maskImgRightRef.current;
          if (mr) { mr.style.filter = "none"; mr.style.opacity = "1"; }
          maskCtx.clearRect(0, 0, layoutRef.current.W, layoutRef.current.H);
          stateRef.current.hasHoles = false;
        }
        return;
      }
      if (!debugRef.current.active) return;
      const step = e.shiftKey ? 1 : 5; const d = debugRef.current;
      switch (e.key) {
        case "ArrowUp": d.offsetY -= step; break;
        case "ArrowDown": d.offsetY += step; break;
        case "ArrowLeft": d.offsetX -= step; break;
        case "ArrowRight": d.offsetX += step; break;
        case "+": case "=": d.scale += 2; break;
        case "-": case "_": d.scale -= 2; break;
        default: return;
      }
      e.preventDefault(); applyDebugTransform();
    };

    // Shared render function — draws to a given context
    function renderTo(ctx: CanvasRenderingContext2D, fadeAlpha: number) {
      const { W, H, imgW, imgH, imgX, imgY } = layoutRef.current;
      const { ready, hasHoles } = stateRef.current;

      ctx.globalCompositeOperation = "source-over"; ctx.globalAlpha = 1;
      ctx.fillStyle = BG; ctx.fillRect(0, 0, W, H);
      if (ready && jakubImgRef.current) {
        ctx.drawImage(jakubImgRef.current, imgX, imgY, imgW, imgH);
        // Feather edges
        const fade = 80; const fadeBot = 150;
        const tG = ctx.createLinearGradient(imgX, imgY, imgX, imgY + fade);
        tG.addColorStop(0, BG); tG.addColorStop(1, "transparent");
        ctx.fillStyle = tG; ctx.fillRect(imgX, imgY, imgW, fade);
        const bG = ctx.createLinearGradient(imgX, imgY + imgH - fadeBot, imgX, imgY + imgH);
        bG.addColorStop(0, "transparent"); bG.addColorStop(0.5, `${BG}99`); bG.addColorStop(1, BG);
        ctx.fillStyle = bG; ctx.fillRect(imgX, imgY + imgH - fadeBot, imgW, fadeBot);
        const lG = ctx.createLinearGradient(imgX, imgY, imgX + fade, imgY);
        lG.addColorStop(0, BG); lG.addColorStop(1, "transparent");
        ctx.fillStyle = lG; ctx.fillRect(imgX, imgY, fade, imgH);
        const rG = ctx.createLinearGradient(imgX + imgW - fade, imgY, imgX + imgW, imgY);
        rG.addColorStop(0, "transparent"); rG.addColorStop(1, BG);
        ctx.fillStyle = rG; ctx.fillRect(imgX + imgW - fade, imgY, fade, imgH);
      }
      if (hasHoles && fadeAlpha > 0) {
        ctx.globalCompositeOperation = "destination-out";
        ctx.globalAlpha = fadeAlpha;
        ctx.drawImage(maskCanvas, 0, 0);
        ctx.globalAlpha = 1; ctx.globalCompositeOperation = "source-over";
      }
    }

    // Render loop — draws to BOTH canvases
    let raf: number;
    const animate = () => {
      if (debugRef.current.active) { raf = requestAnimationFrame(animate); return; }
      const { hasHoles, lastMoveTime } = stateRef.current;
      const { W, H } = layoutRef.current;

      let fadeAlpha = 1;
      if (hasHoles && Date.now() - lastMoveTime > FADE_DELAY) {
        const fadeTime = Date.now() - lastMoveTime - FADE_DELAY;
        fadeAlpha = Math.max(0, 1 - fadeTime / FADE_DURATION);
        if (fadeAlpha <= 0) { maskCtx.clearRect(0, 0, W, H); stateRef.current.hasHoles = false; }
      }

      // Draw identical content to both canvases
      renderTo(ctxL, fadeAlpha);
      renderTo(ctxR, fadeAlpha);

      raf = requestAnimationFrame(animate);
    };

    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("touchend", onTouchEnd);
    window.addEventListener("keydown", onKeyDown);
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("keydown", onKeyDown);
      cancelAnimationFrame(raf);
    };
  }, [calcLayout]);

  const maskTransform = "translateY(calc(12% + 200px)) translateX(-13px) scale(1.40)";
  const vignetteStyle = {
    background: "radial-gradient(ellipse at center, transparent 30%, rgba(1,1,1,0.6) 100%), linear-gradient(to bottom, #010101 0%, transparent 12%, transparent 88%, #010101 100%)",
  };

  return (
    <>
      {/* SCROLL DRIVER — tall section for parallax */}
      <div ref={sectionRef} style={{ height: scrollUnlocked ? "250vh" : "100vh" }} />

      {/* FIXED LAYERS — homepage behind, doors in front */}

      {/* Layer 1: Homepage (behind doors) */}
      {children && (
        <div className="fixed inset-0 overflow-y-auto" style={{ zIndex: 10, pointerEvents: scrollUnlocked ? "auto" : "none" }}>
          {children}
        </div>
      )}

      {/* Layer 2: Split doors (in front of homepage) */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 30 }}>
        {/* LEFT HALF */}
        <motion.div
          className="absolute inset-0 will-change-transform bg-[#010101]"
          style={{ clipPath: "inset(0 50% 0 0)", x: leftX, opacity: heroOpacity }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <img ref={maskImgLeftRef} src="/maska.png" alt=""
              className="w-[70%] max-w-[900px] h-auto object-contain"
              style={{ transform: maskTransform, visibility: canvasReady ? "visible" : "hidden" }} />
          </div>
          <canvas ref={canvasLeftRef} className="absolute inset-0 w-full h-full z-[1]" />
          <div className="absolute inset-0 z-[2]" style={vignetteStyle} />
        </motion.div>

        {/* RIGHT HALF */}
        <motion.div
          className="absolute inset-0 will-change-transform bg-[#010101]"
          style={{ clipPath: "inset(0 0 0 50%)", x: rightX, opacity: heroOpacity }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <img ref={maskImgRightRef} src="/maska.png" alt=""
              className="w-[70%] max-w-[900px] h-auto object-contain"
              style={{ transform: maskTransform, visibility: canvasReady ? "visible" : "hidden" }} />
          </div>
          <canvas ref={canvasRightRef} className="absolute inset-0 w-full h-full z-[1]" />
          <div className="absolute inset-0 z-[2]" style={vignetteStyle} />
        </motion.div>
      </div>

      {/* Debug HUD */}
      <div ref={hudRef}
        className="fixed top-5 left-5 z-[999] hidden rounded-lg border border-[#333] bg-black/85 p-4 font-mono text-sm text-green-400 leading-relaxed">
        <div className="font-bold text-yellow-400">DEBUG MODE</div>
        <div>↑↓ posun masky vertikálně</div>
        <div>←→ posun masky horizontálně</div>
        <div>+/- změna velikosti masky</div>
        <div className="mt-2 text-xs text-gray-500">Shift = jemný posun (1px)</div>
        <div id="debug-info" className="mt-2 text-cyan-400">offsetY: 200px | offsetX: -13px | scale: 140%</div>
      </div>
    </>
  );
}
