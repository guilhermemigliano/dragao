const Login = () => import('@/views/auth/LoginView.vue')
const Dashboard = () => import('@/views/dashboard/DashboardView.vue')

export const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', name: 'login', component: Login },
  { path: '/in/dashboard', name: 'dashboard', component: Dashboard },
]
