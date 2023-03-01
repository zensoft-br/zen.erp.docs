# Cadastro de produtos

[]{.draft}

* Apesar de não controlar o endereçamento do estoque, os endereços são utilizados para facilitar a separação do produto pelo operador. O cadastro de endereço é feito em [endereços](../../material/address.md)
* Cada componente é representado por um produto mestre, independete da qualidade, da marca, do data code ou do fornecedor do produto. O cadastro é feito em [produtos mestres](../../catalog/product/product)
* As diferentes marcas do produto são representadas por variantes. As variantes são cadastradas em [variantes](../../catalog/product/productVariant.md)
* Cada vez que o produto é comprado deve-se analisar se existe estoque disponível para cada data code do produto. O operador deverá escolher se um data code será criado ou se ele irá utilizar um data code desativado.
* Cada data code é representado por um produto (grade) do produto mestre e deverá ser cadastrado em [produtos](../../catalog/product/productPacking)
* As grades terão o código composto por: código do produto mestre + '.' + data code

