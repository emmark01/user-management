import { describe, expect, it } from 'vitest'
import { formatDate, formatDateTime, generateUserId, getFullName, getInitials } from './format'

describe('name helpers', () => {
  it('builds a full name and initials', () => {
    expect(getFullName('Ava', 'Chen')).toBe('Ava Chen')
    expect(getFullName('  Ava', '')).toBe('Ava')
    expect(getInitials('ava', 'chen')).toBe('AC')
  })
})

describe('date helpers', () => {
  it('returns Never when a date is missing', () => {
    expect(formatDate()).toBe('Never')
    expect(formatDateTime(undefined)).toBe('Never')
  })
})

describe('generateUserId', () => {
  it('creates an id with the usr_ prefix', () => {
    expect(generateUserId()).toMatch(/^usr_[a-z0-9]+$/)
  })
})
