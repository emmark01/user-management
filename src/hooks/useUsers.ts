import { useState } from 'react'
import type { User, UserFormValues, UserStatus } from '../types/user'
import { INITIAL_USERS } from '../data/users'
import { generateUserId } from '../utils/format'

export function useUsers() {
  const [users, setUsers] = useState<User[]>(INITIAL_USERS)

  function createUser(values: UserFormValues) {
    const next: User = {
      id: generateUserId(),
      ...values,
      createdAt: new Date().toISOString(),
      lastActiveAt: undefined,
    }
    setUsers((current) => [next, ...current])
    return next
  }

  function updateUser(id: string, values: UserFormValues) {
    setUsers((current) =>
      current.map((user) => (user.id === id ? { ...user, ...values } : user)),
    )
  }

  function deleteUser(id: string) {
    setUsers((current) => current.filter((user) => user.id !== id))
  }

  function setUserStatus(id: string, status: UserStatus) {
    setUsers((current) =>
      current.map((user) => (user.id === id ? { ...user, status } : user)),
    )
  }

  function getUserById(id: string) {
    return users.find((user) => user.id === id)
  }

  return {
    users,
    createUser,
    updateUser,
    deleteUser,
    setUserStatus,
    getUserById,
  }
}
