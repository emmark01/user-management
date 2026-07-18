import type { RoleDefinition } from '../types/role'
import { ROLE_PERMISSIONS } from '../types/role'

export const INITIAL_ROLES: RoleDefinition[] = [
  {
    id: 'role_admin',
    name: 'Admin',
    description: 'Full access to users, roles, and workspace settings.',
    permissions: ROLE_PERMISSIONS.admin,
    userCount: 2,
  },
  {
    id: 'role_manager',
    name: 'Manager',
    description: 'Can review and update users, but cannot delete accounts.',
    permissions: ROLE_PERMISSIONS.manager,
    userCount: 2,
  },
  {
    id: 'role_editor',
    name: 'Editor',
    description: 'Can create and edit user profiles in assigned teams.',
    permissions: ROLE_PERMISSIONS.editor,
    userCount: 2,
  },
  {
    id: 'role_viewer',
    name: 'Viewer',
    description: 'Read-only access to the directory and user profiles.',
    permissions: ROLE_PERMISSIONS.viewer,
    userCount: 2,
  },
]
