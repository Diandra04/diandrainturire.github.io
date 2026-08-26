# diandrainturire.github.io
Hello,
This is my personal portfolio website — you can find it live at https://diandrainturire.com/

## Editing styles

Tailwind CSS is compiled ahead of time into `styles.css` (not loaded from a CDN).
If you add a new Tailwind class to `index.html` that isn't already used elsewhere
on the page, rebuild the stylesheet before pushing:

```
npm install
npm run build:css
```

`npm run watch:css` rebuilds automatically while editing.
