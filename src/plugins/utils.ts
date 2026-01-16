import type { App } from 'vue'
import { cn, formatDate } from '@/lib/utils'

export default {
  install(app: App) {
    app.config.globalProperties.cn = cn
    app.config.globalProperties.formatDate = formatDate
  },
}
