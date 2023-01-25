# Criar nota fiscal de entrada à partir de planilha

[]{.draft}

## Preparação 

Baixe o [documento modelo](incomingInvoiceOpCreateFromSpreadsheet.xlsx) e preencha as planihas com as informações necessárias.

### Planilhas

O documento é composto de 3 planilhas: **Operação**, **Adições** e **Itens**. Preencha os campos de cada planilha conforme as informações constantes da DI.

>O documento base para a nota de importação sempre será a DI.


#### Operação

Preencha os campos conforme abaixo:

* [Valor USD (C1)]{.field} - informe a cotação do dólar
* [Frete (C4)]{.field} - informe o valor do frete em R$
* [Seguro (C5)]{.field} - informe o valor do seguro em R$
* [Outras despesas (C6)]{.field} - informe o valor de outras despesas em R$
* [Despesas aduaneiras (C7)]{.field} - informe o valor das despesas aduaneiras (SISCOMEX) em R$

> Os campos frete, seguro, outras despesas e despesas aduaneiras podem ser informados em dolar e a planilha converte automaticamente baseado na conversão informada.
>
>Para lançar em dolar, preenchar os valores na coluna B.

* [Base cálculo ICMS (C15)]{.field} - informe o valor total da base de cálculo do ICMS
* [ICMS (C16)]{.field} - informe o valor total do ICMS 
* [Valor NF (C17)]{.field} - informe o valor total da nota de importação (VCMV + frete + seguro, outras despesas + despesas aduaneiras + II + IPI + PIS + COFINS + ICMS)

#### Adições

Preencha os campos de cada coluna para cada adição conforme abaixo:

* [cfop]{.field} - informe a CFOP (3.102 para revenda ou 3.101 para indústria)
* [ncm]{.field} - informe a ncm da adição (0000.00.00)
* [orig]{.field} - informe a origem (sempre 1)
* [vcmv.usd]{.field} - valor da adição em dolar 
* [weightKg]{.field} - peso da adição
* [tax.II.taxRate]{.field} - alíquota de II
* [tax.II.value]{.field} - valor do II
* [tax.IPI.taxRate]{.field} - alíquota de IPI
    * No caso de não ter IPI, informar 0 (zero)
* [tax.IPI.value]{.field} - valor do IPI
* [tax.IPI.cst]{.field} - CST do IPI
    * 00 quando tem IPI
    * 01 quando tributado com alíquota 0 (zero)
* [tax.PIS.taxRate]{.field} - alíquota do PIS 
* [tax.PIS.value]{.field} - valor do PIS
* [tax.PIS.cst]{.field} - CST do PIS (normalmente 01)
* [tax.COFINS.taxRate]{.field} - alíquota do COFINS
* [tax.COFINS.value]{.field} - valor do COFINS
* [tax.COFINS.cst]{.field} - CST do COFINS (normalmente 01)
* [tax.ICMS.taxRate]{.field} - alíquota do ICMS
* [tax.ICMS.discount]{.field} - desconto quando para a base de ICMS usa uma alíquota diferente da alíquota destacada.
    * Exemplo: para a base de cálculo que usa 18% de ICMS mas destaca 5% na nota, o desconto será de 72,22%
* [tax.ICMS.cst]{.field} - CST do ICMS (normalmente 00)

#### Itens

Preencha os campos de cada coluna para cada item conforme abaixo:

* [productPacking.code]{.field} - informe o código do produto
* [nAdicao]{.field} - informe a adição correspondente
* [quantity]{.field} - informe a quantidade
* [unitValueUSD]{.field} - informe o valor unitário em dolar

## Importando a planilha

Acesse [Fiscal > Notas fiscais de entrada]{.menu} 

Clique no botão ![](https://static.zenerp.app.br/icons/action-more-toolbar.svg){.icon} e clique na opção [Criar nota fiscal de entrada a partir de planilha]{.menu}

Preencha os campos conforme abaixo:

* [Fornecedor]{.field .required} - informe o fornecedor da nota fiscal
* [Perfil fiscal de operação]{.field .required} - informe o perfil fiscal de operação (normalmente Compra)
* [Requisição de entrada]{.field} - informe o pedido de compra

Clique em [Escolher arquivo]{.field}, selecione a planilha e clique em **Abrir** e em seguida clique em [Processar]{.z-button}

## Entrada no estoque

Para fazer a entrada do material no estoque siga essas [instruções](/material/incomingListOpImport)

## Aprovar

Para aprovar a nota fiscal de entrada, e finalizar o processo, siga essas [instruções](/fiscal/incomingInvoice/incomingInvoice)

## Veja também

[Notas fiscais de entrada](/fiscal/incomingInvoice)

[Pedidos de compra](/purchase/purchase)
