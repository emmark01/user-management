import { useState, type FormEvent } from 'react'
import type { UserFormValues } from '../../types/user'
import { DEPARTMENTS } from '../../constants/directory'
import { hasFormErrors, validateUserForm } from '../../utils/validation'
import Button from '../ui/Button'
import Input from '../ui/Input'
import Select from '../ui/Select'

interface UserFormProps {
  initialValues: UserFormValues
  submitLabel: string
  onSubmit: (values: UserFormValues) => void
  onCancel: () => void
}

export default function UserForm({ initialValues, submitLabel, onSubmit, onCancel }: UserFormProps) {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState(validateUserForm(initialValues))
  const [submitted, setSubmitted] = useState(false)

  function update<K extends keyof UserFormValues>(key: K, value: UserFormValues[K]) {
    const next = { ...values, [key]: value }
    setValues(next)
    setErrors(validateUserForm(next))
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    setSubmitted(true)
    const nextErrors = validateUserForm(values)
    setErrors(nextErrors)
    if (hasFormErrors(nextErrors)) return
    onSubmit(values)
  }

  return (
    <form className="user-form" onSubmit={handleSubmit} noValidate>
      <div className="form-grid">
        <Input
          label="First name"
          name="firstName"
          value={values.firstName}
          error={submitted ? errors.firstName : undefined}
          onChange={(event) => update('firstName', event.target.value)}
        />
        <Input
          label="Last name"
          name="lastName"
          value={values.lastName}
          error={submitted ? errors.lastName : undefined}
          onChange={(event) => update('lastName', event.target.value)}
        />
        <Input
          label="Email"
          name="email"
          type="email"
          value={values.email}
          error={submitted ? errors.email : undefined}
          onChange={(event) => update('email', event.target.value)}
        />
        <Input
          label="Department"
          name="department"
          list="department-options"
          value={values.department}
          error={submitted ? errors.department : undefined}
          onChange={(event) => update('department', event.target.value)}
        />
        <datalist id="department-options">
          {DEPARTMENTS.map((department) => (
            <option key={department} value={department} />
          ))}
        </datalist>
        <Select
          label="Role"
          name="role"
          value={values.role}
          onChange={(event) => update('role', event.target.value as UserFormValues['role'])}
          options={[
            { value: 'admin', label: 'Admin' },
            { value: 'manager', label: 'Manager' },
            { value: 'editor', label: 'Editor' },
            { value: 'viewer', label: 'Viewer' },
          ]}
        />
        <Select
          label="Status"
          name="status"
          value={values.status}
          onChange={(event) => update('status', event.target.value as UserFormValues['status'])}
          options={[
            { value: 'active', label: 'Active' },
            { value: 'pending', label: 'Pending' },
            { value: 'inactive', label: 'Inactive' },
            { value: 'suspended', label: 'Suspended' },
          ]}
        />
        <Input
          label="Phone"
          name="phone"
          value={values.phone}
          onChange={(event) => update('phone', event.target.value)}
        />
        <Input
          label="Location"
          name="location"
          value={values.location}
          onChange={(event) => update('location', event.target.value)}
        />
      </div>
      <div className="form-actions">
        <Button variant="secondary" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit">{submitLabel}</Button>
      </div>
    </form>
  )
}
