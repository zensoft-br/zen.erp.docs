# Liquidação de contas a receber

[]{.draft}

Acesse [Financeiro > Contas a receber]{.menu}

Selecione o(s) título(s) a liquidar e clique em ![](https://static.zenerp.app.br/icons/action-forward.svg){.icon} e em seguida clique em [Liquidar contas a receber]{.tag}

Preencha os campos solicitados, com **atenção especial aos seguintes campos:**
* [Valor a liquidar]{.field} O sistema preenche automaticamente com o valor em aberto. Para liquidação parcial, informe o valor que deseja liquidar. A diferença ficará em aberto como saldo do documento
* Os campos [desconto]{.field}, [juros]{.field} e [multa]{.field} devem ser preenchidos somente se necessário e farão parte do valor total do movimento

>## Observação 1
>Para conceder apenas um desconto, preencha o campo valor a liquidar e valor do desconto com o valor desejado. Nesse caso o valor do movimento será zero.
>
> Exemplo: para concerder um desconto de $50,00 preencha o campo [Valor a liquidar]{.field} com 50,00 e o campo [Desconto]{.field} também com 50,00. O campo [Valor total]{.field} será 0,00 mas será liquidado $50,00 do título.

>## Observação 2
> Se o cliente fizer um pagamento com valor maior que a dívida, deverá ser feito o processo de [antecipação de recebíveis](receivableAnticipation).
>
> Exemplo:
> O título é de $900,00 e o cliente paga com um cheque de $1.000,00. Será lançado $1.000,00 como atecipação informando a conta contábil do cliente e depois liquidar a conta a receber baixando a conta do cliente.


Clique em [Incluir liquidação]{.button} para liquidar com um movimento.

Clique em [Incluir renegociação]{.button} para liquidar com cheques ou para renegociar, ou seja, substituir o(s) documento(s) selecionado(s) por novo(s) documento(s).

Clique em [Incluir abatimento]{.button} para liquidar com um documento de conta a pagar.

## Incluir liquidação

* [Conta cotábil]{.field .required} Informe a conta contábil que indica o destino do recurso, por exemplo, a conta contábil do banco em que o recurso foi depositado

>## Observação
>
> Uma liquidação pode estar associada a mais de uma conta contábil. O único requisito é que a soma dos lançamentos contábeis confiram com o valor da receita.
>
>Para dividir o lançamento em mais de uma conta contábil clique em [Incluir liquidação]{.button} novamente e preencha os campos.

* Clique em [Processar]{.button} para finalizar

## Incluir renegociação 

O sistema vai abrir a tela de inclusão de conta a receber. Preencha os campos solicitados, com **atenção especial aos seguintes campos:**
* [Tipo]{.field} Selecione **Título** se for uma renegociação ou **Cheque** se for uma liquidação com cheque
* [Conta contábil]{.field}
Informe a conta contábil da "partida".
* [Conta contábil]{.field}
Informe a conta contábil da "contra partida".
* Clique em [Gravar]{.button}

>Nesse momento o sistema já incluiu uma conta a receber para o cliente. Para incluir mais documentos clique novamente em [Incluir renegociação]{.button} e repita o processo até lançar todos os documentos necessários.

* Na tela de liquidação clique em [Processar]{.button} para finalizar

## Incluir abatimento
 
 No campo [Conta a pagar]{.field} selecione o documento desejado.

 > Para incluir mais documentos clique novamente em [Incluir incluir abatimento]{.button} e repita o processo até lançar todos os documentos necessários.

 * Clique em [Processar]{.button} para finalizar
 
 







