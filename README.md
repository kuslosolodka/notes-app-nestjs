# Notes App

App for managing your notes

### ❤️ Backend

-   []() - 
-   []() - 
-   []() - 
-   []() - 

## Code Quality

-   JS:
    -   🔥 [ESLint](https://eslint.org/) - Javascript-linter
-   ESLint Rules:
    -   💀 [eslint:recommended](https://eslint.org/docs/latest/rules/) - Default ESLint rules
    -   💀 [eslint-plugin-sonarjs](https://github.com/SonarSource/eslint-plugin-sonarjs) - SonarJS rules for ESLint to detect bugs and suspicious patterns in your code
    -   🔏 Typescript:
        -   💀 [typescript-eslint:recommended](https://typescript-eslint.io/linting/configs/#recommended) - Default Typescript rules
        -   💀 [typescript-eslint:recommended-requiring-type-checking](https://typescript-eslint.io/linting/configs/#recommended-requiring-type-checking) - Addition Typescript rules that require type information
        -   💀 [typescript-eslint:strict](https://typescript-eslint.io/linting/configs/#strict) - Additional Typescript rules that can also catch bugs but are more opinionated than recommended rules
    -   🔤 Naming:
        -   🦄 [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn) - More than 100 powerful ESLint rules (including more consistent naming patterns)
    -   🔢 Sorting:
        -   💀 [eslint-plugin-import](https://github.com/import-js/eslint-plugin-import), [eslint-plugin-simple-import-sort](https://github.com/lydell/eslint-plugin-simple-import-sort) - Rules for sorting imports in code

-   Commits:
    -   🤝 [commitlint](https://commitlint.js.org/#/) - Commits-linter
    -   🐶 [husky](https://typicode.github.io/husky/) - Tool for managing git hooks
-   Git staged files:
    -   💣 [lint-staged](https://github.com/okonet/lint-staged) - Linting git staged filed
-   Code formatting:
    -   🎀 [Prettier](https://prettier.io/) - Code formatting

## Commits

-   Rules:
    -   🎛️ [Conventional Commits](https://www.conventionalcommits.org/uk/v1.0.0/) - specification for writing commits
 
## Local setup

- docker compose up / install postgresql to local machine
- fill .env file
- npm install
- npx simple-git-hooks
- npm run migrate:dev
- npm run seed
- npm run start:dev
