import type { RoleDefinition } from '../../types/role'
import Badge from '../ui/Badge'

export default function RoleCard({ role }: { role: RoleDefinition }) {
  return (
    <article className="panel role-card">
      <div className="panel-header">
        <h3>{role.name}</h3>
        <Badge label={`${role.userCount} users`} tone="info" />
      </div>
      <p className="muted">{role.description}</p>
      <ul className="permission-list">
        {role.permissions.map((permission) => (
          <li key={permission}>{permission}</li>
        ))}
      </ul>
    </article>
  )
}
