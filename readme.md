Título ou Nome da aplicação: Koobing

Identificação/Autor: João Arthur da Silva Dantas

Descrição do projeto: Site de pesquisa de sinopse de livros utilizando a Google Books API.

Prototipação no Figma: https://www.figma.com/design/KQTDKcPTH5zDG9mkePPEgt/Untitled?node-id=0-1&p=f&t=1fakta1Xe4TIb7l1-0

Design System: https://www.figma.com/design/6CiUaYtz2WW4s8ZW4jN5iu/Design-System?t=1fakta1Xe4TIb7l1-0

Framework CSS: Materialize.

Dependências: JQuery e JQuery Mask Plugin.

Link para o site em produção: URL para acessar o site publicado no GitHub Pages.

Checklist de Funcionalidades: RA1)

ID1: Possui um layout responsivo usando o Materialize.

ID2: Cumpri este requisito utilizando a propriedade display: flex; criando assim um layout flexível, como no caso do header para alinhar os itens (logo do bing e botão de login) de forma que fique responsiva, e no footer para organizar os links de forma flexível, que quando usado em dispositiveis móveis, eles venham a empilhar.

ID3: Possibilidade de uso de componentes do Materialize, como cards e modais.

ID4: Fiz a utilização de unidades relativas para criar um layout fluido.

ID5: Código possui animações utilizando jQuery para fadeIn/fadeOut.

ID7: O design está utilizando uma paleta de cores de forma recorrente, todas listadas no Design System que criei no Figma. (#0061f2 e #004bb5 para links, fundo claro #f0f0f0), tipografia com Arial, sans-serif, e um estilo recorrente de componentes como o header, input, botões, footer e book-item.

ID9: Implementei tipografia responsiva com unidades relativas e media queries.

ID 10: Usei no HTML o atributo required para validação de campos obrigatórios, e as mensagens de erro são exibidas nas

com a classe error, que são preenchidas pelo JavaScript.
ID 11: No campo de e-mail(na página de login e criação de conta) usa o tipo email, que já aplica uma validação básica de formato de e-mail, cumprindo assim este requisito.

ID 12 : No formulário para criacar conta, coloquei no final um elemento select para o usuário escolher o país.

ID 13: O requisito é atendido ao utilizar o localStorage.setItem('username', username.value);. Isso garante que o nome de usuário inserido pelo usuário seja armazenado localmente no navegador.

ID 20: Requisito cumprido com a utilização do jQuery para manipular o DOM(melhor explicado no vídeo).

ID 21: Utilizei o jQuery Mask Plugin diretamente no código com a linha $("#search-input").mask("A{1,50}").

ID 24: Utilizei a Fetch API para realizar uma requisição POST para a API pública jsonplaceholder.typicode.com, enviando os dados do formulário.

ID 25: Enviei os dados do formulário para uma API fake (jsonplaceholder) de forma assíncrona, persistindo os dados no servidor simulado.

ID 26: Implementei o processo de requisição, permitindo o envio de dados do formulário para a API fake.

Instruções de Execução: Abrir inicialmente o arquivo "projeto24.html"
