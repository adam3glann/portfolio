# Adam Adel — Personal Portfolio

A lightweight, editorial portfolio built with semantic HTML, CSS, and vanilla JavaScript. There is no build step or runtime dependency. Project content is maintained in the `projects` array near the top of `script.js`.

The architectural hero is a local SVG illustration. The Nuvanti, PadelSync, and restaurant project panels are conceptual HTML/CSS interface visuals, visibly labeled as concepts rather than screenshots of the live products. No project screenshot assets were present in the repository.

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
