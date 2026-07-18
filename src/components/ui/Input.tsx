import type { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
}

export default function Input({ label, error, id, ...props }: InputProps) {
  const inputId = id ?? props.name

  return (
    <label className="field" htmlFor={inputId}>
      <span className="field-label">{label}</span>
      <input id={inputId} className={error ? 'field-control has-error' : 'field-control'} {...props} />
      {error ? <span className="field-error">{error}</span> : null}
    </label>
  )
}
