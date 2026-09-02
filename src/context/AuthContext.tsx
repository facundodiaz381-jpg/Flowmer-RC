// AuthContext: maneja quién está logueado, login, register y logout

import { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'
import type { User } from '../types'
import {
  getUsers,
  saveUsers,
  getCurrentUser,
  saveCurrentUser,
  clearCurrentUser,
} from '../services/storageService'

type AuthContextType = {
  currentUser: User | null
  login: (email: string, password: string) => boolean
  register: (name: string, email: string, password: string) => boolean
  logout: () => void
}

const AuthContext = createContext<AuthContextType | null>(null)

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth debe usarse dentro de AuthProvider')
  return context
}

type AuthProviderProps = {
  children: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [currentUser, setCurrentUser] = useState<User | null>(getCurrentUser)

  function login(email: string, password: string): boolean {
    const users = getUsers()
    const found = users.find(
      (u) => u.email === email && u.password === password
    )
    if (!found) return false
    saveCurrentUser(found)
    setCurrentUser(found)
    return true
  }

  function register(name: string, email: string, password: string): boolean {
    const users = getUsers()
    const existe = users.find((u) => u.email === email)
    if (existe) return false

    const newUser: User = {
      id: Date.now(),
      name,
      email,
      password,
      role: 'client',
    }
    saveUsers([...users, newUser])
    saveCurrentUser(newUser)
    setCurrentUser(newUser)
    return true
  }

  function logout(): void {
    clearCurrentUser()
    setCurrentUser(null)
  }

  return (
    <AuthContext.Provider value={{ currentUser, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
