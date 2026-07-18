import { Link } from 'react-router-dom'
import type { User } from '../../types/user'
import { getFullName } from '../../utils/format'
import Avatar from '../ui/Avatar'
import { RoleBadge, StatusBadge } from '../ui/Badge'

export default function UserCard({ user }: { user: User }) {
  return (
    <article className="user-card">
      <Avatar firstName={user.firstName} lastName={user.lastName} />
      <div>
        <Link to={`/users/${user.id}`} className="user-name">
          {getFullName(user.firstName, user.lastName)}
        </Link>
        <p className="muted">{user.email}</p>
      </div>
      <div className="card-tags">
        <RoleBadge role={user.role} />
        <StatusBadge status={user.status} />
      </div>
      <p className="muted">{user.department}</p>
    </article>
  )
}
