export function getFullName(firstName: string, lastName: string): string {
  return `${firstName} ${lastName}`.trim()
}

export function getInitials(firstName: string, lastName: string): string {
  return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase()
}

export function formatDate(value?: string): string {
  if (!value) return 'Never'
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(value))
}

export function formatDateTime(value?: string): string {
  if (!value) return 'Never'
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  }).format(new Date(value))
}

export function generateUserId(): string {
  return `usr_${Math.random().toString(36).slice(2, 8)}`
}
