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

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    cn: (...classes: any[]) => string
    formatDate: (date: string) => string
  }
}

export {}
