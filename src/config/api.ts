import axios from 'axios'

import { HandleError } from '@/handler/errors'
//TODO criar o HandleError
//TODO criar função para pegar o token

//TODO criar .env
export const api = axios.create({ baseURL: import.meta.env.VITE_ROOT_API })

let abortControllers: AbortController[] = []

api.interceptors.request.use((request) => {
  const controller = new AbortController()
  request.signal = controller.signal
  abortControllers.push(controller)
  return {
    ...request,
    headers: {
      ...request.headers, //TODO função que pega o token}
    },
  }
})

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.name === 'CanceledError') {
      return Promise.reject({ canceled: true, message: 'request canceled' })
    }
    if (error.response) {
      //Erro com status e mensagem da API
      const message = HandleError(error)
      return Promise.reject({
        status: error.response.status,
        message: message || 'Erro desconhecido da API',
        original: error,
      })
    } else if (error.request) {
      const message = HandleError(error)
      return Promise.reject({
        status: null,
        message: message,
        original: error,
      })
    } else {
      //Erro ao configurar a requisição
      const message = HandleError(error)
      return Promise.reject({
        status: null,
        message: message,
        original: error,
      })
    }
  },
)

export function cancelAllRequests() {
  abortControllers.forEach((c) => c.abort())
  abortControllers = []
}
