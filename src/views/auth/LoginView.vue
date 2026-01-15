<script lang="ts">
import { defineComponent } from 'vue'
import { z } from 'zod'
import { useRouter } from 'vue-router'

// IMPORTS DOS COMPONENTES SHADCN-VUE
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

import { useAuthStore } from '@/stores/auth'

const auth = useAuthStore()

export default defineComponent({
  name: 'LoginView',

  components: {
    Card,
    Input,
    Button,
  },

  data() {
    return {
      form: {
        email: '',
        password: '',
      },
      errors: {
        email: '',
        password: '',
      },
      loading: false,
      router: useRouter(),
    }
  },

  methods: {
    validateForm() {
      const schema = z.object({
        email: z.string().email('E-mail inválido'),
        password: z.string().min(6, 'A senha deve ter pelo menos 6 caracteres'),
      })

      const result = schema.safeParse(this.form)

      this.errors = { email: '', password: '' }

      if (!result.success) {
        result.error.errors.forEach((err) => {
          if (err.path[0] === 'email') this.errors.email = err.message
          if (err.path[0] === 'password') this.errors.password = err.message
        })
        return false
      }

      return true
    },

    submit() {
      if (!this.validateForm()) return

      this.loading = true

      const user = { email: this.form.email }
      const token = 'TOKEN123'

      // simula login
      setTimeout(() => {
        this.loading = false
        auth.login(user, token)
        this.router.push('/in/dashboard')
      }, 1000)
    },
  },
})
</script>

<template>
  <div class="w-full min-h-screen flex items-center justify-center bg-gray-100">
    <div class="w-full max-w-sm">
      <Card>
        <div class="p-6">
          <h1 class="text-2xl font-bold mb-4">Acessar Portal</h1>

          <form @submit.prevent="submit" class="space-y-4">
            <div>
              <label class="text-sm font-medium">E-mail</label>
              <Input v-model="form.email" />
              <p v-if="errors.email" class="text-red-500 text-sm">
                {{ errors.email }}
              </p>
            </div>

            <div>
              <label class="text-sm font-medium">Senha</label>
              <Input type="password" v-model="form.password" />
              <p v-if="errors.password" class="text-red-500 text-sm">
                {{ errors.password }}
              </p>
            </div>

            <Button class="w-full" :disabled="loading" type="submit">
              {{ loading ? 'Entrando...' : 'Entrar' }}
            </Button>
          </form>

          <div class="text-center mt-4">
            <RouterLink to="/recover" class="text-sm text-blue-600">
              Esqueci minha senha
            </RouterLink>
          </div>
        </div>
      </Card>
    </div>
  </div>
</template>
