import { LayoutDashboard, Settings, Shield, Users, X } from 'lucide-react'
import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/users', label: 'Users', icon: Users },
  { to: '/roles', label: 'Roles', icon: Shield },
  { to: '/settings', label: 'Settings', icon: Settings },
]

interface SidebarProps {
  open: boolean
  onClose: () => void
}

export default function Sidebar({ open, onClose }: SidebarProps) {
  return (
    <>
      {open ? <div className="sidebar-backdrop" onClick={onClose} /> : null}
      <aside className={open ? 'app-sidebar open' : 'app-sidebar'}>
        <div className="brand-row">
          <div className="brand">
            <span className="brand-mark">UM</span>
            <div>
              <strong>Acme Admin</strong>
              <p>User management</p>
            </div>
          </div>
          <button type="button" className="icon-button mobile-only" onClick={onClose} aria-label="Close menu">
            <X size={18} />
          </button>
        </div>
        <nav>
          {links.map((link) => {
            const Icon = link.icon
            return (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                onClick={onClose}
              >
                <Icon size={18} />
                {link.label}
              </NavLink>
            )
          })}
        </nav>
      </aside>
    </>
  )
}
