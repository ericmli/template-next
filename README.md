# Template Next.js 🚀

Template moderno para projetos Next.js com configurações completas de desenvolvimento, incluindo linting, formatação, testes e automação.

#### Configurações Principais:

```typescript
// Arquivos cobertos
files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}']

// Regras personalizadas
rules: {
  'react-hooks/rules-of-hooks': 'error',        // Força uso correto de hooks
  'react-hooks/exhaustive-deps': 'warn',        // Avisa dependências faltando
  'react/react-in-jsx-scope': 'off',           // React 17+ não precisa import
  'react/prop-types': 'off'                    // TypeScript já valida props
}
```

#### Extensões Utilizadas:

- **react-hooks/recommended** - Regras recomendadas para hooks
- **tseslint.configs.recommended** - Configuração recomendada TypeScript
- **pluginReact.configs.flat.recommended** - Configuração recomendada React

### Por que ESLint 9?

- ✅ **Flat Config** - Configuração mais simples e modular
- ✅ **Melhor Performance** - Processamento mais rápido
- ✅ **TypeScript Nativo** - Suporte nativo sem plugins extras
- ✅ **React 19 Ready** - Compatível com versões mais recentes

## 🎨 Prettier - Formatação de Código

### Arquivo: `.prettierrc`

```json
{
  "trailingComma": "none", // Sem vírgulas finais
  "semi": true, // Ponto e vírgula obrigatório
  "singleQuote": true // Aspas simples por padrão
}
```

### Integração com ESLint

- **eslint-config-prettier** - Desabilita regras conflitantes
- **Formatação automática** no save (VS Code)

## 🧪 Jest - Testes

### Arquivo: `jest.config.ts`

Configuração moderna usando **next/jest** para integração completa:

```typescript
const config: Config = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'], // Setup do testing-library
  testEnvironment: 'jsdom', // Simula ambiente browser
  collectCoverage: true, // Coleta cobertura automática
  coverageDirectory: './coverage/', // Pasta de relatórios
  testMatch: [
    // Padrões de arquivos de teste
    '<rootDir>/src/**/*.test.{ts,tsx}',
    '<rootDir>/src/**/*.spec.{ts,tsx}'
  ],
  moduleNameMapper: {
    // Aliases de importação
    '^@/(.*)$': '<rootDir>/src/$1'
  }
};
```

### Arquivo: `jest.setup.ts`

```typescript
import '@testing-library/jest-dom'; // Matchers customizados (toBeInTheDocument, etc.)
```

### Bibliotecas de Teste:

- **@testing-library/react** - Testes focados no usuário
- **@testing-library/jest-dom** - Matchers customizados
- **jest-environment-jsdom** - Ambiente DOM para testes

## 🐕 Husky - Git Hooks

### Configuração no `package.json`:

```json
"husky": {
  "hooks": {
    "pre-commit": "lint-staged"  // Executa antes de cada commit
  }
}
```

### Lint-Staged:

```json
"lint-staged": {
  "src/**/*.{js,jsx,ts,tsx}": [
    "npx eslint --fix"  // Corrige automaticamente antes do commit
  ]
}
```

### Benefícios:

- ✅ **Código sempre limpo** nos commits
- ✅ **Correção automática** de problemas simples
- ✅ **Previne commits** com erros de lint

## 📝 TypeScript

### Arquivo: `tsconfig.json`

- **Strict mode** habilitado
- **Module resolution** Node.js
- **JSX** configurado para React
- **Path mapping** para imports absolutos

## 💻 VS Code - Configurações

### Arquivo: `.vscode/settings.json`

```json
{
  "editor.formatOnSave": true, // Formata ao salvar
  "editor.formatOnPaste": true, // Formata ao colar
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit" // ESLint automático ao salvar
  },
  "files.eol": "\\n", // Quebras de linha Unix
  "editor.tabSize": 2, // Indentação 2 espaços
  "prettier.endOfLine": "lf" // Line endings Linux
}
```

## 🚀 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Inicia servidor de desenvolvimento (com Turbopack)
npm run build        # Build de produção (com Turbopack)
npm run start        # Inicia servidor de produção

# Qualidade de Código
npm run lint         # Verifica problemas de lint (com max-warnings=0)
npm run lint:fix     # Corrige problemas automaticamente
npm run format       # Formata código com Prettier
npm run typecheck    # Verifica tipos TypeScript

# Testes
npm run test         # Executa todos os testes
npm run test:watch   # Executa testes em modo watch

# Git Hooks
npm run prepare      # Configura Husky (executado automaticamente)
```

## 🏃‍♂️ Como Usar

### 1. **Instalação**

```bash
cd template-next
npm install
```

### 2. **Desenvolvimento**

```bash
npm run dev  # Inicia em http://localhost:3000
```

### 3. **Verificação de Qualidade**

```bash
npm run lint      # Verifica problemas
npm run test      # Executa testes
npm run typecheck # Verifica TypeScript
```

### 4. **Correção Automática**

```bash
npm run lint:fix  # Corrige ESLint
npm run format    # Corrige Prettier
```

### 5. **Build de Produção**

```bash
npm run build
npm run start
```
