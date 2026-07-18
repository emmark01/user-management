import { useNavigate, useParams } from 'react-router-dom'
import { useUserContext } from '../context/user-context'
import { useToast } from '../context/toast-context'
import type { UserFormValues } from '../types/user'
import UserForm from '../components/users/UserForm'
import PageHeader from '../components/layout/PageHeader'
import UserNotFound from '../components/users/UserNotFound'

export default function EditUserPage() {
  const { userId } = useParams()
  const navigate = useNavigate()
  const { getUserById, updateUser } = useUserContext()
  const { notify } = useToast()
  const user = userId ? getUserById(userId) : undefined

  if (!user) {
    return <UserNotFound />
  }

  const profile = user
  const initialValues: UserFormValues = {
    firstName: profile.firstName,
    lastName: profile.lastName,
    email: profile.email,
    role: profile.role,
    status: profile.status,
    department: profile.department,
    phone: profile.phone ?? '',
    location: profile.location ?? '',
  }

  function handleSubmit(values: UserFormValues) {
    updateUser(profile.id, values)
    notify({ tone: 'success', title: 'User updated' })
    navigate(`/users/${profile.id}`)
  }

  return (
    <section className="page">
      <PageHeader title="Edit user" description="Update profile, role, and account status." />
      <div className="panel">
        <UserForm
          initialValues={initialValues}
          submitLabel="Save changes"
          onSubmit={handleSubmit}
          onCancel={() => navigate(`/users/${profile.id}`)}
        />
      </div>
    </section>
  )
}
