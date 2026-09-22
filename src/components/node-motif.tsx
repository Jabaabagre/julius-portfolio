const LINES: Array<[number, number, number, number, number]> = [
  [60, 70, 150, 40, 0.35],
  [150, 40, 240, 80, 0.4],
  [240, 80, 330, 55, 0.45],
  [60, 70, 40, 180, 0.5],
  [150, 40, 140, 160, 0.55],
  [240, 80, 250, 190, 0.6],
  [330, 55, 350, 165, 0.65],
  [40, 180, 140, 160, 0.7],
  [140, 160, 250, 190, 0.75],
  [250, 190, 350, 165, 0.8],
  [40, 180, 70, 290, 0.85],
  [140, 160, 170, 300, 0.9],
  [250, 190, 270, 285, 0.95],
  [350, 165, 350, 340, 1],
  [70, 290, 170, 300, 1.05],
  [170, 300, 270, 285, 1.1],
  [270, 285, 350, 340, 1.15],
];

const NODES: Array<[number, number, number, number]> = [
  [60, 70, 3.5, 0],
  [150, 40, 4.5, 0.05],
  [240, 80, 3.5, 0.1],
  [330, 55, 3, 0.15],
  [40, 180, 3, 0.2],
  [140, 160, 5.5, 0.25],
  [250, 190, 4.5, 0.3],
  [350, 165, 3, 0.35],
  [70, 290, 3.5, 0.4],
  [170, 300, 4, 0.45],
  [270, 285, 3.5, 0.5],
  [350, 340, 3, 0.55],
];

export function NodeMotif() {
  return (
    <div
      aria-hidden="true"
      className="mx-auto hidden w-full max-w-[460px] opacity-55 min-[901px]:block"
    >
      <svg viewBox="0 0 400 400" className="block h-auto w-full overflow-visible">
        <g stroke="#DDA94A" strokeWidth="1" fill="none" strokeLinecap="round" opacity=".65">
          {LINES.map(([x1, y1, x2, y2, delay], i) => (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              style={{
                strokeDasharray: 260,
                animation: `om-draw 1.1s cubic-bezier(.2,.7,.2,1) ${delay}s both`,
              }}
            />
          ))}
        </g>
        <g fill="#DDA94A">
          {NODES.map(([cx, cy, r, delay], i) => (
            <circle
              key={i}
              cx={cx}
              cy={cy}
              r={r}
              style={{
                transformBox: "fill-box",
                transformOrigin: "center",
                animation: `om-node .7s cubic-bezier(.2,.7,.2,1) ${delay}s both`,
              }}
            />
          ))}
        </g>
      </svg>
    </div>
  );
}
