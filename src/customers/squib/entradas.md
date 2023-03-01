# Processos de entrada de materiais

[]{.draft}

## Pedido de compra

* Criar o cabeçalho do [pedido de compra](../../purchase/purchase.md)
* Anotar o número do pedido de compra
* Repetir os passos abaixo para cada item que será comprado
* Finalizar a preparação do pedido de compra
* Aprovar o pedido de compra

### Cadastro de produto

* Acessar o cadastro do [produto mestre](../../catalog/product/product)
* Acessar os data codes associados ao produto mestre ![](https://static.zenerp.app.br/icons/catalog/product/productPacking.svg){.icon} 
* Verificar se os data codes possuem estoque disponível ![](https://static.zenerp.app.br/icons/action-more-tr.svg){.icon} e escolher a opção ![](https://static.zenerp.app.br/icons/material/stockSummary.svg){.icon} Disponibilidade de estoque.
* Caso o data code não possua disponibilidade de estoque disponível ele poderá ser editado, caso contrário, clicar em ![](https://static.zenerp.app.br/icons/action-create.svg){.icon} para incluir um novo [data code](../../catalog/product/productPacking)
* Alterar o código do produto para que ele fique com o código do produto mestre + '.' + TMP + número do pedido de compra. Se necessário acrescentar informações adicionais, como nome do vendedor que está reservando o produto, por exemplo.
* Caso o data code esteja sendo alterado manter a marca (variante), pesos e endereço que estão informados.

### Lista de preços de custo

* Acessar a lista de [preços de custo](../../purchase/priceList.md)
* Localizar o produto na lista de custo
* Alterar o valor unitário para R$ 0,00 [item da lista de preços de custo](../../purchase/priceListItem.md)

### Item do pedido de compra

* Inserir cada data code no pedido de compra [item de pedido de compra](../../purchase/purchaseItem.md)

## Romaneio de entrada

* O romaneio de entrada será gerado no sistema após o recebimento e conferência do produto. Usar a planilha padrão gerada pelo pessoal do estoque.
* Atualizar o cadastro dos data codes, ajustando o código do produto, o peso, a marca e o endereço
* Atualizar a lista de preços de custo com o valor atualizado do custo do produto
* Preencher a planilha do Zen com os dados de entrada [Importação de itens de romaneio de entrada através de planilha](../../material/incomingListOpImport.md)
* Preencher apenas as colunas productPacking.code e quantity 
* Importar a planilha no sistema
* Finalizar a preparação do romaneio de entrada

## Nota fiscal de entrada

* [Criar a nota fiscal de entrada a partir do romaneio de entrada](../../fiscal/incomingInvoice/incomingInvoiceOpCreateFromIncomingList.md)
* Informar o romaneio de entrada e a lista de preços de custo
* Acessar os itens da nota fiscal e ajustar os valores unitários e quantidade
* Inserir a forma de pagamento
* Finalizar a preparação da nota fiscal de entrada
* Aprovar a nota fiscal de entrada
* Finalizar o pedido de compra




