# Cadastro de produtos

[]{.draft}

No dia 28/10/2022 ocorreu o treinamento de cadastro de produtos da Hana's Têxtil.

Participaram: Luiz Fabiano pela Personal Soft e Ana Alice, Matheus e Guilherme pela Hana.

No treinamento ficou decidido que:

* As cores Pantones utilizadas pelas grades de produtos serão cadastradas em [variantes](../../catalog/product/productVariant.md)
* Os artigos terão o código gerado automaticamente pelo generator da tabela de [produtos mestres](../../catalog/product/product)
* As grades terão o código composto por: código do artigo + '.' + código da cor Pantone.

## Variantes

Uma variante representa uma cor Pantone.

Ao cadastrar uma cor, é importante:
* verificar o código dela na tabela Pantone
* localizar o código RGB hex da cor no [site](https://www.namebadgesinternational.us/faqs/pantone-to-rgb/)
* preencher o [Código]{.field} da cor removendo os espaços
*   Exemplo: PANTONE 100 C irá gerar o código 100C
*   Exemplo: PANTONE 7729 U irá gerar o código 7729U
* preencher a [Descrição]{.field} com o nome da cor

## Produto mestre

* O código do produto mestre será atribuído automaticamente pelo sistema, ou seja, o mesmo valor do campo **id**

## Grades

* O cadastro de grades deve ser feito em [produtos](../../catalog/product/productPacking)
* As grades terão o código composto por: código do artigo + '.' + código da cor Pantone