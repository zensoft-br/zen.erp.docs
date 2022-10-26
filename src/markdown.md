# Markdown

## Classe .draft

Esta classe indica que o documento é um rascunho e deverá passar por revisão.

Esta classe deve ser introduzida logo após o título.

```
[]{.draft}
```

Resultado:

[]{.draft}

## Classe .field

Esta classe representa um campo a ser preenchido pelo operador.

```
Preencha o campo [foo bar]{.field}
```

Resultado:

Preencha o campo [foo bar]{.field}

## Classe .input

Esta classe representa um campo de texto a ser preenchido pelo operador.

```
[foo bar]{.input}
```

Resultado:

[foo bar]{.input}

## Classe .keywords

Esta classe permite que o editor informe palavras-chave que ficarão associadas ao documento para efeitos de busca, porém não serão exibidas no documento.

```
[foo bar]{.keywords}
```

Resultado:

[foo bar]{.keywords}

## Classe .menu

Esta classe representa um item de menu. Os níveis do menu devem ser separados pelo caractere >.

```
[foo > bar]{.menu}
```

Resultado:

[foo > bar]{.menu}

## Classe .status

Esta classe representa um status do sistema.

```
[foo bar]{.status}
```

Resultado:

[foo bar]{.status}

## Classe .tag

Esta classe representa uma tag do sistema.

```
[foo]{.tag} [bar]{.tag}
```

Resultado:

[foo]{.tag} [bar]{.tag}

## Classe .todo

Esta classe representa um elemento que deverá passar por revisão.

```
[foo bar]{.todo}
```

Resultado:

[foo bar]{.todo}

## Botão (button)

```
[foo]{.z-button}

[bar]{.z-button .default}

[baz]{.z-button .cancel}
```

Resultado:

[foo]{.z-button}

[bar]{.z-button .default}

[baz]{.z-button .cancel}

## Bloco de citação (blockquote)

```
> foo bar
```

Resultado:

> foo bar

## Código (code)

~~~
```
foo bar
```
~~~

Resultado:

```
foo bar
```
