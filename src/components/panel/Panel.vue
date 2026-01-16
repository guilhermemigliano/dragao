<template>
  <Card class="w-full shadow-sm border rounded-xl">
    <CardHeader class="flex flex-row items-center justify-between pb-4 border-b">
      <div class="flex items-start gap-3">
        <!-- Ícone opcional -->
        <component v-if="iconComponent" :is="iconComponent" class="w-6 h-6 text-primary" />

        <div>
          <CardTitle class="text-xl font-semibold">{{ title }}</CardTitle>

          <p v-if="description" class="text-sm text-muted-foreground mt-1">
            {{ description }}
          </p>
        </div>
      </div>

      <!-- UI Actions (botões) -->
      <div v-if="$slots.actions" class="flex items-center gap-2">
        <slot name="actions"></slot>
      </div>
    </CardHeader>

    <CardContent class="pt-0">
      <slot></slot>
    </CardContent>
  </Card>
</template>

<script setup>
import { computed } from 'vue'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

// Icons do lucide-vue-next
import * as Icons from 'lucide-vue-next'

const props = defineProps({
  title: { type: String, required: true },
  description: { type: String, default: '' },
  icon: { type: String, default: null },
})

const iconComponent = computed(() => {
  if (!props.icon) return null
  return Icons[props.icon] || null
})
</script>
