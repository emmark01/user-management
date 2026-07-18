import { Link } from 'react-router-dom'
import Button from '../ui/Button'

export default function UserNotFound() {
  return (
    <section className="page">
      <h2>User not found</h2>
      <p className="muted">That account is not in the directory.</p>
      <Link to="/users">
        <Button variant="secondary">Back to users</Button>
      </Link>
    </section>
  )
}
