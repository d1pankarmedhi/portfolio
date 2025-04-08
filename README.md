
# Portfolio Website

This is a responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## Project info

**URL**: https://lovable.dev/projects/57bb4129-0cf2-4f24-889f-77dea6a9b570

## Deployment

This project is configured to automatically deploy to GitHub Pages using GitHub Actions whenever changes are pushed to the main branch.

### Automatic Deployment with GitHub Actions

1. Push your changes to the main branch
2. GitHub Actions will automatically build and deploy your site
3. Visit your site at https://[your-username].github.io/[repository-name]

### Manual Deployment

To manually deploy your site:

```sh
# Build the project
npm run build

# Use the deploy script (on Unix/Linux/macOS)
sh deploy.sh

# OR deploy using gh-pages package
npm install -g gh-pages
gh-pages -d dist
```

## Development

```sh
# Install dependencies
npm install

# Start development server
npm run dev
```

## Technologies Used

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS
- GitHub Actions for CI/CD
