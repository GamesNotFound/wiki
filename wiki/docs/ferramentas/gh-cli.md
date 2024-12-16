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

COLE AQUI

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
