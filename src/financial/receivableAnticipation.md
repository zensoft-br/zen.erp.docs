# Antecipação de recursos de clientes

[]{.draft}

Antecipações poderão ser tratadas diretamente no módulo contábil, com lançamentos nas respectivas contas contábeis. Posteriormente, nas liquidações de títulos estas contas contábeis poderão ser utilizadas como origem de recursos para a liquidação.

Opcionalmente, as antecipações poderão ser registradas como contas a pagar e estes títulos podem ser utilizados como **abatimento** em processos de liquidações futuros.

A antecipação feita pelo cliente pode ser no valor total exato que será faturado, um valor parcial referente ao faturamento ou mesmo um valor maior que o valor que será faturado nesse momento.

Esta operação poderá ser feita de três formas:

1. Diretamente na contabilidade
1. [Lançamento de receita](revenueOpCreate)
1. Lançamento de conta a pagar

## Antecipação no valor total exato que será faturado

Nesse caso, o valor do faturamento é exatamente o mesmo que o valor que foi antecipado.

## Antecipação no valor parcial referente ao faturamento

Nesse caso, o valor antecipado é apenas uma parte do valor que será faturado, e o valor restante será pago futuramente.

### Liquidar a conta a receber utilizando a antecipação

A conta a receber será gerada automaticamente pelo processo de faturamento. Após o faturamento, será necessário fazer a liquidação da conta a receber baixando a conta de antecipação do cliente e criando uma nova conta a receber para ser paga no futuro.

## Antecipação no valor maior que o valor que será faturado nesse momento

Nesse caso, o cliente envia um valor que será abatido em vários faturamentos futuros.

Como o valor que foi antecipado pelo cliente é maior que o valor do faturamento, o cliente ficará com o saldo para ser usado em faturamentos futuros. O controle desse saldo será feito na contabilidade.







Informe a conta contábil de adiantamento. É a mesma conta que foi utilizada para o lançamento da receita. 
* [Valor]{.field .required}
Informe o valor total a liquidar.
* Clique em [Processar]{.button}