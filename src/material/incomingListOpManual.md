# Alimentar o estoque manualmente

[]{.draft}

O estoque pode ser alimentado, conforme processo abaixo, ou através da [importação de planilha](incomingListOpImport).

## Criar o romaneio de entrada

[Materiais > Romaneios de entrada]{.menu} 

* Crie o cabeçalho do [romaneio de entrada](incomingList/incomingList)
* Clique no botão ![](https://static.zenerp.app.br/icons/action-child.svg){.icon} para acessar os itens do romaneio de entrada
* Insira os [itens do romaneio de entrada](incomingList/incomingListItem)
* Selecione a opção [Finalizar preparação de romaneio de entrada]{.forward}

## Gerar a nota fiscal de entrada

[Fiscal > Notas fiscais de entrada]{.menu} 

* Clique no botão ![](https://static.zenerp.app.br/icons/action-more-toolbar.svg){.icon} e clique na opção [Criar nota fiscal de entrada a partir romaneio de entrada]{.menu}
    * Informe o romaneio de entrada que será utilizado para gerar a nota fiscal de entrada
    * informe o [perfil fiscal da operação](./../fiscal/fiscalProfileOperation)
    * Informe a lista de preços que será utilizada para alimentar o custo da entrada
    * Clique em [Processar]{.button}
* Localize a nota fiscal de entrada gerada
* Ajuste os dados do cabeçalho da [nota fiscal de entrada](./../fiscal/incomingInvoice/incomingInvoice)
* Ajuste os dados dos itens da [nota fiscal de entrada](./../fiscal/incomingInvoice/incomingInvoiceItem)
* Clique no botão ![](https://static.zenerp.app.br/icons/action-more-toolbar.svg){.icon} e clique na opção [Formas de pagamento]{.menu}
    * Informe o tipo da forma de pagamento
    * Informe a conta contábil
    * Informe a data de vencimento
    * Informe o valor do pagamento
    * Clique em [Gravar]{.button}
    * Repita a operação se houver parcelamento do pagamento
* Selecione a opção [Finalizar preparação da nota fiscal de entrada]{.forward}
* Selecione a opção [Aprovar nota fiscal de entrada]{.forward}
    * Não é necessário marcar nenhuma opção solicitada
    * Clique em [Gravar]{.button}    