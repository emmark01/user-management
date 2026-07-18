import type { User } from '../../types/user'
import { formatDateTime } from '../../utils/format'

export default function UserMetaList({ user }: { user: User }) {
  return (
    <ul className="detail-list">
      <li>Department: {user.department}</li>
      <li>Created: {formatDateTime(user.createdAt)}</li>
      <li>Last active: {formatDateTime(user.lastActiveAt)}</li>
    </ul>
  )
}
