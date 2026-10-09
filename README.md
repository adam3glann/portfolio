# Adam Adel — Personal Portfolio

A lightweight, editorial portfolio built with semantic HTML, CSS, and vanilla JavaScript. There is no build step or runtime dependency. Project content is maintained in the `projects` array near the top of `script.js`.

The hero and Nuvanti gallery use genuine product photography observed on the live [Nuvanti storefront](https://nuvanti.wuiltstore.com/en). The files are local copies so the portfolio does not depend on the store's image host to load them. PadelSync, Restaurant Management System, and Inventory & Sales Tracker are presented with project identity cards because no verified screenshots for them were available in the repository or accessible project pages. Those cards are not interface screenshots. ARQEVIN remains a separate company venture.

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

The email and phone number come from the supplied CV. The CVs list GitHub and LinkedIn without their profile URLs; add the verified URLs to the `socialProfiles` object in `script.js` and the links will appear in the contact section and footer. Project URLs can be added in the `projects` array in `script.js`.
