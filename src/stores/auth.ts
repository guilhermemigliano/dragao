import { defineStore } from 'pinia'
import { getTabId } from '@/utils/tabSession'

const tabId = getTabId()

const STORAGE_KEY = `auth:${tabId}`

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as any,
    token: null as string | null,
  }),

  getters: {
    isAuthenticated: (state) => !!state.token,
  },

  actions: {
    login(user: any, token: string) {
      this.user = user
      this.token = token
      this.save()
    },

    logout() {
      this.user = null
      this.token = null
      sessionStorage.removeItem(STORAGE_KEY)
      localStorage.removeItem('persistent_user')
    },

    save() {
      const data = { user: this.user, token: this.token }
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(data))
      localStorage.setItem('persistent_user', JSON.stringify(data))
    },

    load() {
      const data = sessionStorage.getItem(STORAGE_KEY)
      if (data) {
        const parsed = JSON.parse(data)
        this.user = parsed.user
        this.token = parsed.token
        return
      }
      // Se não tem sessão, tenta carregar a persistente
      const persistent = localStorage.getItem('persistent_user')

      if (persistent) {
        sessionStorage.setItem(STORAGE_KEY, persistent)
        const parsed = JSON.parse(persistent)
        this.user = parsed.user
        this.token = parsed.token
      }
    },
  },
})
