import './flow-rail.css'

interface FlowRailProps {
  steps: string[]
  label?: string
}

export function FlowRail({ steps, label }: FlowRailProps) {
  return (
    <div className="flow-rail" role="list" aria-label={label}>
      <div className="flow-rail__track" aria-hidden="true" />
      {steps.map((step) => (
        <div className="flow-rail__step" role="listitem" key={step}>
          <span className="flow-rail__dot" aria-hidden="true" />
          <span className="flow-rail__label">{step}</span>
        </div>
      ))}
    </div>
  )
}
