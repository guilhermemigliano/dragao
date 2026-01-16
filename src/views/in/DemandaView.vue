<script lang="ts">
import { defineComponent } from 'vue'
import { Card } from '@/components/ui/card'

const initState = () => {
  return {
    Code: null, //númerico número do registro do cabeçalho e das linhas. Descrição na tela 'Carga'. DocNum replicado para as linhas também
    U_DocDate: new Date(), // **obrigatório
    U_TipoAgenda: '', //[Pendente, Confirmado, Ordem de chegada] pode cadastrar mais
    U_DataEntrega: new Date(), //data prevista para entrega
    U_NomeCarga: '', // **obrigatório
    U_TipoCarga: '', // **obrigatório DUPLICADA NO DOCUMENTO [Paletizada, Batida, Mista] pode cadastrar mais
    U_TipoVeiculo: '', // [Carreta, Tuck, Carreta Sider] pode cadastrar mais
    U_StatusCarga: '', // **obrigatório [Criando, Liberada, Ajuste, Encerrada, Cancelada] - só pode ser alterado para encerrada quando o campo Picking, NF do produto e Manisfesto for preenchido
    U_TipoEntrega: '', // [Entrega CIF, Retira FOB] pode cadastrar mais
    U_DocEntry: '', // Não visível para o usuário
    U_StatusCarga2: '', //VERIFICAR POIS JA EXISTE [Separando, Conferindo, Carregando, Carregado, Liberado, Ajustando] Pode cadastrar mais Condições: O status do carregamento só pode ser alterado para Carregando, Carregado ou Liberado quando o status do veículo estiver como Na Doca (campo: Status do Veículo)
    U_QtdPaletes: 0, //VERIFICAR NOME DO CAMPO QUE POSSUI UM . NO NOME. MÁXIMO DE 30 **Obrigatório quando U_StatusCarga for Carregado ou Liberado e o U_TipoCarga for Paletizada ou Mista
    U_Transportador: '', // Se o campo Tipo de Frete estiver marcado como "Casa" só poderá ser selecionado 4 transportadoras que são as filiais. Quando Tipo de frete for "Frete" não pode ser selecionado as transportadoras que são as filiais. OBS Criar um campo de usuário no SAP no cadastro do PN que vem como padrão FRETE e o usuário deve informar o frete CASA que será o gatilho para esse campo U_Transportador
    U_Motorista: '', // Nome do motorista
    U_StatusEntrega: '', //DUPLICADA NO DOC[Aguardando faturamento (padrao), Aguardando início de viagem, saiu para entrega, aguardando descarregar, concluída, entrega falhou] Pode cadastrar mais . Quando o campo NF do produto for totalmente preenchido o Status da entrega deve sair de aguardando faturamento para aguardando início de viagem // O campo Status da entrega só pode ser diferente de Aguardando Faturamento quando o cmapo NF do produto estiver completamente preenchido.
    U_Filial: '', // **obrigatório informar filial. Não pode selecionar uma filial diferente dos pedidos.
    U_TipoFrete: '', // [Casa, Frete]
    U_StatusVeic: '', // [Pendente (padrão). a caminho, disponível, na doca] pode cadastrar mais - O Campo Status do veículo só pode ser diferente de pendente se o campo Plca do Bau estiver preenchido
    U_Placa: '', // **Obrigatorio Verificar se é U_Placa ou só Placa. Se o campo Tipo de veículo for Truck o campo deve ficar não editável. OBS: Como é obrigatório se não é possível editar quando o tipo de veículo for Truck
    U_PlacaBau: '', //**obrigatório
    DEAMANDA_LIN: [
      {
        LineNum: 0,
        Code: 0, //utilizado como id da linha DocNum?
        U_Pedido: '', //Number buscar pedidos em aberto
        U_cliente: '', //CardName buscar de acordo com o nome do cliente no pedido
        U_Cidade: '', //**obrigatorio campo CityS buscar a cidade do cliente de acordo com o pedido inserido
        U_Bairro: '', //**obrigatorio  campo BlockS
        U_Itens: '', //vai ser confirmado se via ser usado
        U_Picking: '', //number
        U_NFProduto: '', //number
        U_NFPalete: '', //**obrigatorio se o campo tipo da carga for Paletizada */
      },
    ],
  }
}

export default defineComponent({
  name: 'DemandaView',
  components: {
    Card,
  },
  methods: {
    async notificar() {
      await this.alert({
        message: 'Teste de mensagem',
        acceptText: 'Continuar',
        declineText: 'Fechar',
      }).then((res) => {
        if (res) {
          this.alert('confirmado')
        } else {
          this.alert('recusado')
        }
      })
    },
  },
})
</script>

<template>
  <div>
    <div>Demanda</div>
    <button @click="notificar">Teste</button>
  </div>
</template>
