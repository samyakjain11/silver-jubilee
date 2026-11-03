# Silver Jubilee slideshow

A click-through photo slideshow for Mom and Dad's 25th anniversary (27 November 2026), hosted on GitHub Pages.

## Presenting

Open the site on the laptop connected to the TV or projector.

- **→ / Space / click:** next slide
- **←:** previous slide
- **F:** fullscreen
- **P:** autoplay on or off

## Editing

Everything you see is in `slides.js`. Change the text between the quotes and save.

To add a photo, upload it to the `photos` folder, then put its name on a photo slide:

```js
{ type: "photo", photo: "photos/wedding-day.jpg", caption: "The big day", detail: "Add a line here." },
```

Slide types: `title`, `chapter`, `photo`, `quote` and `message`.
Resize big phone photos to about 2000px on the long side so the site loads quickly.
