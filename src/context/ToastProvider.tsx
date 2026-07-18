import { useCallback, useMemo, useState, type ReactNode } from 'react'
import { ToastContext, type ToastMessage } from './toast-context'

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastMessage[]>([])

  const dismiss = useCallback((id: string) => {
    setToasts((current) => current.filter((toast) => toast.id !== id))
  }, [])

  const notify = useCallback(
    (toast: Omit<ToastMessage, 'id'>) => {
      const id = `toast_${Math.random().toString(36).slice(2, 8)}`
      setToasts((current) => [...current, { ...toast, id }])
      window.setTimeout(() => dismiss(id), 3200)
    },
    [dismiss],
  )

  const value = useMemo(() => ({ toasts, notify, dismiss }), [toasts, notify, dismiss])

  return <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
}
