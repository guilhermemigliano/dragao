export function getTabId() {
  let tabId = sessionStorage.getItem('tabId')

  // gera um id único por aba
  if (!tabId) {
    tabId = crypto.randomUUID()
    sessionStorage.setItem('tabId', tabId)
  }

  return tabId
}
