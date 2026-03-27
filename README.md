<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Christina Huang Portfolio

This project uses Vite + React and is configured for deployment on GitHub Pages.

## Run Locally

**Prerequisites:** Node.js 20+


1. Install dependencies:
   `npm install`
2. If you still need Gemini features, set `GEMINI_API_KEY` in `.env.local`
3. Run the app:
   `npm run dev`

## Deploy to GitHub Pages

1. Push the repository to GitHub.
2. In GitHub, open `Settings -> Pages`.
3. Set `Source` to `GitHub Actions`.
4. Push to `main` and the workflow in `.github/workflows/deploy.yml` will publish the site.

## Notes

- Routing uses `HashRouter` so refreshing subpages works on GitHub Pages.
- Static assets use relative paths so images and PDFs load correctly from a repository subpath.
- Do not expose private API keys in a public frontend deployment.
