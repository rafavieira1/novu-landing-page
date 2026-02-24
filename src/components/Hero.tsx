import { useEffect, useRef, useState } from "react";

// ─── Floating icon data ────────────────────────────────────────────────────────
// Each icon sits at a point along one of the five converging lines.
// Line end (convergence point) is at SVG coordinate (720, 480).
// Lines originate from the left edge at varying y values.
const LINE_START_Y = [120, 200, 290, 370, 450];
const CX = 720;
const CY = 480;

function pointOnLine(
  x0: number,
  y0: number,
  x1: number,
  y1: number,
  t: number
): { x: number; y: number } {
  return { x: x0 + (x1 - x0) * t, y: y0 + (y1 - y0) * t };
}

const ICON_DATA = [
  { lineIdx: 0, t: 0.3, emoji: "📱", label: "WhatsApp" },
  { lineIdx: 1, t: 0.38, emoji: "📅", label: "Calendário" },
  { lineIdx: 2, t: 0.45, emoji: "📷", label: "Instagram" },
  { lineIdx: 3, t: 0.38, emoji: "⏰", label: "Relógio" },
  { lineIdx: 4, t: 0.3, emoji: "⭐", label: "Estrela" },
];

const STROKE_COLORS = ["#262626", "#262626", "#BBBBBB", "#CCCCCC", "#DDDDDD"];
const STROKE_WIDTHS = [1.5, 1.2, 0.8, 0.6, 0.4];

// Line length for dasharray calculation (approx)
function lineLen(y0: number): number {
  const dx = CX - 0;
  const dy = CY - y0;
  return Math.sqrt(dx * dx + dy * dy);
}

const HeroSection = () => {
  const salons = ["Studio Bella", "Espaço Zen", "Clínica Glam", "Beauty House"];

  const [mounted, setMounted] = useState(false);
  const [ctaHover, setCtaHover] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="novu-hero"
    >
      {/* ── Background layers (noise via CSS pseudo-elements defined in index.css) ── */}
      <div className="novu-hero__gradient" />
      <div className="novu-hero__noise" />

      {/* ── Layer 1: SVG lines + floating icons + central tucano ─────────────── */}
      <svg
        className="novu-hero__svg"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        {/* Converging lines */}
        {LINE_START_Y.map((y0, i) => {
          const len = lineLen(y0);
          return (
            <line
              key={i}
              x1={0}
              y1={y0}
              x2={CX}
              y2={CY}
              stroke={STROKE_COLORS[i]}
              strokeWidth={STROKE_WIDTHS[i]}
              strokeDasharray={len}
              className="novu-hero__line"
              style={{
                strokeDashoffset: mounted ? 0 : len,
                transitionDelay: `${0.2 + i * 0.08}s`,
              }}
            />
          );
        })}

        {/* Floating icon circles */}
        {ICON_DATA.map((d, i) => {
          const p = pointOnLine(0, LINE_START_Y[d.lineIdx], CX, CY, d.t);
          return (
            <g
              key={i}
              className="novu-hero__icon"
              style={{
                opacity: mounted ? 1 : 0,
                transitionDelay: `${0.8 + i * 0.18}s`,
              }}
            >
              <circle cx={p.x} cy={p.y} r={20} fill="#1A1A1A" />
              <text
                x={p.x}
                y={p.y + 1}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="14"
              >
                {d.emoji}
              </text>
            </g>
          );
        })}

        {/* Central dark circle */}
        <circle cx={CX} cy={CY} r={64} fill="#1A1A1A" />

        {/* Tucano SVG (scaled, centred at CX,CY) */}
        <g transform={`translate(${CX - 24}, ${CY - 28}) scale(0.62)`}>
          {/* Corpo */}
          <ellipse cx="50" cy="55" rx="18" ry="22" fill="white" />
          {/* Cabeça */}
          <circle cx="50" cy="30" r="14" fill="white" />
          {/* Bico superior */}
          <path d="M56 28 Q85 22 88 28 Q85 34 56 32 Z" fill="white" />
          {/* Bico inferior */}
          <path d="M56 32 Q80 34 78 38 Q70 40 56 36 Z" fill="rgba(255,255,255,0.7)" />
          {/* Olho */}
          <circle cx="54" cy="26" r="3" fill="#1A1A1A" />
          <circle cx="55" cy="25" r="1" fill="white" />
          {/* Asa */}
          <path d="M35 45 Q28 55 32 68 Q42 62 50 58 Z" fill="rgba(255,255,255,0.85)" />
          {/* Pés */}
          <line x1="44" y1="76" x2="38" y2="84" stroke="white" strokeWidth="2" />
          <line x1="50" y1="77" x2="50" y2="86" stroke="white" strokeWidth="2" />
          <line x1="56" y1="76" x2="62" y2="84" stroke="white" strokeWidth="2" />
        </g>
      </svg>

      {/* ── Layer 2: Text content (pinned to bottom) ───────────────────────── */}
      <div className="novu-hero__content" style={{ position: "absolute", bottom: 48, left: 0, right: 0 }}>

        {/* H1 */}
        {/* <h1
          className="novu-hero__h1"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(-16px)",
            transitionDelay: "0.3s",
          }}
        >
          Chega de caderninho.
          <br />
          Sua agenda de salão no celular&nbsp;—
          <br />
          <span
            style={{
              fontFamily: "'Italiana', serif",
              color: "#05487F",
              fontStyle: "normal",
            }}
          >
            simples assim.
          </span>
        </h1> */}

        {/* Subheadline */}
        {/* <p
          className="novu-hero__sub"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(-16px)",
            transitionDelay: "0.45s",
          }}
        >
          Seus clientes agendam sozinhos, recebem lembrete automático
          <br className="hidden md:block" />
          e você para de perder horário por esquecimento.
        </p> */}

        {/* CTA */}
        <button
          type="button"
          onClick={() => console.log("CTA clicked")}
          className="novu-hero__cta"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted
              ? ctaHover
                ? "translateY(-2px)"
                : "translateY(0)"
              : "translateY(-16px)",
            transitionDelay: mounted ? "0s" : "0.6s",
            boxShadow: ctaHover
              ? "0 8px 24px rgba(5,72,127,0.3)"
              : "0 4px 14px rgba(5,72,127,0.15)",
            background: ctaHover ? "#043d6b" : "#05487F",
          }}
          onMouseEnter={() => setCtaHover(true)}
          onMouseLeave={() => setCtaHover(false)}
        >
          Quero testar grátis
        </button>

        {/* Tag */}
        <p
          className="novu-hero__tag"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(-16px)",
            transitionDelay: "0.75s",
          }}
        >
          Para salões de cabelo, cílios, sobrancelha, unhas e muito mais.
        </p>

        {/* Social proof */}
        <div
          className="novu-hero__social"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(-16px)",
            transitionDelay: "0.85s",
          }}
        >
          <span className="novu-hero__social-label">
            Amado por profissionais em todo o Brasil
          </span>
          <div className="novu-hero__social-names">
            {salons.map((name, i) => (
              <span key={name} className="flex items-center gap-2">
                <span>{name}</span>
                {i < salons.length - 1 && (
                  <span style={{ color: "#CCCCCC" }}>·</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;