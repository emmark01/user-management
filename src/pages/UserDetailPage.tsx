import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { useUserContext } from '../context/user-context'
import { useToast } from '../context/toast-context'
import { getFullName } from '../utils/format'
import Avatar from '../components/ui/Avatar'
import Button from '../components/ui/Button'
import ConfirmDialog from '../components/ui/ConfirmDialog'
import { RoleBadge, StatusBadge } from '../components/ui/Badge'
import UserMetaList from '../components/users/UserMetaList'
import UserContactList from '../components/users/UserContactList'
import UserNotFound from '../components/users/UserNotFound'
import StatusSelect from '../components/users/StatusSelect'

export default function UserDetailPage() {
  const { userId } = useParams()
  const navigate = useNavigate()
  const { getUserById, deleteUser, setUserStatus } = useUserContext()
  const { notify } = useToast()
  const [confirmOpen, setConfirmOpen] = useState(false)
  const user = userId ? getUserById(userId) : undefined

  if (!user) {
    return <UserNotFound />
  }

  const profile = user

  function handleDelete() {
    deleteUser(profile.id)
    notify({ tone: 'success', title: 'User deleted' })
    navigate('/users')
  }

  return (
    <section className="page">
      <Link to="/users" className="back-link">
        <ArrowLeft size={16} />
        Back to users
      </Link>
      <div className="profile-hero">
        <Avatar firstName={profile.firstName} lastName={profile.lastName} size={72} />
        <div>
          <h2>{getFullName(profile.firstName, profile.lastName)}</h2>
          <p className="muted">{profile.email}</p>
          <div className="card-tags">
            <RoleBadge role={profile.role} />
            <StatusBadge status={profile.status} />
          </div>
        </div>
        <div className="profile-actions">
          <Link to={`/users/${profile.id}/edit`}>
            <Button>Edit profile</Button>
          </Link>
          <Button variant="danger" onClick={() => setConfirmOpen(true)}>
            Delete
          </Button>
        </div>
      </div>
      <div className="detail-grid">
        <article className="panel">
          <h3>Contact</h3>
          <UserContactList user={profile} />
        </article>
        <article className="panel">
          <h3>Activity</h3>
          <UserMetaList user={profile} />
          <StatusSelect
            value={profile.status}
            onChange={(status) => {
              setUserStatus(profile.id, status)
              notify({ tone: 'info', title: 'Status updated', description: `Account is now ${status}.` })
            }}
          />
        </article>
      </div>
      <ConfirmDialog
        open={confirmOpen}
        title="Delete user"
        message={`Remove ${getFullName(profile.firstName, profile.lastName)} from the directory?`}
        confirmLabel="Delete"
        onCancel={() => setConfirmOpen(false)}
        onConfirm={handleDelete}
      />
    </section>
  )
}
