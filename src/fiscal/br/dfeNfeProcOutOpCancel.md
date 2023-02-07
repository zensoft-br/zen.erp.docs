# Cancelamento de nota fiscal

## Cancelar a nota fiscal no SEFAZ

Acesso em [Fiscal > Notas fiscais de saída]{.menu} ou [Fiscal > Notas fiscais de entrada]{.menu}

Localize a Nota fiscal de saída desejada, clique em ![](https://static.zenerp.app.br/icons/action-more-tr.svg){.icon} > [NFe emitida]{.menu}

No registro com status [PROCESSED]{.status} clique em ![](https://static.zenerp.app.br/icons/action-forward.svg){.icon} > [Canceler NFe emitida]{.menu}

Informe uma justificativa e clique em [Processar]{.z-button}

> Após processar, a nota fical vai ficar com a tag [#nfe-canceled]{.tag} 
>
>Será necessário cancelar a nota no Zen.

## Cancelar a nota fiscal no Zen ERP

Localize a Nota fiscal de saída desejada, clique em ![](https://static.zenerp.app.br/icons/action-forward.svg){.icon} > [Cancelar nota fiscal de saída]{.menu} e preencha os campos:

* [Confirme o id da nota fiscal de saída]{.field .required} - informe o ID da nota fiscal
* [Endereço de retorno]{.field} - deixe em branco
* [Motivo do cancelamento]{.field} - informe o motivo do cancelamento

Clique em [Processar]{.z-button .default}

>A nota fiscal ficará com status [CANCELADA]{.status}

Esse processo também cancela o pedido de venda {.note .sticky .warning}

## Cancelar a nota fiscal no SEFAZ para transmitir novamente

Caso necessite apenas cancelar a nota no SEFAZ devido algum erro, mas a nota será transmitida novamente após correção, siga os seguintes passos:

* Faça o cancelamento da nota fiscal no SEFAZ
* Localize a Nota fiscal de saída desejada, clique em ![](https://static.zenerp.app.br/icons/action-forward.svg){.icon} > [Reverter aprovação da nota fiscal de saída]{.menu}
* Localize a Nota fiscal de saída desejada, clique em ![](https://static.zenerp.app.br/icons/action-forward.svg){.icon} > [Reverter preparação da nota fiscal de saída]{.menu}
* Faça as alterações necessárias na nota fiscal
* Localize a Nota fiscal de saída desejada, clique em ![](https://static.zenerp.app.br/icons/action-forward.svg){.icon} > [Finalizar preparação da nota fiscal de saída]{.menu}
* Localize a Nota fiscal de saída desejada, clique em ![](https://static.zenerp.app.br/icons/action-forward.svg){.icon} > [Aprovar nota fiscal de saída]{.menu}
* Localize a Nota fiscal de saída desejada, clique em ![](https://static.zenerp.app.br/icons/action-forward.svg){.icon} > [Criar NFe emitida]{.menu}

>Se o erro for no pedido de venda (produto, quantidade ou valor), será necessário cancelar todo o processo e incluir um novo pedido de venda.