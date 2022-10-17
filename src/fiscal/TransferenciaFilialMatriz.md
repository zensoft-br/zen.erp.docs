Junior,

A parte dos demonstrativos consolidados está entendida.
Na hora de emitir os relatórios, como vamos utilizar o mesmo plano de contas, podemos consolidar os valores dos livros das duas empresas.
Uma conta que eventualmente estiver credora em 1.000 na Koruz SC e devedora em 1.000 na Koruz SP, sairá zerada no relatório consolidado.
Acho que é isso, né?

Agora vamos para a parte "sistêmica" do processo.

Nas transferências de mercadorias, como emitimos tanto a nota de saída na filial quanto a nota de entrada na matriz, os lançamentos referentes a esta operação serão realizados automaticamente, então esse ponto não me preocupa, pois os saldos das contas de estoque serão transferidos entre os livros de cada empresa.
Neste caso só fica em aberto a questão do pagamento do título da LG da filial pela matriz.
Como o título original da LG está vinculado no sistema à empresa Koruz SC, quando ele for liquidado, este movimento será registrado no livro contábil da Koruz SC.

Esse lançamento ficaria assim:

Livro Koruz SC
D - Passivo, fornecedor, 10.000
C - Ativo, Bradesco c/c xxxxxx, 10.000 (essa conta corrente é da Koruz SP)

No livro da Koruz SP, a conta "Ativo, Bradesco", permaneceria com o saldo inalterado.

No relatório consolidado, o saldo da conta "Ativo, Bradesco" sairia com o saldo correto, como seria de se esperar.

Porém, existem alguns processos e relatórios no sistema onde eu mostro apenas os lançamentos da empresa em operação, como é o caso da tela de conciliação bancária.
Ao realizar a conciliação bancária, por exemplo, eu mostro as movimentações da conta "Ativo, Bradesco" em um determinado período apenas no livro fiscal da empresa em operação para o operador validar com o extrato bancário.
Neste caso, na Koruz SP, apareceria um saldo excedente de R$ 10.000 que pareceria não estar em conformidade com o extrato.

Estou pensando em um modelo de classificação para lidar de forma padronizada com este caso, veja se você vê alguma objeção.

Note que estes lançamentos são feitos automaticamente pelo sistema, não são manuais (exceto o último), então em termos de trabalho não afetará em praticamente nada.

Vou simular um processo de compra pela Koruz SC com transferência para a Koruz SP e pagamento do título pela Koruz SP (estou desconsiderando os impostos)

Koruz SC

NF de entrada da LG (automático)
D Ativo, estoque, 10.000
C Passivo, fornecedor, 10.000

NF de saída, transferência para Kóruz SP (automático)
D Ativo, conta corrente matriz, 10.000
C Ativo, estoque, 10.000

Liquidação da duplicata da LG (automático, porém o lançamento será contra a "conta corrente matriz", e não contra o "bradesco")
D Passivo, fornecedor 10.000
C Ativo, conta corrente matriz, 10.000

No final deste processo, os saldos das contas envolvidas referentes a esta operação ficarão zerados, pois a Koruz SC devia 10.000 para a Koruz SP, mas a Koruz SP pagou o boleto da LG e zerou a dívida.

Koruz SP

NF de entrada, transferência da Kóruz SC
D Ativo, estoque, 10.000
C Passivo, conta corrente filial, 10.000

Lançamento referente à liquidação da duplicata da LG pela Koruz SP (MANUAL, para baixar a conta corrente da filial)
D Passivo, conta corrente filial, 10.000
C Ativo, c/c bradesco, 10.000

Acho que este modelo de classificação resolveria as questões de sistema e não afetaria as demonstrações contábeis, o que acha?

Se estiver de acordo, eu oriento a Rute sobre a parametrização e operação do sistema.


