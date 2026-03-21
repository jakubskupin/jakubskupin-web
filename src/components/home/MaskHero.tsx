"use client";

import { useEffect, useRef, useCallback } from "react";

const BG = "#0a0a0a";
const BRUSH_RADIUS = 80;
const FADE_DELAY = 2500;
const FADE_DURATION = 3000; // ms for full fade-out

export default function MaskHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const maskImgRef = useRef<HTMLImageElement>(null);
  const jakubImgRef = useRef<HTMLImageElement | null>(null);
  const layoutRef = useRef({ W: 0, H: 0, imgW: 0, imgH: 0, imgX: 0, imgY: 0 });
  const stateRef = useRef({ lastMoveTime: 0, hasHoles: false, ready: false });
  const debugRef = useRef({ active: false, offsetY: 200, offsetX: -13, scale: 140 });
  const maskCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const hudRef = useRef<HTMLDivElement>(null);

  const calcLayout = useCallback(() => {
    const W = window.innerWidth;
    const H = window.innerHeight;
    const imgW = Math.min(W * 0.7, 900);
    const imgH = imgW * (2048 / 2144);
    const imgX = (W - imgW) / 2;
    const imgY = (H - imgH) / 2;
    layoutRef.current = { W, H, imgW, imgH, imgX, imgY };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const maskImgEl = maskImgRef.current;
    if (!canvas || !maskImgEl) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const maskCanvas = document.createElement("canvas");
    const maskCtx = maskCanvas.getContext("2d")!;
    maskCanvasRef.current = maskCanvas;

    const img = new Image();
    img.src = "/jakubskupin-hp-black.png";
    jakubImgRef.current = img;

    function resize() {
      calcLayout();
      const { W, H } = layoutRef.current;
      canvas.width = W;
      canvas.height = H;
      maskCanvas.width = W;
      maskCanvas.height = H;
      maskCtx.clearRect(0, 0, W, H);
    }

    img.onload = () => {
      stateRef.current.ready = true;
      resize();
    };

    const onResize = () => {
      resize();
      stateRef.current.hasHoles = false;
    };

    const onMouseMove = (e: MouseEvent) => {
      if (debugRef.current.active) return;
      const x = e.clientX;
      const y = e.clientY;
      stateRef.current.lastMoveTime = Date.now();
      stateRef.current.hasHoles = true;

      const grad = maskCtx.createRadialGradient(x, y, 0, x, y, BRUSH_RADIUS);
      grad.addColorStop(0, "rgba(255,255,255,1)");
      grad.addColorStop(0.5, "rgba(255,255,255,0.6)");
      grad.addColorStop(1, "rgba(255,255,255,0)");
      maskCtx.globalCompositeOperation = "source-over";
      maskCtx.fillStyle = grad;
      maskCtx.fillRect(x - BRUSH_RADIUS, y - BRUSH_RADIUS, BRUSH_RADIUS * 2, BRUSH_RADIUS * 2);
    };

    // Debug: update HUD text
    function updateHud() {
      const hud = hudRef.current;
      if (!hud) return;
      const d = debugRef.current;
      const info = hud.querySelector("#debug-info");
      if (info) info.textContent = `offsetY: ${d.offsetY}px | offsetX: ${d.offsetX}px | scale: ${d.scale}%`;
    }

    // Debug: apply transform to mask image
    function applyDebugTransform() {
      const d = debugRef.current;
      maskImgEl.style.transform = `translateY(calc(12% + ${d.offsetY}px)) translateX(${d.offsetX}px) scale(${d.scale / 100})`;
      updateHud();
    }

    const onKeyDown = (e: KeyboardEvent) => {
      // Toggle debug
      if (e.key === "d" || e.key === "D") {
        const d = debugRef.current;
        d.active = !d.active;
        const hud = hudRef.current;
        if (hud) hud.style.display = d.active ? "block" : "none";

        if (d.active) {
          // Show Jakub's photo as a real <img> so it's visible alongside the mask
          canvas.style.opacity = "0.5";
          // Also show a temporary reference image of Jakub on top
          let refImg = document.getElementById("debug-jakub") as HTMLImageElement;
          if (!refImg) {
            refImg = document.createElement("img");
            refImg.id = "debug-jakub";
            refImg.src = "/jakubskupin-hp-black.png";
            refImg.style.cssText = "position:absolute;pointer-events:none;z-index:0;";
            maskImgEl.parentElement?.parentElement?.appendChild(
              (() => {
                const wrap = document.createElement("div");
                wrap.id = "debug-jakub-wrap";
                wrap.style.cssText = "position:absolute;inset:0;display:flex;align-items:center;justify-content:center;pointer-events:none;z-index:0;";
                const { imgW, imgH } = layoutRef.current;
                refImg.style.width = imgW + "px";
                refImg.style.height = imgH + "px";
                refImg.style.objectFit = "contain";
                refImg.style.opacity = "0.5";
                wrap.appendChild(refImg);
                return wrap;
              })()
            );
          }
          canvas.style.display = "none";
          maskImgEl.style.filter = "brightness(2.5)";
          maskImgEl.style.opacity = "0.6";
        } else {
          // Restore
          canvas.style.display = "block";
          canvas.style.opacity = "1";
          const debugWrap = document.getElementById("debug-jakub-wrap");
          if (debugWrap) debugWrap.remove();
          maskImgEl.style.filter = "none";
          maskImgEl.style.opacity = "1";
          maskCtx.clearRect(0, 0, layoutRef.current.W, layoutRef.current.H);
          stateRef.current.hasHoles = false;
        }
        return;
      }

      if (!debugRef.current.active) return;

      const step = e.shiftKey ? 1 : 5;
      const d = debugRef.current;

      switch (e.key) {
        case "ArrowUp": d.offsetY -= step; break;
        case "ArrowDown": d.offsetY += step; break;
        case "ArrowLeft": d.offsetX -= step; break;
        case "ArrowRight": d.offsetX += step; break;
        case "+": case "=": d.scale += 2; break;
        case "-": case "_": d.scale -= 2; break;
        default: return;
      }
      e.preventDefault();
      applyDebugTransform();
    };

    // Render loop
    let raf: number;
    const animate = () => {
      if (debugRef.current.active) {
        raf = requestAnimationFrame(animate);
        return;
      }

      const { hasHoles, lastMoveTime, ready } = stateRef.current;
      const { W, H, imgW, imgH, imgX, imgY } = layoutRef.current;

      // Calculate fade multiplier (1 = full reveal, 0 = fully hidden)
      let fadeAlpha = 1;
      if (hasHoles && Date.now() - lastMoveTime > FADE_DELAY) {
        const fadeTime = Date.now() - lastMoveTime - FADE_DELAY;
        fadeAlpha = Math.max(0, 1 - fadeTime / FADE_DURATION);
        if (fadeAlpha <= 0) {
          maskCtx.clearRect(0, 0, W, H);
          stateRef.current.hasHoles = false;
        }
      }

      ctx.globalCompositeOperation = "source-over";
      ctx.globalAlpha = 1;
      ctx.fillStyle = BG;
      ctx.fillRect(0, 0, W, H);
      if (ready && jakubImgRef.current) {
        ctx.drawImage(jakubImgRef.current, imgX, imgY, imgW, imgH);

        // Feather edges — draw gradient fade around the photo
        const fade = 80; // px of soft fade on sides/top
        const fadeBot = 150; // px of extra soft fade on bottom
        // Top edge
        const topGrad = ctx.createLinearGradient(imgX, imgY, imgX, imgY + fade);
        topGrad.addColorStop(0, BG);
        topGrad.addColorStop(1, "transparent");
        ctx.fillStyle = topGrad;
        ctx.fillRect(imgX, imgY, imgW, fade);
        // Bottom edge (wider fade)
        const botGrad = ctx.createLinearGradient(imgX, imgY + imgH - fadeBot, imgX, imgY + imgH);
        botGrad.addColorStop(0, "transparent");
        botGrad.addColorStop(0.5, `${BG}99`);
        botGrad.addColorStop(1, BG);
        ctx.fillStyle = botGrad;
        ctx.fillRect(imgX, imgY + imgH - fadeBot, imgW, fadeBot);
        // Left edge
        const leftGrad = ctx.createLinearGradient(imgX, imgY, imgX + fade, imgY);
        leftGrad.addColorStop(0, BG);
        leftGrad.addColorStop(1, "transparent");
        ctx.fillStyle = leftGrad;
        ctx.fillRect(imgX, imgY, fade, imgH);
        // Right edge
        const rightGrad = ctx.createLinearGradient(imgX + imgW - fade, imgY, imgX + imgW, imgY);
        rightGrad.addColorStop(0, "transparent");
        rightGrad.addColorStop(1, BG);
        ctx.fillStyle = rightGrad;
        ctx.fillRect(imgX + imgW - fade, imgY, fade, imgH);
      }

      // Apply mask with fade multiplier — smooth linear fade, no rounding artifacts
      if (hasHoles && fadeAlpha > 0) {
        ctx.globalCompositeOperation = "destination-out";
        ctx.globalAlpha = fadeAlpha;
        ctx.drawImage(maskCanvas, 0, 0);
        ctx.globalAlpha = 1;
        ctx.globalCompositeOperation = "source-over";
      }

      raf = requestAnimationFrame(animate);
    };

    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("keydown", onKeyDown);
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("keydown", onKeyDown);
      cancelAnimationFrame(raf);
    };
  }, [calcLayout]);

  return (
    <>
      {/* Bottom layer: mask image */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img
          ref={maskImgRef}
          src="/maska.png"
          alt=""
          className="w-[70%] max-w-[900px] h-auto object-contain"
          style={{ transform: "translateY(calc(12% + 200px)) translateX(-13px) scale(1.40)" }}
        />
      </div>

      {/* Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-[1] pointer-events-none cursor-none"
      />

      {/* Vignette */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 30%, rgba(10,10,10,0.6) 100%), linear-gradient(to bottom, #0a0a0a 0%, transparent 12%, transparent 88%, #0a0a0a 100%)",
        }}
      />

      {/* Debug HUD */}
      <div
        ref={hudRef}
        className="fixed top-5 left-5 z-[999] hidden rounded-lg border border-[#333] bg-black/85 p-4 font-mono text-sm text-green-400 leading-relaxed"
      >
        <div className="font-bold text-yellow-400">DEBUG MODE</div>
        <div>↑↓ posun masky vertikálně</div>
        <div>←→ posun masky horizontálně</div>
        <div>+/- změna velikosti masky</div>
        <div className="mt-2 text-xs text-gray-500">Shift = jemný posun (1px)</div>
        <div id="debug-info" className="mt-2 text-cyan-400">
          offsetY: 200px | offsetX: -13px | scale: 140%
        </div>
      </div>
    </>
  );
}
