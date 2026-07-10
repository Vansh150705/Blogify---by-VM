# Security Policy

## Supported Versions

This project is actively maintained on the `main` branch. Security fixes are
applied to the latest version only.

## Reporting a Vulnerability

If you discover a security vulnerability, please **do not open a public issue**.
Instead, report it privately by emailing the maintainer or using GitHub's
[private vulnerability reporting](https://docs.github.com/en/code-security/security-advisories/guidance-on-reporting-and-writing-information-about-vulnerabilities/privately-reporting-a-security-vulnerability).

Please include:

- A description of the vulnerability and its impact
- Steps to reproduce
- Any suggested remediation

You can expect an acknowledgement within a few days.

## Security Best Practices for This Project

- **Never commit secrets.** All keys (MongoDB URI, JWT secret, Gemini and
  ImageKit credentials) belong in `.env` files, which are git-ignored.
- Use the provided `.env.example` files as a template.
- Rotate any credential that may have been exposed.
- Keep dependencies up to date and review `npm audit` output regularly.
