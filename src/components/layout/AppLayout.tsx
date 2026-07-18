import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import Sidebar from './Sidebar'
import ToastViewport from '../ui/ToastViewport'

export default function AppLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="app-shell">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="app-main">
        <Header onToggleSidebar={() => setSidebarOpen(true)} />
        <div className="app-content">
          <Outlet />
        </div>
        <Footer />
      </div>
      <ToastViewport />
    </div>
  )
}
