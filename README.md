# Adam Adel — Personal Portfolio

A lightweight, static portfolio built with semantic HTML, CSS, and vanilla JavaScript. There is no build step or runtime dependency. Project content is maintained in the `projects` array near the top of `script.js`.

## Run locally

Open `index.html` directly, or serve the folder locally:

```sh
npx serve .
```

## Deploy to Cloudflare Pages

Create a Cloudflare Pages project and connect this repository. Use these build settings:

- Framework preset: **None**
- Build command: *(leave blank)*
- Build output directory: `/`

Alternatively, deploy with Wrangler:

```sh
npx wrangler pages deploy . --project-name adam-adel-portfolio
```

## Personal links to configure

The email and phone number come from the supplied CV. The CVs list GitHub and LinkedIn without their profile URLs, so those links are omitted until the URLs are known. Project URLs can be added in the `projects` array in `script.js`.
