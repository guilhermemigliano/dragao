<script setup lang="ts">
import { ref, onMounted } from "vue"
import { SidebarProvider } from "@/components/ui/sidebar"

const open = ref(true) // desktop version = open

onMounted(() => {
  const mq = window.matchMedia("(max-width: 768px)")

  const update = () => {
    open.value = !mq.matches // desktop = open, mobile = closed
  }

  update()
  mq.addEventListener("change", update)
})
</script>

<template>
  <SidebarProvider :open="open" @update:open="open = $event">
    <RouterView />
  </SidebarProvider>
</template>
