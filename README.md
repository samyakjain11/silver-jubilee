# Silver Jubilee slideshow

A click-through photo slideshow for Mom and Dad's 25th anniversary (27 November 2026), hosted on GitHub Pages.

The site opens on a home screen with two choices:

- **Presentation** (`presentation.html`): the photo slideshow for the party.
- **Planner** (`planner.html`): run of show, performances, music cues, roles and prep timeline. It asks for the family password.

## Presenting

Open the site on the laptop connected to the TV or projector and pick **Presentation**.

- **→ / Space / click:** next slide
- **←:** previous slide
- **F:** fullscreen
- **P:** autoplay on or off

## Editing

Everything in the slideshow is in `slides.js`; everything in the planner is in `planner.js`. Change the text between the quotes and save.

To add a photo, upload it to the `photos` folder, then put its name on a photo slide:

```js
{ type: "photo", photo: "photos/wedding-day.jpg", caption: "The big day", detail: "Add a line here." },
```

Slide types: `title`, `chapter`, `photo`, `quote` and `message`.
Resize big phone photos to about 2000px on the long side so the site loads quickly.

## About the planner password

The password keeps casual visitors out, but it is not real security: this repo is public, so anyone who finds `planner.js` on GitHub can read it. Keep addresses, phone numbers and money details out of it.

To change the password, put the SHA-256 of the new password into `PASSWORD_HASH` near the top of the script in `planner.html`.
