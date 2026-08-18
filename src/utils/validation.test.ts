import { describe, expect, it } from 'vitest'
import type { UserFormValues } from '../types/user'
import { hasFormErrors, validateUserForm } from './validation'

const validValues: UserFormValues = {
  firstName: 'Ava',
  lastName: 'Chen',
  email: 'ava.chen@acme.io',
  role: 'admin',
  status: 'active',
  department: 'Engineering',
  phone: '',
  location: '',
}

describe('validateUserForm', () => {
  it('returns no errors for a complete profile', () => {
    expect(validateUserForm(validValues)).toEqual({})
    expect(hasFormErrors(validateUserForm(validValues))).toBe(false)
  })

  it('requires first name, last name, email, and department', () => {
    const errors = validateUserForm({
      ...validValues,
      firstName: '  ',
      lastName: '',
      email: '',
      department: ' ',
    })

    expect(errors.firstName).toBe('First name is required')
    expect(errors.lastName).toBe('Last name is required')
    expect(errors.email).toBe('Email is required')
    expect(errors.department).toBe('Department is required')
    expect(hasFormErrors(errors)).toBe(true)
  })

  it('rejects an invalid email address', () => {
    const errors = validateUserForm({ ...validValues, email: 'not-an-email' })
    expect(errors.email).toBe('Enter a valid email address')
  })
})
