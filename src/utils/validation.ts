import type { UserFormValues } from '../types/user'

export type FormErrors = Partial<Record<keyof UserFormValues, string>>

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validateUserForm(values: UserFormValues): FormErrors {
  const errors: FormErrors = {}

  if (!values.firstName.trim()) {
    errors.firstName = 'First name is required'
  }

  if (!values.lastName.trim()) {
    errors.lastName = 'Last name is required'
  }

  if (!values.email.trim()) {
    errors.email = 'Email is required'
  } else if (!EMAIL_PATTERN.test(values.email)) {
    errors.email = 'Enter a valid email address'
  }

  if (!values.department.trim()) {
    errors.department = 'Department is required'
  }

  return errors
}

export function hasFormErrors(errors: FormErrors): boolean {
  return Object.keys(errors).length > 0
}
