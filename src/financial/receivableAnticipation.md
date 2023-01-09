# Antecipação de recebíveis

[]{.draft}

A antecipação de recebíveis ocorre quando a empresa recebe um adiantamento de um cliente por conta do fornecimento futuro de bens e serviços, antes da entrega do produto ou serviço solicitado e da geração da nota fiscal.

Esta operação pode ser tratada de 3 formas:

## No módulo financeiro como uma receita

[Faça a inclusão de uma receita](revenueOpCreate) onde a **discriminação da receita** é a conta contábil do cliente e o **destino dos recursos** é a conta contábil de onde o recurso foi depositado (ex: banco).

## No módulo contabilidade incluindo um lançamento contábil

[Faça a inclusão de um lançamento contábil](/accounting/journalEntryOpCreate) creditando a conta contábil do cliente e debitando a conta contábil onde o recurso foi depositado (ex: banco).

## Incluindo contas a pagar

[Faça a inclusão de uma conta a pagar](payable-edit) para o cliente.

> Posteriormente, esta conta a pagar poderá ser utilizada como abatimento das contas a receber deste cliente.

# Liquidação de contas a receber baixando da antecipação de recebíveis

Acesse [Financeiro > Liquidação de contas a receber](receivableOpSettle){.menu}

Se a antecipação foi registrada na conta contábil do cliente, clique em [Incluir liquidação]{.button} e informe a conta contábil na liquidação.

Se a antecipação foi registrada como uma conta a pagar, clique em [Incluir abatimento]{.button} e informe a conta a pagar para abatimento.
