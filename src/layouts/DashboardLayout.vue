<script lang="ts">
import { defineComponent } from 'vue'
import AppHeader from '@/components/header/AppHeader.vue'
import AppSidebar from '@/components/sidebar/AppSidebar.vue'

export default defineComponent({
  name: 'DashboardLayout',
  components: { AppHeader, AppSidebar },
})
</script>

<template>
  <div class="flex flex-col w-full h-screen overflow-hidden">
    <!-- HEADER FULL WIDTH -->
    <AppHeader />

    <!-- SIDEBAR PRECISA ESTAR DIRETAMENTE AQUI -->
  <div class="flex flex-1 overflow-hidden w-full overflow-x-hidden">
      <AppSidebar />
      <!-- Sidebar direto no container ✔ -->

   <main class="flex-1 overflow-y-auto overflow-x-hidden p-6 bg-gray-100">
        <slot />
      </main>
    </div>
  </div>
</template>
