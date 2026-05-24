# Pipeline CI/CD de DevSecOps - Node.js

Este repositório demonstra uma pipeline completa de Integração Contínua e Entrega Contínua (CI/CD) integrada com práticas de DevSecOps. Inclui testes automatizados, hard gates de segurança e deploy contínuo no Render.

## Arquitetura e Estágios da Pipeline

O fluxo de trabalho automatizado está definido em `.github/workflows/main.yml` e consiste em 5 estágios principais:

1. **Build & Test**: Configura o ambiente Node.js 20, instala as dependências e executa os testes automatizados (`npm test`).
2. **Security Scans (Hard Gates)**: Executa verificações de segurança em paralelo. Qualquer vulnerabilidade detetada ou credencial exposta resulta em `Exit Code 1`, interrompendo imediatamente a pipeline.
   - **Trivy (SCA)**: Verifica as dependências do pacote à procura de vulnerabilidades conhecidas (CVEs).
   - **Gitleaks (Secret Detection)**: Deteta chaves de API, tokens e palavras-passe expostas de forma acidental.
   - **Semgrep (SAST)**: Realiza testes estáticos de segurança na aplicação usando regras do OWASP Top 10.
3. **Quality Check**: Integração com o SonarQube para analisar a qualidade e a manutenibilidade do código.
4. **Dockerize**: Valida a configuração de conteinerização com Docker.
5. **Update (Deployment)**: Dispara o deploy automatizado para o Render através de Webhooks seguros usando o GitHub Secrets (`RENDER_DEPLOY_HOOK`).

## Tecnologias Utilizadas

* **Aplicação**: Node.js
* **Orquestração CI/CD**: GitHub Actions
* **Scanners de Segurança e Qualidade**: Trivy, Gitleaks, Semgrep, SonarQube
* **Plataforma de Nuvem**: Render.com
