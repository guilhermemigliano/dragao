import { z } from 'zod'

export const DemandaSchema = z.object({
  Code: z.number().nullable(),

  U_DocDate: z.date({ required_error: 'Data é obrigatória' }),

  U_TipoAgenda: z.string().min(1, 'Tipo de agenda é obrigatório'),

  U_DataEntrega: z.date(),

  U_NomeCarga: z.string().min(1, 'Nome da carga é obrigatório'),

  U_TipoCarga: z.string().min(1, 'Tipo da carga é obrigatório'),

  U_TipoVeiculo: z.string().optional(),

  U_StatusCarga: z
    .string()
    .min(1, 'Status da carga é obrigatório')
    .refine((val) => ['Criando', 'Liberada', 'Ajuste', 'Encerrada', 'Cancelada'].includes(val), {
      message: 'Status da carga inválido',
    }),

  U_TipoEntrega: z.string().optional(),

  U_DocEntry: z.string().optional(),

  U_StatusCarga2: z.string().optional(),

  U_QtdPaletes: z
    .number()
    .min(0)
    .refine((val) => val <= 30, 'Máximo de 30 paletes'),

  U_Transportador: z.string().optional(),

  U_Motorista: z.string().optional(),

  U_StatusEntrega: z.string().optional(),

  U_Filial: z.string().min(1, 'Filial é obrigatória'),

  U_TipoFrete: z.string().optional(),

  U_StatusVeic: z.string().optional(),

  U_Placa: z.string().min(1, 'Placa é obrigatória'),

  U_PlacaBau: z.string().min(1, 'Placa do baú é obrigatória'),

  DEAMANDA_LIN: z.array(
    z.object({
      LineNum: z.number(),
      Code: z.number(),
      U_Pedido: z.string().optional(),
      U_cliente: z.string().optional(),
      U_Cidade: z.string().min(1, 'Cidade é obrigatória'),
      U_Bairro: z.string().min(1, 'Bairro é obrigatório'),
      U_Itens: z.string().optional(),
      U_Picking: z.string().optional(),
      U_NFProduto: z.string().optional(),
      U_NFPalete: z.string().optional(),
      U_MDFe: z.string().optional(),
      U_Lacre: z.string().optional(),
      U_OrdemEntrega: z.string().min(1, 'Ordem de entrega obrigatória'),
      U_DescargaTax: z.number(),
      U_ChegadaCliente: z.date(),
      U_SaidaCliente: z.date(),
    }),
  ),

  DEAMANDA_LIN2: z.array(
    z.object({
      U_Code: z.number(),
      U_Carga: z.string().optional(),
      U_Pedido: z.string().optional(),
      U_Comentario: z.string().optional(),
      Pedido: z.string().optional(),
      Problema: z.string().optional(),
      Justificativa: z.string().optional(),
    }),
  ),
})
