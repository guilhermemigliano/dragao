import type { App } from 'vue'
import Panel from '@/components/panel/Panel.vue'

export default {
  install(app: App) {
    app.component('PanelComponent', Panel)
  },
}
