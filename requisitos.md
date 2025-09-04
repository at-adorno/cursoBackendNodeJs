# Alunos:
#### Alessandra
#### André
#### Diciane
#### Wanessa

# Requisitos Funcionais (RF)
#### Estes requisitos descrevem o que o sistema deve fazer, ou seja, as funcionalidades oferecidas aos usuários (bibliotecários, alunos, etc.).
---
### RF01 – Cadastrar livros novos
#### O sistema deve permitir que o bibliotecário registre novos livros no acervo, informando:
- **Título**
- **Autor**
- **Editora**
- **Ano de publicação**
- **Gênero**
- **Número de exemplares disponíveis**
- **Código de identificação** (ISBN ou outro)
---
### Reescrevendo o RF01 como uma Hitória de Usuário
Como bibliotecário,
Quero cadastrar novos livros no acervo do sistema,
Para que eu possa registrar as informações importantes de cada obra, como:
- Título
- Autor
- Editora
- Ano de publicação
- Gênero
- Número de exemplares disponíveis
- Código de identificação (ISBN ou outro)
E assim manter o catálogo da biblioteca atualizado e organizado.
---
### RF02 – Listar todos os livros disponíveis
#### O sistema deve exibir uma lista com todos os livros cadastrados que possuem ao menos um exemplar disponível para empréstimo.
---
### RF03 – Buscar livros por título ou autor
#### O sistema deve permitir buscas por:
- **Título** (ou parte dele)
- **Nome do autor** (ou parte do nome)
#### A busca deve ser tolerante a erros ortográficos simples.
---
### RF04 – Registrar empréstimos de livros
#### O sistema deve permitir registrar o empréstimo de um livro a um usuário, vinculando:
- **Nome do usuário**
- **Livro emprestado**
- **Data do empréstimo**
- **Data prevista para devolução**
#### Deve atualizar automaticamente o número de exemplares disponíveis.
---
### RF05 – Registrar devoluções de livros
#### O sistema deve permitir registrar a devolução de um livro e:
- Atualizar o número de exemplares disponíveis
- Registrar a data real da devolução
- Indicar se houve atraso e, se sim, calcular dias de atraso
---
### RF06 – Gerenciar usuários *(opcional avançado)*
#### O sistema pode incluir gerenciamento de usuários com cadastro, autenticação e permissões (ex: aluno, professor, bibliotecário).
---
### RF07 – Sugerir Títulos *(opcional avançado)*
#### Baseado no histórico de pesquisa o sistema deve sugerir em uma parte específica sugestões de títulos relacionados aos pesquisados baseados em gênero/autor.

---
# Requisitos Não Funcionais (RNF)
#### Estes requisitos descrevem como o sistema deve se comportar em termos de qualidade, desempenho e restrições técnicas.
---
### RNF01 – Interface intuitiva e amigável
#### A interface do sistema deve ser simples e fácil de usar, mesmo para usuários com pouca experiência com tecnologia.
---
### RNF02 – Compatibilidade com navegadores
#### O sistema deve funcionar corretamente nos principais navegadores modernos (Google Chrome, Firefox, Edge, Safari).
---
### RNF03 – Segurança contra acessos não autorizados
#### Deve haver controle de acesso com login e senha para bibliotecários, protegendo as funcionalidades administrativas (como empréstimos, cadastro de livros, etc.).
---
### RNF04 – Desempenho eficiente
#### Todas as ações no sistema (cadastro, busca, empréstimo, devolução) devem ser processadas em menos de 2 segundos, mesmo com grande quantidade de dados.
---
### RNF05 – Armazenamento seguro dos dados
#### Os dados devem ser armazenados de forma segura e persistente (ex: banco de dados relacional ou NoSQL com criptografia).
