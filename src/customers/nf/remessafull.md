# Remessa de mercadoria para Mercado Livre Full

[]{.draft}

As notas fiscais de remessa de mercadoria para o Mercado Livre Full são emitidas pelo sistema do Mercado Livre, porém, é necessário fazer a baixa do estoque no Zen ERP. Para isso será necessário lançar um pedido de venda e processar.

## Etapas do processo

### Pedido de venda 

Lançar um [pedido de venda](/sale/sale) com atenção ao seguintes campos:

* [Perfil de venda]{.field .required} - informar **Remessa full**
* [Pessoa]{.field .required} - EBAZAR.COM.BR. LTDA
* [Código]{.field .required} - informar a literal 'NF' e o número da nota de remessa. Ex: NF99999
* [Forma de pagamento]{.field .required} - informa 0 (zero)

>Lançar os itens conforme a quantidade e valor da nota de remessa

### Nota fiscal 

* Processar automaticamente o pedido de venda
* A nota ficará com status aprovada (não será transmitida)

### Contas a receber

* Liquidar a [conta a receber](/financial/receivableOpSettle)

>Na liquidação usar a conta contábil 5.2.1.1.001 - Contas de apuração de resultados, Ajustes, Ajustes de estoque, Ajustes de estoque, Ajustes de estoque