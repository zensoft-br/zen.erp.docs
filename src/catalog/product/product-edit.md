# Produtos mestres

[]{.draft}

Preencha as informações solicitadas, com atenção especial aos seguintes campos:

## Produto mestre

* [Tipo]{.field} 
Informe se o cadastro representa um produto ou um kit.
Mais informações sobre kit podem ser obtidas em [kits](productKitComponent).
* [Código]{.field} 
Informe o código do produto mestre.
Caso o código não seja preenchido, o sistema irá atribuir o **id** como código do produto mestre.
* [Descrição]{.field .required} 
Informe a descrição do produto.
A **descrição** será mostrada nos documentos fiscais.
* [Palavras-chave]{.field} 
Informe palavras-chave para facilitar a busca do produto no sistema.
* [Unidade]{.field} 
Informe a unidade da menor fração comercial do produto.
* [Perfil fiscal do produto]{.field} 
Mais informações podem ser obtidas em [perfis fiscais de produtos](../../fiscal/fiscalProfileProduct).
* [Parâmetros para controle de materiais]{.field}
    * Controlar qualidade
    * Controlar lote
    * Controlar serial
    * Atribuir número serial automaticamente
    * Controlar data de validade
    * Converter para produto unitário
    * Imprimir uma etiqueta para cada produto
    * Leitura de produto individual

## Produto unitário
* [Código de barras]{.field} 
Informe o código de barras, em formato GTIN8, GTIN13 ou GTIN14 do produto.
* [Dimensões]{.field}
Informe a largura, comprimento e altura da embalagem unitária do produto em centímetros (cm).
* [Peso].{field}
Informe o peso líquido e o peso bruto em quilos (kg) de uma unidade do produto.

## Materiais
* [Endereço]{.field}
Informe a localização do produto no estoque.
Mais informações podem ser obtidas em [endereços](../../material/address).

## Categorias
* [Categorias]{.field}
Informe as diferentes categorias que o produto mestre pertence.
Mais informações podem ser obtidas em [categorias](../category).

Clique em [Gravar]{.button}
