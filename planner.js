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
    { label: "Centerpieces", text: "The photo slideshow, the shoe game, and family performances" },
    { label: "Rule of thumb", text: "No segment longer than 20 minutes, so energy stays up" },
  ],

  runOfShow: [
    { time: "6:30 PM", segment: "Arrivals", what: "Guests mingle, sign a memory card or guestbook, photo corner open", length: "30 min" },
    { time: "7:00 PM", segment: "Grand entrance", what: "Parents walk in to their wedding song, host welcomes everyone", length: "5 min" },
    { time: "7:05 PM", segment: "Part 1: Dad", what: "Dad's photos on the slideshow, then a dance for him to \"O O Jaane Jaana\" (Pyaar Kiya To Darna Kya)", length: "10 min" },
    { time: "7:15 PM", segment: "Part 1: Mom", what: "Mom's photos on the slideshow, then a dance for her to \"Yai Re Yai Re\" (Rangeela)", length: "10 min" },
    { time: "7:25 PM", segment: "Part 2: Together", what: "Slideshow of their story from the match to today, host narrates", length: "10 min" },
    { time: "7:35 PM", segment: "Messages", what: "Short video or read-aloud messages from family and friends", length: "10 min" },
    { time: "7:45 PM", segment: "Dinner", what: "Music playing, guest quiz cards on the tables", length: "45 min" },
    { time: "8:30 PM", segment: "Shoe game", what: "Parents back to back, 15 to 20 questions", length: "15 min" },
    { time: "8:45 PM", segment: "Guest quiz", what: "\"How well do you know the couple?\" scored by table, small prizes", length: "10 min" },
    { time: "8:55 PM", segment: "Performances", what: "Guest performances (lineup to come)", length: "20 min" },
    { time: "9:15 PM", segment: "Cake and toast", what: "Cake cutting, one toast from the kids, parents say a few words", length: "15 min" },
    { time: "9:30 PM", segment: "Close", what: "Group photo and dancing or open mic", length: "open" },
  ],

  performances: [
    { act: "A dance for Dad", song: "O O Jaane Jaana", film: "Pyaar Kiya To Darna Kya", who: "TBD", when: "End of Part 1: Dad" },
    { act: "A dance for Mom", song: "Yai Re Yai Re", film: "Rangeela", who: "TBD", when: "End of Part 1: Mom" },
    { act: "Guest performance", song: "TBD", film: "", who: "TBD", when: "Performances, 8:55 PM" },
  ],

  music: [
    { cue: "Arrivals", track: "Soft background playlist", note: "" },
    { cue: "Grand entrance", track: "Their wedding song (TBD)", note: "Tech helper cues it as the parents walk in" },
    { cue: "Dad's dance", track: "O O Jaane Jaana", note: "Right after Dad's last photo" },
    { cue: "Mom's dance", track: "Yai Re Yai Re", note: "Right after Mom's last photo" },
    { cue: "Dinner", track: "Old Bollywood favourites playlist", note: "" },
    { cue: "Close", track: "Dance floor playlist", note: "" },
  ],

  roles: [
    { role: "Host / MC", does: "Welcome, story narration, runs the shoe game and quiz", who: "Samyak" },
    { role: "Tech helper", does: "Runs the slideshow and music, cues the wedding song", who: "TBD" },
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
    { by: "Nov 26", task: "Print quiz cards, pack prizes, test music and the wedding song", done: false },
    { by: "Nov 27", task: "The party", done: false },
  ],
};
