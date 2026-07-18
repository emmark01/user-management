import { Bell, Menu } from 'lucide-react'
import { useLocation } from 'react-router-dom'

const titles: Record<string, string> = {
  '/': 'Dashboard',
  '/users': 'Users',
  '/users/new': 'Create user',
  '/roles': 'Roles',
  '/settings': 'Settings',
}

interface HeaderProps {
  onToggleSidebar: () => void
}

export default function Header({ onToggleSidebar }: HeaderProps) {
  const { pathname } = useLocation()
  const title = titles[pathname] ?? (pathname.startsWith('/users/') ? 'User profile' : 'User Management')

  return (
    <header className="app-header">
      <div className="header-left">
        <button type="button" className="icon-button mobile-only" onClick={onToggleSidebar} aria-label="Open menu">
          <Menu size={18} />
        </button>
        <div>
          <p className="eyebrow">Workspace</p>
          <h1>{title}</h1>
        </div>
      </div>
      <div className="header-right">
        <button type="button" className="icon-button" aria-label="Notifications">
          <Bell size={18} />
        </button>
        <div className="current-user">
          <span className="avatar-dot">AC</span>
          <div>
            <strong>Ava Chen</strong>
            <p>Administrator</p>
          </div>
        </div>
      </div>
    </header>
  )
}
