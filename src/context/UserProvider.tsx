import { type ReactNode } from 'react'
import { UserContext } from './user-context'
import { useUsers } from '../hooks/useUsers'

export function UserProvider({ children }: { children: ReactNode }) {
  const value = useUsers()
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
