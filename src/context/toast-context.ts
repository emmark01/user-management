import { createContext, useContext } from 'react'

export type ToastTone = 'success' | 'error' | 'info'

export interface ToastMessage {
  id: string
  title: string
  description?: string
  tone: ToastTone
}

export interface ToastContextValue {
  toasts: ToastMessage[]
  notify: (toast: Omit<ToastMessage, 'id'>) => void
  dismiss: (id: string) => void
}

export const ToastContext = createContext<ToastContextValue | null>(null)

export function useToast() {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error('useToast must be used within ToastProvider')
  }
  return context
}
