import { Link } from 'react-router-dom'
import type { User } from '../../types/user'
import { formatDate, getFullName } from '../../utils/format'
import Avatar from '../ui/Avatar'
import { RoleBadge, StatusBadge } from '../ui/Badge'
import Button from '../ui/Button'

interface UserTableProps {
  users: User[]
  onDelete: (user: User) => void
}

export default function UserTable({ users, onDelete }: UserTableProps) {
  return (
    <div className="table-wrap">
      <table className="data-table">
        <thead>
          <tr>
            <th>User</th>
            <th>Role</th>
            <th>Status</th>
            <th>Department</th>
            <th>Joined</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <div className="user-cell">
                  <Avatar firstName={user.firstName} lastName={user.lastName} size={36} />
                  <div>
                    <Link to={`/users/${user.id}`} className="user-name">
                      {getFullName(user.firstName, user.lastName)}
                    </Link>
                    <p className="muted">{user.email}</p>
                  </div>
                </div>
              </td>
              <td>
                <RoleBadge role={user.role} />
              </td>
              <td>
                <StatusBadge status={user.status} />
              </td>
              <td>{user.department}</td>
              <td>{formatDate(user.createdAt)}</td>
              <td>
                <div className="row-actions">
                  <Link to={`/users/${user.id}/edit`}>
                    <Button size="sm" variant="secondary">
                      Edit
                    </Button>
                  </Link>
                  <Button size="sm" variant="ghost" onClick={() => onDelete(user)}>
                    Delete
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
