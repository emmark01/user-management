import { describe, expect, it } from 'vitest'
import type { User } from '../types/user'
import { countByRole, countByStatus, filterUsers } from './users'

const users: User[] = [
  {
    id: 'usr_a',
    firstName: 'Ava',
    lastName: 'Chen',
    email: 'ava.chen@acme.io',
    role: 'admin',
    status: 'active',
    department: 'Engineering',
    createdAt: '2024-01-12T09:00:00.000Z',
  },
  {
    id: 'usr_b',
    firstName: 'Sofia',
    lastName: 'Reyes',
    email: 'sofia.reyes@acme.io',
    role: 'editor',
    status: 'pending',
    department: 'Design',
    createdAt: '2026-08-10T11:15:00.000Z',
  },
  {
    id: 'usr_c',
    firstName: 'Jonah',
    lastName: 'Whitaker',
    email: 'jonah.whitaker@acme.io',
    role: 'viewer',
    status: 'inactive',
    department: 'Support',
    createdAt: '2023-11-22T08:45:00.000Z',
  },
]

describe('filterUsers', () => {
  it('matches name, email, or department without role or status filters', () => {
    expect(filterUsers(users, 'ava', 'all', 'all').map((user) => user.id)).toEqual(['usr_a'])
    expect(filterUsers(users, 'acme.io', 'all', 'all')).toHaveLength(3)
    expect(filterUsers(users, 'design', 'all', 'all').map((user) => user.id)).toEqual(['usr_b'])
  })

  it('applies role and status filters together', () => {
    expect(filterUsers(users, '', 'editor', 'pending').map((user) => user.id)).toEqual(['usr_b'])
    expect(filterUsers(users, 'ava', 'viewer', 'all')).toEqual([])
  })
})

describe('directory counts', () => {
  it('counts users by status and role', () => {
    expect(countByStatus(users, 'active')).toBe(1)
    expect(countByStatus(users, 'suspended')).toBe(0)
    expect(countByRole(users, 'admin')).toBe(1)
    expect(countByRole(users, 'manager')).toBe(0)
  })
})
