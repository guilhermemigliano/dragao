import {
  Home,
  History,
  NotebookText,
  Factory,
  UserPlus,
  Eye,
  ListChecks,
  ChartNoAxesCombined,
  FileChartColumnIncreasing,
} from 'lucide-vue-next'

export const menuItems = [
  {
    path: '/in/dashboard',
    label: 'Dashboard',
    icon: ChartNoAxesCombined,
  },
  {
    path: '/in/demanda',
    label: 'Demanda',
    icon: FileChartColumnIncreasing,
  },
  // {
  //   path: '/in/historico',
  //   label: 'Histórico',
  //   icon: History,
  // },
  // {
  //   path: '/in/notas',
  //   label: 'Notas',
  //   icon: NotebookText,
  // },
  // {
  //   label: 'Fornecedores',
  //   path: '/in/fornecedores',
  //   icon: Factory,
  //   children: [
  //     {
  //       path: '/in/fornecedores/cadastrar',
  //       label: 'Cadastrar',
  //       icon: UserPlus,
  //     },
  //     {
  //       path: '/in/fornecedores/visualizar',
  //       label: 'Visualizar',
  //       icon: Eye,
  //     },
  //     {
  //       path: '/in/fornecedores/historico',
  //       label: 'Histórico',
  //       icon: ListChecks,
  //     },
  //   ],
  // },
]
