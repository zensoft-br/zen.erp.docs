# Devolução de cliente

[]{.draft}

## Devolução de venda feita no balcão

Siga as [instruções](/fiscal/outgoingInvoiceReturn) desse manual.

## Devolução de venda feita pelo e-commerce

### Romaneio de entrada

[Materiais > Romaneios de entrada]{.menu}

* Crie o cabeçalho do [romaneio de entrada](/material/incomingList/incomingList)

### Inserir os itens do romaneio de entrada

Clique no botão ![](https://static.zenerp.app.br/icons/action-child.svg){.icon} para acessar os itens do romaneio de entrada
* Insira os [itens do romaneio de entrada](/material/incomingList/incomingListItem)

>No romaneio de entrada clique no botão ![](https://static.zenerp.app.br/icons/action-forward.svg){.icon} e selecione a opção [Finalizar preparação de romaneio de entrada]{.forward}

### Nota fiscal de entrada

[Fiscal > Notas fiscais de entrada]{.menu} 

>A nota de devolução será feita com o valor integral da operação de saída

* Clique no botão ![](https://static.zenerp.app.br/icons/action-more-toolbar.svg){.icon} e clique na opção [Criar nota fiscal de entrada a partir romaneio de entrada]{.menu}
    * Informe o romaneio de entrada que será utilizado para gerar a nota fiscal de entrada
    * informe o [perfil fiscal da operação](./../fiscal/fiscalProfileOperation) **DEVOLUÇÃO**
    * Informe uma lista de preços
    * Clique em [Processar]{.z-button .default}
* Localize a nota fiscal de entrada gerada e clique no botão ![](https://static.zenerp.app.br/icons/action-update.svg){.icon}
    * No campo [Modelo/série]{.field} informe o modelo/série correspondente
    * No campo [fiscal_br_refNFe]{.field} informe a chave de acesso da nota de venda
    * No campo [Observações]{.field} informe o número e data da nota fiscal devolvida e o nome do cliente que devolveu
* Localize a nota fiscal de entrada gerada e clique no botão ![](https://static.zenerp.app.br/icons/action-child.svg){.icon} para acessar os itens da nota de entrada
* Clique no botão ![](https://static.zenerp.app.br/icons/action-update.svg){.icon} e altere o valor unitário conforme o valor integral da operação de venda
    * Clique em [Gravar]{.z-button .default}
    * Repita o processo para todos os itens

### Formas de pagamento

* Localize a nota fiscal de entrada gerada e clique no botão ![](https://static.zenerp.app.br/icons/action-more.svg){.icon} > [Formas de pagamento]{.menu}
* Clique em ![](https://static.zenerp.app.br/icons/action-create.svg){.icon} e preencha os campos:
    * [Conta contabil]{.field .required} - 1.1.2.1.001, Ativo, Circulante, Realizações, Clientes, Clientes Diversos
    * [Valor]{.field .required} - informe o valor da nota

### Aprovar a nota fiscal

Localize a nota fiscal de entrada desejada e clique no botão ![](https://static.zenerp.app.br/icons/action-forward.svg){.icon} e clique na opção [Finalizar preparação da nota fiscal de entrada]{.forward} e depois clique em [Aprovar nota fiscal de entrada]{.forward}
* Não é necessário marcar nenhuma opção solicitada
* Clique em [Processar]{.z-button .default}

### Transmitir a nota fiscal

Localize a nota fiscal de saída desejada, clique em ![](https://static.zenerp.app.br/icons/action-forward.svg){.icon} > [Criar NFe emitida]{.forward}

>A nota fiscal e o pedido de venda ficarão com a tag [#nfe]{.tag}

### Liquidar o contas a pagar

Localize a conta a pagar e clique em ![](https://static.zenerp.app.br/icons/action-forward.svg){.icon} e em seguida clique em [Liquidar contas a pagar]{.forward}

Preencha os campos solicitados, com **atenção especial aos seguintes campos:**
* [Data]{.field} - Informe a data da devolução

Clique em [Incluir liquidação]{.z-button}
* [Conta cotábil]{.field .required} - 3.1.2.1.001, Contas de Resultado - Receitas, Receitas operacionais, (-) Deduções da Receita Bruta, (-) Cancelamentos e Devoluções, (-) Devoluções de vendas de produtos
* [Valor]{.field .required} - informe o valor
* Clique em [Processar]{.z-button .default} para finalizar