---
sidebar_position: 2
---

# Configuração e Uso Básico do Git

## Instalação
1. Baixe o instalador no site oficial do Git
2. Execute o instalador
3. Siga as etapas de instalação padrão

## Configuração Inicial
```bash
# Configurar nome de usuário
git config --global user.name "Seu Nome"

# Configurar email
git config --global user.email "seu-email@exemplo.com"

# Configurar gerenciamento de fim de linha
git config --global core.autocrlf input
```

## Comandos Git Essenciais

### 1. Clone: Baixar um Repositório
```bash
# Clonar usando SSH
git clone git@github.com:usuario/repositorio.git
```
🔍 **O que faz:** Baixa uma cópia completa do repositório remoto para seu computador
Clonar usando SSH só funciona após você ter feito o setup do GH-CLI

### 2. Status: Verificar Mudanças
```bash
# Mostra arquivos modificados, adicionados e não rastreados
git status
```
🔍 **O que faz:** Exibe o estado atual do seu repositório local

### 3. Add: Preparar Arquivos para Commit
```bash
# Adicionar arquivo específico
git add arquivo.txt

# Adicionar todos os arquivos modificados
git add .
```
🔍 **O que faz:** Prepara as alterações para serem salvas no próximo commit

### 4. Commit: Salvar Mudanças
```bash
# Commit com mensagem
git commit -m "Descrição clara das mudanças"

# Commit incluindo todos os arquivos modificados
git commit -am "Descrição das mudanças"
```
🔍 **O que faz:** Salva as alterações preparadas no repositório local com uma mensagem descritiva

### 5. Pull: Atualizar Repositório Local
```bash
# Baixar e mesclar mudanças do repositório remoto
git pull origin main
```
🔍 **O que faz:** Baixa as últimas alterações do repositório remoto e mescla com seu trabalho local

### 6. Push: Enviar Mudanças
```bash
# Enviar commits para repositório remoto
git push origin nome-da-branch

# Enviar para branch principal
git push origin main
```
🔍 **O que faz:** Envia seus commits locais para o repositório remoto

## Fluxo de Trabalho Típico
```bash
# 1. Clonar repositório
git clone git@github.com:usuario/repositorio.git

# 2. Criar branch para nova funcionalidade
git checkout -b feature/nova-funcionalidade

# 3. Fazer alterações
# Editar arquivos...

# 4. Verificar status
git status

# 5. Adicionar arquivos
git add .

# 6. Commitar mudanças
git commit -m "Adiciona nova funcionalidade"

# 7. Enviar para repositório remoto
git push origin feature/nova-funcionalidade
```

## Troubleshooting
- Problemas de permissão? Execute o terminal como administrador
- Conflitos de merge? Resolva manualmente os arquivos
- Credenciais incorretas? Verifique suas configurações de usuário

## Dicas Rápidas
- Sempre puxe (`pull`) antes de começar a trabalhar
- Use branches para novas funcionalidades
- Commits pequenos e descritivos
- Comunique-se com sua equipe
