declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    alert: (
      options:
        | string
        | {
            message: string
            acceptText?: string
            declineText?: string
          },
    ) => Promise<boolean | undefined>
  }
}

export {}
