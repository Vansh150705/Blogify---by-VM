# Deployment Guide

Blogify is deployed as two separate Vercel projects — one for the React client
and one for the Express server. Both apps already include a `vercel.json`.

## Prerequisites

- A [Vercel](https://vercel.com/) account
- A MongoDB Atlas database
- Google Gemini and ImageKit API keys

## 1. Deploy the server

1. Create a new Vercel project and point it at the `server/` directory.
2. Add the following environment variables in **Project Settings → Environment Variables**:

   | Variable | Description |
   | -------- | ----------- |
   | `MONGODB_URI` | MongoDB connection string |
   | `JWT_SECRET` | Secret used to sign admin JWTs |
   | `GEMINI_API_KEY` | Google Gemini API key |
   | `IMAGEKIT_PUBLIC_KEY` | ImageKit public key |
   | `IMAGEKIT_PRIVATE_KEY` | ImageKit private key |
   | `IMAGEKIT_URL_ENDPOINT` | ImageKit URL endpoint |

3. Deploy. Note the resulting URL (e.g. `https://blogify-api.vercel.app`).

## 2. Deploy the client

1. Create a second Vercel project pointing at the `client/` directory.
2. Add the environment variable:

   | Variable | Description |
   | -------- | ----------- |
   | `VITE_BASE_URL` | The deployed server URL from step 1 |

3. Vercel auto-detects Vite. The build command is `npm run build` and the
   output directory is `dist`.
4. Deploy.

## 3. Verify

- Visit the client URL and confirm blogs load from the API.
- Log in to the admin dashboard using your configured credentials.

## Troubleshooting

- **CORS errors:** the server enables CORS for all origins by default; confirm
  `VITE_BASE_URL` points at the correct server deployment.
- **500 on API calls:** double-check every server environment variable is set.
- **Blank page after deploy:** ensure the client `vercel.json` rewrites route to
  `index.html` for SPA navigation.
