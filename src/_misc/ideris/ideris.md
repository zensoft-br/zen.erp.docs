# Ideris

A integração com o Ideris é realizada em duas etapas:

## Etapa 1, obtenção dos pedidos

Nesta etapa, os pedidos são consultados na API do Ideris e importados para o Zen.

## Etapa 2, envio da nota fiscal eletrônica

Nesta etapa, após o processamento do pedido, emissão e autorização da nota fiscal eletrônica, este será enviada para o Ideris, que redistribuirá para os respectivos marketplaces.

## Crie um usuário no Zen para a integração

É recomendável criar um usuário específico para a integração com o Ideris.

* [Sistema > Segurança > Usuários]{.menu}
* Incluir
	* [E-mail]{.field} ideris@zenerp.app.br
	* [Gravar]{.z-button}

Atribua as permissões necessárias:

* Consultar, incluir e alterar pessoas
* Consultar produtos
* Consultar e incluir pedidos de venda, itens de pedidos de venda e formas de pagamento
* Consultar filas?
	
## Crie uma fila para o Ideris

É necessário criar uma fila de integração para o Ideris, que monitore as notas fiscais eletrônicas autorizadas.

Também é necessário criar uma fila morta para o Ideris, que armazenará as notificações que não foram processadas após várias tentativas.

* [Sistema > Integração > Filas]{.menu}
* Incluir
	* [Código]{.field} ideris-dead
	* [Gravar]{.z-button}
* Incluir
	* [Código]{.field} ideris
	* [Fila morta]{.field} ideris-dead
	* [Gravar]{.z-button}

