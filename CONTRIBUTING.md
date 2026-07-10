# Contributing to Blogify

Thanks for your interest in contributing to **Blogify by VM**! This document explains how to set up the project locally and the workflow for submitting changes.

## Getting Started

1. **Fork** the repository and clone your fork.
2. Install dependencies for both apps:
   ```bash
   cd server && npm install
   cd ../client && npm install
   ```
3. Copy the example environment files and fill in your own values:
   ```bash
   cp server/.env.example server/.env
   cp client/.env.example client/.env
   ```
4. Start the backend (`npm run server` in `server/`) and the frontend (`npm run dev` in `client/`).

## Branching

- Create a feature branch from `main`: `git checkout -b feat/short-description`.
- Keep branches focused on a single change.

## Commit Messages

We follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` a new feature
- `fix:` a bug fix
- `docs:` documentation only
- `chore:` tooling / maintenance
- `refactor:` code change that neither fixes a bug nor adds a feature

## Pull Requests

- Run `npm run lint` in `client/` before opening a PR.
- Describe **what** changed and **why**.
- Link any related issues.
- Make sure the app builds (`npm run build` in `client/`).

## Code Style

- Use the shared `.editorconfig` and Prettier config for formatting.
- Prefer small, readable functions and meaningful names.

## Reporting Bugs

Open an issue using the **Bug report** template and include steps to reproduce.

Happy hacking! 🚀
