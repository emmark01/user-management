import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { LayoutGrid, Plus, Table2 } from 'lucide-react'
import { useUserContext } from '../context/user-context'
import { useToast } from '../context/toast-context'
import { useDebounce } from '../hooks/useDebounce'
import { usePagination } from '../hooks/usePagination'
import type { User, UserRole, UserStatus } from '../types/user'
import { PAGE_SIZE } from '../constants/directory'
import { getFullName } from '../utils/format'
import { filterUsers } from '../utils/users'
import SearchBar from '../components/ui/SearchBar'
import Button from '../components/ui/Button'
import Pagination from '../components/ui/Pagination'
import EmptyState from '../components/ui/EmptyState'
import Spinner from '../components/ui/Spinner'
import ConfirmDialog from '../components/ui/ConfirmDialog'
import UserFilters from '../components/users/UserFilters'
import UserTable from '../components/users/UserTable'
import UserCard from '../components/users/UserCard'
import PageHeader from '../components/layout/PageHeader'

export default function UsersPage() {
  const { users, deleteUser } = useUserContext()
  const { notify } = useToast()
  const [query, setQuery] = useState('')
  const [role, setRole] = useState<UserRole | 'all'>('all')
  const [status, setStatus] = useState<UserStatus | 'all'>('all')
  const [view, setView] = useState<'table' | 'cards'>('table')
  const [pendingDelete, setPendingDelete] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const debouncedQuery = useDebounce(query)
  const filtered = filterUsers(users, debouncedQuery, role, status)
  const { page: currentPage, pageCount, pageItems, setPage } = usePagination(filtered, PAGE_SIZE)

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 250)
    return () => window.clearTimeout(timer)
  }, [])

  function handleDelete() {
    if (!pendingDelete) return
    deleteUser(pendingDelete.id)
    notify({
      tone: 'success',
      title: 'User deleted',
      description: `${getFullName(pendingDelete.firstName, pendingDelete.lastName)} was removed.`,
    })
    setPendingDelete(null)
  }

  return (
    <section className="page">
      <PageHeader
        title="Directory"
        description={`${filtered.length} people match the current filters.`}
        actions={
          <Link to="/users/new">
            <Button>
              <Plus size={16} />
              New user
            </Button>
          </Link>
        }
      />
      <div className="toolbar">
        <SearchBar value={query} onChange={(value) => { setQuery(value); setPage(1) }} />
        <UserFilters
          role={role}
          status={status}
          onRoleChange={(value) => { setRole(value); setPage(1) }}
          onStatusChange={(value) => { setStatus(value); setPage(1) }}
        />
        <div className="view-toggle">
          <Button size="sm" variant={view === 'table' ? 'primary' : 'secondary'} onClick={() => setView('table')}>
            <Table2 size={14} />
            Table
          </Button>
          <Button size="sm" variant={view === 'cards' ? 'primary' : 'secondary'} onClick={() => setView('cards')}>
            <LayoutGrid size={14} />
            Cards
          </Button>
        </div>
      </div>
      {loading ? (
        <Spinner label="Loading users" />
      ) : pageItems.length === 0 ? (
        <EmptyState
          title="No users found"
          description="Try a different search or clear the role and status filters."
        />
      ) : view === 'table' ? (
        <UserTable users={pageItems} onDelete={setPendingDelete} />
      ) : (
        <div className="card-grid">
          {pageItems.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      )}
      <Pagination page={currentPage} pageCount={pageCount} onPageChange={setPage} />
      <ConfirmDialog
        open={Boolean(pendingDelete)}
        title="Delete user"
        message={pendingDelete ? `Remove ${getFullName(pendingDelete.firstName, pendingDelete.lastName)} from the directory?` : ''}
        confirmLabel="Delete"
        onCancel={() => setPendingDelete(null)}
        onConfirm={handleDelete}
      />
    </section>
  )
}
