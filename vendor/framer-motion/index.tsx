import * as React from 'react'

type MotionProps = React.HTMLAttributes<HTMLElement> & {
  initial?: unknown
  animate?: unknown
  whileInView?: unknown
  viewport?: unknown
  transition?: unknown
  children?: React.ReactNode
}

const MotionDiv = React.forwardRef<HTMLDivElement, MotionProps>(
  ({ children, initial, animate, whileInView, viewport, transition, ...props }, ref) => (
    <div ref={ref} {...props}>
      {children}
    </div>
  )
)

MotionDiv.displayName = 'MotionDiv'

export const motion = {
  div: MotionDiv,
}
