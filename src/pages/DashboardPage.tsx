import { Shield, UserCheck, UserPlus, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useUserContext } from '../context/user-context'
import { countByRole, countByStatus } from '../utils/users'
import StatCard from '../components/ui/StatCard'
import UserCard from '../components/users/UserCard'
import Button from '../components/ui/Button'
import PageHeader from '../components/layout/PageHeader'

export default function DashboardPage() {
  const { users } = useUserContext()
  const active = countByStatus(users, 'active')
  const pending = countByStatus(users, 'pending')
  const admins = countByRole(users, 'admin')
  const recent = users.slice(0, 4)

  return (
    <section className="page">
      <PageHeader
        title="Overview"
        description="Track directory health and the latest accounts."
        actions={
          <Link to="/users/new">
            <Button>
              <UserPlus size={16} />
              Add user
            </Button>
          </Link>
        }
      />
      <div className="stats-grid">
        <StatCard label="Total users" value={users.length} hint="Everyone in the directory" icon={<Users size={20} />} />
        <StatCard label="Active" value={active} hint="Currently enabled accounts" icon={<UserCheck size={20} />} />
        <StatCard label="Pending" value={pending} hint="Awaiting activation" icon={<UserPlus size={20} />} />
        <StatCard label="Admins" value={admins} hint="Full-access operators" icon={<Shield size={20} />} />
      </div>
      <div className="panel">
        <div className="panel-header">
          <h3>Recent people</h3>
          <Link to="/users">View all</Link>
        </div>
        <div className="card-grid">
          {recent.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      </div>
    </section>
  )
}
