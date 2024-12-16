---
sidebar_position: 3
---

# Configuração do GitHub CLI (gh)

## Instalação

### Windows
1. Baixe o instalador no site oficial
2. Execute o arquivo .msi
3. Siga as instruções de instalação

## Autenticação

#### 1.

```cmd
# Após terminar a instalação, abra o CMD e digite:  
gh auto login
```

#### 2.

```cmd
# Está perguntando por onde usa o GitHub, use as setinhas para selecionar a opção GitHub.com e confirme apertando enter
Where do you use GitHub? [Use arows to move, type to filter]    
GitHub.com  
Other
```

#### 3.

```cmd
# Está perguntando qual seu protocolo preferido, use as setinhas para escolher SSH e confirme
What is your preferred protocol for git operations:  
```

#### 4.

```cmd
# Está pedindo uma senha para sua nova chave SSH, é opcional, apenas confirme sem digitar nada
Enter a passphrase for your new SSH key(optional):  
```

#### 5.

```cmd
# Um nome para sua chave SSH, escolha um à sua escolha e confirme
Title for your SSH key: (GitHub CLI):  
```

#### 6.

```cmd
# Está perguntando como irá autenticar, escolha a primeira opção usando as setinhas e confirmando para fazer login pelo novegador
How would you like to authenticate GitHub CLI?
Login with a web browser  
Paste an authentication token    
```

O GH será usado apenas para que  o Git saiba qual é sua conta do Github mas caso deseje usar o GH seguem comandos

## Comandos Básicos

### Verificar Autenticação
```bash
gh auth status
```

### Criar Repositório
```bash
gh repo create nome-do-repositorio --public
```

### Listar Pull Requests
```bash
gh pr list
```

### Criar Pull Request
```bash
gh pr create --title "Título da PR" --body "Descrição"
```

## Troubleshooting
- Problemas de autenticação? Verifique suas credenciais
- Erros de SSH? Verifique configurações de chave

## Recursos Adicionais
- [Documentação Oficial GitHub CLI](https://cli.github.com/manual/)
