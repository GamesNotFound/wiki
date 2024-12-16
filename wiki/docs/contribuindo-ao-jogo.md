---
sidebar_position: 2
---

# Como Contribuir (Windows)

## Pré-requisitos
Antes de começar, certifique-se de ter instalado:
- GH-CLI (GitHub CLI)
- Git para Windows
- Godot Engine
- Conta no GitHub
- SSH configurado (consulte nosso tutorial de setup de SSH com GH-CLI)

## 1. Preparação Inicial

### 1.1 Fork do Repositório
1. Acesse o repositório do projeto no GitHub
2. Clique no botão "Fork" no canto superior direito da página
3. Escolha sua conta para criar uma cópia do repositório


![Botão de Fork no GitHub](/img/github-fork.png)


### 1.2 Botão de Clone
1. No repositório do GitHub, localize o botão verde "Code" no lado direito da página, logo acima da lista de arquivos
2. Clique no botão verde "Code"
3. Selecione a aba "SSH"
4. Clique no ícone de copiar (clipboard) ao lado do link SSH


![Botão de Clone SSH no GitHub](/img/github-clone-ssh.png)


### 1.3 Clonar o Repositório

Navegando e Clonando o Repositório:

1. Escolha o local onde deseja salvar seus projetos (por exemplo, `C:\Projetos` ou `C:\Users\SeuNome\Documentos\Projetos`)

2. No Explorador de Arquivos:
   - Navegue até a pasta escolhida
   - Clique com o botão direito do mouse em um espaço vazio dentro da pasta
   - Selecione "Abrir no Terminal" ou "Abrir prompt de comando aqui"

3. No terminal aberto, clone o repositório:
```cmd
# Clonar seu fork usando SSH
git clone git@github.com:SEU-USUARIO/NOME-DO-REPOSITORIO.git

# Entrar no diretório do projeto
cd NOME-DO-REPOSITORIO
```

## 2. Fluxo de Trabalho com Branches

### 2.1 Criando uma Nova Branch
```cmd
# Sempre crie uma branch a partir da branch principal (geralmente main ou master)
git checkout main
git pull upstream main

# Criar nova branch para sua contribuição
git checkout -b feature/nome-descritivo-da-contribuicao
```

### 2.2 Trabalhando no Projeto Godot
1. Abra o projeto no Godot
2. Faça suas modificações/implementações
3. Teste cuidadosamente suas alterações

## 3. Commitando Alterações
```cmd
# Adicionar arquivos modificados
git add .

# Commitar com mensagem descritiva
git commit -m "Descrição clara e concisa das alterações"
```

### Dicas para Mensagens de Commit
- Use verbos no imperativo
- Seja sucinto e objetivo
- Descreva o que foi modificado, não como

## 4. Enviando Alterações
```cmd
# Enviar branch para seu repositório no GitHub
git push origin feature/nome-descritiva
```

## 5. Criando Pull Request
1. Acesse seu repositório no GitHub
2. Clique em "Compare & pull request"


![Criando Pull Request](/img/github-pull-request.png)


3. Preencha o template de PR com:
   - Descrição das alterações
   - Contexto da mudança
   - Prints/GIFs de demonstração (se aplicável)

## 6. Após o Pull Request
- Aguarde revisão dos mantenedores
- Esteja preparado para fazer ajustes
- Responda comentários rapidamente

## Dicas Específicas para Windows

### Configurações Adicionais
- Use o Git Bash como alternativa ao CMD
- Configure o Git para usar LF (Line Feed) em vez de CRLF
```cmd
git config --global core.autocrlf input
```

### Resolução de Problemas Comuns no Windows
- Caso encontre problemas com permissões, execute o CMD como Administrador
- Verifique se as variáveis de ambiente do Git estão configuradas corretamente

## Boas Práticas
- Mantenha suas branches atualizadas
- Faça commits pequenos e significativos
- Respeite o código de conduta do projeto
- Teste completamente antes de enviar

## Resolução de Problemas Comuns
### Conflitos de Merge
Se houver conflitos:
- Escrever pagina tutorial para conflitos de merge

## Recursos Adicionais
- [Documentação Oficial do Git](https://git-scm.com/docs)
- [Guia do GitHub](https://guides.github.com/)
- [Documentação Godot](https://docs.godotengine.org/)
- Adicionar link para pagina de como fazer o setup do GH-CLI com SSH
## Conclusão
Seguindo estes passos, você estará preparado para contribuir efetivamente em projetos Godot no GitHub, utilizando Windows!
