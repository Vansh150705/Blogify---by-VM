# Glossary

Key terms used across the Blogify codebase and docs.

| Term | Meaning |
| ---- | ------- |
| **Blog** | A post authored in the admin dashboard and shown on the public site. |
| **Comment** | Reader feedback on a blog, moderated (approved/deleted) by an admin. |
| **Admin** | Authenticated user who manages blogs and comments via the dashboard. |
| **JWT** | JSON Web Token used to authenticate admin API requests. |
| **Controller** | Server module in `server/controllers/` holding route logic. |
| **Middleware** | Functions like `auth` and `multer` that process requests before controllers. |
| **ImageKit** | Third-party service used to store and optimize uploaded images. |
| **Gemini** | Google's LLM used for AI-assisted content generation. |
| **VITE_BASE_URL** | Client env var pointing to the backend API base URL. |
| **Draft** | A blog that exists but is not yet published/visible to the public. |
