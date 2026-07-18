import { getInitials } from '../../utils/format'

interface AvatarProps {
  firstName: string
  lastName: string
  size?: number
}

const palette = ['#4f46e5', '#0f766e', '#c2410c', '#7c3aed', '#0369a1', '#be185d']

export default function Avatar({ firstName, lastName, size = 40 }: AvatarProps) {
  const seed = `${firstName}${lastName}`.length % palette.length

  return (
    <span
      aria-hidden
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        background: palette[seed],
        color: 'white',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 700,
        fontSize: size * 0.36,
        flexShrink: 0,
      }}
    >
      {getInitials(firstName, lastName)}
    </span>
  )
}
