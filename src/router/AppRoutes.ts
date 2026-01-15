import RootLayout from '@/layouts/RootLayout.vue'

const Login = () => import('@/views/auth/LoginView.vue')
const Dashboard = () => import('@/views/in/DashboardView.vue')
const Demanda = () => import('@/views/in/DemandaView.vue')

export const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', name: 'login', component: Login },
  {
    path: '/in',
    component: RootLayout,
    children: [
      { path: '/in/dashboard', name: 'dashboard', component: Dashboard },
      { path: '/in/demanda', name: 'demanda', component: Demanda },
    ],
  },
]
