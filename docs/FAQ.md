# Frequently Asked Questions

### What is Blogify?
A full-stack blogging platform built with the MERN stack, featuring an admin
dashboard, AI-assisted content generation (Google Gemini), and optimized image
hosting (ImageKit).

### Do I need API keys to run it locally?
Yes. You need a MongoDB connection string, a JWT secret, Gemini credentials, and
ImageKit credentials. Copy `server/.env.example` to `server/.env` and fill them in.

### Why is the client showing no blogs?
Make sure the server is running and `VITE_BASE_URL` in `client/.env` points to
the correct server address (default `http://localhost:3000`).

### How do I log in to the admin dashboard?
Use the credentials configured for your deployment. The demo credentials are
listed in the main README.

### Can I use a provider other than ImageKit for images?
The upload logic lives in `server/configs/imageKit.js` and the blog controller.
You can swap it for another provider by replacing those calls.

### Which Node version should I use?
Node 18 or higher. The repo pins this in `.nvmrc`.

### How do I report a bug or request a feature?
Open an issue using the provided templates in `.github/ISSUE_TEMPLATE/`.
