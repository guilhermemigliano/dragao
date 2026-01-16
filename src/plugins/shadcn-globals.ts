import type { App } from 'vue'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import {
  Calendar,
  CalendarCell,
  CalendarCellTrigger,
  CalendarGrid,
  CalendarGridBody,
  CalendarGridHead,
  CalendarGridRow,
  CalendarHeadCell,
  CalendarHeader,
  CalendarHeading,
  CalendarNextButton,
  CalendarPrevButton,
} from '@/components/ui/calendar'

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogScrollContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableEmpty,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export default {
  install(app: App) {
    app.component('Label', Label)
    app.component('Input', Input)
    app.component('Select', Select)
    app.component('SelectTrigger', SelectTrigger)
    app.component('SelectContent', SelectContent)
    app.component('SelectItem', SelectItem)
    app.component('SelectValue', SelectValue)
    app.component('Button', Button)
    app.component('Popover', Popover)
    app.component('PopoverContent', PopoverContent)
    app.component('PopoverTrigger', PopoverTrigger)
    app.component('TooltipTrigger', TooltipTrigger)
    app.component('TooltipProvider', TooltipProvider)
    app.component('TooltipContent', TooltipContent)
    app.component('Tooltip', Tooltip)
    app.component('Calendar', Calendar)
    app.component('CalendarCell', CalendarCell)
    app.component('CalendarCellTrigger', CalendarCellTrigger)
    app.component('CalendarGrid', CalendarGrid)
    app.component('CalendarGridBody', CalendarGridBody)
    app.component('CalendarGridHead', CalendarGridHead)
    app.component('CalendarGridRow', CalendarGridRow)
    app.component('CalendarHeadCell', CalendarHeadCell)
    app.component('CalendarHeader', CalendarHeader)
    app.component('CalendarHeading', CalendarHeading)
    app.component('CalendarNextButton', CalendarNextButton)
    app.component('CalendarPrevButton', CalendarPrevButton)
    app.component('Dialog', Dialog)
    app.component('DialogContent', DialogContent)
    app.component('DialogHeader', DialogHeader)
    app.component('DialogFooter', DialogFooter)
    app.component('DialogTitle', DialogTitle)
    app.component('DialogDescription', DialogDescription)
    app.component('DialogClose', DialogClose)
    app.component('DialogOverlay', DialogOverlay)
    app.component('DialogScrollContent', DialogScrollContent)
    app.component('DialogTrigger', DialogTrigger)
    app.component('Table', Table)
    app.component('TableBody', TableBody)
    app.component('TableCaption', TableCaption)
    app.component('TableCell', TableCell)
    app.component('TableEmpty', TableEmpty)
    app.component('TableFooter', TableFooter)
    app.component('TableHead', TableHead)
    app.component('TableHeader', TableHeader)
    app.component('TableRow', TableRow)
  },
}
