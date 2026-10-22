# Itzfizz Scroll Study

A responsive, scroll-driven automotive hero inspired by the [Itzfizz reference demo](https://paraschaturvedi.github.io/car-scroll-animation/). It features the reference's top-view McLaren image, a pinned track, and GSAP ScrollTrigger so the car follows scroll position in both directions.

The percentages are reproduced from the reference as illustrative design content, not verified business results.

## Run locally

Requires Node.js 20.19+ or 22.12+ and npm.

```sh
npm install
npm run dev
```

Open the local URL printed by Vite. Create a production bundle with `npm run build`; inspect it locally with `npm run preview`.

## Built with

- React and Vite
- Tailwind CSS 4
- GSAP and ScrollTrigger
- Responsive CSS with reduced-motion support

## Deploy to Vercel

Create a GitHub repository and push this project, then import that repository into Vercel. Vercel detects Vite automatically; use `npm run build` as the build command and `dist` as the output directory. No environment variables are required. Vercel will provide a public URL after deployment.

## Publish to GitHub

Create an empty repository on GitHub, then run these commands from this project folder (replace the URL with the repository's HTTPS URL):

```sh
git init
git add .
git commit -m "Build Itzfizz scroll-driven hero"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

The car image is stored locally in `public/images/mclaren-top.png`, so it needs no runtime image request. It was obtained from the public reference page; confirm its usage rights before public deployment. Google Fonts are loaded remotely with local system fallbacks.