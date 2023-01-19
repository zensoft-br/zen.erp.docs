# Importação de itens de lista de preço através de planilha

[]{.draft}

## Preparação 

Baixe a [planilha modelo](priceListOpImport.csv) e preencha com as informações de cada item.

>A lista de preço pode ser pelo produto mestre ou pelos produtos. Utilizando o produto mestre, todos os produtos associados ao mestre vão utilizar o mesmo preço.

### Colunas

* [product.id]{.field} - ID do produto mestre. Deixe em branco se for utilizar a lista por produto
* [product.code]{.field} - Código do produto mestre. Deixe em branco se for utilizar a lista por produto
* [productPacking.id]{.field} - ID do produto. Deixe em branco se for utilizar a lista por produto mestre
* [productPacking.code]{.field} - Código do produto. Deixe em branco se for utilizar a lista por produto mestre
* [currency.id]{.field} - ID da moeda. Deixe em branco para utilizar a mesma moeda informada no cabeçalho da lista de preços
* [currency.code]{.field} - Código da moeda. Deixe em branco para utilizar a mesma moeda informada no cabeçalho da lista de preços
* [unitValue]{.field .required} - Valor unitário
* [variationRateLow]{.field} - Percentual de variação a menos permitida. Deixe em branco se não for utilizar
* [variationRateHigh]{.field} - Percentual de variação a mais permitida. Deixe em branco se não for utilizar
* [tags]{.field} - [tags](/tags)

## Importando a planilha

Acesse [Comercial > Listas de preços]{.menu}

Selecione a lista de preços desejada, clique no botão ![](https://static.zenerp.app.br/icons/action-more-toolbar.svg){.icon} e clique na opção [Importar lista de preços]{.menu}

Na tela de importar lista de preços, selecione a [Lista de preços]{.field} desejada, clique em [Escolher arquivo]{.menu}, selecione a planilha e clique em **Abrir** e em seguida clique em [Processar]{.z-button .default}

Após processar clique em [Fechar]{.z-button .default}

## Veja também

* [Listas de preços de compra](/purchase/priceList)
* [Listas de preços de venda](/sale/priceList)