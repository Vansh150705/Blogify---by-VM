# Troubleshooting

Common issues and how to resolve them.

## Server won't start

- **`MongooseServerSelectionError`** — check `MONGODB_URI` and that your IP is
  allowlisted in MongoDB Atlas.
- **`Missing environment variable`** — ensure every key in `server/.env.example`
  is present in your `server/.env`.

## Client can't reach the API

- Confirm the server is running on the expected port.
- Verify `VITE_BASE_URL` in `client/.env` matches the server URL.
- Restart the Vite dev server after changing `.env` values.

## Image uploads fail

- Double-check all three ImageKit variables are set.
- Confirm the request is sent as `multipart/form-data` with the field name `image`.

## AI generation returns an error

- Verify `GEMINI_API_KEY` is valid and has quota remaining.
- Check the server logs for the exact error message.

## 401 / Unauthorized on admin routes

- The JWT may be missing or expired — log in again to obtain a fresh token.
- Ensure the token is sent in the `Authorization` header.

Still stuck? Open an issue with logs and reproduction steps.
