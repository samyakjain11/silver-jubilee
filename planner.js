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
    { label: "Timing", text: "6:30 to 9:30 PM, with dinner in the middle (to confirm)" },
    { label: "Centerpieces", text: "A story in chapters told through family performances, with the shoe game and quiz as breathers" },
    { label: "Rule of thumb", text: "No segment longer than 20 minutes, so energy stays up" },
  ],

  // The evening runs as a story in chapters. open: true marks a slot that is
  // still being filled, so it shows up as a placeholder on the website.
  runOfShow: [
    { time: "6:30 PM", segment: "Arrivals", what: "Guests mingle, sign a memory card or guestbook, photo corner open", length: "30 min" },
    { time: "7:00 PM", segment: "0. Grand Entrance", what: "Mom & Dad walk in to Flipperachi, host welcomes the \"jodi of the night\"", length: "5 min" },
    { time: "7:05 PM", segment: "1. Before Us", what: "Dad's dance to \"O O Jaane Jaana\", then Mom's \"Yai Re Yai Re\" (or a photo montage of Mom's younger years)", length: "10 min" },
    { time: "7:15 PM", segment: "2. The Rishta", what: "The first meeting: Kake & Surbhi perform \"Tum Se Mil Ke Dil Ka Hai Jo Haal\"", length: "5 min" },
    { time: "7:20 PM", segment: "3. The Shaadi", what: "Gayatri & Hanisha perform \"Maahi Vey\", \"Jhumka Gira Re\" and a third song (TBD)", length: "10 min" },
    { time: "7:30 PM", segment: "Breather: Shoe game", what: "Parents back to back, 15 to 20 questions", length: "15 min" },
    { time: "7:45 PM", segment: "Dinner", what: "Music playing, guest quiz cards on the tables", length: "45 min" },
    { time: "8:30 PM", segment: "Open slot A: Early years", what: "The kids arrive. Acts to be added", length: "10 min", open: true },
    { time: "8:40 PM", segment: "4. Building a Home", what: "Dad sings \"Tum Se Hi Din Hota Hai\" to Mom, family photo slideshow behind him", length: "5 min" },
    { time: "8:45 PM", segment: "5. Blessings from the Elders", what: "Grandpa sings \"Hai Apna Dil To Awaara\"", length: "5 min" },
    { time: "8:50 PM", segment: "6. Her Circle", what: "Mom and two aunts perform \"Teri Ore\"", length: "5 min" },
    { time: "8:55 PM", segment: "Breather: Guest quiz", what: "\"How well do you know the couple?\" scored by table, small prizes", length: "10 min" },
    { time: "9:05 PM", segment: "Open slot B: Wishes & Memories", what: "Friends' songs, speeches and video messages. Acts to be added", length: "15 min", open: true },
    { time: "9:20 PM", segment: "Finale", what: "Mom & Dad dance together to \"Tere Bina Nahi Lagda Dil\", then cake cutting", length: "15 min" },
    { time: "9:35 PM", segment: "Close", what: "Group photo and dancing or open mic", length: "open" },
  ],

  performances: [
    { chapter: "0. Grand Entrance", act: "Mom & Dad walk in", song: "A Flipperachi track", film: "", who: "Mom & Dad" },
    { chapter: "1. Before Us", act: "A dance for Dad", song: "O O Jaane Jaana", film: "Pyaar Kiya To Darna Kya", who: "Dad" },
    { chapter: "1. Before Us", act: "A dance for Mom (may drop, fallback is a photo montage)", song: "Yai Re Yai Re", film: "Rangeela", who: "Mom (TBD)" },
    { chapter: "2. The Rishta", act: "The first meeting", song: "Tum Se Mil Ke Dil Ka Hai Jo Haal", film: "Main Hoon Na", who: "Kake & Surbhi" },
    { chapter: "3. The Shaadi", act: "Wedding medley, song 1", song: "Maahi Vey", film: "", who: "Gayatri & Hanisha" },
    { chapter: "3. The Shaadi", act: "Wedding medley, song 2", song: "Jhumka Gira Re", film: "Mera Saaya", who: "Gayatri & Hanisha" },
    { chapter: "3. The Shaadi", act: "Wedding medley, song 3", song: "TBD", film: "", who: "Gayatri & Hanisha" },
    { chapter: "Open slot A", act: "Early years: the kids arrive", song: "TBD", film: "", who: "TBD", open: true },
    { chapter: "4. Building a Home", act: "Dad sings to Mom, photo slideshow behind", song: "Tum Se Hi Din Hota Hai", film: "Jab We Met", who: "Dad" },
    { chapter: "5. Blessings from the Elders", act: "A song from Grandpa", song: "Hai Apna Dil To Awaara", film: "Solva Saal", who: "Grandpa" },
    { chapter: "6. Her Circle", act: "Mom with two aunts", song: "Teri Ore", film: "Singh Is Kinng", who: "Mom + two aunts" },
    { chapter: "Open slot B", act: "Wishes & memories: friends' songs, speeches, video messages", song: "TBD", film: "", who: "TBD", open: true },
    { chapter: "Finale", act: "Mom & Dad dance together, then cake", song: "Tere Bina Nahi Lagda Dil", film: "", who: "Mom & Dad" },
  ],

  music: [
    { cue: "Arrivals", track: "Soft background playlist", note: "" },
    { cue: "Grand Entrance", track: "A Flipperachi track", note: "Tech helper cues it as Mom & Dad walk in" },
    { cue: "1. Before Us", track: "O O Jaane Jaana, then Yai Re Yai Re", note: "If Mom's dance drops, play her photo montage instead" },
    { cue: "2. The Rishta", track: "Tum Se Mil Ke Dil Ka Hai Jo Haal", note: "" },
    { cue: "3. The Shaadi", track: "Maahi Vey, Jhumka Gira Re, third song TBD", note: "" },
    { cue: "Dinner", track: "Old Bollywood favourites playlist", note: "" },
    { cue: "4. Building a Home", track: "Tum Se Hi Din Hota Hai", note: "Family photo slideshow plays behind Dad" },
    { cue: "5. Blessings", track: "Hai Apna Dil To Awaara", note: "" },
    { cue: "6. Her Circle", track: "Teri Ore", note: "" },
    { cue: "Finale", track: "Tere Bina Nahi Lagda Dil", note: "Cake ready to roll out right after" },
    { cue: "Close", track: "Dance floor playlist", note: "" },
  ],

  roles: [
    { role: "Host / MC", does: "Welcome, story narration, runs the shoe game and quiz", who: "Samyak" },
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
