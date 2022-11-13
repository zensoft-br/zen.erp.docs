# Tributação

[]{.draft}

## Cálculo da tributação

* [grossBaseValueExpression]{.field} Este campo contém uma fórmula que será executada para calcular a base de cálculo bruta da operação.

    Esta fórmula poderá conter as seguintes variáveis:

    * **quantity**: quantidade
    * **unitValue**: valor unitário
    * **productValue**: **quantity** * **unitValue** (arredondado para 2 casas decimais)
    * **freightValue**: valor do frete
    * **insuranceValue**: valor do seguro
    * **otherValue**: outros valores
    * **discountValue**: valor do desconto
    * **operationValue**: **productValue** + **freightValue** + **insuranceValue** + **otherValue** - **discountValue**

    ## Exemplos

    Para uma operação com quantidade **100**, valor unitário **R$ 2**, frete **R$ 10** e desconto **R$ 5**:

    * **productValue**: 200 (100 x 2)
    * **operationValue**: 205 (100 x 2 + 10 - 5)
    * **operationValue-freightValue**: 195 (205 - 10)
