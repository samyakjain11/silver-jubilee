// ─────────────────────────────────────────────────────────────
//  EDIT THIS FILE to change the Planner tab (planner.html).
//  Just change the text between the quotes. Add a row by copying
//  a line that starts with { and ends with }, then editing it.
//
//  Heads up: this file is public in the GitHub repo. The password
//  only hides it on the website, so keep anything truly private
//  (addresses, phone numbers, money) out of here.
// ─────────────────────────────────────────────────────────────

window.PLAN = {
  title: "Party Planner",
  date: "Friday, 27 November 2026",
  summary: "A three-hour evening for 25 to 30 family and friends, built around a heartfelt tribute with quizzes and performances in between. Warm, fun and family friendly, following their story from the arranged match onward.",

  glance: [
    { label: "Timing", text: "6:30 to about 9:25 PM, then the DJ. Dinner opens after The Shaadi and people eat while the program carries on" },
    { label: "Centerpieces", text: "A story in chapters told through family performances, with the shoe game, guest quiz and Bollywood trivia as breathers" },
    { label: "Rule of thumb", text: "No segment longer than 20 minutes, so energy stays up. Every solo song is kept to 2 minutes. Each act has 2 minutes before it for the changeover and the host's intro (shown as \"2 + 5 min\")" },
  ],

  // The evening runs as a story in chapters. Acts are spread out so no two
  // dances or two songs sit back to back. open: true marks a slot that is
  // still being filled, so it shows up as a placeholder on the website.
  runOfShow: [
    { time: "6:30 PM", segment: "Arrivals", what: "Guests mingle, sign a memory card or guestbook, photo corner open. Guest quiz cards already on the tables so people can start early", length: "30 min" },
    { time: "7:00 PM", segment: "Welcome & Blessings", what: "Speech · Host welcomes everyone, then Grandpa & Grandma give a short speech to open the evening", length: "7 min" },
    { time: "7:07 PM", segment: "Uncles & Aunts' Dance", what: "Dance · A short entry dance from the uncles & aunts to set the shaadi mood (about 2 min), then 1 min for everyone to settle. Song not final: \"Wah Wah Ramji\" or \"Ae Dil Laaya Hai Bahaar\"", length: "2 + 3 min" },
    { time: "7:12 PM", segment: "0. Grand Entrance", what: "Entrance · Mom & Dad walk in to Flipperachi, host welcomes the \"jodi of the night\"", length: "2 + 3 min" },
    { time: "7:17 PM", segment: "1. Before Us: Dad", what: "Dance · Dad's dance to \"O O Jaane Jaana\"", length: "2 + 2 min" },
    { time: "7:21 PM", segment: "1. Before Us: Mom", what: "Photos, then dance · Host clicks through Mom's younger-years photos, then Anshi dances to \"Mere Khwabon Mein Jo Aaye\" for Mom", length: "2 + 5 min" },
    { time: "7:28 PM", segment: "2. The Rishta", what: "Photos, then dance · Host walks through the first meeting and engagement photos, then Kake & Surbhi perform \"Tum Se Mil Ke Dil Ka Hai Jo Haal\"", length: "2 + 7 min" },
    { time: "7:37 PM", segment: "Game 1: Shoe game", what: "Game · The headline game. Mom & Dad back to back, 15 to 20 questions", length: "2 + 15 min" },
    { time: "7:54 PM", segment: "3. The Shaadi", what: "Dance · Gayatri & Hanisha perform \"Maahi Vey\", \"Jhumka Gira Re\" and a third song (TBD)", length: "2 + 10 min" },
    { time: "8:06 PM", segment: "Dinner is open", what: "Quick announcement from the host. Guests help themselves and eat while the program carries on. Guest quiz cards are on the tables", length: "1 min" },
    { time: "8:07 PM", segment: "Open slot A: Early years", what: "The kids arrive. Acts to be added", length: "2 + 10 min", open: true },
    { time: "8:19 PM", segment: "4. Building a Home", what: "Song · Dad sings \"Tum Se Hi Din Hota Hai\" to Mom, family photo slideshow behind him", length: "2 + 2 min" },
    { time: "8:23 PM", segment: "5. Blessings: Poetry", what: "Poetry · Uncle Grandpa reads his poetry. A quiet, mellow moment: lights down, music off, no clapping cue until he finishes", length: "2 + 5 min" },
    { time: "8:30 PM", segment: "5. Blessings: Grandpa sings", what: "Song · Grandpa sings \"Hai Apna Dil To Awaara\"", length: "2 + 2 min" },
    { time: "8:34 PM", segment: "Game 2: Guest quiz results", what: "Game · Answers to \"How well do you know the couple?\", winning table gets small prizes", length: "2 + 8 min" },
    { time: "8:44 PM", segment: "6. Wishes & Memories", what: "Song, then messages · A friend's dad sings \"Tere Sang Yaara\" (2 min), then any short speeches or video messages (5 min)", length: "2 + 7 min" },
    { time: "8:53 PM", segment: "Finale", what: "Dance · Mom & Dad dance together to \"Tere Bina Nahi Lagda Dil\", then cake cutting", length: "2 + 15 min" },
    { time: "9:10 PM", segment: "Game 3: Bollywood trivia", what: "Game · A quick Bollywood trivia round for everyone, scored by table", length: "2 + 10 min" },
    { time: "9:22 PM", segment: "Group photo, then DJ", what: "Everyone in for one big group photo, then the stage opens to the DJ", length: "open" },
  ],

  performances: [
    { chapter: "Opening", act: "A short speech to open the evening", song: "Speech", film: "", who: "Grandpa & Grandma" },
    { chapter: "Opening", act: "Dance: uncles & aunts set the shaadi mood", song: "Wah Wah Ramji or Ae Dil Laaya Hai Bahaar (to decide)", film: "Hum Aapke Hain Koun..! / Kya Kehna", who: "Uncles & aunts (names TBD)" },
    { chapter: "0. Grand Entrance", act: "Mom & Dad walk in", song: "A Flipperachi track", film: "", who: "Mom & Dad" },
    { chapter: "1. Before Us", act: "Dance for Dad", song: "O O Jaane Jaana", film: "Pyaar Kiya To Darna Kya", who: "Dad" },
    { chapter: "1. Before Us", act: "Dance for Mom", song: "Mere Khwabon Mein Jo Aaye", film: "Dilwale Dulhania Le Jayenge", who: "Anshi" },
    { chapter: "2. The Rishta", act: "Dance: the first meeting", song: "Tum Se Mil Ke Dil Ka Hai Jo Haal", film: "Main Hoon Na", who: "Kake & Surbhi" },
    { chapter: "3. The Shaadi", act: "Dance: wedding medley, song 1", song: "Maahi Vey", film: "", who: "Gayatri & Hanisha" },
    { chapter: "3. The Shaadi", act: "Dance: wedding medley, song 2", song: "Jhumka Gira Re", film: "Mera Saaya", who: "Gayatri & Hanisha" },
    { chapter: "3. The Shaadi", act: "Dance: wedding medley, song 3", song: "TBD", film: "", who: "Gayatri & Hanisha" },
    { chapter: "Open slot A", act: "Early years: the kids arrive", song: "TBD", film: "", who: "TBD", open: true },
    { chapter: "4. Building a Home", act: "Song: Dad sings to Mom, photo slideshow behind", song: "Tum Se Hi Din Hota Hai", film: "Jab We Met", who: "Dad" },
    { chapter: "5. Blessings from the Elders", act: "Poetry reading, very mellow", song: "His own poetry", film: "", who: "Uncle Grandpa (name TBD)" },
    { chapter: "5. Blessings from the Elders", act: "Song from Grandpa", song: "Hai Apna Dil To Awaara", film: "Solva Saal", who: "Grandpa" },
    { chapter: "6. Wishes & Memories", act: "Song for the couple", song: "Tere Sang Yaara", film: "Rustom", who: "A friend's dad (name TBD)" },
    { chapter: "6. Wishes & Memories", act: "Short speeches or video messages (optional)", song: "TBD", film: "", who: "TBD", open: true },
    { chapter: "Finale", act: "Mom & Dad dance together, then cake", song: "Tere Bina Nahi Lagda Dil", film: "", who: "Mom & Dad" },
  ],

  music: [
    { cue: "Arrivals", track: "Soft background playlist", note: "" },
    { cue: "Welcome & Blessings", track: "Music off", note: "Mic ready for the grandparents, chairs close to the mic" },
    { cue: "Uncles & aunts' dance", track: "Wah Wah Ramji or Ae Dil Laaya Hai Bahaar (to decide)", note: "Starts the moment the grandparents sit down" },
    { cue: "Grand Entrance", track: "A Flipperachi track", note: "Tech helper cues it as Mom & Dad walk in" },
    { cue: "1. Before Us: Dad", track: "O O Jaane Jaana", note: "" },
    { cue: "1. Before Us: Mom", track: "Mere Khwabon Mein Jo Aaye", note: "Anshi's dance" },
    { cue: "2. The Rishta", track: "Tum Se Mil Ke Dil Ka Hai Jo Haal", note: "Slideshow on the first meeting and engagement photos first" },
    { cue: "Shoe game", track: "Short sting or drumroll between questions (optional)", note: "" },
    { cue: "3. The Shaadi", track: "Maahi Vey, Jhumka Gira Re, third song TBD", note: "" },
    { cue: "Dinner is open", track: "No change", note: "The program carries on while people eat. Keep performance music loud enough over the chatter" },
    { cue: "4. Building a Home", track: "Tum Se Hi Din Hota Hai", note: "Family photo slideshow plays behind Dad" },
    { cue: "5. Poetry", track: "Music off (or a very soft instrumental underneath)", note: "Dim the lights a little, mic on a stand so he can sit if he likes" },
    { cue: "5. Grandpa sings", track: "Hai Apna Dil To Awaara", note: "" },
    { cue: "6. Wishes & Memories", track: "Tere Sang Yaara", note: "Karaoke track ready if he sings over one" },
    { cue: "Finale", track: "Tere Bina Nahi Lagda Dil", note: "Cake ready to roll out right after" },
    { cue: "Bollywood trivia", track: "Short song clips if any questions are \"guess the song\"", note: "" },
    { cue: "DJ", track: "DJ takes over", note: "Hand over the sound system after the group photo" },
  ],

  // What the host says, in order. Lines are a starting point: change the
  // wording to sound like you. Anything in [brackets] is a name to fill in.
  script: [
    { cue: "7:00 PM · Welcome", lines: [
      "Good evening everyone, and thank you for being here! I'm Samyak, and tonight I'm your host.",
      "Twenty-five years ago, two families got together and made one very good decision. Tonight we're celebrating Mom & Dad's silver jubilee, and we're going to tell their story the best way we know: with songs, dances, a few games and a lot of love.",
      "And there's nobody better to start us off than the two people who started it all. Please welcome Grandpa and Grandma.",
    ] },
    { cue: "7:07 PM · After the grandparents' speech", lines: [
      "Thank you, Grandpa and Grandma. With blessings like that, how can the next 25 years go anything but well?",
      "Now, every good shaadi celebration needs a proper welcome, and our uncles and aunts have been practising for this one. Put your hands together for them!",
    ] },
    { cue: "7:12 PM · Before the entrance", lines: [
      "[Give everyone a minute to settle back into their seats]",
      "What a start! The mood is set. Now, the moment we've all been waiting for.",
      "Ladies and gentlemen, please be on your feet and make some noise for the jodi of the night... Mom and Dad!",
    ] },
    { cue: "7:17 PM · After the entrance", lines: [
      "Please take your seats, you two, because tonight you're the audience.",
      "We're going to tell your story in chapters. And every story starts before the two main characters even meet.",
    ] },
    { cue: "7:17 PM · 1. Before Us: Dad", lines: [
      "Chapter one: Before Us. Long before he was Dad, he was a young man with great hair and even better dance moves. Or so we've been told. Let's see if it's true!",
    ] },
    { cue: "7:21 PM · 1. Before Us: Mom", lines: [
      "And on the other side of town, there was a young woman with her own style and her own dreams. [Click through Mom's photos] To tell her side of the story, please welcome Anshi!",
    ] },
    { cue: "7:28 PM · 2. The Rishta", lines: [
      "Chapter two: The Rishta. Two families, one cup of chai, and a lot of nervous glances. [Click through the first meeting and engagement photos]",
      "Here's how we imagine that first meeting went. Please welcome Kake and Surbhi!",
    ] },
    { cue: "7:37 PM · Game 1: Shoe game", lines: [
      "So who was more nervous that day? Let's find out. Time for our headline game! Mom, Dad, please come to the front and sit back to back. Take off your shoes and hold one of yours and one of each other's.",
      "I'll ask a question. Raise the shoe of the person the answer is. No peeking, no discussing! Everyone else, you're the judges.",
      "[15 to 20 questions. Finish on a sweet one, like: Who would you choose all over again?]",
      "Give it up for the most honest couple in the room!",
    ] },
    { cue: "7:54 PM · 3. The Shaadi", lines: [
      "Chapter three: The Shaadi. The mehendi, the music, the baraat, and every relative in town. Bringing back the wedding magic, here are Gayatri and Hanisha!",
    ] },
    { cue: "8:06 PM · Dinner is open", lines: [
      "And just like at every shaadi, after the dancing comes the food! Dinner is now open. Please help yourselves whenever you like, and the show will carry on while you eat.",
      "You'll also find a quiz card on your table: \"How well do you know the couple?\" Fill it in as a table. We'll collect them a little later, and the winning table gets a prize.",
    ] },
    { cue: "8:07 PM · Open slot A", lines: [
      "Keep eating, because the story continues. A few years into the marriage, life got a lot louder. That's right, the kids arrived.",
      "[Introduce the act for the early years here]",
    ] },
    { cue: "8:19 PM · 4. Building a Home", lines: [
      "Chapter four: Building a Home. First home, first everything. And somewhere along the way, Dad figured out that his whole day revolves around one person. He's going to tell her himself. Dad, the mic is yours.",
    ] },
    { cue: "8:23 PM · 5. Blessings: Poetry", lines: [
      "[Speak softly here, the room should settle down]",
      "Chapter five: Blessings from the Elders. Some blessings are written, and some are sung. We'll start with the written kind. Our Uncle Grandpa has been writing poetry for as long as any of us can remember, and tonight he has a few words for Mom & Dad. Let's give him our full attention.",
      "[After the poem, let it sit for a moment] Thank you. I think that's one we'll all remember.",
    ] },
    { cue: "8:30 PM · 5. Blessings: Grandpa sings", lines: [
      "And now for the sung kind. Grandpa started our evening, and he isn't done yet. Here's a song from the original heartthrob of the family!",
    ] },
    { cue: "8:34 PM · Game 2: Guest quiz results", lines: [
      "Drumroll please! Let's find out which table knows Mom & Dad best.",
      "[Collect the quiz cards first if they aren't in yet] [Read out three or four answers, then announce the winning table and hand over the prizes]",
    ] },
    { cue: "8:44 PM · 6. Wishes & Memories", lines: [
      "Chapter six: Wishes & Memories. Over twenty-five years, Mom & Dad have collected a lot of people who love them, and one of them wanted to say it with a song about the people who stay by your side. Please welcome [name]!",
      "[Then any short speeches or video messages, if there are some]",
    ] },
    { cue: "8:53 PM · Finale", lines: [
      "We've told the whole story, from the rishta to tonight. But there's one chapter only the two of them can perform.",
      "Mom, Dad, this floor is yours.",
      "[After the dance] Let's bring out the cake! Everyone, please join in.",
    ] },
    { cue: "9:10 PM · Game 3: Bollywood trivia", lines: [
      "Before we hand the stage to the DJ, one last round, and this one is for everybody. It's Bollywood trivia! Answer as a table, shout it out, and the fastest table wins.",
      "[8 to 10 quick questions, then announce the winning table]",
    ] },
    { cue: "9:22 PM · Group photo, then DJ", lines: [
      "Thank you all for coming and for being part of their story. Before anyone goes anywhere, everyone in for one big group photo!",
      "Here's to Mom & Dad, and to the next twenty-five. Happy anniversary! DJ, take it away!",
    ] },
  ],

  roles: [
    { role: "Host / MC", does: "Welcome, story narration, runs the games (script in the Emcee script tab)", who: "Samyak" },
    { role: "Tech helper", does: "Runs the slideshow and music, cues each chapter's song", who: "TBD" },
    { role: "Quiz helper", does: "Hands out quiz cards, scores tables, gives prizes", who: "TBD" },
    { role: "Performance lead", does: "Collects the lineup, runs a rehearsal, keeps acts short", who: "TBD" },
    { role: "Photographer", does: "Candid photos plus the group photo at the end", who: "TBD" },
  ],

  // done: true puts a tick next to it
  timeline: [
    { by: "By Nov 7", task: "Lock the run of show, pick the host and helpers, create the GitHub repo", done: false },
    { by: "By Nov 10", task: "Send guests the ask for photos, messages and performance sign-ups", done: false },
    { by: "By Nov 14", task: "Finalize shoe game and quiz questions, confirm the performance lineup", done: false },
    { by: "By Nov 20", task: "All photos and messages in, slideshow built", done: false },
    { by: "By Nov 24", task: "Run-through of the slideshow on the actual TV or projector, performance rehearsal", done: false },
    { by: "Nov 26", task: "Print quiz cards, pack prizes, test every song on the playlist", done: false },
    { by: "Nov 27", task: "The party", done: false },
  ],
};
