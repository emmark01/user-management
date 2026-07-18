import { Link } from 'react-router-dom'
import Button from '../components/ui/Button'

export default function NotFoundPage() {
  return (
    <section className="page empty-state">
      <h2>Page not found</h2>
      <p className="muted">That route is not part of the user management app.</p>
      <Link to="/">
        <Button>Go to dashboard</Button>
      </Link>
    </section>
  )
}
