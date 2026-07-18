export interface RoleDefinition {
  id: string
  name: string
  description: string
  permissions: string[]
  userCount: number
}

export const ROLE_PERMISSIONS: Record<string, string[]> = {
  admin: ['users.read', 'users.write', 'users.delete', 'roles.manage', 'settings.manage'],
  manager: ['users.read', 'users.write', 'roles.view'],
  editor: ['users.read', 'users.write'],
  viewer: ['users.read'],
}
