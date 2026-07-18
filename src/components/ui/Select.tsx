import type { SelectHTMLAttributes } from 'react'

interface SelectOption {
  value: string
  label: string
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string
  options: SelectOption[]
  error?: string
}

export default function Select({ label, options, error, id, ...props }: SelectProps) {
  const selectId = id ?? props.name

  return (
    <label className="field" htmlFor={selectId}>
      <span className="field-label">{label}</span>
      <select id={selectId} className={error ? 'field-control has-error' : 'field-control'} {...props}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error ? <span className="field-error">{error}</span> : null}
    </label>
  )
}
