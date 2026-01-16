import type { App } from 'vue'
import DatePicker from '@/components/ui/date-picker/DatePicker.vue'

export default {
  install(app: App) {
    app.component('DatePicker', DatePicker)
  },
}
