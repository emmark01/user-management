import { Mail, MapPin, Phone } from 'lucide-react'
import type { User } from '../../types/user'

export default function UserContactList({ user }: { user: User }) {
  return (
    <ul className="detail-list">
      <li>
        <Mail size={16} /> {user.email}
      </li>
      <li>
        <Phone size={16} /> {user.phone || 'Not provided'}
      </li>
      <li>
        <MapPin size={16} /> {user.location || 'Not provided'}
      </li>
    </ul>
  )
}
