export type UserRole = 'admin' | 'manager' | 'editor' | 'viewer'
export type UserStatus = 'active' | 'inactive' | 'pending' | 'suspended'

export interface User {
  id: string
  firstName: string
  lastName: string
  email: string
  role: UserRole
  status: UserStatus
  department: string
  avatarUrl?: string
  phone?: string
  location?: string
  createdAt: string
  lastActiveAt?: string
}

export interface UserFormValues {
  firstName: string
  lastName: string
  email: string
  role: UserRole
  status: UserStatus
  department: string
  phone: string
  location: string
}
