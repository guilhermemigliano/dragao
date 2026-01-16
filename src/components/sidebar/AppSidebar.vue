<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { menuItems } from '@/components/sidebar/SidebarMenu'

// Ícones auxiliares
import { ChevronRight, User2, ChevronUp } from 'lucide-vue-next'

// shadcn-vue components
import {
  Sidebar,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarSeparator,
} from '@/components/ui/sidebar'

import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@/components/ui/collapsible'

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu'

export default defineComponent({
  name: 'AppSidebar',

  components: {
    RouterLink,
    Sidebar,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
    SidebarMenuSub,
    SidebarMenuSubItem,
    SidebarSeparator,
    Collapsible,
    CollapsibleTrigger,
    CollapsibleContent,
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    ChevronRight,
    User2,
    ChevronUp,
  },

  setup() {
    const route = useRoute()

    // estado de abertura para QUALQUER menu pai
    const openStates = ref<Record<string, boolean>>({})

    // inicia abertos menus que possuem filhos relacionados à rota
    const initializeOpenStates = () => {
      menuItems.forEach((item) => {
        if (item.children) {
          openStates.value[item.label] = route.path.startsWith(item.path)
        }
      })
    }

    initializeOpenStates()

    // ao mudar de rota
    watch(
      () => route.path,
      () => {
        Object.keys(openStates.value).forEach((key) => {
          const item = menuItems.find((m) => m.label === key)
          if (item?.children) {
            openStates.value[key] = route.path.startsWith(item.path)
          }
        })
      },
    )

    // função recursiva para renderizar menus
    const isActive = (path: string) => route.path === path

    const isParentActive = (path: string) => route.path.startsWith(path)

    return {
      route,
      menuItems,
      openStates,
      isActive,
      isParentActive,
    }
  },
})
</script>

<template>
  <Sidebar
    collapsible="offcanvas"
    class="border-r bg-sidebar w-64 shrink-0 overflow-y-auto overflow-x-hidden"
  >
    <!-- HEADER -->
    <SidebarHeader>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton size="lg">
            <div
              class="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground"
            >
              <User2 class="size-4" />
            </div>
            <div class="flex flex-col gap-0.5 leading-none">
              <span class="font-semibold">Portal SAP B1</span>
              <span class="text-xs">v1.0.0</span>
            </div>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarHeader>

    <!-- CONTENT -->
    <SidebarContent class="overflow-hidden">
      <SidebarGroup>
        <SidebarGroupLabel>Menu</SidebarGroupLabel>

        <SidebarGroupContent>
          <SidebarMenu>
            <template v-for="item in menuItems" :key="item.label">
              <!-- ITEM SEM FILHOS -->
              <SidebarMenuItem v-if="!item.children">
                <SidebarMenuButton as-child :is-active="isActive(item.path)">
                  <RouterLink :to="item.path">
                    <component :is="item.icon" class="w-4 h-4 shrink-0" />
                    <span>{{ item.label }}</span>
                  </RouterLink>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <!-- ITEM COM FILHOS (COLLAPSIBLE) -->
              <SidebarMenuItem v-else>
                <Collapsible v-model:open="openStates[item.label]" class="group/collapsible">
                  <CollapsibleTrigger as-child>
                    <SidebarMenuButton :is-active="isParentActive(item.path)">
                      <component :is="item.icon" class="w-4 h-4 shrink-0" />
                      <span>{{ item.label }}</span>

                      <ChevronRight
                        class="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90"
                      />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>

                  <CollapsibleContent>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem v-for="child in item.children" :key="child.path">
                        <SidebarMenuButton as-child :is-active="isActive(child.path)">
                          <RouterLink :to="child.path">
                            <component :is="child.icon" class="size-4" />
                            <span>{{ child.label }}</span>
                          </RouterLink>
                        </SidebarMenuButton>
                      </SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </Collapsible>
              </SidebarMenuItem>
            </template>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>

      <SidebarSeparator />
    </SidebarContent>

    <!-- FOOTER -->
    <SidebarFooter> </SidebarFooter>
  </Sidebar>
</template>
