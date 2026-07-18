import { useNavigate } from 'react-router-dom'
import { useUserContext } from '../context/user-context'
import { useToast } from '../context/toast-context'
import type { UserFormValues } from '../types/user'
import UserForm from '../components/users/UserForm'
import PageHeader from '../components/layout/PageHeader'

const emptyValues: UserFormValues = {
  firstName: '',
  lastName: '',
  email: '',
  role: 'viewer',
  status: 'pending',
  department: '',
  phone: '',
  location: '',
}

export default function CreateUserPage() {
  const navigate = useNavigate()
  const { createUser } = useUserContext()
  const { notify } = useToast()

  function handleSubmit(values: UserFormValues) {
    const created = createUser(values)
    notify({
      tone: 'success',
      title: 'User created',
      description: `${values.firstName} ${values.lastName} was added to the directory.`,
    })
    navigate(`/users/${created.id}`)
  }

  return (
    <section className="page">
      <PageHeader title="Create user" description="Add a new account to the workspace directory." />
      <div className="panel">
        <UserForm
          initialValues={emptyValues}
          submitLabel="Create user"
          onSubmit={handleSubmit}
          onCancel={() => navigate('/users')}
        />
      </div>
    </section>
  )
}
