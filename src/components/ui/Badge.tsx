import type { UserRole, UserStatus } from '../../types/user'

interface BadgeProps {
  label: string
  tone?: 'neutral' | 'success' | 'warning' | 'danger' | 'info'
}

const tones = {
  neutral: { background: '#e2e8f0', color: '#334155' },
  success: { background: '#dcfce7', color: '#166534' },
  warning: { background: '#fef3c7', color: '#92400e' },
  danger: { background: '#fee2e2', color: '#991b1b' },
  info: { background: '#e0e7ff', color: '#3730a3' },
}

export default function Badge({ label, tone = 'neutral' }: BadgeProps) {
  return (
    <span
      style={{
        ...tones[tone],
        display: 'inline-flex',
        alignItems: 'center',
        borderRadius: 999,
        padding: '2px 10px',
        fontSize: 12,
        fontWeight: 700,
        textTransform: 'capitalize',
      }}
    >
      {label}
    </span>
  )
}

export function StatusBadge({ status }: { status: UserStatus }) {
  const tone =
    status === 'active' ? 'success' : status === 'pending' ? 'warning' : status === 'suspended' ? 'danger' : 'neutral'
  return <Badge label={status} tone={tone} />
}

export function RoleBadge({ role }: { role: UserRole }) {
  const tone = role === 'admin' ? 'info' : role === 'manager' ? 'success' : 'neutral'
  return <Badge label={role} tone={tone} />
}
