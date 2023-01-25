# Processo de faturamento NF Embalagens

## Pedido de venda

* [Pedido de venda balcão](/sale/sale)
* [Pedido de venda e-commerce](ideris)

## Faturar

Localize o pedido de venda desejado, clique em ![](https://static.zenerp.app.br/icons/action-forward.svg){.icon} > [Processar pedido de venda automaticamente]{.menu}

>Esse processo já vai fazer a baixa do estoque e gerar a nota fiscal de saída. A nota já vai ficar com status [APROVADA]{.status}

### Falta de estoque

Se não tiver estoque suficiente do material para atender o pedido, vai aparecer uma mensagem de erro e a nota fiscal não será gerada. O pedido vai ficar no status [SEPARACAO]{.status}

Localize o pedido de venda desejado, clique em ![](https://static.zenerp.app.br/icons/action-forward.svg){.icon} > [Reverter liberação para separação]{.menu}

>O pedido volta para o status [APROVADO]{.status}

## Transmitir

Localize a nota fiscal de saída desejada, clique em ![](https://static.zenerp.app.br/icons/action-forward.svg){.icon} > [Criar NFe emitida]{.menu}

Aparecerá uma mensagem na tela: 

Sucesso - Nota fiscal xxxxxx autorizada{.note .sticky .success}

>A nota fiscal e o pedido de venda ficarão com a tag [#nfe]{.tag}

### Erro ao transmitir

No caso de algum erro na transmissão da nota fiscal, não aparecerá a mensagem de nota fiscal autorizada e a nota fiscal ficará com a tag [#nfe-error]{.tag}

Localize a nota fiscal de saída desejada, clique em ![](https://static.zenerp.app.br/icons/action-more-tr.svg){.icon} > [NFe emitida]{.menu}

>A NFe emitida estará com status [ERROR]{.status}

Clique em ![](https://static.zenerp.app.br/icons/action-more-tr.svg){.icon} > [Logs]{.menu} localize o registro nível [SEVERE]{.status} e clique em ![](https://static.zenerp.app.br/icons/action-read.svg){.icon}

No campo [Conteúdo]{.field} irá mostrar a mensagem de erro.

Após corrigir o erro basta transmitir a nota fiscal novamente.

## Separação

A separação do material no estoque não envolve o sistema. 

* O estoque recebe o pedido de venda, nota simplificada e etiquetas
* Separa o material
* Embala os produtos nas caixas e cola as etiquetas
* Envia para expedição

## Expedição

* Separa os itens que serão enviados para o ponto de coleta
* Separa os itens que serão coletados na empresa
* Prepara o [envio das notas fiscais](/shipping/shipment)
* [Finaliza o carregamento](/shipping/shipment)