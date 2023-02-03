# Regras tributárias NF

[]{.draft}

Descrição das característiscas das regras tributárias da NF.

Acesse o cadastro de [Regras tributárias](/taxation/taxationRule) para incluir uma nova regra ou fazer manutenção numa regra já cadastrada. Dê atenção aos seguintes campos:

## Aba regra tributária

* [Perfil fiscal da empresa]{.field}
    * Simples Nacional SP quando comércio
    * Simples Nacional SP Industria quando indústria
* [Perfil fiscal da pessoa]{.field} - perfil fiscal do destinatário conforme no cadastro de pessoa
    * MEI e PJ sem IE devem ser cadastradas como CONSUMIDOR
    * PJ com IE devem ser cadastradas como REGIME NORMAL
* [Perfil fiscal de produto]{.field} - informar o perfil fiscal conforme cadastro do produto
* [Perfil fiscal da operação]{.field} - define a natureza da operação
    * Compra
    * CompraX
    * Venda
    * VendaX
    * Devolução
    * Industrialização
    * Remessa para industrialização
    * Remessa para conserto
    * Remessa para armazenagem
    * Retorno de industrialização
    * Retorno de conserto
    * Retorno de armazenagem
    * Transferência
* [Operação fiscal]{.field} - informar a CFOP da operação

## Aba BR

Toda operação de venda de empresa do Simples Nacional seguirá a regra abaixo.

* ICMS-SN
    * [ICMS_SN CST]{.field}
        * 101 - venda para REGIME NORMAL
        * 102 - venda para CONSUMIDOR
* IPI
    * [IPI CST]{.field} - 53
    * [IPI cód. enquadramento]{.field} - 999
* PIS
    * [PIS CST]{.field} - 49
* COFINS
    * [COFINS CST]{.field} - 49

Caso mude o regime de alguma empresa ou para outras operações que não seja venda, preencher os campos conforme necessário (analisar cada operação).

## Alíquota de aproveitamento de ICMS do Simples Nacional

A alíquota de aproveitamento de ICMS do Simples Nacional é informada no cadastro da empresa.

Acesse [Cadastros > Empresas > Empresas]{.menu}

Localize a empresa desejada, clique em ![](https://static.zenerp.app.br/icons/action-update.svg){.icon} e altere o campo [Porcentagem crédito Simples Nacional]{.field} na aba FISCAL.
    

