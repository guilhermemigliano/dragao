<template>
  <AlertDialog :open="state.visible">
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Notificação</AlertDialogTitle>
        <AlertDialogDescription>
          {{ state.message }}
        </AlertDialogDescription>
      </AlertDialogHeader>

      <AlertDialogFooter>
        <!-- BOTÃO DECLINE -->
        <AlertDialogCancel v-if="state.declineText" @click="decline">
          {{ state.declineText }}
        </AlertDialogCancel>

        <!-- BOTÃO ACCEPT -->
        <AlertDialogAction @click="accept">
          {{ state.acceptText }}
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
</template>

<script>
import { inject } from 'vue'

// importa os componentes do shadcn-vue
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog'

export default {
  name: 'AlertModal',

  components: {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
  },

  setup() {
    const state = inject('alertState')
    const accept = inject('alertAccept')
    const decline = inject('alertDecline')

    return { state, accept, decline }
  },
}
</script>
