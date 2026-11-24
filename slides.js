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

    // The slides follow the order of the evening (see Run of show in the Planner).

    // ── OPENING ──
    { type: "chapter", number: "To begin", title: "With Blessings", subtitle: "A few words from Grandpa & Grandma" },
    // Song not final yet (Wah Wah Ramji or Ae Dil Laaya Hai Bahaar). Add it to the subtitle once decided.
    { type: "chapter", number: "Setting the mood", title: "A Shaadi Welcome", subtitle: "Performed by the uncles & aunts" },
    { type: "chapter", number: "Please welcome", title: "The Jodi of the Night", subtitle: "Mom & Dad" },

    // ── CHAPTER 1: each of them on their own ──
    { type: "chapter", number: "Chapter 1", title: "Before Us", subtitle: "Two stories that started separately" },

    { type: "chapter", number: "Meet", title: "Dad", subtitle: "Add a sweet one-liner about Dad" },
    { type: "photo", photo: "", caption: "Little Dad", detail: "A childhood photo and where he grew up." },
    { type: "photo", photo: "", caption: "Young Dad", detail: "College days, first job, or a favourite memory." },
    { type: "photo", photo: "", caption: "Dad as we know him", detail: "What makes him, him." },
    { type: "chapter", number: "A dance for Dad", title: "O O Jaane Jaana", subtitle: "From Pyaar Kiya To Darna Kya · performed by Dad" },

    { type: "chapter", number: "Meet", title: "Mom", subtitle: "Add a sweet one-liner about Mom" },
    { type: "photo", photo: "", caption: "Little Mom", detail: "A childhood photo and where she grew up." },
    { type: "photo", photo: "", caption: "Young Mom", detail: "College days, first job, or a favourite memory." },
    { type: "photo", photo: "", caption: "Mom as we know her", detail: "What makes her, her." },
    { type: "chapter", number: "A dance for Mom", title: "Mere Khwabon Mein Jo Aaye", subtitle: "From Dilwale Dulhania Le Jayenge · performed by Anshi" },

    // ── CHAPTER 2 ──
    { type: "chapter", number: "Chapter 2", title: "The Rishta", subtitle: "Two families, one very good idea" },
    { type: "photo", photo: "", caption: "The first meeting", detail: "Who was more nervous? We'll find out in the shoe game." },
    { type: "photo", photo: "", caption: "The engagement", detail: "Add the year and a sweet line here." },
    { type: "chapter", number: "The first meeting", title: "Tum Se Mil Ke Dil Ka Hai Jo Haal", subtitle: "From Main Hoon Na · performed by Kake & Surbhi" },

    // ── GAME 1 ──
    { type: "chapter", number: "Game time", title: "The Shoe Game", subtitle: "Back to back, no peeking, no discussing" },

    // ── CHAPTER 3 ──
    { type: "chapter", number: "Chapter 3", title: "The Shaadi", subtitle: "Where it all began" },
    { type: "photo", photo: "", caption: "The big day", detail: "Add the wedding date and place." },
    { type: "photo", photo: "", caption: "The family together", detail: "Everyone who made it happen." },
    { type: "chapter", number: "The wedding medley", title: "Maahi Vey · Jhumka Gira Re", subtitle: "Performed by Gayatri & Hanisha" },

    // ── DINNER IS OPEN (the program carries on) ──
    { type: "chapter", number: "Dinner is open · the show goes on", title: "How Well Do You Know the Couple?", subtitle: "Fill in the quiz card on your table. Winning table gets a prize!" },

    // ── RETRO THROWBACKS ──
    { type: "chapter", number: "Rewind", title: "Retro Throwbacks", subtitle: "The old photo albums, opened up" },
    { type: "photo", photo: "", caption: "Retro throwback", detail: "Add a line about this photo." },
    { type: "photo", photo: "", caption: "Retro throwback", detail: "Add a line about this photo." },
    { type: "photo", photo: "", caption: "Retro throwback", detail: "Add a line about this photo." },

    // ── EARLY YEARS (open slot A) ──
    { type: "chapter", number: "And then", title: "Came Us", subtitle: "The early years" },
    { type: "photo", photo: "", caption: "And then came us", detail: "The chaos officially began." },

    // ── CHAPTER 4 ──
    { type: "chapter", number: "Chapter 4", title: "Building a Home", subtitle: "First home, first everything" },
    { type: "photo", photo: "", caption: "Our first home", detail: "Add the city and year." },
    { type: "photo", photo: "", caption: "Festival memories", detail: "Add a line about it." },

    // Themed photo sections. They can play behind Dad's song.
    { type: "chapter", number: "Together", title: "Exploring the World", subtitle: "Sydney · Italy · Singapore" },
    { type: "photo", photo: "", caption: "Sydney", detail: "Add a line about the trip." },
    { type: "photo", photo: "", caption: "Italy", detail: "Add a line about the trip." },
    { type: "photo", photo: "", caption: "Singapore", detail: "Add a line about the trip." },

    { type: "chapter", number: "Together", title: "Adventure", subtitle: "Trails and bike rides" },
    { type: "photo", photo: "", caption: "On the trail", detail: "Add where and when." },
    { type: "photo", photo: "", caption: "On the bike", detail: "Add where and when." },

    { type: "chapter", number: "Together", title: "Fitness", subtitle: "The couple that trains together" },
    { type: "photo", photo: "", caption: "Gym buddies", detail: "Add a line about it." },

    { type: "chapter", number: "Dad sings for Mom", title: "Tum Se Hi Din Hota Hai", subtitle: "From Jab We Met" },

    // ── CHAPTER 5 ──
    { type: "chapter", number: "Chapter 5", title: "Blessings from the Elders", subtitle: "A poem and a song" },
    { type: "chapter", number: "A few words of poetry", title: "From the Heart", subtitle: "Written and read by Uncle Grandpa (add his name)" },
    { type: "chapter", number: "A song from Grandpa", title: "Hai Apna Dil To Awaara", subtitle: "From Solva Saal" },

    // ── GAME 2: QUIZ RESULTS ──
    { type: "chapter", number: "And the winner is", title: "Quiz Results", subtitle: "Which table knows Mom & Dad best?" },

    // ── CHAPTER 6: WISHES & MEMORIES ──
    { type: "chapter", number: "Chapter 6", title: "Wishes & Memories", subtitle: "From the people who love them" },
    { type: "chapter", number: "A song for the couple", title: "Tere Sang Yaara", subtitle: "From Rustom · sung by: add name" },
    { type: "message", from: "Name of a relative", text: "Write a short message from a family member or friend here." },
    { type: "message", from: "Another friend", text: "Messages can be two or three sentences. Keep them sweet and short." },
    { type: "quote", text: "Twenty-five years of chai, patience and showing up for each other.", by: "From all of us" },

    // ── FINALE ──
    { type: "chapter", number: "Finale", title: "Today", subtitle: "Still the best team we know" },
    { type: "photo", photo: "", caption: "Mom & Dad, 2026", detail: "" },
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
