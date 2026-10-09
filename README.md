# Adam Adel — Personal Portfolio

A lightweight, editorial portfolio built with semantic HTML, CSS, and vanilla JavaScript. There is no build step or runtime dependency. Project content is maintained in the `projects` array near the top of `script.js`.

The hero uses product photography from the live [Nuvanti site](https://nuvanti-shop.pages.dev/). The Nuvanti, PadelSync, and Restaurant Management System sections use screenshots supplied for this portfolio, stored locally under `assets/projects/`; each gallery shows three captures initially and lets visitors expand the rest. The restaurant gallery omits one supplied image that shows source code rather than the interface. Inventory & Sales Tracker remains a project identity card because no screenshots were supplied for it. ARQEVIN remains a separate company venture.

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
