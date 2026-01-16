<template>
  <Popover v-slot="{ close }">
    <PopoverTrigger as-child>
      <Button
        variant="outline"
        :class="
          cn('w-full justify-start text-left font-normal', !modelValue && 'text-muted-foreground')
        "
      >
        <CalendarIcon class="mr-2 h-4 w-4" />
        {{ modelValue ? formatDate(modelValue) : 'dd/mm/aaaa' }}
      </Button>
    </PopoverTrigger>

    <PopoverContent class="w-auto p-0">
      <Calendar
        locale="pt-BR"
        v-model="calendarValue"
        :initial-focus="true"
        layout="month-and-year"
        @update:model-value="onSelect($event, close)"
      />
    </PopoverContent>
  </Popover>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import type { DateValue } from '@internationalized/date'

import { CalendarIcon } from 'lucide-vue-next'

export default defineComponent({
  name: 'DatePicker',

  components: { CalendarIcon },

  props: {
    modelValue: {
      type: [Object, null] as unknown as () => DateValue | null,
      default: null,
    },
  },

  emits: ['update:modelValue'],

  setup(props, { emit }) {
    // Calendar usa DateValue | undefined
    const calendarValue = ref<DateValue | undefined>()

    // Sincroniza valor externo → calendário
    watch(
      () => props.modelValue,
      (val) => {
        calendarValue.value = val ?? undefined
      },
      { immediate: true },
    )

    // Quando seleciona
    function onSelect(value: DateValue | null, close: Function) {
      emit('update:modelValue', value ?? null)
      close()
    }

    // Exibir no formato dd/mm/yyyy
    function formatDate(value: DateValue) {
      return `${String(value.day).padStart(2, '0')}/${String(value.month).padStart(
        2,
        '0',
      )}/${value.year}`
    }

    return { calendarValue, onSelect, formatDate }
  },
})
</script>
