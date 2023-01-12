# Antecipação de contas a receber

[]{.draft}

A antecipação de contas a receber ocorre quando a empresa recebe um adiantamento de um cliente por conta do fornecimento futuro de bens e serviços, antes da entrega do produto ou serviço solicitado e da geração da nota fiscal.

Esta operação pode ser tratada de 3 formas:

## No módulo financeiro como uma receita

Acesse [Financeiro > Incluir receita]{.menu} e inclua uma [receita](revenueOpCreate) com atenção a classificação da conta contábil:

* Discriminação da receita: [conta contabil]{.field} - Passivo, Adiantamentos de cliente
* Destino dos recursos: [conta contabil]{.field} - informe a conta contábil do banco onde o recurso foi creditado (caixa, banco, etc)

>No caso de ser uma antecipção feita antes da implantação do sistema a classificação será da seguinte forma:
>
>* Discriminação da receita: [conta contabil]{.field} - Passivo, Adiantamentos de cliente
>* Destino dos recursos: [conta contabil]{.field} - Passivo, Ajustes de exercícios anteriores


## No módulo contábil incluindo um lançamento contábil

Acesse [Contabilidade > Lançamentos contábeis]{.menu} e inclua um [lançamento contábil](/accounting/journalEntry) com atenção a classificação da conta contábil:

* Débito: [conta contabil]{.field} - informe a conta contábil do banco onde o recurso foi creditado (caixa, banco, etc)
* Crédito: [conta contabil]{.field} - Passivo, Adiantamentos de cliente

>No caso de ser uma antecipção feita antes da implantação do sistema a classificação será da seguinte forma:
>
>* Débito: [conta contabil]{.field} - Passivo, Ajustes de exercícios anteriores
>* Crédito: [conta contabil]{.field} - Passivo, Adiantamentos de cliente

## Incluindo contas a pagar

Acesse [Financeiro > Contas a pagar]{.menu} e [inclua](payable) uma conta a pagar para o cliente.

Posteriormente, esta conta a pagar poderá ser utilizada como abatimento das contas a receber deste cliente.

# Liquidação de contas a receber baixando das antecipações

Acesse [Financeiro > Contas a receber]{.menu} e faça a [liquidação](receivableOpSettle) da conta a receber com atenção ao seguinte:

Se a antecipação foi registrada na conta contábil de adiantamentos de clientes, clique em [Incluir liquidação]{.z-button} e informe a conta contábil **Passivo, Adiantamentos de cliente** na liquidação.

Se a antecipação foi registrada como uma conta a pagar, clique em [Incluir abatimento]{.z-button} e informe a conta a pagar para abatimento.