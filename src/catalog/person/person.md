# Pessoas

[]{.draft}

Uma pessoa é uma entidade que possui um relacionamento com a empresa.

Ela pode ser um cliente, fornecedor, transportador, vendedor ou colaborador.

## Manutenção de pessoas

Acesse [Cadastros > Pessoas > Pessoas]{.menu}

Ao abrir o grid pessoas, selecione a ação desejada.

Para incluir ou alterar uma pessoa, preencha as informações solicitadas, com atenção especial aos seguintes campos:

### Pessoa
* [Tipo]{.field .required} 
Selecione **Pessoa jurídica** ou **Pessoa física**
* [Tipo de documento]{.field} 
Informe o tipo de documento principal.
Outros documentos poderão ser adicionados posteriomente através do [módulo documentos](personDocument).
* [Número do documento]{.field} 
Se o documento for um CNPJ, é possível obter os dados cadastrais automaticamente no site da Receita Federal.
Informe o número do documento e clique em ![](https://static.zenerp.app.br/icons/action-search.svg){.icon}
* [Nome]{.field .required}
Informe a razão social.
* [E-mail]{.field} 
Informe o e-mail principal.
Outros e-mails poderão ser adicionados posteriormente através do [módulo contatos](personContact).
* [Telefone]{.field} 
Informe o telefone principal.
Outros telefones poderão ser adicionados posteriormente através do [módulo contatos](personContact).
* [Perfil fiscal de pessoa]{.field} 
Selecione o perfil fiscal principal da pessoa.
O perfil fiscal será utilizado para automatizar o cálculo de tributação. Mais informações podem ser obtidas em [regras tributárias](../../taxation/taxationRule).
* [Lista de conversões de código]{.field}
Selecione uma lista de conversão de códigos existente ou clique em ![](https://static.zenerp.app.br/icons/action-create.svg){.icon} para criar uma nova.
A lista de conversão de códigos é utiliza para associar um produto da empresa ao produto da pessoa.
* [Tags]{.field}
Informe tags para "marcar" a pessoa. 
As tags são facilitadores para agrupar e filtrar registros no sistema.
Mas informações sobre elas podem ser obtidas em [tags](../../interface/tags).
* [Tags especiais]{.field}
Marque as tags especiais para identificar o tipo de relacionamento que a pessoa tem com a empresa.
As tags especiais também podem ser utilizadas para ativar/desativar ou bloquear/desbloquear uma pessoa.

### Endereço
* [Cep]{.field} 
Informe o Cep do endereço principal da pessoa.
Os demais dados serão obtidos automaticamente através da base dos Correios.
Verifique se as informações estão corretas antes de partir para a próxima aba.
Outros endereços poderão ser adicionados posteriormente através do [módulo endereços](personAddress).

### Categorias
* [Categorias]{.field}
Categorias são utilizadas para classificar uma pessoa.
É possível informar até 5 (cinco) categorias para uma pessoa.
Mais informações podem ser obtidas em [categorias](../../catalog/category.md).

### Observações
* [Observações]{.field}
Informe as observações principais da pessoa.
Observações específicas de outros módulos do sistema, tais como: financeiras, comerciais, cobrança, entre outras, poderão ser adicionadas posteriormente através do [módulo observações](personComment).

