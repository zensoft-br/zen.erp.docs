# Importação de itens de romaneio de entrada através de planilha

[]{.draft}

## Preparação 

Baixe a [planilha modelo](incomingListOpImport.xlsx) e preencha com as informações de cada item.

>### Observação 1
>
>Para importar produtos com controle serial (ex: peças de tecidos, componentes com número de série, automóveis), cada linha da planilha deverá representar um item com seu respectivo número serial e quantidade.

### Colunas

* [warehouse.code]{.field} Código do armazén
* [address.code]{.field} Código do endereço
* [depositor.id]{.field} ID do depositante
* [productPacking.code]{.field} Código do produto
* [productPacking.barcode]{.field} Código de barras do produto
    * Para produtos que tenha código EAN informar essa coluna
* [quality.code]{.field} Código da qualidade
* [lot.code]{.field} Código do lote
* [lot.properties.<prop>]{.field} Propriedade do lote
* [serial.code]{.field} Número serial
* [serial.properties.<prop>]{.field} Propriedade do serial
* [expirationDate]{.field} Data de validade
* [handlingUnit.code]{.field} Código do palete
* [quantity]{.field} Quantidade
    * Se não informado o sistema adotará quantidade 1
* [netWeightKg]{.field} Peso líquido
* [grossWeightKg]{.field} Peso bruto
* [volumeM3]{.field} Volume da embalagem
* [tags]{.field} [Tags](/tags.md)
* [properties.<prop>]{.field} Propriedades do item do romaneio

>### Observação 2
>
>Pelo menos uma das colunas [productPacking.code]{.field} ou [productPacking.barcode]{.field} devem ser preenchidas obrigatoriamente. 
>
>As demais colunas são opcionais e quando não forem preenchidas o sistema atribuirá um valor padrão.

## Importando a planilha

### Incluindo um novo romaneio

Acesse [Materiais > Romaneio de entrada]{.menu} clique no botão ![](https://static.zenerp.app.br/icons/action-more-toolbar.svg){.icon} e clique na opção [Importar romaneio de entrada]{.menu}

Na tela de importar romaneio de entrada clique em [Escolher arquivo]{.menu}, selecione a planilha e clique em **Abrir** e em seguida clique em [Processar]{.z-button}

O romaneio será gerado na empresa ativa{.note .sticky .warning}

### Incluindo itens em um romaneio existente

Acesse [Materiais > Romaneio de entrada]{.menu}, selecione o romaneio, clique em ![](https://static.zenerp.app.br/icons/action-next.svg){.icon} e clique na opção [Importar romaneio de entrada]{.menu}

Na tela de importar romaneio de entrada clique em [Escolher arquivo]{.menu}, selecione a planilha e clique em **Abrir** e em seguida clique em [Processar]{.z-button}