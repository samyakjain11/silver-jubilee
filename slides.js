// ─────────────────────────────────────────────────────────────
//  EDIT THIS FILE to change the slideshow. No coding needed:
//  just change the text between the quotes and add photos.
//
//  Photos: put them in the "photos" folder and write the file
//  name, e.g.  photo: "photos/wedding-day.jpg"
//  Leave photo: "" to show a pretty placeholder frame instead.
//  A "collage" slide shows 2 to 4 photos at once: list them in photos: [ ... ].
// ─────────────────────────────────────────────────────────────

window.SHOW = {
  couple: "Mom & Dad",
  since: "26 November 2001",                      // their wedding date, e.g. "12 February 2001"
  autoplaySeconds: 8,                // seconds per slide when autoplay is on

  slides: [
    {
      type: "title",
      title: "25 Years of Us",
      subtitle: "Celebrating Mom & Dad's Silver Jubilee",
      note: "27 November 2026",
    },

    // The slides follow the order of the evening (see Run of show in the Planner).

    // ── OPENING ──
    { type: "chapter", number: "To begin", title: "With Blessings", subtitle: "A few words from Grandpa & Grandma" },
        { type: "chapter", number: "The grand entrance", title: "A Shaadi Welcome", subtitle: "The uncles & aunts lead the way for..." },
    { type: "chapter", number: "Please welcome", title: "The Jodi of the Night", subtitle: "Mom & Dad" },
    { type: "chapter", number: "A song from Grandpa", title: "Pyar Deewana Hota Hai", subtitle: "From Kati Patang · sung by Grandpa" },

    // ── BEFORE US: each of them on their own ──
    { type: "chapter", number: "Once upon a time", title: "Before Us", subtitle: "Two stories that started separately" },

    // Dad's early photos, shown right before Samyak's dance for him. Add more early photos here.
    { type: "chapter", number: "Meet", title: "Dad", subtitle: "The early years" },
    { type: "photo", photo: "", caption: "Little Dad", detail: "A childhood photo and where he grew up." },
    { type: "photo", photo: "photos/dad-young-bike.jpg", caption: "Young Dad", detail: "Him and his bike, even back then." },
    { type: "photo", photo: "photos/dad-today-bike.jpg", caption: "Dad as we know him", detail: "Some loves never change." },
    { type: "chapter", number: "A dance for Dad", title: "O O Jaane Jaana", subtitle: "From Pyaar Kiya To Darna Kya · performed by Samyak" },

    { type: "chapter", number: "Meet", title: "Mom", subtitle: "The early years" },
    { type: "photo", photo: "photos/mom-young-portrait.jpg", caption: "Young Mom", detail: "Her and her smile, even back then." },
    { type: "photo", photo: "photos/mom-young-bike.jpg", caption: "Young Mom", detail: "Already ready for the road." },
    { type: "photo", photo: "photos/mom-today-bike.jpg", caption: "Mom as we know her", detail: "And now she rides too!" },
    { type: "chapter", number: "A dance for Mom", title: "Mere Khwabon Mein Jo Aaye", subtitle: "From Dilwale Dulhania Le Jayenge · performed by Anshi & Yashi" },

    // ── THE RISHTA ──
    { type: "chapter", number: "Then came", title: "The Rishta", subtitle: "Two families, one very good idea" },
    { type: "photo", photo: "photos/rishta-1.jpg", caption: "The rishta", detail: "Who was more nervous? We'll find out in the game." },
    { type: "collage", caption: "The engagement", detail: "2001", photos: ["photos/engagement-1.jpg", "photos/engagement-2.jpg", "photos/engagement-3.jpg", "photos/engagement-4.jpg"] },
    { type: "chapter", number: "The first meeting", title: "Tum Se Mil Ke Dil Ka Hai Jo Haal", subtitle: "From Main Hoon Na · performed by Kake & Surbhi" },

    // ── GAME 1 ──
    { type: "chapter", number: "Game time", title: "Belan vs Dumbbell", subtitle: "Belan for Mom, dumbbell for Dad. Back to back, no peeking!" },

    // ── SONG BEFORE THE WEDDING ──
    { type: "chapter", number: "A song for the couple", title: "Loote Koi Mann Ka Nagar", subtitle: "From Abhimaan · sung by Rajesh uncle" },

    // ── THE SHAADI ──
    { type: "chapter", number: "And then", title: "The Shaadi", subtitle: "Where it all began" },
    { type: "photo", photo: "photos/shaadi-main.jpg", caption: "The big day", detail: "26 November 2001" },
    { type: "collage", caption: "Shaadi moments", detail: "", photos: ["photos/shaadi-1.jpg", "photos/shaadi-2.jpg", "photos/shaadi-3.jpg"] },
    { type: "chapter", number: "The wedding medley", title: "Maahi Vey · Jhumka Gira Re", subtitle: "Performed by Gayatri & Hanisha" },

    // ── DINNER IS OPEN (the program carries on) ──
    { type: "chapter", number: "Dinner is open", title: "Help Yourselves!", subtitle: "Grab a plate. The show goes on while you eat" },

    // ── RETRO THROWBACKS ──
    // Plays while dinner opens and people get their food.
    { type: "chapter", number: "Rewind", title: "Retro Throwbacks", subtitle: "The old photo albums, opened up" },
    { type: "photo", photo: "photos/retro-beach.jpg", caption: "Beach days", detail: "" },
    { type: "photo", photo: "photos/retro-beach-collage.jpg", caption: "Sun, sand and a jet ski", detail: "" },
    { type: "photo", photo: "photos/retro-baby.jpg", caption: "And then there were three", detail: "" },
    { type: "collage", caption: "Throwback trips", detail: "", photos: ["photos/retro-1.jpg", "photos/retro-2.jpg", "photos/retro-3.jpg", "photos/retro-4.jpg"] },
    { type: "collage", caption: "More throwbacks", detail: "", photos: ["photos/retro-5.jpg", "photos/retro-6.jpg", "photos/retro-7.jpg", "photos/retro-8.jpg"] },
    { type: "collage", caption: "Good times", detail: "", photos: ["photos/retro-9.jpg", "photos/retro-10.jpg", "photos/retro-11.jpg", "photos/retro-12.jpg"] },
    { type: "collage", caption: "From the old albums", detail: "", photos: ["photos/retro-13.jpg", "photos/retro-14.jpg", "photos/retro-15.jpg"] },
    { type: "collage", caption: "Snow and sea", detail: "", photos: ["photos/retro-16.jpg", "photos/retro-17.jpg"] },

    // ── GAME 2: PROP SONG GAME ──
    { type: "chapter", number: "Game time", title: "The Prop Song Game", subtitle: "Led by Surbhi · get ready to play!" },

    // ── POETRY ──
    { type: "chapter", number: "With love", title: "Blessings from the Elders", subtitle: "A few words from the heart" },
    { type: "chapter", number: "A few words of poetry", title: "From the Heart", subtitle: "Written and read by Chhote Baba" },

    // ── WISHES & MEMORIES ──
    { type: "chapter", number: "From all of us", title: "Wishes & Memories", subtitle: "From the people who love them" },
    { type: "chapter", number: "A few words from family", title: "From the Family", subtitle: "Ashoo Bua, Ajai Fufaji & Kartik Bhai" },
    // Click the video (or press Enter) to play with sound. Arrow keys still move slides.
    { type: "video", video: "videos/words-from-family.mp4", poster: "videos/words-from-family.jpg", caption: "Words from family" },
    { type: "chapter", number: "A song for the couple", title: "Tere Sang Yaara", subtitle: "From Rustom · sung by Pankaj uncle" },

    // ── MOM & DAD SPEAK, THEN DAD SINGS ──
    { type: "chapter", number: "In their own words", title: "Mom & Dad", subtitle: "A few words from the two of them" },
    { type: "chapter", number: "Dad sings for Mom", title: "Tum Se Hi Din Hota Hai", subtitle: "From Jab We Met" },
    // The photos below play behind Dad's song.
    { type: "collage", caption: "Growing up together", detail: "", photos: ["photos/home-1.jpg", "photos/home-2.jpg", "photos/home-3.jpg", "photos/home-4.jpg"] },
    { type: "collage", caption: "Family trips", detail: "", photos: ["photos/home-5.jpg", "photos/home-6.jpg", "photos/home-7.jpg", "photos/home-8.jpg"] },
    { type: "collage", caption: "Along the way", detail: "", photos: ["photos/home-9.jpg", "photos/home-10.jpg", "photos/home-11.jpg", "photos/home-12.jpg"] },
    { type: "collage", caption: "Festival memories", detail: "", photos: ["photos/festival-1.jpg", "photos/festival-2.jpg", "photos/festival-3.jpg"] },
    { type: "photo", photo: "photos/graduation.jpg", caption: "Proud parents", detail: "Samyak's graduation, 2024." },

    { type: "chapter", number: "Together", title: "Exploring the World", subtitle: "Sydney · Italy · Singapore · and more" },
    { type: "photo", photo: "photos/sydney-main.jpg", caption: "Sydney", detail: "On the Harbour Bridge." },
    { type: "collage", caption: "Sydney", detail: "", photos: ["photos/sydney-1.jpg", "photos/sydney-2.jpg", "photos/sydney-3.jpg", "photos/sydney-4.jpg"] },
    { type: "photo", photo: "photos/italy-main.jpg", caption: "Italy", detail: "The Colosseum, Rome." },
    { type: "collage", caption: "Rome", detail: "", photos: ["photos/rome-1.jpg", "photos/rome-2.jpg", "photos/rome-3.jpg"] },
    { type: "collage", caption: "Venice", detail: "", photos: ["photos/venice-1.jpg", "photos/venice-2.jpg", "photos/venice-3.jpg"] },
    { type: "collage", caption: "Florence & Cinque Terre", detail: "", photos: ["photos/italy-1.jpg", "photos/italy-2.jpg", "photos/italy-3.jpg"] },
    { type: "collage", caption: "Singapore", detail: "", photos: ["photos/singapore-1.jpg", "photos/singapore-2.jpg"] },
    { type: "collage", caption: "Niagara Falls", detail: "", photos: ["photos/niagara-1.jpg", "photos/niagara-2.jpg"] },

    { type: "chapter", number: "Together", title: "Adventure", subtitle: "Trails and bike rides" },
    { type: "photo", photo: "photos/trail-main.jpg", caption: "On the trail", detail: "" },
    { type: "collage", caption: "Outdoors", detail: "", photos: ["photos/trail-1.jpg", "photos/trail-2.jpg", "photos/trail-4.jpg"] },
    { type: "collage", caption: "On the bike", detail: "", photos: ["photos/bike-1.jpg", "photos/bike-2.jpg", "photos/bike-3.jpg", "photos/bike-4.jpg"] },
    { type: "collage", caption: "Riding together", detail: "", photos: ["photos/bike-5.jpg", "photos/bike-6.jpg", "photos/bike-7.jpg", "photos/bike-8.jpg"] },
    { type: "collage", caption: "More adventures", detail: "", photos: ["photos/adventure-1.jpg", "photos/adventure-2.jpg", "photos/adventure-3.jpg"] },

    { type: "chapter", number: "Together", title: "Fitness", subtitle: "The couple that trains together" },
    { type: "photo", photo: "photos/gym.jpg", caption: "Gym buddies", detail: "The couple that trains together." },


    // ── BIRTHDAY CAKE ──
    { type: "chapter", number: "One more celebration", title: "Happy Birthday!", subtitle: "Ashoo Bua" },

    // ── FINALE ──
    { type: "chapter", number: "Finale", title: "Today", subtitle: "Still the best team we know" },
    { type: "chapter", number: "Mom & Dad", title: "Tere Bina Nahi Lagda Dil", subtitle: "Their dance, then cake!" },

    // ── GAME 3 ──
    { type: "chapter", number: "One last game", title: "Bollywood Trivia", subtitle: "Answer as a table. Fastest table wins!" },

    {
      type: "title",
      title: "Happy 25th Anniversary",
      subtitle: "Here's to the next 25",
      note: "With love, your family",
    },
  ],
};
