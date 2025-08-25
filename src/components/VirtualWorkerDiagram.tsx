"use client";

import React from "react";

/**
 * AI Employee flow diagram (psychology-aware edition).
 * - Symmetrical + responsive SVG
 * - Cards rephrased to highlight human psychology aspect (USP)
 */
const VirtualWorkerDiagram: React.FC = () => {
  const c = {
    bg: "var(--vw-bg, #f3f4f6)",
    card: "var(--vw-card, #ffffff)",
    border: "var(--vw-border, #e5e7eb)",
    blue: "var(--vw-blue, #2477ff)",
    textDark: "var(--vw-text-dark, #0f172a)",
    text: "var(--vw-text, #334155)",
    success: "var(--vw-success, #22c55e)",
    danger: "var(--vw-danger, #ef4444)",
    pendingPill: "var(--vw-pending-pill, #eef2f7)",
    inProgressPill: "var(--vw-progress-pill, #f3e8ff)",
    completedPill: "var(--vw-completed-pill, #e9fdf3)",
    shadow: "var(--vw-shadow, rgba(0,0,0,0.14))",
  };

  const CARD_W = 260;
  const CARD_H = 94;
  const CARD_RX = 18;
  const SPINE_X = 512;

  return (
    <div className="w-full">
      <svg
        viewBox="0 0 1024 620"
        role="img"
        aria-label="AI Employee psychology-aware flow"
        className="w-full h-auto"
        shapeRendering="geometricPrecision"
        textRendering="optimizeLegibility"
      >
        <defs>
          <filter id="cardShadow" x="-25%" y="-25%" width="150%" height="150%">
            <feDropShadow dx="0" dy="2.5" stdDeviation="6.5" floodOpacity="0.18" />
          </filter>
          <symbol id="check" viewBox="0 0 24 24">
            <path d="M9.6 16.2L5.8 12.4l1.4-1.4 2.4 2.4 6.2-6.2 1.4 1.4-7.6 7.6z" />
          </symbol>
          <symbol id="x" viewBox="0 0 24 24">
            <path d="M6.7 6.7 12 12l5.3-5.3 1.4 1.4L13.4 13.4l5.3 5.3-1.4 1.4L12 14.8l-5.3 5.3-1.4-1.4 5.3-5.3-5.3-5.3z" />
          </symbol>
        </defs>

        <style>
          {`
            .line {
              stroke: #111827;
              stroke-opacity: .55;
              stroke-width: 3.2;
              fill: none;
              stroke-linecap: round;
              stroke-linejoin: round;
            }
            .animate-dash {
              stroke-dasharray: 7 12;
              animation: dash 6s linear infinite;
            }
            @keyframes dash {
              to { stroke-dashoffset: -180; }
            }
          `}
        </style>

        <g transform="translate(32,16)">
          <rect x="0" y="0" width="960" height="588" rx="18" fill={c.bg} stroke={c.border} />

          {/* Top labels */}
          <g transform="translate(154,18)">
            <rect width="232" height="58" rx="18" fill={c.blue} />
            <text x="116" y="32" textAnchor="middle" fontSize="20" fontWeight="800" fill="#fff" dominantBaseline="middle">
              AI Employee
            </text>
          </g>
          <g transform="translate(612,18)">
            <rect width="232" height="58" rx="18" fill="#fff" stroke={c.text} strokeOpacity="0.15" />
            <text x="116" y="32" textAnchor="middle" fontSize="20" fontWeight="800" fill={c.textDark} dominantBaseline="middle">
              Human Input
            </text>
          </g>

          {/* Connectors */}
          <circle cx="390" cy="84" r="7.5" fill="#fff" stroke={c.text} strokeOpacity=".25" />
          <path d="M390 92 L390 132 Q390 144 404 152 L460 174" className="line animate-dash" />
          <circle cx="602" cy="84" r="7.5" fill="#fff" stroke={c.text} strokeOpacity=".25" />
          <path d="M602 92 L602 132 Q602 144 588 152 L532 174" className="line animate-dash" />

          {/* Header */}
          <g transform={`translate(${SPINE_X - 176},150)`}>
            <rect width="352" height="62" rx="22" fill={c.blue} />
            <text x="176" y="31" textAnchor="middle" fontSize="22" fontWeight="900" fill="#fff" dominantBaseline="middle">
              Customer shares their concern
            </text>
          </g>

          {/* Spine */}
          <path d={`M${SPINE_X} 212 L${SPINE_X} 518`} className="line" />

          {/* Side ticks */}
          <g>
            <circle cx="344" cy="270" r="22" fill="#d1fae5" />
            <use href="#check" xlinkHref="#check" x="332" y="258" width="24" height="24" fill={c.success} />
            <circle cx="344" cy="346" r="22" fill="#d1fae5" />
            <use href="#check" xlinkHref="#check" x="332" y="334" width="24" height="24" fill={c.success} />
            <circle cx="344" cy="422" r="22" fill="#d1fae5" />
            <use href="#check" xlinkHref="#check" x="332" y="410" width="24" height="24" fill={c.success} />
          </g>
          <g>
            <circle cx="680" cy="270" r="22" fill="#d1fae5" />
            <use href="#check" xlinkHref="#check" x="668" y="258" width="24" height="24" fill={c.success} />
            <circle cx="680" cy="346" r="22" fill="#fee2e2" />
            <use href="#x" xlinkHref="#x" x="668" y="334" width="24" height="24" fill={c.danger} />
            <circle cx="680" cy="422" r="22" fill="#d1fae5" />
            <use href="#check" xlinkHref="#check" x="668" y="410" width="24" height="24" fill={c.success} />
          </g>

          {/* Psychology-aware tasks */}
          {[
            { y: 236, pill: { text: "Empathically Understood", fill: c.completedPill, color: c.success }, title: "Acknowledge Emotion" },
            { y: 316, pill: { text: "Guided Progress", fill: c.inProgressPill, color: "#8b5cf6" }, title: "Retrieve Relevant Context" },
            { y: 396, pill: { text: "Pending Confirmation", fill: c.pendingPill, color: "#6b7280" }, title: "Communicate Next Steps" },
          ].map((row, i) => {
            const x = SPINE_X - CARD_W / 2;
            return (
              <g key={i} transform={`translate(${x},${row.y})`}>
                <rect width={CARD_W} height={CARD_H} rx={CARD_RX} fill={c.card} filter="url(#cardShadow)" />
                <g transform="translate(16,14)">
                  <rect width="128" height="26" rx="13" fill={row.pill.fill} />
                  <text x="64" y="13" textAnchor="middle" fontSize="13" fontWeight="800" fill={row.pill.color} dominantBaseline="middle">
                    {row.pill.text}
                  </text>
                </g>
                <text x={CARD_W / 2} y={CARD_H / 2 + 20} textAnchor="middle" fontSize="18" fontWeight="700" fill={c.textDark} dominantBaseline="middle">
                  {row.title}
                </text>
              </g>
            );
          })}

          {/* Footer */}
          <g transform={`translate(${SPINE_X - 196},498)`}>
            <rect width="392" height="62" rx="22" fill={c.blue} />
            <text x="196" y="31" textAnchor="middle" fontSize="22" fontWeight="900" fill="#fff" dominantBaseline="middle">
              Resolution that Feels Human
            </text>
          </g>
        </g>
      </svg>
    </div>
  );
};

export default VirtualWorkerDiagram;
