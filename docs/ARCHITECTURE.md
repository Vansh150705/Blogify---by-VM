# Architecture Overview

Blogify is a two-tier MERN application: a React (Vite) single-page client and an
Express REST API backed by MongoDB.

## High-level diagram

```
┌──────────────┐        HTTPS/JSON        ┌──────────────┐
│   client/    │  ───────────────────▶    │   server/    │
│ React + Vite │                          │   Express    │
│ Tailwind CSS │  ◀───────────────────    │   REST API   │
└──────────────┘                          └──────┬───────┘
                                                 │
                          ┌──────────────────────┼──────────────────────┐
                          │                      │                      │
                     ┌────▼────┐          ┌──────▼──────┐        ┌──────▼──────┐
                     │ MongoDB │          │  ImageKit   │        │   Gemini    │
                     │ (Mongoose)         │  (uploads)  │        │  (AI text)  │
                     └─────────┘          └─────────────┘        └─────────────┘
```

## Client

- **Framework:** React 19 with React Router for navigation.
- **Styling:** Tailwind CSS 4.
- **State/data:** Axios calls the API; `VITE_BASE_URL` points at the server.
- **Editor:** Quill for rich-text blog authoring; `marked` for rendering.

## Server

- **Entry:** `server.js` wires CORS, JSON parsing, and the two routers.
- **Routers:** `routes/adminRoutes.js` and `routes/blogRoutes.js`.
- **Controllers:** business logic in `controllers/`.
- **Middleware:** `auth.js` (JWT verification) and `multer.js` (uploads).
- **Models:** `Blog` and `Comment` Mongoose schemas.
- **Configs:** `db.js`, `gemini.js`, and `imageKit.js`.

## Request lifecycle (create a blog)

1. Admin submits the form with an image.
2. `multer` parses the multipart body.
3. `auth` verifies the JWT.
4. The controller uploads the image to ImageKit and persists the blog in MongoDB.
5. The API returns the created record; the client updates its view.
