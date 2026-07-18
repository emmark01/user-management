import { Route, Routes } from 'react-router-dom'
import { UserProvider } from './context/UserProvider'
import { ToastProvider } from './context/ToastProvider'
import AppLayout from './components/layout/AppLayout'
import DashboardPage from './pages/DashboardPage'
import UsersPage from './pages/UsersPage'
import UserDetailPage from './pages/UserDetailPage'
import CreateUserPage from './pages/CreateUserPage'
import EditUserPage from './pages/EditUserPage'
import RolesPage from './pages/RolesPage'
import SettingsPage from './pages/SettingsPage'
import NotFoundPage from './pages/NotFoundPage'

export default function App() {
  return (
    <ToastProvider>
      <UserProvider>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/users" element={<UsersPage />} />
            <Route path="/users/new" element={<CreateUserPage />} />
            <Route path="/users/:userId" element={<UserDetailPage />} />
            <Route path="/users/:userId/edit" element={<EditUserPage />} />
            <Route path="/roles" element={<RolesPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </UserProvider>
    </ToastProvider>
  )
}
