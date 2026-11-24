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
    { label: "Timing", text: "6:30 to about 10 PM, with dinner in the middle (to confirm)" },
    { label: "Centerpieces", text: "A story in chapters told through family performances, with the shoe game and quiz as breathers" },
    { label: "Rule of thumb", text: "No segment longer than 20 minutes, so energy stays up" },
  ],

  // The evening runs as a story in chapters. open: true marks a slot that is
  // still being filled, so it shows up as a placeholder on the website.
  runOfShow: [
    { time: "6:30 PM", segment: "Arrivals", what: "Guests mingle, sign a memory card or guestbook, photo corner open", length: "30 min" },
    { time: "7:00 PM", segment: "Welcome & Blessings", what: "Host welcomes everyone, then Grandpa & Grandma give a short speech to open the evening", length: "7 min" },
    { time: "7:07 PM", segment: "Uncles & Aunts' Dance", what: "The uncles & aunts set the shaadi mood. Song not final: \"Wah Wah Ramji\" or \"Ae Dil Laaya Hai Bahaar\"", length: "5 min" },
    { time: "7:12 PM", segment: "0. Grand Entrance", what: "Mom & Dad walk in to Flipperachi, host welcomes the \"jodi of the night\"", length: "5 min" },
    { time: "7:17 PM", segment: "1. Before Us", what: "Dad's dance to \"O O Jaane Jaana\", then Mom's \"Yai Re Yai Re\" (or a photo montage of Mom's younger years)", length: "10 min" },
    { time: "7:27 PM", segment: "2. The Rishta", what: "The first meeting: Kake & Surbhi perform \"Tum Se Mil Ke Dil Ka Hai Jo Haal\"", length: "5 min" },
    { time: "7:32 PM", segment: "3. The Shaadi", what: "Gayatri & Hanisha perform \"Maahi Vey\", \"Jhumka Gira Re\" and a third song (TBD)", length: "10 min" },
    { time: "7:42 PM", segment: "Game 1: Shoe game", what: "The headline game. Mom & Dad back to back, 15 to 20 questions", length: "15 min" },
    { time: "7:57 PM", segment: "Dinner", what: "Music playing. Guest quiz cards on the tables, collected before dessert", length: "40 min" },
    { time: "8:37 PM", segment: "Open slot A: Early years", what: "The kids arrive. Acts to be added", length: "10 min", open: true },
    { time: "8:47 PM", segment: "4. Building a Home", what: "Dad sings \"Tum Se Hi Din Hota Hai\" to Mom, family photo slideshow behind him", length: "5 min" },
    { time: "8:52 PM", segment: "Game 2: To be added", what: "A slot for one more game (to be added). Keep it under 10 minutes", length: "10 min", open: true },
    { time: "9:02 PM", segment: "5. Blessings: Poetry", what: "Uncle Grandpa reads his poetry. A quiet, mellow moment: lights down, music off, no clapping cue until he finishes", length: "5 min" },
    { time: "9:07 PM", segment: "5. Blessings from the Elders", what: "Grandpa sings \"Hai Apna Dil To Awaara\"", length: "5 min" },
    { time: "9:12 PM", segment: "6. Her Circle", what: "Mom and two aunts perform \"Teri Ore\"", length: "5 min" },
    { time: "9:17 PM", segment: "Game 3: Guest quiz results", what: "Answers to \"How well do you know the couple?\", winning table gets small prizes", length: "8 min" },
    { time: "9:25 PM", segment: "Open slot B: Wishes & Memories", what: "Friends' songs, speeches and video messages. Acts to be added", length: "15 min", open: true },
    { time: "9:40 PM", segment: "Finale", what: "Mom & Dad dance together to \"Tere Bina Nahi Lagda Dil\", then cake cutting", length: "15 min" },
    { time: "9:55 PM", segment: "Close", what: "Group photo and dancing or open mic", length: "open" },
  ],

  performances: [
    { chapter: "Opening", act: "A short speech to open the evening", song: "Speech", film: "", who: "Grandpa & Grandma" },
    { chapter: "Opening", act: "Uncles & aunts set the shaadi mood", song: "Wah Wah Ramji or Ae Dil Laaya Hai Bahaar (to decide)", film: "Hum Aapke Hain Koun..! / Kya Kehna", who: "Uncles & aunts (names TBD)" },
    { chapter: "0. Grand Entrance", act: "Mom & Dad walk in", song: "A Flipperachi track", film: "", who: "Mom & Dad" },
    { chapter: "1. Before Us", act: "A dance for Dad", song: "O O Jaane Jaana", film: "Pyaar Kiya To Darna Kya", who: "Dad" },
    { chapter: "1. Before Us", act: "A dance for Mom (may drop, fallback is a photo montage)", song: "Yai Re Yai Re", film: "Rangeela", who: "Mom (TBD)" },
    { chapter: "2. The Rishta", act: "The first meeting", song: "Tum Se Mil Ke Dil Ka Hai Jo Haal", film: "Main Hoon Na", who: "Kake & Surbhi" },
    { chapter: "3. The Shaadi", act: "Wedding medley, song 1", song: "Maahi Vey", film: "", who: "Gayatri & Hanisha" },
    { chapter: "3. The Shaadi", act: "Wedding medley, song 2", song: "Jhumka Gira Re", film: "Mera Saaya", who: "Gayatri & Hanisha" },
    { chapter: "3. The Shaadi", act: "Wedding medley, song 3", song: "TBD", film: "", who: "Gayatri & Hanisha" },
    { chapter: "Open slot A", act: "Early years: the kids arrive", song: "TBD", film: "", who: "TBD", open: true },
    { chapter: "4. Building a Home", act: "Dad sings to Mom, photo slideshow behind", song: "Tum Se Hi Din Hota Hai", film: "Jab We Met", who: "Dad" },
    { chapter: "5. Blessings from the Elders", act: "Poetry reading, very mellow", song: "His own poetry", film: "", who: "Uncle Grandpa (name TBD)" },
    { chapter: "5. Blessings from the Elders", act: "A song from Grandpa", song: "Hai Apna Dil To Awaara", film: "Solva Saal", who: "Grandpa" },
    { chapter: "6. Her Circle", act: "Mom with two aunts", song: "Teri Ore", film: "Singh Is Kinng", who: "Mom + two aunts" },
    { chapter: "Open slot B", act: "Wishes & memories: friends' songs, speeches, video messages", song: "TBD", film: "", who: "TBD", open: true },
    { chapter: "Finale", act: "Mom & Dad dance together, then cake", song: "Tere Bina Nahi Lagda Dil", film: "", who: "Mom & Dad" },
  ],

  music: [
    { cue: "Arrivals", track: "Soft background playlist", note: "" },
    { cue: "Welcome & Blessings", track: "Music off", note: "Mic ready for the grandparents, chairs close to the mic" },
    { cue: "Uncles & aunts' dance", track: "Wah Wah Ramji or Ae Dil Laaya Hai Bahaar (to decide)", note: "Starts the moment the grandparents sit down" },
    { cue: "Grand Entrance", track: "A Flipperachi track", note: "Tech helper cues it as Mom & Dad walk in" },
    { cue: "1. Before Us", track: "O O Jaane Jaana, then Yai Re Yai Re", note: "If Mom's dance drops, play her photo montage instead" },
    { cue: "2. The Rishta", track: "Tum Se Mil Ke Dil Ka Hai Jo Haal", note: "" },
    { cue: "3. The Shaadi", track: "Maahi Vey, Jhumka Gira Re, third song TBD", note: "" },
    { cue: "Shoe game", track: "Short sting or drumroll between questions (optional)", note: "" },
    { cue: "Dinner", track: "Old Bollywood favourites playlist", note: "" },
    { cue: "4. Building a Home", track: "Tum Se Hi Din Hota Hai", note: "Family photo slideshow plays behind Dad" },
    { cue: "5. Poetry", track: "Music off (or a very soft instrumental underneath)", note: "Dim the lights a little, mic on a stand so he can sit if he likes" },
    { cue: "5. Blessings", track: "Hai Apna Dil To Awaara", note: "" },
    { cue: "6. Her Circle", track: "Teri Ore", note: "" },
    { cue: "Finale", track: "Tere Bina Nahi Lagda Dil", note: "Cake ready to roll out right after" },
    { cue: "Close", track: "Dance floor playlist", note: "" },
  ],

  // What the host says, in order. Lines are a starting point: change the
  // wording to sound like you. Anything in [brackets] is a name to fill in.
  script: [
    { cue: "7:00 PM · Welcome", lines: [
      "Good evening everyone, and thank you for being here! I'm Samyak, and tonight I'm your host.",
      "Twenty-five years ago, two families got together and made one very good decision. Tonight we're celebrating Mom & Dad's silver jubilee, and we're going to tell their story the best way we know: with songs, dances, a few games and a lot of love.",
      "And there's nobody better to start us off than the two people who started it all. Please welcome Grandpa and Grandma.",
    ] },
    { cue: "7:05 PM · After the grandparents' speech", lines: [
      "Thank you, Grandpa and Grandma. With blessings like that, how can the next 25 years go anything but well?",
      "Now, every good shaadi celebration needs a proper welcome, and our uncles and aunts have been practising for this one. Put your hands together for them!",
    ] },
    { cue: "7:12 PM · Before the entrance", lines: [
      "What a start! The mood is set. Now, the moment we've all been waiting for.",
      "Ladies and gentlemen, please be on your feet and make some noise for the jodi of the night... Mom and Dad!",
    ] },
    { cue: "7:15 PM · After the entrance", lines: [
      "Please take your seats, you two, because tonight you're the audience.",
      "We're going to tell your story in chapters. And every story starts before the two main characters even meet.",
    ] },
    { cue: "7:17 PM · 1. Before Us", lines: [
      "Chapter one: Before Us. Long before he was Dad, he was a young man with great hair and even better dance moves. Or so we've been told. Let's see if it's true!",
      "[After Dad's dance] And on the other side of town, there was a young woman with her own style and her own dreams. Here's Mom!",
    ] },
    { cue: "7:27 PM · 2. The Rishta", lines: [
      "Chapter two: The Rishta. Two families, one cup of chai, and a lot of nervous glances. Here's how we imagine that first meeting went. Please welcome Kake and Surbhi!",
    ] },
    { cue: "7:32 PM · 3. The Shaadi", lines: [
      "Chapter three: The Shaadi. The mehendi, the music, the baraat, and every relative in town. Bringing back the wedding magic, here are Gayatri and Hanisha!",
    ] },
    { cue: "7:42 PM · Game 1: Shoe game", lines: [
      "Okay, time for our headline game! Mom, Dad, please come to the front and sit back to back. Take off your shoes and hold one of yours and one of each other's.",
      "I'll ask a question. Raise the shoe of the person the answer is. No peeking, no discussing! Everyone else, you're the judges.",
      "[15 to 20 questions. Finish on a sweet one, like: Who would you choose all over again?]",
      "Give it up for the most honest couple in the room!",
    ] },
    { cue: "7:57 PM · Dinner", lines: [
      "Dinner is served! While you eat, you'll find a quiz card on your table: \"How well do you know the couple?\" Fill it in as a table. We'll collect them before dessert, and the winning table gets a prize.",
    ] },
    { cue: "8:37 PM · Back from dinner · Open slot A", lines: [
      "I hope everyone has eaten well, because the story continues. A few years into the marriage, life got a lot louder. That's right, the kids arrived.",
      "[Introduce the act for the early years here]",
    ] },
    { cue: "8:47 PM · 4. Building a Home", lines: [
      "Chapter four: Building a Home. First home, first everything. And somewhere along the way, Dad figured out that his whole day revolves around one person. He's going to tell her himself. Dad, the mic is yours.",
    ] },
    { cue: "8:52 PM · Game 2", lines: [
      "[Intro for the second game goes here. Keep it under 10 minutes.]",
    ] },
    { cue: "9:02 PM · 5. Blessings: Poetry", lines: [
      "[Speak softly here, the room should settle down]",
      "Chapter five: Blessings from the Elders. Some blessings are written, and some are sung. We'll start with the written kind. Our Uncle Grandpa has been writing poetry for as long as any of us can remember, and tonight he has a few words for Mom & Dad. Let's give him our full attention.",
      "[After the poem, let it sit for a moment] Thank you. I think that's one we'll all remember.",
      "[Grandpa's song follows straight after and lifts the mood back up]",
    ] },
    { cue: "9:07 PM · 5. Blessings: Grandpa sings", lines: [
      "And now for the sung kind. Grandpa started our evening, and he isn't done yet. Here's a song from the original heartthrob of the family!",
    ] },
    { cue: "9:12 PM · 6. Her Circle", lines: [
      "Chapter six: Her Circle. Behind every strong woman is an even stronger group of sisters. Mom, the stage is yours, along with [aunt] and [aunt]!",
    ] },
    { cue: "9:17 PM · Game 3: Guest quiz results", lines: [
      "Drumroll please! Let's find out which table knows Mom & Dad best.",
      "[Read out three or four answers, then announce the winning table and hand over the prizes]",
    ] },
    { cue: "9:25 PM · Open slot B: Wishes & Memories", lines: [
      "Over twenty-five years, Mom & Dad have collected a lot of people who love them, and a few of them have something to say.",
      "[Introduce each friend, speech or video message]",
    ] },
    { cue: "9:40 PM · Finale", lines: [
      "We've told the whole story, from the rishta to tonight. But there's one chapter only the two of them can perform.",
      "Mom, Dad, this floor is yours.",
      "[After the dance] Let's bring out the cake! Everyone, please join in.",
    ] },
    { cue: "9:55 PM · Close", lines: [
      "Thank you all for coming and for being part of their story. Before anyone leaves, everyone in for one big group photo!",
      "Here's to Mom & Dad, and to the next twenty-five. Happy anniversary!",
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
