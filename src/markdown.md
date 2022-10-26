# Markdown

## Títulos

```
# Título 1
## Título 2
### Título 3
#### Título 4
##### Título 5
###### Título 6
```

### Exemplo

# Título 1
## Título 2
### Título 3
#### Título 4
##### Título 5
###### Título 6

## Ênfase

```
**negrito** __negrito__ *itálico* _itálico_
```

### Exemplo

**negrito** __negrito__
*itálico* _itálico_

## Link direto

```
<http://foo.bar>
```

### Exemplos

<http://foo.bar>

## Link com texto

```
[foo bar](http://foo.bar)
```

### Exemplo

[foo bar](http://foo.bar)

## Lista não numerada

```
* Item 1
    * Item 1.1
* Item 2
    * Item 2.1
```

### Exemplos

* Item 1
    * Item 1.1
* Item 2
    * Item 2.1

## Lista numerada

```
1. Item 1
    1. Item 1.1
1. Item 2
    1. Item 2.1
```

### Exemplos

1. Item 1
    1. Item 1.1
1. Item 2
    1. Item 2.1

## Imagem

```
![Alt ou título da imagem](http://static.zenerp.app.br/favicon.ico)
```

### Exemplo

![Alt ou título da imagem](http://static.zenerp.app.br/favicon.ico)

## Citação

```
> foo bar
```

### Exemplo

> foo bar

## Código

~~~
Esta é uma linha que contém um `código`.

```
Esta é uma linha de código
```
~~~

### Exemplo

Esta é uma linha que contém um `código`.

```
Esta é uma linha de código
```

## Tabela

```
Título 1  | Título 2
--------- | ------
Exemplo 1 | 1
Exemplo 2 | 2
Exemplo 3 | 3
Exemplo 4 | 4
```

### Exemplo

Título 1  | Título 2
--------- | ------
Exemplo 1 | 1
Exemplo 2 | 2
Exemplo 3 | 3
Exemplo 4 | 4

## Classe .draft

Esta classe indica que o documento é um rascunho e deverá passar por revisão.

Esta classe deve ser introduzida logo após o título.

```
[]{.draft}
```

### Exemplo

[]{.draft}

## Classe .field

Esta classe representa um campo a ser preenchido pelo operador.

```
Preencha o campo [foo bar]{.field}
```

### Exemplo

Preencha o campo [foo bar]{.field}

## Classe .input

Esta classe representa um campo de texto a ser preenchido pelo operador.

```
[foo bar]{.input}
```

### Exemplo

[foo bar]{.input}

## Classe .keywords

Esta classe permite que o editor informe palavras-chave que ficarão associadas ao documento para efeitos de busca, porém não serão exibidas no documento.

```
[foo bar]{.keywords} baz
```

### Exemplo

[foo bar]{.keywords} baz

## Classe .menu

Esta classe representa um item de menu. Os níveis do menu devem ser separados pelo caractere >.

```
[foo > bar]{.menu}
```

### Exemplo

[foo > bar]{.menu}

## Classe .status

Esta classe representa um status do sistema.

```
[foo bar]{.status}
```

### Exemplo

[foo bar]{.status}

## Classe .tag

Esta classe representa uma tag do sistema.

```
[foo]{.tag} [bar]{.tag}
```

### Exemplo

[foo]{.tag} [bar]{.tag}

## Classe .todo

Esta classe representa um elemento que deverá passar por revisão.

```
[foo bar]{.todo}
```

### Exemplo

[foo bar]{.todo}

## Botão (button)

```
[foo]{.z-button}

[bar]{.z-button .default}

[baz]{.z-button .cancel}
```

### Exemplo

[foo]{.z-button}

[bar]{.z-button .default}

[baz]{.z-button .cancel}
