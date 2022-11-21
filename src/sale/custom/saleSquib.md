# Lançamento de pedido de venda Squib

[]{.draft}

Além de ser usada para fazer o lançamento de um pedido de venda, essa tela será usada pelo vendedor para consultar preço e disponibilidade de estoque.

Acesse... e preencha os campos solicitados:

* [**Vendedor:**]{.field .required} informe o vendedor responsável pela venda
* [**Perfil de venda:**]{.field .required} informe o perfil correspondente a operação
* [**Cliente:**]{.field .required} informe o cliente 
* [**Produto:**]{.field .required} informe o produto desejado

> **Observação 1**
>
>Após informar o produto, a tela vai mostrar a disponibilidade do produto separado por tipo:
>
>* [STOCK:]{.tag} indica a disponibilidade de pronta entrega de cada empresa
>* [SCHEDULE:]{.tag} indica a disponibiliade de cada pedido de compra já aprovado mostrando a data prevista para chegada do material

* [**Quantidade:**]{.field .required} informe a quantidade desejada. O pedido de venda será gerado na empresa correspondente ao estoque ou do pedido de compra
* [**Valor unitário:**]{.field .required} o sistema carrega automaticamante o preço de venda da lista de preço padrão mas permite o operador informar um valor unitário diferente

> **Observação 2:**
>
>A comissão vai mudar de acordo com o desconto concedido em cada item do pedido conforme a regra abaixo:
>
>**Indústria**
>A comissão padrão do vendedor é 5%
>Desconto | Comissão
>-- | -- 
>até 2,99%	|5%
>3%	a 4,99%	|4,5%
>5%	a 6,99%	|4%
>7%	a 9,99%	|3,5%
>10%		|3%
>10,01% 	|0%
>
>**Revenda**
>A comissão padrão do vendedor é 2%. Qualquer desconto concedido altera a comissão para 1%.

Após informar a **quantidade** e **valor unitário** clique no botão [Incluir]{.z-button}. Nesse momento será criado 1 ou mais pedido de venda, de acordo com as disponibilidades utilizadas. Para lançar mais itens, basta informar o [produto]{.fiel .required} e repetir o processo.

Para visualizar os pedidos de venda criados, clique no botão [Pedidos de venda]{.z-button}.

Após lançar todos os itens clique no botão [Finalizar preparação de pedido de venda]{.z-button} e informe os campos necessários.








