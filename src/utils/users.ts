import type { User, UserRole, UserStatus } from '../types/user'
import { getFullName } from './format'

export function filterUsers(
  users: User[],
  query: string,
  role: UserRole | 'all',
  status: UserStatus | 'all',
): User[] {
  const needle = query.trim().toLowerCase()
  return users.filter((user) => {
    const matchesQuery =
      !needle ||
      getFullName(user.firstName, user.lastName).toLowerCase().includes(needle) ||
      user.email.toLowerCase().includes(needle) ||
      user.department.toLowerCase().includes(needle)
    const matchesRole = role === 'all' || user.role === role
    const matchesStatus = status === 'all' || user.status === status
    return matchesQuery && matchesRole && matchesStatus
  })
}

export function countByStatus(users: User[], status: UserStatus): number {
  return users.filter((user) => user.status === status).length
}

export function countByRole(users: User[], role: UserRole): number {
  return users.filter((user) => user.role === role).length
}
