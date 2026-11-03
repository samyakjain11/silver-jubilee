// ─────────────────────────────────────────────────────────────
//  EDIT THIS FILE to change the slideshow. No coding needed:
//  just change the text between the quotes and add photos.
//
//  Photos: put them in the "photos" folder and write the file
//  name, e.g.  photo: "photos/wedding-day.jpg"
//  Leave photo: "" to show a pretty placeholder frame instead.
// ─────────────────────────────────────────────────────────────

window.SHOW = {
  couple: "Mom & Dad",
  since: "",                         // their wedding date, e.g. "12 February 2001"
  autoplaySeconds: 8,                // seconds per slide when autoplay is on

  slides: [
    {
      type: "title",
      title: "25 Years of Us",
      subtitle: "Celebrating Mom & Dad's Silver Jubilee",
      note: "27 November 2026",
    },

    { type: "chapter", number: "Chapter 1", title: "The Match", subtitle: "Two families, one very good idea" },
    { type: "photo", photo: "", caption: "The first meeting", detail: "Who was more nervous? We'll find out in the shoe game." },
    { type: "photo", photo: "", caption: "The engagement", detail: "Add the year and a sweet line here." },

    { type: "chapter", number: "Chapter 2", title: "The Wedding", subtitle: "Where it all began" },
    { type: "photo", photo: "", caption: "The big day", detail: "Add the wedding date and place." },
    { type: "photo", photo: "", caption: "The family together", detail: "Everyone who made it happen." },

    { type: "chapter", number: "Chapter 3", title: "Building a Home", subtitle: "First home, first everything" },
    { type: "photo", photo: "", caption: "Our first home", detail: "Add the city and year." },
    { type: "photo", photo: "", caption: "And then came us", detail: "The chaos officially began." },

    { type: "chapter", number: "Chapter 4", title: "The Adventures", subtitle: "Trips, festivals and everyday moments" },
    { type: "photo", photo: "", caption: "A favourite trip", detail: "Where did you go?" },
    { type: "photo", photo: "", caption: "Festival memories", detail: "Add a line about it." },

    { type: "quote", text: "Twenty-five years of chai, patience and showing up for each other.", by: "From all of us" },

    { type: "chapter", number: "Chapter 5", title: "Today", subtitle: "Still the best team we know" },
    { type: "photo", photo: "", caption: "Mom & Dad, 2026", detail: "" },

    { type: "message", from: "Name of a relative", text: "Write a short message from a family member or friend here." },
    { type: "message", from: "Another friend", text: "Messages can be two or three sentences. Keep them sweet and short." },

    {
      type: "title",
      title: "Happy 25th Anniversary",
      subtitle: "Here's to the next 25",
      note: "With love, your family",
    },
  ],
};
