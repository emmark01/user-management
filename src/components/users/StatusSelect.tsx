import type { UserStatus } from '../../types/user'

interface StatusSelectProps {
  value: UserStatus
  onChange: (status: UserStatus) => void
}

export default function StatusSelect({ value, onChange }: StatusSelectProps) {
  return (
    <label className="field">
      <span className="field-label">Account status</span>
      <select
        className="field-control"
        value={value}
        onChange={(event) => onChange(event.target.value as UserStatus)}
      >
        <option value="active">Active</option>
        <option value="pending">Pending</option>
        <option value="inactive">Inactive</option>
        <option value="suspended">Suspended</option>
      </select>
    </label>
  )
}
