import { reactive, type App } from 'vue'

interface AlertOptions {
  message: string
  acceptText?: string
  declineText?: string
}

export default {
  install(app: App) {
    const state = reactive<{
      visible: boolean
      message: string
      acceptText: string
      declineText: string | null
      resolve: ((value: boolean | undefined) => void) | null
    }>({
      visible: false,
      message: '',
      acceptText: 'Fechar',
      declineText: null,
      resolve: null,
    })

    function alert(options: string | AlertOptions): Promise<boolean | undefined> {
      return new Promise((resolve) => {
        if (typeof options === 'string') {
          state.message = options
          state.acceptText = 'Fechar'
          state.declineText = null
        } else {
          state.message = options.message
          state.acceptText = options.acceptText ?? 'Fechar'
          state.declineText = options.declineText ?? null
        }

        state.visible = true
        state.resolve = resolve
      })
    }

    function accept() {
      state.visible = false
      state.resolve?.(true) // 👈 agora retorna true
      state.resolve = null
    }

    function decline() {
      state.visible = false
      state.resolve?.(false) // 👈 agora retorna false
      state.resolve = null
    }

    app.config.globalProperties.alert = alert

    app.provide('alert', alert)
    app.provide('alertState', state)
    app.provide('alertAccept', accept)
    app.provide('alertDecline', decline)
  },
}
