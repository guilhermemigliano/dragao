<script lang="ts">
import { defineComponent } from 'vue'
import { SidebarTrigger } from '@/components/ui/sidebar'

export default defineComponent({
  name: 'AppHeader',
  components: {
    SidebarTrigger,
  },
})
</script>

<template>
  <header class="w-full h-16 bg-white border-b flex items-center justify-between px-6 z-50">
    <!-- LEFT: BUTTON TO OPEN SIDEBAR ON MOBILE -->
    <div class="flex items-center gap-4">
      <SidebarTrigger class="md:hidden shrink-0" />
      <h1 class="text-lg font-semibold">Dragão</h1>
    </div>

    <div class="flex items-center gap-4">
      <span class="text-sm text-gray-600">Olá, Usuário</span>
      <img src="https://ui-avatars.com/api/?name=Usuario" class="w-10 h-10 rounded-full" />
    </div>
  </header>
</template>
