# Notes App

App for managing your notes

### ❤️ Backend

- Main:
  - 🐻 [NestJS](https://nestjs.com/) - Node.js framework
- Database:
  - 🐘 [PostgreSQL](https://www.postgresql.org/) - Relational database
- ORM:
  - 🔺 [Prisma](https://www.prisma.io/) - Node.js and TypeScript ORM

## Code Quality

- JS:
  - 🔥 [ESLint](https://eslint.org/) - Javascript-linter
- ESLint Rules:

  - 💀 [eslint:recommended](https://eslint.org/docs/latest/rules/) - Default ESLint rules
  - 💀 [eslint-plugin-sonarjs](https://github.com/SonarSource/eslint-plugin-sonarjs) - SonarJS rules for ESLint to detect bugs and suspicious patterns in your code
  - 🔏 Typescript:
    - 💀 [typescript-eslint:recommended](https://typescript-eslint.io/linting/configs/#recommended) - Default Typescript rules
    - 💀 [typescript-eslint:recommended-requiring-type-checking](https://typescript-eslint.io/linting/configs/#recommended-requiring-type-checking) - Addition Typescript rules that require type information
    - 💀 [typescript-eslint:strict](https://typescript-eslint.io/linting/configs/#strict) - Additional Typescript rules that can also catch bugs but are more opinionated than recommended rules
  - 🔤 Naming:
    - 🦄 [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn) - More than 100 powerful ESLint rules (including more consistent naming patterns)
  - 🔢 Sorting:
    - 💀 [eslint-plugin-import](https://github.com/import-js/eslint-plugin-import), [eslint-plugin-simple-import-sort](https://github.com/lydell/eslint-plugin-simple-import-sort) - Rules for sorting imports in code

- Commits:
  - 🤝 [commitlint](https://commitlint.js.org/#/) - Commits-linter
  - 🐶 [husky](https://typicode.github.io/husky/) - Tool for managing git hooks
- Git staged files:
  - 💣 [lint-staged](https://github.com/okonet/lint-staged) - Linting git staged filed
- Code formatting:
  - 🎀 [Prettier](https://prettier.io/) - Code formatting

## Commits

- Rules:
  - 🎛️ [Conventional Commits](https://www.conventionalcommits.org/uk/v1.0.0/) - specification for writing commits

## Local setup

### 1. For properly working with backend you need create empty database. Choose one of two options:

| First option                                                 | Second option                              |
| ------------------------------------------------------------ | ------------------------------------------ |
| Install `Docker` on local machine                            | Install `PostgreSQL` on local machine      |
| Fill `.env` file using `.env.example` DB and PG-ADMIN fields | Add server group                           |
| Run `docker compose up` command                              | Add empty database in created server group |
| Open `localhost:5050`                                        |
| Use email and password from `.env`                           |
| Add server group                                             |
| Add empty database in created server group                   |

### 2. Install packages and get git hooks:

- `npm install`
- `npx simple-git-hooks`

### 3. Fill `database url` field in `.env` using `.env.example`.

### 4. Create migration

- `npm run migrate:dev`

### 4. Get mock data:

- `npm run seed`

### 5. Finally, start server:

| Recommended         | Production           | Development     |
| ------------------- | -------------------- | --------------- |
| `npm run start:dev` | `npm run start:prod` | `npm run start` |

## Dockerizing:

| First option                            | Second option       |
| --------------------------------------- | ------------------- |
| `docker build -t notes-app-nestjs .`    | `docker compose up` |
| `docker run -p80:3000 notes-app-nestjs` |                     |
