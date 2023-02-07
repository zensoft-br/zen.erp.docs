# Devolução de cliente

[]{.draft}

O processo de devolução se divide em 3 etapas: romaneio de entrada, nota fiscal de entrada e utilização do crédito gerado para abater uma conta a receber.

# Romaneio de entrada

[Materiais > Romaneios de entrada]{.menu}

* Crie o cabeçalho do [romaneio de entrada](/material/incomingList/incomingList)

## Inserir os itens do romaneio manualmente

Clique no botão ![](https://static.zenerp.app.br/icons/action-child.svg){.icon} para acessar os itens do romaneio de entrada
* Insira os [itens do romaneio de entrada](/material/incomingList/incomingListItem)

## Inserir os itens do romaneio a partir do romaneio de saída

Clique no botão ![](https://static.zenerp.app.br/icons/action-more.svg){.icon} e clique na opção [Importar itens de romaneio de saída]{.menu}

* Informe o romaneio de saída
* Marque a opção **ignorar serial** para gerar novo número serial. Deixe desmarcado para fazer a entrada com o mesmo número serial usado anteriormente
* Clique em [Processar]{.z-button .default}

No romaneio de entrada clique no botão ![](https://static.zenerp.app.br/icons/action-forward.svg){.icon} e selecione a opção [Finalizar preparação de romaneio de entrada]{.forward}

# Nota fiscal de entrada

[Fiscal > Notas fiscais de entrada]{.menu} 

>A nota de devolução será feita com o valor integral da operação de saída

* Clique no botão ![](https://static.zenerp.app.br/icons/action-more-toolbar.svg){.icon} e clique na opção [Criar nota fiscal de entrada a partir romaneio de entrada]{.menu}
    * Informe o romaneio de entrada que será utilizado para gerar a nota fiscal de entrada
    * informe o [perfil fiscal da operação](./../fiscal/fiscalProfileOperation) **DEVOLUÇÃO**
    * Informe uma lista de preços
    * Clique em [Processar]{.z-button .default}
* Localize a nota fiscal de entrada gerada e clique no botão ![](https://static.zenerp.app.br/icons/action-child.svg){.icon} para acessar os itens da nota de entrada
* Clique no botão ![](https://static.zenerp.app.br/icons/action-update.svg){.icon} e altere o valor unitário conforme o valor integral da operação de venda
    * Clique em [Gravar]{.z-button .default}
    * Repita o processo para todos os itens
* Localize a nota fiscal de entrada desejada e clique no botão ![](https://static.zenerp.app.br/icons/action-more-tr.svg){.icon} e clique na opção [Formas de pagamento]{.menu} para acessar as formas de pagamento da nota
    * Clique no botão ![](https://static.zenerp.app.br/icons/action-create.svg){.icon}
    * Informe o tipo da forma de pagamento como **PAGAMENTO**
    * Informe a conta contábil **Passivo, Adiantamento de clientes**
     * Informe o valor 
    * Clique em [Gravar]{.z-button .default}
* Localize a nota fiscal de entrada desejada e clique no botão ![](https://static.zenerp.app.br/icons/action-forward.svg){.icon} e clique na opção [Finalizar preparação da nota fiscal de entrada]{.forward} e depois clique em [Aprovar nota fiscal de entrada]{.forward}
    * Não é necessário marcar nenhuma opção solicitada
    * Clique em [Gravar]{.z-button .default}

# Utilização do crédito gerado para abater uma conta a receber

O valor da devolução fica registrado na contabilidade e aparacerá como [crédito disponível]{.field} na tela de liquidação de contas a receber.

Acesse [Financeiro > Contas a receber]{.menu}

* Localize a conta a receber desejada e clique no botão ![](https://static.zenerp.app.br/icons/action-forward.svg){.icon} e clique na opção [Liquidar contas a receber]{.forward}

>Para liquidar mais de uma conta a receber, marque todas as contas desejadas e clique no botão ![](https://static.zenerp.app.br/icons/action-forward.svg){.icon} na parte superior do grid.

Na tela de liquidação de contas a receber preencha os campos:
* [Valor a liquidar]{.field} - informe o valor a liquidar da conta a receber
* Clique em [Incluir liquidação]{.z-button}
* [Conta contabil]{.field .required} - informe a conta contabil **Passivo, Adiantamento de clientes**
* [Valor]{.field .required} - informe o valor da liquidação
* Clique em [Processar]{.z-button .default}