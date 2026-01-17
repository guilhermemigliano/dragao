<template>
  <Dialog v-model:open="localOpen">
    <DialogContent class="max-w-md">
      <DialogHeader>
        <DialogTitle>Adicionar Tipo</DialogTitle>
        <DialogDescription> Insira o nome do novo tipo de agendamento. </DialogDescription>
      </DialogHeader>

      <div class="flex flex-col gap-4">
        <label class="text-sm font-medium">Descrição</label>
        <Input v-model="descricao" placeholder="Digite aqui..." />
      </div>

      <DialogFooter>
        <Button variant="outline" @click="close"> Fechar </Button>

        <Button :disabled="saving" @click="save">
          <Loader2Icon v-if="saving" class="w-4 h-4 animate-spin mr-2" />
          {{ saving ? 'Salvando...' : 'Adicionar' }}
        </Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Loader2Icon } from 'lucide-vue-next'

export default defineComponent({
  name: 'AddTipoAgendamento',

  components: {
    Loader2Icon,
  },

  props: {
    modelValue: {
      type: Boolean,
      required: true,
    },
  },

  emits: ['update:modelValue', 'created'],

  data() {
    return {
      descricao: '',
      saving: false,
      localOpen: this.modelValue,
    }
  },

  watch: {
    modelValue(val) {
      this.localOpen = val
    },
    localOpen(val) {
      this.$emit('update:modelValue', val)
    },
  },

  methods: {
    close() {
      this.localOpen = false
      this.descricao = ''
    },

    async save() {
      if (!this.descricao.trim()) return

      this.saving = true

      // simula delay de API
      await new Promise((r) => setTimeout(r, 1500))

      const novo = {
        id: Date.now(),
        descricao: this.descricao,
      }

      this.$emit('created', novo)

      this.saving = false
      this.close()
    },
  },
})
</script>
