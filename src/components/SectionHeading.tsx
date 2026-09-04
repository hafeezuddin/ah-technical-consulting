import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

interface SectionHeadingProps {
  kicker?: string
  title: ReactNode
  lede?: ReactNode
  wide?: boolean
  align?: 'left' | 'center'
}

export function SectionHeading({ kicker, title, lede, wide, align = 'left' }: SectionHeadingProps) {
  return (
    <Reveal>
      <div
        className={`section-head ${wide ? 'section-head--wide' : ''}`}
        style={align === 'center' ? { marginInline: 'auto', textAlign: 'center' } : undefined}
      >
        {kicker && <span className="kicker">{kicker}</span>}
        <h2 className="section-title">{title}</h2>
        {lede && <p className="section-lede" style={align === 'center' ? { marginInline: 'auto' } : undefined}>{lede}</p>}
      </div>
    </Reveal>
  )
}
