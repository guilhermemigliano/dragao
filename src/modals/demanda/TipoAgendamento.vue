<template>
  <div class="w-full">
    <Dialog>
      <div class="flex flex-row items-center gap-2 rounded-md border">
        <DialogTrigger as-child>
          <Button
            variant="outline"
            class="flex items-center p-0 m-0 rounded-r-none border-t-0 border-l-0 border-b-0"
            @click="loadFakeData"
          >
            <SearchIcon class="w-4 h-4" />
          </Button>
          <span class="flex-1 text-sm">{{ modelValue?.descricao || placeholder }}</span>
        </DialogTrigger>
        <Button
          variant="outline"
          class="rounded-l-none border-t-0 border-r-0 border-b-0"
          @click.stop="clearValue"
          type="button"
        >
          <XIcon class="w-4 h-4" />
        </Button>
      </div>

      <DialogContent class="max-w-2xl">
        <DialogHeader>
          <DialogTitle>{{ modalTitle }}</DialogTitle>
          <DialogDescription>{{ modalDescription }}</DialogDescription>
        </DialogHeader>

        <!-- LOADING -->
        <div v-if="loading" class="flex items-center justify-center py-10">
          <Loader2Icon class="w-6 h-6 animate-spin text-primary" />
        </div>

        <!-- TABELA -->
        <Table v-else class="border rounded-md mt-4">
          <TableHeader>
            <TableRow>
              <TableHead class="w-20">ID</TableHead>
              <TableHead>Descrição</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            <DialogClose as-child v-for="item in items" :key="item.id">
              <TableRow class="cursor-pointer hover:bg-accent" @click="selectItem(item)">
                <TableCell>{{ item.id }}</TableCell>
                <TableCell>{{ item.descricao }}</TableCell>
              </TableRow>
            </DialogClose>
          </TableBody>
        </Table>

        <DialogFooter>
          <div class="flex items-center justify-between w-full mt-4">
            <!-- BOTÃO ADICIONAR -->
            <div class="flex">
              <Button variant="default" @click="openAddModal = true"> Adicionar tipo </Button>
            </div>
            <DialogClose as-child>
              <Button variant="outline">Fechar</Button>
            </DialogClose>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>

    <AddTipoAgendamento v-model="openAddModal" @created="addNovoTipo" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { SearchIcon, Loader2Icon, XIcon } from 'lucide-vue-next'
import AddTipoAgendamento from '@/modals/demanda/AddTipoAgendamento.vue'

export default defineComponent({
  name: 'TipoAgendamento',

  components: {
    AddTipoAgendamento,
    SearchIcon,
    Loader2Icon,
    XIcon,
  },

  props: {
    modelValue: {
      type: Object as () => { id: number; descricao: string } | null,
      default: null,
    },
    placeholder: { type: String, default: 'Selecionar...' },
  },

  emits: ['update:modelValue'],

  data() {
    return {
      modalTitle: 'Tipos de Agendamento',
      modalDescription: 'Clique em um item para selecionar.',
      openAddModal: false,
      loading: false,
      items: [] as Array<{ id: number; descricao: string }>,
    }
  },

  methods: {
    clearValue() {
      this.$emit('update:modelValue', null)
    },
    addNovoTipo(novo: { id: number; descricao: string }) {
      this.items.push(novo)
    },
    async loadFakeData() {
      this.loading = true
      this.items = []

      await new Promise((resolve) => setTimeout(resolve, 1200))

      this.items = [
        { id: 1, descricao: 'Pendente' },
        { id: 2, descricao: 'Confirmado' },
        { id: 3, descricao: 'Ordem de chegada' },
      ]

      this.loading = false
    },

    selectItem(item: { id: number; descricao: string }) {
      this.$emit('update:modelValue', item)
      // DialogClose faz o fechamento por nós
    },
  },
})
</script>
