# Resumo Executivo — Carbon DS + MUI v5

## Objetivo
Validar a viabilidade de adotar o **Qualquer UI de design system** sobre a stack MUI v5(versão atual da MUI) da Tako, otimizando o workflow design → engenharia sem trocar de biblioteca de componentes.

---

## O que foi feito

### 1. Inspeção do Design System via Figma MCP
Utilizamos o MCP do Figma para inspecionar o arquivo Carbon DS v11 (Figma com design system já criado de mercado), extraindo os tokens de cor, escala tipográfica (IBM Plex Sans) e linguagem visual dos componentes (corners, heights, spacing).

### 2. Análise do código-fonte real (monorepo Tako)
Exploramos o app `auditing` no monorepo para capturar os tipos exatos, estrutura de abas, status e colunas da tela **Pessoas** — garantindo que o protótipo reflita fielmente a implementação de produção.

### 3. Projeto standalone criado
**`/Users/eric/Projects/Tako/carbon-ds-mui-test`**
Stack: React 18 + TypeScript 5 + Vite 5 + **MUI 5.16.7** (mesma versão do monorepo)

| Camada | Decisão |
|---|---|
| Design tokens | Carbon v11 White Theme mapeados para `createTheme` do MUI |
| Tipografia | IBM Plex Sans via `@fontsource` |
| Tabela | `@mui/x-data-grid` v5 (substitui AG Grid do monorepo) |
| Ícones | `@tabler/icons-react` (igual ao monorepo) |
| Roteamento | React Router v6 |
| Estado assíncrono | TanStack Query v5 (provider configurado) |

### 4. Tela Pessoas implementada
- **5 abas** com contagem dinâmica: Todos · Colaboradores · Prestadores · Autônomos · Terceirizado
- **DataGrid** com 7 colunas: Avatar + Nome + Email, Cargo, Departamento, Empresa, Admissão, Modalidade, Situação
- **Chips de status** com cores semânticas Carbon (verde/azul/laranja/cinza)
- **Busca em tempo real** filtrando por nome, e-mail, cargo, departamento
- **Toggle "Mostrar desligados e inativos"** via menu de três pontos

### 5. Publicado no GitHub
🔗 **https://github.com/Eadrico/carbon-ds-mui-test**

---

## Conclusão técnica

> **É viável.** O Carbon DS(Ou qualquer design system no figma) pode ser aplicado sobre MUI v5 via `createTheme` sem substituir a biblioteca. O esforço concentra-se na criação do arquivo de tema — tokens, typography e component overrides — que passa a ser a **única fonte da verdade** entre design e código.

### Pontos de atenção para produção
| Item | Observação |
|---|---|
| `border-radius: 0` global | Carbon é sharp; confirmar aceitação do time de produto |
| AG Grid vs DataGrid | Monorepo usa AG Grid; migração tem custo de funcionalidades (sorting avançado, virtual scroll) |
| Figma MCP `get_design_context` | Requer layer selecionado no Figma Desktop — limitação de workflow a resolver |
| Versão MUI | v5.16.7 (monorepo) está desatualizada; Carbon DS seria oportunidade de upgrade |
