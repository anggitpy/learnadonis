# LearnAdonis

A hands-on learning project built with **AdonisJS**, **Lucid ORM (SQLite)**, **VineJS**, and **Edge.js** with **daisyUI**.

It demonstrates server-rendered MVC patterns without unnecessary abstraction:
- **Dashboard Overview** (`/dashboard`): Shared Edge v6 layout (`@layout.dashboard`), named slots (`@slot('actions')`), and reusable components (`@!statCard`).
- **Task Tracker** (`/tasks`): Simple create, toggle completion, and delete actions.
- **Recipe Module** (`/recipes`): Full CRUD (list, create, view details, edit/update, delete) with form validation.

---

## Prerequisites

- **Node.js** `>= 24.0.0`
- **npm**

---

## How to Run Locally

### 1. Clone the repository & install dependencies

```bash
git clone git@github.com:anggitpy/learnadonis.git
cd learnadonis
npm install
```

### 2. Set up environment variables

Copy `.env.example` to `.env` and generate an application key:

```bash
cp .env.example .env
node ace generate:key
```

> **Windows (PowerShell):** Use `Copy-Item .env.example .env` instead of `cp`.

### 3. Run database migrations (and optional seeder)

This project uses SQLite (`tmp/db.sqlite3`), so no external database server is required:

```bash
node ace migration:run
node ace db:seed
```

### 4. Start the development server

```bash
npm run dev
```

Open your browser at **http://localhost:3333** (redirects to `/dashboard`).

---

## How the Project Works

Every HTTP request follows a direct, readable flow:

1. **Routes (`start/routes.ts`)**
   Maps URLs and HTTP verbs (`GET`, `POST`) to controller methods.
2. **Controllers (`app/controllers/`)**
   Validates incoming form data with **VineJS**, queries or updates the database using **Lucid Models**, and either renders an Edge view or redirects.
   - `dashboard_controller.ts` — Computes task statistics for `/dashboard`
   - `tasks_controller.ts` — Handles task creation, completion toggle, and deletion
   - `recipes_controller.ts` — Full 7-action CRUD (`index`, `create`, `store`, `show`, `edit`, `update`, `destroy`)
3. **Models & Migrations (`app/models/`, `database/migrations/`)**
   - `Task` (`tasks` table)
   - `Recipe` (`recipes` table)
4. **Views & Layouts (`resources/views/`)**
   - `components/layout/dashboard.edge` — Shared daisyUI drawer + navbar layout invoked via `@layout.dashboard({ title, activeNav })`
   - `components/stat_card.edge` — Reusable stat card component invoked via `@!statCard({ ... })`
   - `dashboard/index.edge`, `tasks/index.edge`, and `recipes/*.edge` — Page templates

---

## Useful Commands

| Command | Description |
| :--- | :--- |
| `npm run dev` | Start the development server with hot reload (`node ace serve --watch`) |
| `node ace migration:run` | Run pending SQLite database migrations |
| `node ace migration:rollback` | Roll back the last batch of migrations |
| `node ace db:seed` | Seed sample tasks into the database |
| `npm run typecheck` | Run TypeScript type checking (`tsc --noEmit`) |
| `npm run lint` | Run ESLint |
| `npm test` | Run Japa tests (`node ace test`) |
