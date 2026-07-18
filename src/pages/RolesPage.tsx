import { INITIAL_ROLES } from '../data/roles'
import PageHeader from '../components/layout/PageHeader'
import RoleCard from '../components/users/RoleCard'

export default function RolesPage() {
  return (
    <section className="page">
      <PageHeader title="Roles" description="Access levels used across the directory." />
      <div className="card-grid">
        {INITIAL_ROLES.map((role) => (
          <RoleCard key={role.id} role={role} />
        ))}
      </div>
    </section>
  )
}
