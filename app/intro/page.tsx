"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

type SlideState = "idle" | "exit" | "enter";
type ExitMode = "toSlide2" | "toMain";

export default function IntroPage() {
  const [slide, setSlide] = useState<1 | 2>(1);
  const [slideState, setSlideState] = useState<SlideState>("enter");
  const [exitMode, setExitMode] = useState<ExitMode>("toSlide2");
  const [curtain, setCurtain] = useState(false);   // full-screen curtain before main
  const [curtainOut, setCurtainOut] = useState(false); // curtain fade out (unused but reserved)
  const router = useRouter();

  // Trigger entrance animation on first mount
  useEffect(() => {
    const t = setTimeout(() => setSlideState("idle"), 80);
    return () => clearTimeout(t);
  }, []);

  const goToSlide2 = useCallback(() => {
    if (slideState !== "idle") return;
    setExitMode("toSlide2");
    setSlideState("exit");
    setTimeout(() => {
      setSlide(2);
      setSlideState("enter");
      setTimeout(() => setSlideState("idle"), 50);
    }, 650);
  }, [slideState]);

  const goToMain = useCallback(() => {
    if (slideState !== "idle") return;
    setExitMode("toMain");
    setSlideState("exit");
    // Drop curtain after slide exits
    setTimeout(() => {
      setCurtain(true);
      document.cookie = "intro_seen=1; path=/; SameSite=Lax";
      setTimeout(() => {
        router.push("/");
      }, 900);
    }, 500);
  }, [slideState, router]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;900&display=swap');

        /* ─── Reset & root ─── */
        * { box-sizing: border-box; margin: 0; padding: 0; }

        .intro-root {
          font-family: 'Inter', sans-serif;
          min-height: 100dvh;
          overflow: hidden;
          position: relative;
          background: #7B0000;
        }

        /* ─── Backgrounds ─── */
        .bg-s1 {
          position: absolute; inset: 0;
          background: linear-gradient(145deg, #6B0000 0%, #B71C1C 50%, #D32F2F 80%, #E53935 100%);
        }
        .bg-s2 {
          position: absolute; inset: 0;
          background: linear-gradient(160deg, #4A0000 0%, #8B0000 40%, #B71C1C 75%, #7B0000 100%);
        }

        /* ─── Ambient orbs ─── */
        .orb {
          position: absolute; border-radius: 50%;
          filter: blur(80px); pointer-events: none;
          will-change: transform;
        }
        .orb-1 { width: 500px; height: 500px; background: rgba(255,80,80,.18); top:-120px; left:-120px; animation: orbDrift1 8s ease-in-out infinite; }
        .orb-2 { width: 400px; height: 400px; background: rgba(255,215,0,.12); bottom:-100px; right:-80px; animation: orbDrift2 10s ease-in-out infinite; }
        .orb-3 { width: 280px; height: 280px; background: rgba(255,255,255,.07); top:35%; left:55%; animation: orbDrift3 6s ease-in-out infinite; }

        @keyframes orbDrift1 { 0%,100%{transform:translate(0,0)} 50%{transform:translate(30px,20px)} }
        @keyframes orbDrift2 { 0%,100%{transform:translate(0,0)} 50%{transform:translate(-25px,-15px)} }
        @keyframes orbDrift3 { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(-20px,10px) scale(1.1)} }

        /* ─── Grid overlay ─── */
        .grid-lines {
          position: absolute; inset: 0; pointer-events: none;
          background-image:
            linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px);
          background-size: 64px 64px;
        }

        /* ─── Shimmer particles ─── */
        .particles {
          position: absolute; inset: 0; overflow: hidden; pointer-events: none;
        }
        .particle {
          position: absolute; border-radius: 50%;
          background: rgba(255,255,255,.6);
          animation: particleFall linear infinite;
        }

        @keyframes particleFall {
          0%   { transform: translateY(-10px) scale(0); opacity: 0; }
          10%  { opacity: .8; }
          90%  { opacity: .3; }
          100% { transform: translateY(100vh) scale(.5); opacity: 0; }
        }

        /* ─── Slide wrapper ─── */
        .slide-wrap {
          position: relative;
          min-height: 100dvh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          will-change: opacity, transform, filter;
        }

        /* ── Slide 1 animations ── */
        .s1-enter  { animation: s1Enter  .7s cubic-bezier(.22,1,.36,1) forwards; }
        .s1-exit-s2 { animation: s1ExitToS2 .65s cubic-bezier(.55,0,1,.45) forwards; }

        @keyframes s1Enter {
          from { opacity:0; transform: scale(1.06) translateY(24px); filter: blur(8px); }
          to   { opacity:1; transform: scale(1)    translateY(0);    filter: blur(0); }
        }
        @keyframes s1ExitToS2 {
          0%   { opacity:1; transform: scale(1)    translateY(0)    rotateY(0deg); filter:blur(0); }
          40%  { opacity:.6; transform: scale(.96) translateY(-12px); }
          100% { opacity:0; transform: scale(.88)  translateY(-40px) rotateX(8deg); filter:blur(6px); }
        }

        /* ── Slide 2 animations ── */
        .s2-enter  { animation: s2Enter  .7s cubic-bezier(.22,1,.36,1) forwards; }
        .s2-exit-main { animation: s2ExitMain .5s cubic-bezier(.55,0,1,.45) forwards; }

        @keyframes s2Enter {
          from { opacity:0; transform: scale(.92) translateY(32px); filter: blur(10px); }
          to   { opacity:1; transform: scale(1)   translateY(0);    filter: blur(0); }
        }
        @keyframes s2ExitMain {
          0%   { opacity:1; transform: scale(1); }
          100% { opacity:0; transform: scale(1.08); filter:blur(4px); }
        }

        /* ─── Full-screen curtain (drops from top) ─── */
        .curtain {
          position: fixed; inset: 0; z-index: 100;
          background: linear-gradient(160deg, #4A0000 0%, #8B0000 50%, #C62828 100%);
          transform: translateY(-100%);
          animation: curtainDrop .75s cubic-bezier(.77,0,.175,1) forwards;
        }
        @keyframes curtainDrop {
          from { transform: translateY(-100%); }
          to   { transform: translateY(0); }
        }
        .curtain-logo {
          position: absolute; inset: 0;
          display: flex; align-items: center; justify-content: center;
          gap: 2rem;
          animation: curtainLogoFade 0.5s ease 0.35s both;
        }
        @keyframes curtainLogoFade {
          from { opacity:0; transform:scale(.85); }
          to   { opacity:1; transform:scale(1); }
        }

        /* ─── Staggered entrance items ─── */
        .fade-item {
          opacity: 0; transform: translateY(28px);
          transition: opacity .65s ease, transform .65s ease;
        }
        .fade-item.show { opacity: 1; transform: translateY(0); }
        .d0 { transition-delay: .08s; }
        .d1 { transition-delay: .22s; }
        .d2 { transition-delay: .40s; }
        .d3 { transition-delay: .58s; }
        .d4 { transition-delay: .72s; }

        /* ─── Logo ─── */
        .logo-ring {
          flex-shrink: 0;
          border-radius: 50%;
          border: 3px solid rgba(255,255,255,.25);
          box-shadow: 0 0 0 6px rgba(255,255,255,.07), 0 16px 48px rgba(0,0,0,.4);
          overflow: hidden;
          transition: transform .35s ease, box-shadow .35s ease;
          cursor: default;
        }
        .logo-ring:hover {
          transform: scale(1.06) rotate(3deg);
          box-shadow: 0 0 0 10px rgba(255,255,255,.12), 0 24px 64px rgba(0,0,0,.5);
        }

        /* ─── Org name ─── */
        .org-name {
          color: #fff;
          font-weight: 900;
          font-size: clamp(1.5rem, 4vw, 2.8rem);
          line-height: 1.15;
          letter-spacing: .04em;
          text-shadow: 0 2px 24px rgba(0,0,0,.35);
          max-width: 440px;
        }
        .org-city {
          display: block;
          margin-top: .25rem;
          color: rgba(255,215,0,.92);
          font-size: clamp(1.2rem, 3vw, 2rem);
        }

        /* ─── Tagline ─── */
        .tagline {
          display: inline-flex; align-items: center; gap: .6rem;
          font-size: clamp(.8rem,1.8vw,.95rem);
          font-weight: 600; letter-spacing: .28em; text-transform: uppercase;
          color: rgba(255,255,255,.78);
          border-top: 1px solid rgba(255,255,255,.2);
          padding-top: 1.4rem;
        }
        .tagline-arrow { font-size: 1.2rem; color: rgba(255,215,0,.9); }

        /* ─── Decorative divider ─── */
        .divider {
          width: 60px; height: 3px; border-radius: 2px;
          background: linear-gradient(90deg, rgba(255,255,255,.1), rgba(255,255,255,.6), rgba(255,255,255,.1));
          margin: 1.2rem 0;
        }

        /* ─── Arrow button ─── */
        .arrow-btn {
          width: 58px; height: 58px; border-radius: 50%;
          border: 2px solid rgba(255,255,255,.5);
          background: rgba(255,255,255,.1);
          backdrop-filter: blur(12px);
          color: #fff; font-size: 1.6rem; line-height: 1;
          cursor: pointer; display: flex; align-items: center; justify-content: center;
          transition: background .25s, border-color .25s, transform .25s, box-shadow .25s;
          box-shadow: 0 4px 20px rgba(0,0,0,.25);
          position: relative; overflow: hidden;
        }
        .arrow-btn::before {
          content: '';
          position: absolute; inset: 0; border-radius: 50%;
          background: rgba(255,255,255,.15);
          transform: scale(0); transition: transform .4s ease;
        }
        .arrow-btn:hover::before { transform: scale(1); }
        .arrow-btn:hover {
          border-color: rgba(255,255,255,.9);
          transform: translateX(5px) scale(1.1);
          box-shadow: 0 8px 32px rgba(0,0,0,.35);
        }
        .arrow-btn:active { transform: translateX(2px) scale(.97); }
        .arrow-btn:disabled { opacity:.4; cursor:not-allowed; pointer-events:none; }

        /* arrow pulse ring */
        .arrow-btn-wrap { position: relative; margin-top: 1.6rem; }
        .pulse-ring {
          position: absolute; inset: -8px; border-radius: 50%;
          border: 2px solid rgba(255,255,255,.3);
          animation: pulseRing 2s ease-out infinite;
        }
        .pulse-ring-2 {
          position: absolute; inset: -16px; border-radius: 50%;
          border: 1.5px solid rgba(255,255,255,.15);
          animation: pulseRing 2s ease-out .6s infinite;
        }
        @keyframes pulseRing {
          0%  { transform: scale(.8); opacity: .8; }
          70% { transform: scale(1.3); opacity: 0; }
          100%{ transform: scale(1.3); opacity: 0; }
        }

        /* ─── Slide dots ─── */
        .slide-dots {
          position: absolute; bottom: 1.8rem; left: 50%; transform: translateX(-50%);
          display: flex; gap: 7px; z-index: 10;
        }
        .dot {
          height: 7px; border-radius: 4px;
          background: rgba(255,255,255,.3);
          transition: all .4s cubic-bezier(.22,1,.36,1);
          width: 7px;
        }
        .dot.active { background: #fff; width: 22px; }

        /* ─── Slide 2 cloud ─── */
        .cloud-wrap {
          filter: drop-shadow(0 24px 48px rgba(0,0,0,.45));
          animation: cloudFloat 3.5s ease-in-out infinite;
          will-change: transform;
        }
        @keyframes cloudFloat {
          0%,100% { transform: translateY(0) scale(1); }
          45%     { transform: translateY(-16px) scale(1.02); }
        }

        .slide2-label {
          font-size: .72rem; font-weight: 600;
          letter-spacing: .32em; text-transform: uppercase;
          color: rgba(255,255,255,.6);
        }

        /* ─── Hero layout ─── */
        .hero-row {
          display: flex; align-items: center; justify-content: center;
          gap: clamp(1.4rem,4vw,3.2rem); flex-wrap: wrap;
          margin-bottom: 2.4rem;
        }

        /* ─── reduced motion ─── */
        @media (prefers-reduced-motion: reduce) {
          .orb, .particle, .cloud-wrap, .pulse-ring, .pulse-ring-2 { animation: none !important; }
          .fade-item { transition: none; opacity: 1; transform: none; }
          .s1-enter, .s1-exit-s2, .s2-enter, .s2-exit-main, .curtain { animation: none !important; }
          .arrow-btn:hover { transform: none; }
        }

        /* ─── Mobile ─── */
        @media (max-width: 580px) {
          .hero-row { flex-direction: column; gap: 1.2rem; }
          .org-name { text-align: center; }
        }
      `}</style>

      {/* ─── Full-screen curtain overlay (before entering main) ─── */}
      {curtain && (
        <div className="curtain">
          <div className="curtain-logo">
            <div style={{ borderRadius: "50%", overflow: "hidden", border: "3px solid rgba(255,255,255,.4)", boxShadow: "0 0 0 8px rgba(255,255,255,.1)" }}>
              <Image src="/logo-bakesbangpol.svg" alt="Logo Bakesbangpol" width={80} height={80} />
            </div>
            <div style={{ borderRadius: "50%", overflow: "hidden", border: "3px solid rgba(255,255,255,.4)", boxShadow: "0 0 0 8px rgba(255,255,255,.1)" }}>
              <Image src="/logo-unesa.jpeg" alt="Logo Unesa" width={80} height={80} />
            </div>
          </div>
        </div>
      )}

      <div className="intro-root">

        {/* ══════════ SLIDE 1 ══════════ */}
        {slide === 1 && (
          <div
            className={`slide-wrap ${
              slideState === "enter" ? "s1-enter" :
              slideState === "exit"  ? "s1-exit-s2" : ""
            }`}
          >
            <div className="bg-s1" />
            <div className="orb orb-1" /><div className="orb orb-2" /><div className="orb orb-3" />
            <div className="grid-lines" />
            <Particles />

            {/* Hero */}
            <div className="hero-row">
              {/* Logo */}
              <div className={`logo-ring fade-item d0 ${slideState === "idle" ? "show" : ""}`}
                style={{ width: "clamp(130px,20vw,200px)", height: "clamp(130px,20vw,200px)" }}>
                <Image
                  src="/logo-bakesbangpol.svg"
                  alt="Logo Badan Kesatuan Bangsa dan Politik Kota Surabaya"
                  width={200} height={200}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  priority
                />
              </div>

              {/* Org name */}
              <div className={`org-name fade-item d1 ${slideState === "idle" ? "show" : ""}`}>
                BADAN KESATUAN BANGSA DAN POLITIK
                <span className="org-city">KOTA SURABAYA</span>
              </div>
            </div>

            {/* Divider */}
            <div className={`divider fade-item d2 ${slideState === "idle" ? "show" : ""}`} />

            {/* Tagline */}
            <div className={`tagline fade-item d3 ${slideState === "idle" ? "show" : ""}`}>
              KONFLIK? CEK DULU
              <span className="tagline-arrow">→</span>
            </div>

            {/* Arrow */}
            <div className={`arrow-btn-wrap fade-item d4 ${slideState === "idle" ? "show" : ""}`}>
              <div className="pulse-ring" />
              <div className="pulse-ring-2" />
              <button
                id="slide1-next-btn"
                className="arrow-btn"
                onClick={goToSlide2}
                disabled={slideState !== "idle"}
                aria-label="Lanjut ke halaman berikutnya"
              >
                ›
              </button>
            </div>

            <div className="slide-dots">
              <div className="dot active" /><div className="dot" />
            </div>
          </div>
        )}

        {/* ══════════ SLIDE 2 ══════════ */}
        {slide === 2 && (
          <div
            className={`slide-wrap ${
              slideState === "enter" ? "s2-enter" :
              slideState === "exit"  ? "s2-exit-main" : ""
            }`}
          >
            <div className="bg-s2" />
            <div className="orb orb-1" /><div className="orb orb-2" />
            <div className="grid-lines" />
            <Particles count={10} />

            {/* Cloud */}
            <div className={`cloud-wrap fade-item d0 ${slideState === "idle" ? "show" : ""}`}
              aria-label="Konflik? Cek Dulu">
              <ThoughtCloud />
            </div>

            {/* Label */}
            <p className={`slide2-label fade-item d2 ${slideState === "idle" ? "show" : ""}`}
              style={{ marginTop: "1.6rem" }}>
              Masuk ke Sistem Penilaian
            </p>

            {/* Arrow */}
            <div className={`arrow-btn-wrap fade-item d3 ${slideState === "idle" ? "show" : ""}`}>
              <div className="pulse-ring" />
              <div className="pulse-ring-2" />
              <button
                id="slide2-next-btn"
                className="arrow-btn"
                onClick={goToMain}
                disabled={slideState !== "idle"}
                aria-label="Masuk ke aplikasi utama"
              >
                ›
              </button>
            </div>

            <div className="slide-dots">
              <div className="dot" /><div className="dot active" />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

/* ─── Thought cloud SVG ─── */
function ThoughtCloud() {
  return (
    <svg
      viewBox="0 0 540 380"
      width="min(520px, 88vw)"
      height="auto"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Awan pikiran: KONFLIK? CEK DULU"
    >
      {/* Ground shadow */}
      <ellipse cx="250" cy="362" rx="170" ry="13" fill="rgba(0,0,0,.22)" />

      {/* Tail bubbles */}
      <circle cx="135" cy="328" r="23" fill="#8B0000" stroke="#1a0000" strokeWidth="5" />
      <circle cx="104" cy="348" r="15" fill="#8B0000" stroke="#1a0000" strokeWidth="4" />
      <circle cx="82"  cy="362" r="9"  fill="#8B0000" stroke="#1a0000" strokeWidth="3.5" />

      {/* Inner highlight ring for depth */}
      <path
        d="M160 290 Q134 288 122 272 Q104 267 102 247 Q86 241 86 221 Q86 200 104 193 Q106 169 130 162 Q134 138 160 133 Q170 111 197 108 Q210 88 234 85 Q252 67 280 70 Q304 57 332 68 Q358 57 381 75 Q410 70 427 93 Q452 98 462 122 Q486 135 486 161 Q508 175 506 200 Q518 220 508 242 Q508 269 486 279 Q476 302 450 304 Q433 321 407 318 Q384 334 355 326 Q324 340 296 330 Q265 344 237 330 Q209 342 188 324 Q165 324 160 290 Z"
        fill="url(#cloudGrad)"
        stroke="#1a0000"
        strokeWidth="6"
        strokeLinejoin="round"
      />

      {/* Gradient definition */}
      <defs>
        <radialGradient id="cloudGrad" cx="45%" cy="40%" r="60%">
          <stop offset="0%"   stopColor="#C62828" />
          <stop offset="60%"  stopColor="#B71C1C" />
          <stop offset="100%" stopColor="#8B0000" />
        </radialGradient>
      </defs>

      {/* Highlight shimmer */}
      <path
        d="M175 155 Q215 123 267 118 Q318 111 365 130 Q400 142 422 168"
        fill="none"
        stroke="rgba(255,255,255,.13)"
        strokeWidth="20"
        strokeLinecap="round"
      />

      {/* KONFLIK? */}
      <text
        x="294" y="214"
        fontFamily="'Inter', Arial Black, sans-serif"
        fontWeight="900"
        fontSize="60"
        fill="white"
        textAnchor="middle"
        filter="url(#textGlow)"
      >KONFLIK?</text>

      {/* CEK DULU */}
      <text
        x="294" y="280"
        fontFamily="'Inter', Arial Black, sans-serif"
        fontWeight="900"
        fontSize="60"
        fill="white"
        textAnchor="middle"
        filter="url(#textGlow)"
      >CEK DULU</text>

      {/* Text glow filter */}
      <defs>
        <filter id="textGlow" x="-10%" y="-10%" width="120%" height="120%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
    </svg>
  );
}

/* ─── Floating particle shimmer ─── */
function Particles({ count = 14 }: { count?: number }) {
  // Static config to avoid hydration mismatch (no Math.random on server)
  const particles = [
    { left: "8%",  size: 3, dur: "7s",  delay: "0s" },
    { left: "18%", size: 2, dur: "9s",  delay: "1.2s" },
    { left: "27%", size: 4, dur: "6s",  delay: "2.5s" },
    { left: "35%", size: 2, dur: "11s", delay: "0.7s" },
    { left: "44%", size: 3, dur: "8s",  delay: "3.1s" },
    { left: "53%", size: 2, dur: "7.5s",delay: "1.8s" },
    { left: "61%", size: 3, dur: "10s", delay: "0.3s" },
    { left: "70%", size: 4, dur: "6.5s",delay: "2.2s" },
    { left: "78%", size: 2, dur: "9.5s",delay: "1.0s" },
    { left: "86%", size: 3, dur: "7.2s",delay: "3.5s" },
    { left: "13%", size: 2, dur: "8.8s",delay: "4.0s" },
    { left: "48%", size: 3, dur: "6.8s",delay: "2.8s" },
    { left: "65%", size: 2, dur: "11s", delay: "0.5s" },
    { left: "90%", size: 3, dur: "7.8s",delay: "1.5s" },
  ].slice(0, count);

  return (
    <div className="particles" aria-hidden="true">
      {particles.map((p, i) => (
        <span
          key={i}
          className="particle"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            animationDuration: p.dur,
            animationDelay: p.delay,
          }}
        />
      ))}
    </div>
  );
}
