# Antecipação de recursos de clientes

Antecipações poderão ser tratadas diretamente no módulo contábil, com lançamentos nas respectivas contas contábeis.
Posteriormente, nas liquidações de títulos estas contas contábeis poderão ser utilizadas como origem de recursos para a liquidação.

Opcionalmente, as antecipações poderão ser registradas como contas a pagar e estes títulos podem ser utilizados como **abatimento** em processos de liquidações futuros.

A antecipação feita pelo cliente pode ser no valor total exato que será faturado, um valor parcial referente ao faturamento ou mesmo um valor maior que o valor que será faturado nesse momento.

## Antecipação no valor total exato que será faturado

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

### Liquidar o conta a receber utilizando a antecipação

O conta a receber será gerado automaticamente pelo processo de faturamento. Após o faturamento, será necessário fazer a liquidação do conta a receber baixando a conta de antecipação do cliente.

Acesse [Financeiro, Contas a receber]{.menu}

Clique no botão [Pesquisar]{.button}

> O conta a receber pode ser acessado pelo grid de nota fiscal. Dessa forma será exibido apenas o conta a receber gerado pela nota fiscal selecionada.

Selecione o conta a receber e clique no botão [Avançar]{.button} e em seguida clique em [Liquidar contas a receber]{.button}

Na tela de liquidação preencha os campos:
* [Data]{.field}
Se o campo data não for preenchido o sistema adotará a data atual.

Se for necessário ajustar o valor que será liquidado, utilize os campos [Desconto]{.field} ou [Juros]{.field}

 Clique no botão [Incluir liquidação]{.button} e preencha os campos:
* [Conta cotábil]{.field .required}
Informe a conta contábil de adiantamento. É a mesma conta que foi utilizada para o lançamento da receita. 
* [Valor]{.field .required}
Informe o valor total a liquidar
* Clique em [Processar]{.button}


## Antecipção no valor parcial referente ao faturamento



## Antecipção no valor maior que o valor que será faturado nesse momento

