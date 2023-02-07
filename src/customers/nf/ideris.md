# Integração com Ideris

[]{.draft}

O Ideris é um hub de integração com as plataformas de e-commerce que possibilita integrar os marketplaces com o Zen ERP. Dessa forma, os pedidos gerados em diversos marketplaces são importados para o Zen ERP para serem faturados. Assim é possível concentrar os controles de venda e faturamento em um único sistema.

A integração dos pedidos de venda do Ideris com o Zen ERP roda a cada 5 minutos.

A integração das notas autorizadas do Zen ERP com o Ideris ocorre imediatamente, logo após a autorização pela Sefaz.

## Etapas do processo

### Pedido de venda 

* É feito no marketplace pelo cliente
* Aparece no sistema Ideris com o status [EM ABERTO]{.status}
* É importado para o Zen ERP automaticamente com o status [PREPARADO]{.status}
* No Zen ERP, o operador vai filtrar os pedidos informando os critérios:
    * Empresa - informar a empresa desejada
    * Status - [PREPARADO]{.status}
    * Canal de vendas - informar o marketplace desejado
* Aprova o pedido de venda
* Processa automaticamente o pedido de venda
* Imprime o pedido
* Imprime a ordem de separação
* Emite NFe
* Integra a nota fiscal com o Ideris
    * A nota fiscal é integrada com o Ideris quando é autorizada na Sefaz
* Imprime a nota simplificada (Ideris)
* Imprime a etiqueta de separação (Ideris)

### Separação

* Recebe o pedido, nota simplificada e etiqueta de separação
* Separa os produtos
* Embala os produtos em caixa e cola as etiquetas
* Envia para a expedição

### Expedição

* Separa os itens que serão enviados para o ponto de coleta
* Separa os itens que serão coletados na empresa
* Prepara o [envio das notas fiscais](/shipping/shipment)
* [Finaliza o carregamento](/shipping/shipment)

## Veja também

[Log integração Ideris](logintegracaoIderis)

