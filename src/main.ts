import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import { SidebarProvider } from '@/components/ui/sidebar'
import alertPlugin from '@/plugins/alertPlugin'
import { useAuthStore } from '@/stores/auth'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(alertPlugin)
app.component('SidebarProvider', SidebarProvider)

app.mount('#app')

// Carrega o estado específico desta aba
const auth = useAuthStore()
auth.load()
