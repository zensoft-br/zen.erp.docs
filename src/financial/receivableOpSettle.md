# Liquidação de contas a receber

[]{.draft}

Acesse [Financeiro > Contas a receber]{.menu}

Selecione o(s) título(s) a liquidar e clique em ![](https://static.zenerp.app.br/icons/action-forward.svg){.icon} e em seguida clique em [Liquidar contas a receber]{.forward}

Preencha os campos solicitados, com **atenção especial aos seguintes campos:**
* [Valor a liquidar]{.field} O sistema preenche automaticamente com o valor em aberto. Para liquidação parcial, informe o valor que deseja liquidar. A diferença ficará em aberto como saldo do documento
* Os campos [desconto]{.field}, [juros]{.field} e [multa]{.field} devem ser preenchidos somente se necessário e farão parte do valor total do movimento

Clique em [Incluir liquidação]{.z-button} para liquidar com um movimento.

Clique em [Incluir renegociação]{.z-button} para liquidar com cheques ou para renegociar, ou seja, substituir o(s) documento(s) selecionado(s) por novo(s) documento(s).

Clique em [Incluir abatimento]{.z-button} para liquidar com um documento de conta a pagar.

## Incluir liquidação

* [Conta cotábil]{.field .required} Informe a conta contábil que indica o destino do recurso, por exemplo, a conta contábil do banco em que o recurso foi depositado

> Uma liquidação pode estar associada a mais de uma conta contábil. O único requisito é que a soma dos lançamentos contábeis confiram com o valor da receita.
>
>Para dividir o lançamento em mais de uma conta contábil clique em [Incluir liquidação]{.button} novamente e preencha os campos.

* Clique em [Processar]{.z-button .default} para finalizar

## Incluir renegociação 

O sistema vai abrir a tela de [inclusão](receivable-edit) de conta a receber. Preencha os campos solicitados.

>No caso de renegociação não é necessário informar as contas contábeis de crédito e débito. O sistema já vai classificar automaticamente.

Nesse momento o sistema já incluiu uma conta a receber para o cliente. Para incluir mais documentos clique novamente em [Incluir renegociação]{.z-button} e repita o processo até lançar todos os documentos necessários.

* Clique em [Processar]{.z-button .default} para finalizar

## Incluir abatimento
 
 No campo [Conta a pagar]{.field} selecione o documento desejado.

 > Para incluir mais documentos clique novamente em [Incluir abatimento]{.z-button} e repita o processo até lançar todos os documentos necessários.

* Clique em [Processar]{.z-button .default} para finalizar

 ## Conceder desconto
 
 Para conceder apenas um desconto, preencha o [valor a liquidar]{.field} e o [desconto]{.field} com o valor desejado. Nesse caso o [valor total]{.field} será zero.
 
 Clique em [Processar]{.z-button .default}

> Exemplo
>
>Para concerder um desconto de $50,00 preencha o [Valor a liquidar]{.field} com 50,00 e o [Desconto]{.field} também com 50,00. O [Valor total]{.field} será 0,00 mas será liquidado $50,00 do título.

## Cliente pagou valor maior que o devido

Se o cliente fizer um pagamento com valor maior que o devido, preencha o [valor a liquidar]{.field} com o valor em aberto do título. O [Valor total]{.field} será apenas o valor do título.

Clique em [Incluir liquidação]{.z-button}, informe a [conta contábil]{.field} que indica o destino do recurso, por exemplo, a conta contábil do banco em que o recurso foi depositado e informe o [valor]{.field} total que o cliente pagou.

>No caso de pagamento em cheque clique em [Incluir renegociação]{.z-button} e faça o lançamento de todos os cheques.

Clique em [Incluir liquidação]{.z-button}, informe a [conta contábil]{.field} **Passivo, Adiantamento de clientes** e informe o [valor]{.field} pago a mais com **sinal de negativo.**

> Exemplo
>
>O título é de $900,00 e o cliente pagou $1.000,00 em dinheiro. O [valor a liquidar]{.field} será 900,00 e o [valor total]{.field} será R$ 900,00.
>
>Informe a [conta contábil]{.field} Ativo, Caixa e o [valor]{.field} 1.000,00. 
>
>Informe a [conta contábil]{.field} Passivo, Adiantamento de clientes e o [valor]{.field} -100,00





