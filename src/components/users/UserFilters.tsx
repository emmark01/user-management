import type { UserRole, UserStatus } from '../../types/user'

interface UserFiltersProps {
  role: UserRole | 'all'
  status: UserStatus | 'all'
  onRoleChange: (role: UserRole | 'all') => void
  onStatusChange: (status: UserStatus | 'all') => void
}

export default function UserFilters({ role, status, onRoleChange, onStatusChange }: UserFiltersProps) {
  return (
    <div className="filters">
      <label>
        Role
        <select value={role} onChange={(event) => onRoleChange(event.target.value as UserRole | 'all')}>
          <option value="all">All roles</option>
          <option value="admin">Admin</option>
          <option value="manager">Manager</option>
          <option value="editor">Editor</option>
          <option value="viewer">Viewer</option>
        </select>
      </label>
      <label>
        Status
        <select value={status} onChange={(event) => onStatusChange(event.target.value as UserStatus | 'all')}>
          <option value="all">All statuses</option>
          <option value="active">Active</option>
          <option value="pending">Pending</option>
          <option value="inactive">Inactive</option>
          <option value="suspended">Suspended</option>
        </select>
      </label>
    </div>
  )
}
