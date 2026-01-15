<script lang="ts">
import { defineComponent } from 'vue'
import DashboardLayout from '@/layouts/DashboardLayout.vue'
import { Card } from '@/components/ui/card'

export default defineComponent({
  name: 'DashboardView',
  components: {
    DashboardLayout,
    Card,
  },
})
</script>

<template>
  <DashboardLayout>
    <h2 class="text-2xl font-bold mb-4">Resumo</h2>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card class="p-6">Clientes: 120</Card>
      <Card class="p-6">Produtos: 340</Card>
      <Card class="p-6">Pedidos: 89</Card>
    </div>
  </DashboardLayout>
</template>
