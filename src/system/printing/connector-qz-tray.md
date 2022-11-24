# QZ Tray

O [QZ Tray](https://qz.io) é um software que funciona como um conector entre uma aplicação web e uma impressora local, permitindo que a aplicação web envie trabalhos para a impressora.

## Instalação

* Acesse <https://qz.io/download/>
* Baixe e instale a versão estável

## Configuração

A instalação padrão do QZ Tray já permite a conexão com as impressoras locais, porém para cada trabalho enviado para a impressora será solicitada uma confirmação do usuário para permitir a impressão.

Para eliminar essa confirmação, é necessário criar um novo par de chaves criptográficas para utilizar no processo de autenticação da aplicação web.

* Clique com o botão direito no ícone do QZ Tray na bandeja da barra de tarefas do Windows
* Selecione a opção [Advanced > Site Manager...]{.menu}
* Clique no botão [+]{.icon} e selecione a opção [Create New...]{.menu}
* Confirme a criação do par de chaves
* Confirme a instalação automática
    * O programa de instalação abrirá a pasta onde o par de chaves foi gravado
    * Mantenha essa pasta aberta pois precisaremos destes arquivos posteriormente
* Confirme a cópia do par de chaves para a pasta do QZ Tray
    * O Windows solicitará algumas confirmações de administrador

## Configuração do Zen

* Acesse [Sistema > Impressão Conector QZ Tray]{.menu}
* Clique em [Importar chave privada]{.z-button} e selecione o arquivo "private-key.pem" criado anteriormente
* Clique em [Importar certificado]{.z-button} e selecione o arquivo "digital-certificate.txt" criado anteriormente
* Associe a impressora do [Zen]{.zen} com uma impressora local
* Clique em [Iniciar]{.z-button}
* Deixe esta página aberta para que as impressões sejam direcionadas para as respectivas impressoras locais
