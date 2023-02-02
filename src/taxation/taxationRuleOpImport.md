# Importar regras tributárias

[Tributação > Regras tributárias > Importar regras tributárias](/taxation/taxationRuleOpImport.html){.menu}

Baixe a [planilha modelo](taxationRuleOpImport.csv) e preencha com as regras tributárias da empresa.

## Colunas

* [flow]{.field} **IN** para regra de entrada, **OUT** para regra de saída
* [region]{.field} Código da região fiscal (ex: **BR**)
* [fiscalProfileCompany]{.field} Código do perfil fiscal da empresa
* [fiscalProfilePerson]{.field} Código do perfil fiscal do cliente/fornecedor
* [fiscalProfileOperation]{.field} Código do perfil fiscal da operação
* [fiscalProfileProduct]{.field} Código do perfil fiscal do produto
* [taxationOperation]{.field} Código da operação fiscal
* Colunas com as regras tributárias:
    * [tax.IMPOSTO.PROPRIEDADE]{.field}
        * **IMPOSTO** é o código do imposto (ex: **ICMS**, **IPI**, etc...)
        * **PROPRIEDADE** é o código da propriedade
* [properties.outgoingInvoiceComments]{.field} Observações fiscais relacionadas à regra tributária.

## Propriedades

* [baseValue]{.tag} Expressão para calcular a base de cálculo
* [taxRate]{.tag} Alíquota do imposto
* [cst]{.tag} Código da situação tributária
* [compensationRate]{.tag} Percentual de aproveitamento do imposto na entrada

## Expressões

## Exemplos

* Definir a base de cálculo do ICMS como o valor da operação menos o valor do frete
    * [tax.ICMS.baseValue]{.field} -> [operationValue-freightValue]{.input}
* Definir a alíquota do ICMS como 18%
    * [tax.ICMS.taxRate]{.field} -> [18]{.input}
* Definir a CST da operação como 010
    * [tax.ICMS.cst]{.field} -> [010]{.input}

tax.ICMS.baseValue | tax.ICMS.taxRate | tax.ICMS.cst
-- | -- | ---
operationValue-freightValue | 18 | 010

* Observação de aproveitamento de ICMS de empresas do Simples Nacional
    * [Documento emitido por ME ou EPP optante pelo Simples Nacional. Não gera direito a crédito fiscal de ICMS, IPI e ISS]{.input}
