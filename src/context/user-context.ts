import { createContext, useContext } from 'react'
import type { User, UserFormValues, UserStatus } from '../types/user'

export interface UserContextValue {
  users: User[]
  createUser: (values: UserFormValues) => User
  updateUser: (id: string, values: UserFormValues) => void
  deleteUser: (id: string) => void
  setUserStatus: (id: string, status: UserStatus) => void
  getUserById: (id: string) => User | undefined
}

export const UserContext = createContext<UserContextValue | null>(null)

export function useUserContext() {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error('useUserContext must be used within UserProvider')
  }
  return context
}
