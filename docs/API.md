# Blogify REST API Reference

Base URL (local): `http://localhost:3000`

All request/response bodies are JSON unless noted. Protected routes require a
JWT sent in the `Authorization` header. Image uploads use `multipart/form-data`.

---

## Health

### `GET /`
Returns a plain-text health check.

**Response:** `API is Working`

---

## Blog routes — `/api/blog`

| Method | Endpoint | Auth | Description |
| ------ | -------- | :--: | ----------- |
| POST | `/add` | ✅ | Create a blog post (accepts an `image` file upload) |
| GET | `/all` | — | List all published blogs |
| GET | `/:blogId` | — | Get a single blog by its ID |
| POST | `/delete` | ✅ | Delete a blog by ID |
| POST | `/toggle-publish` | ✅ | Toggle a blog's published state |
| POST | `/add-comment` | — | Add a comment to a blog |
| POST | `/comments` | — | Get comments for a blog |
| POST | `/generate` | ✅ | Generate blog content with Google Gemini |

### Example — list all blogs

```http
GET /api/blog/all
```

### Example — add a comment

```http
POST /api/blog/add-comment
Content-Type: application/json

{
  "blog": "<blogId>",
  "name": "Jane Doe",
  "content": "Great post!"
}
```

---

## Admin routes — `/api/admin`

| Method | Endpoint | Auth | Description |
| ------ | -------- | :--: | ----------- |
| POST | `/login` | — | Admin login, returns a JWT |
| GET | `/comments` | ✅ | List all comments |
| GET | `/blogs` | ✅ | List all blogs (including drafts) |
| POST | `/delete-comment` | ✅ | Delete a comment by ID |
| POST | `/approve-comment` | ✅ | Approve a comment by ID |
| GET | `/dashboard` | ✅ | Dashboard stats (counts and recent activity) |

### Example — admin login

```http
POST /api/admin/login
Content-Type: application/json

{
  "email": "admin@example.com",
  "password": "123456"
}
```

**Response**

```json
{ "success": true, "token": "<jwt>" }
```

Send the returned token on protected routes:

```http
Authorization: <jwt>
```

---

> Endpoints are defined in `server/routes/` and implemented in
> `server/controllers/`. Update this document whenever routes change.
