import type { ReactNode } from 'react'
import { useInView } from '../hooks/useInView'

interface RevealProps {
  children: ReactNode
  delay?: number
  as?: 'div' | 'span'
  className?: string
}

export function Reveal({ children, delay = 0, as = 'div', className = '' }: RevealProps) {
  const { ref, inView } = useInView()
  const Tag = as

  return (
    <Tag
      ref={ref as never}
      className={`reveal ${inView ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: inView ? `${delay}ms` : '0ms' }}
    >
      {children}
    </Tag>
  )
}
