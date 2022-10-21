# Antecipação de recursos de clientes

[]{.draft}

Antecipações poderão ser tratadas diretamente no módulo contábil, com lançamentos nas respectivas contas contábeis.
Posteriormente, nas liquidações de títulos estas contas contábeis poderão ser utilizadas como origem de recursos para a liquidação.

Opcionalmente, as antecipações poderão ser registradas como contas a pagar e estes títulos podem ser utilizados como **abatimento** em processos de liquidações futuros.

A antecipação feita pelo cliente pode ser no valor total exato que será faturado, um valor parcial referente ao faturamento ou mesmo um valor maior que o valor que será faturado nesse momento.


## Antecipação no valor total exato que será faturado

Nesse caso, o valor do faturamento é exatamente o mesmo que o valor que foi antecipado.

### Antecipação de cliente na contabilidade

Acesse [Financeiro, Incluir receita]{.menu}

Preencha os campos:
* [Empresa]{.field .required}
* [Data]{.field}
Se o campo data não for preenchido o sistema adotará a data atual.
* [Valor]{.field .required}
* [Descrição]{.field .required}
* [Discriminação da receita]{.field .required}
Informe a conta contábil de adiantamento. Essa conta pode ser uma "diversa" para todos os clientes, ou pode ser cadastrado uma conta contábil para cada cliente.
* [Destino dos recursos]{.field .required}
Informe a conta contábil do banco onde o recurso foi depositado.

Clique em [Processar]{.button}

### Liquidar a conta a receber utilizando a antecipação

A conta a receber será gerada automaticamente pelo processo de faturamento. Após o faturamento, será necessário fazer a liquidação da conta a receber baixando a conta de antecipação do cliente.

Acesse [Financeiro, Contas a receber]{.menu}

Clique em [Pesquisar]{.button}

> A conta a receber pode ser acessado pelo grid de nota fiscal. Dessa forma será exibido apenas a conta a receber gerado pela nota fiscal selecionada.

Selecione a conta a receber e clique em [Avançar]{.button} e em seguida clique em [Liquidar contas a receber]{.button}

Na tela de liquidação preencha os campos:
* [Data]{.field}
Se o campo data não for preenchido o sistema adotará a data atual.

Se for necessário ajustar o valor que será liquidado, utilize os campos [Desconto]{.field} ou [Juros]{.field}

 Clique em [Incluir liquidação]{.button} e preencha os campos:
* [Conta cotábil]{.field .required}
Informe a conta contábil de adiantamento. É a mesma conta que foi utilizada para o lançamento da receita. 
* [Valor]{.field .required}
Informe o valor total a liquidar.
* Clique em [Processar]{.button}


## Antecipação no valor parcial referente ao faturamento

Nesse caso, o valor antecipado é apenas uma parte do valor que será faturado, e o valor restante será pago futuramente.

### Antecipação de cliente na contabilidade

Acesse [Financeiro, Incluir receita]{.menu}

Preencha os campos:
* [Empresa]{.field .required}
* [Data]{.field}
Se o campo data não for preenchido o sistema adotará a data atual.
* [Valor]{.field .required}
* [Descrição]{.field .required}
* [Discriminação da receita]{.field .required}
Informe a conta contábil de adiantamento. Essa conta pode ser uma "diversa" para todos os clientes, ou pode ser cadastrado uma conta contábil para cada cliente.
* [Destino dos recursos]{.field .required}
Informe a conta contábil do banco onde o recurso foi depositado.

Clique em [Processar]{.button}

### Liquidar a conta a receber utilizando a antecipação

A conta a receber será gerada automaticamente pelo processo de faturamento. Após o faturamento, será necessário fazer a liquidação da conta a receber baixando a conta de antecipação do cliente e criando uma nova conta a receber para ser paga no futuro.

Acesse [Financeiro, Contas a receber]{.menu}

Clique em [Pesquisar]{.button}

> A conta a receber pode ser acessada pelo grid de nota fiscal. Dessa forma será exibido apenas a conta a receber gerada pela nota fiscal selecionada.

Selecione a conta a receber e clique em [Avançar]{.button} e em seguida clique em [Liquidar contas a receber]{.button}

Na tela de liquidação preencha os campos:
* [Data]{.field}
Se o campo data não for preenchido o sistema adotará a data atual.

Se for necessário ajustar o valor que será liquidado, utilize os campos [Desconto]{.field} ou [Juros]{.field}.

 Clique em [Incluir liquidação]{.button} e preencha os campos:
* [Conta cotábil]{.field .required}
Informe a conta contábil de adiantamento. É a mesma conta que foi utilizada para o lançamento da receita. 
* [Valor]{.field .required}
Informe o valor que foi antecipado pelo cliente.
* Clique em [Incluir renegociação]{.button}
O sistema vai abrir a tela de inclusão de conta a receber. Preencha os campos:
* [Vencimento]{.field}
* [Valor]{.field .required}
Informe o valor em aberto para acerto futuro.
* [Conta contábil 1]{.field}
Informe a conta contábil da "partida".
* [Conta contábil 2]{.field}
Informe a conta contábil da "contra partida".
* Clique em [Gravar]{.button}
Nesse momento o sistema já incluiu uma conta a receber para o cliente.
* Na tela de liquidação clique em [Processar]{.button}


## Antecipação no valor maior que o valor que será faturado nesse momento

Nesse caso, o cliente envia um valor que será abatido em vários faturamentos futuros.

Como o valor que foi antecipado pelo cliente é maior que o valor do faturamento, o cliente ficará com o saldo para ser usado em faturamentos futuros. O controle desse saldo será feito na contabilidade.

### Antecipação de cliente na contabilidade

Acesse [Financeiro, Incluir receita]{.menu}

Preencha os campos:
* [Empresa]{.field .required}
* [Data]{.field}
Se o campo data não for preenchido o sistema adotará a data atual.
* [Valor]{.field .required}
* [Descrição]{.field .required}
* [Discriminação da receita]{.field .required}
Informe a conta contábil de adiantamento. Essa conta pode ser uma "diversa" para todos os clientes, ou pode ser cadastrado uma conta contábil para cada cliente.
* [Destino dos recursos]{.field .required}
Informe a conta contábil do banco onde o recurso foi depositado.

Clique em [Processar]{.button}

### Liquidar a conta a receber utilizando a antecipação

A conta a receber será gerada automaticamente pelo processo de faturamento. Após o faturamento, será necessário fazer a liquidação da conta a receber baixando a conta de antecipação do cliente.

Acesse [Financeiro, Contas a receber]{.menu}

Clique em [Pesquisar]{.button}

> A conta a receber pode ser acessada pelo grid de nota fiscal. Dessa forma será exibido apenas a conta a receber gerado pela nota fiscal selecionada.

Selecione a conta a receber e clique em [Avançar]{.button} e em seguida clique em [Liquidar contas a receber]{.button}

Na tela de liquidação preencha os campos:
* [Data]{.field}
Se o campo data não for preenchido o sistema adotará a data atual.

Se for necessário ajustar o valor que será liquidado, utilize os campos [Desconto]{.field} ou [Juros]{.field}.

 Clique em [Incluir liquidação]{.button} e preencha os campos:
* [Conta cotábil]{.field .required}
Informe a conta contábil de adiantamento. É a mesma conta que foi utilizada para o lançamento da receita. 
* [Valor]{.field .required}
Informe o valor total a liquidar.
* Clique em [Processar]{.button}