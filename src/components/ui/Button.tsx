import type { CSSProperties, ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger'
type ButtonSize = 'sm' | 'md'

interface ButtonProps {
  children: ReactNode
  type?: 'button' | 'submit'
  variant?: ButtonVariant
  size?: ButtonSize
  disabled?: boolean
  onClick?: () => void
  className?: string
}

const variants: Record<ButtonVariant, CSSProperties> = {
  primary: {
    background: 'var(--color-primary)',
    color: 'white',
    border: '1px solid var(--color-primary)',
  },
  secondary: {
    background: 'white',
    color: 'var(--color-text)',
    border: '1px solid var(--color-border)',
  },
  ghost: {
    background: 'transparent',
    color: 'var(--color-muted)',
    border: '1px solid transparent',
  },
  danger: {
    background: 'var(--color-danger)',
    color: 'white',
    border: '1px solid var(--color-danger)',
  },
}

export default function Button({
  children,
  type = 'button',
  variant = 'primary',
  size = 'md',
  disabled,
  onClick,
  className,
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={className}
      style={{
        ...variants[variant],
        height: size === 'sm' ? 32 : 40,
        padding: size === 'sm' ? '0 10px' : '0 14px',
        borderRadius: 10,
        fontWeight: 600,
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.55 : 1,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
      }}
    >
      {children}
    </button>
  )
}
