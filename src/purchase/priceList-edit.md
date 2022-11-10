# Editando uma lista de preços de compra

[]{.draft}

Acesse [Compras > Listas de preços de compra]{.menu}

Clique em ![](https://static.zenerp.app.br/icons/action-create.svg){.icon} para incluir uma lista nova ou ![](https://static.zenerp.app.br/icons/action-update.svg){.icon} para alterar uma lista já cadastrada.

Preencha os campos solicitados com **atenção especial aos seguintes campos:**
* [/commercial/priceList.notBefore]{.field} - se informado define a data de validade inicial da lista de preço
* [Valido até]{.field} - se informado define a data de validade final da lista de preço
* [Moeda]{.field .required} - define a moeda utilizada na lista de preço
* [Casas decimais]{.field} - define a quantidade de casas decimais que será utillizada para o preço unitário. Não preenchendo esse campo o sistema usará a quantidade de casas decimais padrão (até 8 casas)
* [Tags especiais]{.field .tag} - define os parâmetros de como a lista será utilizada e/ou atualizada

Clique em [Gravar]{.z-button} e em seguida clique em ![](https://static.zenerp.app.br/icons/action-child.svg){.icon} para [incluir](priceListItem) os itens.