# Mini Projeto — Cadastro de Alunos

**Integrantes:** André Tavares Adorno, Alessandra Santos

## Como executar o projeto

1. **Abra o terminal na pasta do projeto:**
   ```
   cd "/home/aluno/Área de trabalho/dev/cursoBackendNodeJs/mini-projeto-cadastro-de-alunos"
   ```

2. **Instale as dependências:**
   ```
   npm install prompt-sync
   ```
cd /home/aluno/Área\ de\ trabalho/dev/cursoBackendNodeJs/mini-projeto-cadastro-de-alunos
3. **Execute o programa:**
   ```
   node index.js
   ```

## Funcionamento

- O programa exibe um menu interativo no terminal.
- Você pode cadastrar alunos, listar alunos cadastrados e sair do programa.
- As notas e médias dos alunos são exibidas na listagem.

## Exemplo de execução

```
=== Cadastro de Alunos ===
1. Cadastrar Aluno
2. Listar Alunos
3. Resultado Final
4. Sair
```
```
Escolha uma opção: 1
Digite o nome do aluno: João
Digite a primeira nota: 8
Digite a segunda nota: 7
Aluno cadastrado com sucesso!
```
```
Escolha uma opção: 2
Alunos Cadastrados:
Nome: João, Nota 1: 8, Nota 2: 7, Média: 7.5
```
```
Escolha uma opção: 3
Resultado Final dos Alunos:
Nome: João, Média: 7.5 - Aprovado
```
```
Escolha uma opção: 4
Saindo do programa...    
```