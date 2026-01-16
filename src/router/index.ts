import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './AppRoutes'
import { useAuthStore } from '@/stores/auth'
import { cancelAllRequests } from '@/config/api'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})

// Proteção das rotas
router.beforeEach((to) => {
  const auth = useAuthStore()
  if (!auth.user && to.path.includes('/in')) {
    return '/login'
  }

  cancelAllRequests()
})

export default router
