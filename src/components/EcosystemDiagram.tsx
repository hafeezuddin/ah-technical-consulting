import './ecosystem-diagram.css'

interface Node {
  label: string
  x: number
  y: number
}

// Positions on a 600x600 viewbox, center at 300,300
const NODES: Node[] = [
  { label: 'Customers', x: 300, y: 70 },
  { label: 'Commerce', x: 486, y: 145 },
  { label: 'Payments', x: 560, y: 320 },
  { label: 'Marketing', x: 486, y: 495 },
  { label: 'AI', x: 300, y: 560 },
  { label: 'Data', x: 114, y: 495 },
  { label: 'CRM', x: 40, y: 320 },
  { label: 'Automation', x: 114, y: 145 },
]

export function EcosystemDiagram() {
  const cx = 300
  const cy = 300

  return (
    <svg
      viewBox="0 0 600 600"
      className="ecosystem-diagram"
      role="img"
      aria-label="Diagram showing a central business node connected to customers, commerce, payments, marketing, AI, data, CRM and automation, illustrating a connected digital ecosystem."
    >
      <defs>
        <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.35" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* connecting lines */}
      {NODES.map((n, i) => (
        <line
          key={`line-${n.label}`}
          x1={cx}
          y1={cy}
          x2={n.x}
          y2={n.y}
          className="ecosystem-diagram__line"
          style={{ animationDelay: `${i * 0.35}s` }}
        />
      ))}

      {/* traveling pulses */}
      {NODES.map((n, i) => (
        <circle key={`pulse-${n.label}`} r="3.2" className="ecosystem-diagram__pulse" style={{ animationDelay: `${i * 0.7}s` }}>
          <animateMotion dur="3.6s" repeatCount="indefinite" begin={`${i * 0.45}s`}>
            <mpath href={`#path-${i}`} />
          </animateMotion>
        </circle>
      ))}
      {NODES.map((n, i) => (
        <path key={`path-${i}`} id={`path-${i}`} d={`M${cx},${cy} L${n.x},${n.y}`} fill="none" stroke="none" />
      ))}

      {/* outer ring */}
      <circle cx={cx} cy={cy} r="230" className="ecosystem-diagram__ring" />

      {/* core glow */}
      <circle cx={cx} cy={cy} r="120" fill="url(#coreGlow)" />

      {/* satellite nodes */}
      {NODES.map((n) => (
        <g key={n.label} className="ecosystem-diagram__node">
          <circle cx={n.x} cy={n.y} r="30" className="ecosystem-diagram__node-circle" />
          <text x={n.x} y={n.y + 4} textAnchor="middle" className="ecosystem-diagram__node-label">
            {n.label}
          </text>
        </g>
      ))}

      {/* core node */}
      <circle cx={cx} cy={cy} r="52" className="ecosystem-diagram__core" />
      <text x={cx} y={cy - 4} textAnchor="middle" className="ecosystem-diagram__core-label">
        BUSINESS
      </text>
      <text x={cx} y={cy + 14} textAnchor="middle" className="ecosystem-diagram__core-sub">
        one system
      </text>
    </svg>
  )
}
