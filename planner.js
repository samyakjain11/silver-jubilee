// ─────────────────────────────────────────────────────────────
//  EDIT THIS FILE to change the Planner tab (planner.html).
//  Just change the text between the quotes. Add a row by copying
//  a line that starts with { and ends with }, then editing it.
//
//  Heads up: this file is public in the GitHub repo, and the planner
//  page has no password, so keep anything truly private
//  (addresses, phone numbers, money) out of here.
// ─────────────────────────────────────────────────────────────

window.PLAN = {
  title: "Party Planner",
  date: "Friday, 27 November 2026",
  summary: "A three-hour evening for 25 to 30 family and friends, built around a heartfelt tribute with games and performances in between. Warm, fun and family friendly, following their story from the arranged match onward.",

  glance: [
    { label: "Timing", text: "Mingling from 6:00, program 6:30 to about 8:50 PM, then the DJ. Dinner opens after The Shaadi and people eat while the program carries on" },
    { label: "Centerpieces", text: "Their story told through family performances, with the belan & dumbbell game, a prop song game and Bollywood trivia as breathers" },
    { label: "Rule of thumb", text: "No segment longer than 20 minutes, so energy stays up. Every solo song is kept to 2 minutes, except Grandpa's (4 min). Each act has 2 minutes before it for the changeover and the host's intro (shown as \"2 + 5 min\")" },
  ],

  // The evening tells their story in order. Acts are spread out so no two
  // dances or two songs sit back to back. open: true marks a slot that is
  // still being filled, so it shows up as a placeholder on the website.
  runOfShow: [
    { time: "6:00 PM", segment: "Arrivals & mingling", what: "Guests arrive and mingle, sign a memory card or guestbook, photo corner open.", length: "30 min", who: "Greeting at the door: TBD · Decorations & photo corner: set up that morning by the decorations crew · Guestbook: TBD · Background music: tech helper" },
    { time: "6:30 PM", segment: "Welcome & Blessings", what: "Speech · Hosts welcome everyone (2 min), then Grandpa & Grandma give a short speech to open the evening (4 min total)", length: "2 + 4 min", who: "Samyak & Anshi (hosts) · Grandpa & Grandma · Mic & chairs: tech helper" },
    { time: "6:36 PM", segment: "Grand Entrance", what: "Entrance · The uncles & aunts dance in to \"Wah Wah Ramji\" to set the shaadi mood, then Mom & Dad make their entrance to Flipperachi as the \"jodi of the night\" (3 min total).", length: "2 + 3 min", who: "Uncles & aunts (lead TBD), then Mom & Dad · Intro: Samyak & Anshi · Cue Mom & Dad at the door: TBD · Both tracks: tech helper" },
    { time: "6:41 PM", segment: "Grandpa sings for the couple", what: "Song · Grandpa sings the full \"Pyar Deewana Hota Hai\" (about 4.5 min)", length: "2 + 5 min", who: "Grandpa · Intro: Samyak & Anshi · Track & mic: tech helper" },
    { time: "6:48 PM", segment: "Dad's early photos, then Samyak's dance", what: "Photos, then dance · Dad's early photos on screen, then Samyak dances to \"O O Jaane Jaana\" for Dad (1 min)", length: "2 + 2 min", who: "Samyak dances · Photos & intro: Ajai Fufaji · Song: tech helper" },
    { time: "6:52 PM", segment: "Mom's early photos, then Anshi & Yashi's dance", what: "Photos, then dance · Host clicks through Mom's younger-years photos, then Anshi & Yashi dance to \"Mere Khwabon Mein Jo Aaye\" for Mom (1 to 2 min)", length: "2 + 3 min", who: "Anshi & Yashi dance · Photos & intro: Samyak · Song: tech helper" },
    { time: "6:57 PM", segment: "The Rishta", what: "Photos, then dance · Host walks through the first meeting and engagement photos, then Kake & Surbhi perform \"Tum Se Mil Ke Dil Ka Hai Jo Haal\"", length: "2 + 7 min", who: "Kake & Surbhi · Photos & intro: Samyak & Anshi · Song: tech helper" },
    { time: "7:06 PM", segment: "Game 1: Belan & Dumbbell game", what: "Game · The headline game. Mom & Dad back to back, each holding a belan (= Mom) and a dumbbell (= Dad), and raise one for each answer. 15 to 20 questions", length: "2 + 15 min", who: "Samyak & Anshi run it, Mom & Dad play · Chairs, 2 belans, 2 dumbbells & questions: games helper" },
    { time: "7:23 PM", segment: "Song before the wedding", what: "Song · Dad's friend Rajesh sings \"Loote Koi Mann Ka Nagar\", leading into The Shaadi", length: "2 + 2 min", who: "Rajesh uncle · Intro: Samyak & Anshi · Track & mic: tech helper" },
    { time: "7:27 PM", segment: "The Shaadi", what: "Dance · Gayatri & Hanisha's 2-minute dance: \"Maahi Vey\", \"Jhumka Gira Re\" and a third song (TBD)", length: "2 + 2 min", who: "Gayatri & Hanisha · Intro: Samyak & Anshi · Medley: tech helper" },
    { time: "7:31 PM", segment: "Dinner is open", what: "Quick announcement from the host. Guests help themselves and eat while the program carries on. The Retro Throwbacks photos play on screen while people get their food.", length: "1 min", who: "Samyak & Anshi announce · Food ready: TBD" },
    { time: "7:32 PM", segment: "Game 2: Prop song game", what: "Game · Surbhi leads a prop song game (details to come)", length: "2 + 10 min", who: "Surbhi leads it · Intro: Samyak & Anshi · Props: games helper · Songs: tech helper" },
    { time: "7:44 PM", segment: "Uncle Grandpa's poetry", what: "Poetry · Uncle Grandpa reads his poem (2 to 3 min). A quiet, mellow moment: lights down, music off, no clapping cue until he finishes", length: "2 + 3 min", who: "Uncle Grandpa · Intro: Samyak & Anshi · Music off, lights down, mic stand: tech helper" },
    { time: "7:49 PM", segment: "Wishes & Memories", what: "Messages, speech, then song · Any short heartfelt messages or video messages (5 min), then a family speech from Ashoo Bua, Ajai Fufaji & Kartik Bhai together (1 min to get up + 4 min), then Pankaj uncle sings \"Tere Sang Yaara\" (2 min). No changeover buffers: the hosts introduce each straight away", length: "5 + 5 + 2 min", who: "Samyak & Anshi collect messages · Ashoo Bua, Ajai Fufaji & Kartik Bhai speak · Video messages & mic: tech helper · Song: Pankaj uncle" },
    { time: "8:01 PM", segment: "Mom & Dad speak, then Dad sings", what: "Speech, then song · Mom & Dad give a short speech together (2.5 min), then Dad sings \"Tum Se Hi Din Hota Hai\" to Mom while the home, travel, adventure and fitness photos play behind him (2 min)", length: "2 + 5 min", who: "Mom & Dad · Intro: Samyak & Anshi · Mic for two, track & photo slideshow: tech helper" },
    { time: "8:08 PM", segment: "Birthday cake for Ashoo Bua", what: "Cake · Surprise! \"Baar Baar Din Ye Aaye\" plays, everyone sings for Ashoo Bua and she cuts her birthday cake", length: "2 + 5 min", who: "Samyak & Anshi · Cake: cake pickup person · Candles & knife: TBD · Birthday song: tech helper" },
    { time: "8:15 PM", segment: "Finale", what: "Dance · Mom & Dad dance together to \"Tere Bina Nahi Lagda Dil\", then the anniversary cake", length: "2 + 15 min", who: "Mom & Dad · Intro: Samyak & Anshi · Anniversary cake: cake pickup person · Candles & knife: TBD · Song: tech helper" },
    { time: "8:32 PM", segment: "Game 3: Bollywood trivia", what: "Game · A quick Bollywood trivia round for everyone, scored by table", length: "2 + 10 min", who: "Samyak & Anshi run it · Scoring & prizes: games helper · Song clips: tech helper" },
    { time: "8:44 PM", segment: "Group photo, then DJ", what: "Everyone in for one big group photo, then the stage opens to the DJ", length: "open", who: "Samyak & Anshi wrap up · Photographer · Hand over to the DJ: tech helper" },
  ],

  performances: [
    { chapter: "Opening", act: "A short speech to open the evening", song: "Speech", film: "", who: "Grandpa & Grandma" },
    { chapter: "Grand Entrance", act: "Uncles & aunts dance in first", song: "Wah Wah Ramji", film: "Hum Aapke Hain Koun..!", who: "Uncles & aunts (names TBD)" },
    { chapter: "Grand Entrance", act: "Then Mom & Dad walk in", song: "A Flipperachi track", film: "", who: "Mom & Dad" },
    { chapter: "Opening", act: "Song from Grandpa", song: "Pyar Deewana Hota Hai", film: "Kati Patang", who: "Grandpa" },
    { chapter: "Before Us", act: "Dance for Dad", song: "O O Jaane Jaana", film: "Pyaar Kiya To Darna Kya", who: "Samyak" },
    { chapter: "Before Us", act: "Dance for Mom", song: "Mere Khwabon Mein Jo Aaye", film: "Dilwale Dulhania Le Jayenge", who: "Anshi & Yashi" },
    { chapter: "The Rishta", act: "Dance: the first meeting", song: "Tum Se Mil Ke Dil Ka Hai Jo Haal", film: "Main Hoon Na", who: "Kake & Surbhi" },
    { chapter: "Before The Shaadi", act: "Song for the couple, before the wedding", song: "Loote Koi Mann Ka Nagar", film: "Abhimaan", who: "Rajesh (Dad's friend)" },
    { chapter: "The Shaadi", act: "Dance: wedding medley, song 1", song: "Maahi Vey", film: "", who: "Gayatri & Hanisha" },
    { chapter: "The Shaadi", act: "Dance: wedding medley, song 2", song: "Jhumka Gira Re", film: "Mera Saaya", who: "Gayatri & Hanisha" },
    { chapter: "The Shaadi", act: "Dance: wedding medley, song 3", song: "TBD", film: "", who: "Gayatri & Hanisha" },
    { chapter: "Blessings", act: "Poetry reading, very mellow", song: "His own poetry", film: "", who: "Uncle Grandpa (name TBD)" },
    { chapter: "Wishes & Memories", act: "Song for the couple", song: "Tere Sang Yaara", film: "Rustom", who: "Pankaj uncle" },
    { chapter: "Wishes & Memories", act: "Short speeches or video messages (optional)", song: "TBD", film: "", who: "TBD", open: true },
    { chapter: "Wishes & Memories", act: "Family speech, 4 minutes", song: "Speech", film: "", who: "Ashoo Bua, Ajai Fufaji & Kartik Bhai" },
    { chapter: "Before the cakes", act: "Mom & Dad speak (2.5 min), then Dad sings to Mom with the photo slideshow behind", song: "Tum Se Hi Din Hota Hai", film: "Jab We Met", who: "Dad" },
    { chapter: "Finale", act: "Mom & Dad dance together, then cake", song: "Tere Bina Nahi Lagda Dil", film: "", who: "Mom & Dad" },
  ],

  music: [
    { cue: "Arrivals", track: "Soft background playlist", note: "" },
    { cue: "Welcome & Blessings", track: "Music off", note: "Mic ready for the grandparents, chairs close to the mic" },
    { cue: "Uncles & aunts' dance", track: "Wah Wah Ramji", note: "Part of the 3-minute entrance. Starts the moment the grandparents sit down" },
    { cue: "Grand Entrance", track: "A Flipperachi track", note: "Goes straight on from the uncles & aunts' song as Mom & Dad walk in" },
    { cue: "Grandpa sings", track: "Pyar Deewana Hota Hai (karaoke, full song, 4:40)", note: "Right after the entrance music ends" },
    { cue: "Dad's early photos, then Samyak's dance", track: "O O Jaane Jaana", note: "After Dad's early photos. Samyak's dance" },
    { cue: "Mom's early photos, then Anshi & Yashi's dance", track: "Mere Khwabon Mein Jo Aaye", note: "Anshi & Yashi's dance" },
    { cue: "The Rishta", track: "Tum Se Mil Ke Dil Ka Hai Jo Haal", note: "Slideshow on the first meeting and engagement photos first" },
    { cue: "Belan & Dumbbell game", track: "Short sting or drumroll between questions (optional)", note: "" },
    { cue: "Rajesh sings", track: "Loote Koi Mann Ka Nagar", note: "Karaoke track ready if he sings over one" },
    { cue: "The Shaadi", track: "Maahi Vey, Jhumka Gira Re, third song TBD", note: "" },
    { cue: "Dinner is open", track: "No change", note: "The program carries on while people eat. Keep performance music loud enough over the chatter" },
    { cue: "Prop song game", track: "Song clips for Surbhi's game", note: "Get the song list from Surbhi ahead of time" },
    { cue: "Uncle Grandpa's poetry", track: "Music off (or a very soft instrumental underneath)", note: "Dim the lights a little, mic on a stand so he can sit if he likes" },
    { cue: "Wishes & Memories", track: "Tere Sang Yaara", note: "Pankaj uncle sings. Karaoke track ready" },
    { cue: "Mom & Dad speak, then Dad sings", track: "Tum Se Hi Din Hota Hai", note: "Two mics for the speech. Start the photos with the song. About 30 photo slides for a 2-minute song, so click through every 4 to 5 seconds" },
    { cue: "Birthday cake", track: "Baar Baar Din Ye Aaye", note: "Birthday cake and candles ready. Keep the anniversary cake for right after the finale dance" },
    { cue: "Finale", track: "Tere Bina Nahi Lagda Dil", note: "Anniversary cake ready to roll out right after" },
    { cue: "Bollywood trivia", track: "Short song clips if any questions are \"guess the song\"", note: "" },
    { cue: "DJ", track: "DJ takes over", note: "Hand over the sound system after the group photo" },
  ],

  // Belan & Dumbbell game questions (was the shoe game), encrypted so they stay a surprise. Only the password
  // (ask Samyak) unlocks them in the "Game questions" tab.
  shoeSecret: { salt: "AwEe7hxXpDKucNGmGIvxVg==", iv: "zk06Ka7dgZD2evKM", data: "yqW/SY6lYgIbWMJMrgIgxAZIEzBzNm9+AJpgtpS2Ixa7DY2+ittiXk4YkV9lCmX2wGS4K4xfIpoYGSmnMDF26qxVT9DFFTwWTja4Ug09Dz4jJTr6tpc3bvN+bNUNAQL/V2jozImJIiifqklxNkAnyDk0gPdlWpgaKoYKHSRaz1Fz2MLyK4uKsxnsMEsr8ZXlDo4OQkYZXdd1sZZY52AAWZQiUeq7EWxloIpFX8gO2zZ/CdEQcKS9cXFM29nUqYRp7d87iyUnFjETgTO1fsN2X7ZOl8c//EoxY2OpHD3i9KJWccmU0mEy2DjhbmMyQxbq7cEZei+YqONI39d3K8ULu0PgRz4gvjM8Bktf+Tu/tbJf6+qJE56LRl7QLB2kipHdjqRlfto2/D2NMHMs825835mrLiBBZSze/66vbs7KHVRsKtx45UcjP0h6EP8CpFOkOvXJ+JElFqOe2NgnwqL6itCGyfTo26Jm4csUOSA1jp8+FpHLiXb2XosiPPQz/rBGMm1MVbgLhksYOCRjkDNdmEP7p7FTL4+c70EuIC4CWGUg9VVo6NmODuogvC6KYa+2turdiB9tBFm3NAhgmYueh1RjfIAzQQzEheQ2Bk7/SQkJEgxjIxqFEygnfem+gHrypFh+pQYVDw+Hm31to170+DD+/4s4CnSQpI8vjiifQXLKPTRJf3E/WZTKnASdCpYyHrOe05pRDm06BSJP6PimcXrw8AqReK+nFnrIOtZB2Hmpn9aqFDvLhW0xMof1MStTtQRfwzlm/6XG2Ep0slmwdY8pqPAZfjJSwE8ksOIL2fwlgjTwGY7L72gSyYqVA37bftN+4fSHmMdj7dCt8gcxJKwd5sNqK1CLGODQrHDoez/93MMYOOaThSmd7Gp728I2XzEVxtVTX3lKCFFzAeXka7USgOi6PJx3AntJVvmiCz6uy3e8BoYLM1LmEpj7XB+iXC8RPg==" },

  // Emcee script v3: v2 with more Hinglish, mostly in Samyak's lines.
  // The Emcee script tab shows this one first.
  scriptV3: [
    { cue: "6:30 PM · Welcome", lines: [
      "Samyak: Hi everyone, namaste! Aap sab ka bahut bahut thank you for coming tonight. I'm Samyak.",
      "Anshi: And I'm Anshi, Samyak's cousin. We're your hosts tonight, toh please thoda pyaar se.",
      "Samyak: Mom and Dad ki shaadi ko 25 saal ho gaye hain. 25 saal, and Dad still asks Mom where his keys are. Roz. Every single day.",
      "Anshi: And Mami still knows exactly where they are. Honestly, I think that's the whole secret.",
      "Anshi: We've got dances, songs, a few games and a lot of old photos tonight. Some of them are very cute, and some of them are a little embarrassing. Sorry in advance, Mama.",
      "Samyak: Aur haan, we know sab log khane ka wait kar rahe hain. It opens after The Shaadi, toh tab tak please humare saath bane rahiye.",
      "Samyak: But first, jinki wajah se yeh sab hai. Grandpa, Grandma, please aaiye and say a few words.",
    ] },
    { cue: "6:36 PM · Grand Entrance", lines: [
      "Anshi: Thank you, Grandpa and Grandma. Bahut pyaari baat boli aapne.",
      "Samyak: Chalo, sab log khade ho jao for this one. Our uncles and aunts have been practising for weeks, toh thoda shor machao!",
      "[Uncles & aunts dance in to \"Wah Wah Ramji\". As it ends, the Flipperachi track starts]",
      "Both: And here they are, the reason we're all here. Mama and Mami!",
    ] },
    { cue: "6:41 PM · Grandpa sings for the couple", lines: [
      "Samyak: Mom, Dad, aap baith jaiye. Aaj aapko kuch nahi karna, bas sit back and enjoy.",
      "Anshi: And we're starting with something really special. Grandpa is going to sing \"Pyar Deewana Hota Hai\" for the two of you. Grandpa, aapka stage.",
      "[Samyak and Anshi both slip away during Grandpa's song to get ready. Ajai Fufaji takes the mic for Samyak's dance, then Samyak takes it for Anshi & Yashi's]",
    ] },
    { cue: "6:48 PM · Dad's early photos, then Samyak's dance", lines: [
      "[Ajai Fufaji has the mic for this part]",
      "Ajai Fufaji: Thank you, Grandpa, that was lovely. Hi everyone, I'm stealing the mic from the kids for a few minutes.",
      "Ajai Fufaji: Before he was Dad to Samyak, he was this guy. [Click through Dad's early photos]",
      "Ajai Fufaji: Look at that hair! Aur yeh bike. Some things clearly never change.",
      "Ajai Fufaji: Samyak has a dance for his dad tonight. Let's give him a big cheer. Samyak, come on up!",
      "[After his dance, Samyak takes the mic from Ajai Fufaji]",
    ] },
    { cue: "6:52 PM · Mom's early photos, then Anshi & Yashi's dance", lines: [
      "Samyak: Thank you, thank you. Aur thank you, Fufaji, mere liye cover karne ke liye.",
      "Samyak: Ab yeh hain Mom, before she had to deal with Dad and me every day. Bechari. [Click through Mom's photos]",
      "Samyak: Anshi and Yashi have a dance for her. Zor se taaliyan please. Anshi, Yashi, aa jao!",
    ] },
    { cue: "6:57 PM · The Rishta", lines: [
      "Samyak: Kya baat hai! Big round of applause for Anshi and Yashi! Okay, hum dono wapas aa gaye.",
      "Anshi: So then came the rishta. Two families meeting, lots of chai, and two people trying their best to look calm. [Click through the first meeting and engagement photos]",
      "Samyak: Kake and Surbhi are going to show us how that first meeting might have gone. Kake, Surbhi, aa jao!",
      "Anshi: [After the dance] Thank you both, that was so sweet!",
    ] },
    { cue: "7:06 PM · Game 1: Belan & Dumbbell game", lines: [
      "Samyak: Okay, game time! Mom, Dad, idhar aa jaiye, back to back baithna hai.",
      "Anshi: You each get a belan and a dumbbell. Belan means Mami, dumbbell means Mama.",
      "Samyak: Pretty fitting, na? We'll ask a question, and you raise the belan or the dumbbell for whoever the answer is. No peeking, aur ek doosre se koi baat nahi. Everyone else, aap judges ho, so keep them honest.",
      "Anshi: Mama, a small tip. If you're not sure, just hold up the belan. Ghar pe bhi toh wahi karte ho.",
      "[21 questions in the Game questions tab (password needed). Take turns asking.]",
      "Samyak: Okay, that was a lot more honest than we expected. Ghar jaate waqt car mein koi ladai nahi, please. Big hand for them!",
    ] },
    { cue: "7:23 PM · Song before the wedding", lines: [
      "Anshi: Next, Dad's friend Rajesh uncle has a song for them. He's going to sing \"Loote Koi Mann Ka Nagar\". Rajesh uncle, please come up!",
      "Samyak: [After the song] Thank you so much, Rajesh uncle. Chalo, ab shaadi ki taraf chalte hain.",
    ] },
    { cue: "7:27 PM · The Shaadi", lines: [
      "Samyak: Ab dekhte hain shaadi ki kuch photos. [Click through]",
      "Anshi: Mami, you look exactly the same. Mama... no comment. Okay, to bring back a bit of that shaadi feeling, here are Gayatri and Hanisha!",
    ] },
    { cue: "7:31 PM · Dinner is open", lines: [
      "Anshi: Okay everyone, the moment you've actually been waiting for. Khana lag gaya hai!",
      "Samyak: Plate utha lo jab mann kare. We'll keep the show going while you eat. Aur uncles, please humare liye bhi thoda chhod dena.",
    ] },
    { cue: "7:32 PM · Game 2: Prop song game", lines: [
      "Samyak: Khaate raho, but stay with us, kyunki ek aur game aa raha hai.",
      "Anshi: Surbhi is running this one. It's a prop song game, and it's going to be fun. Surbhi, over to you!",
      "[Surbhi explains and runs the game. Details to come]",
      "Anshi: Thank you, Surbhi! And well played, everyone.",
    ] },
    { cue: "7:44 PM · Uncle Grandpa's poetry", lines: [
      "[Speak softly here, let the room settle]",
      "Samyak: Sab log thoda shaant ho jaiye, please. Just for a few minutes.",
      "Anshi: Uncle Grandpa has written something for Mama and Mami. Uncle Grandpa, please.",
      "Anshi: [After the poem, give it a moment] Thank you, Uncle Grandpa. That was really beautiful.",
    ] },
    { cue: "7:49 PM · Wishes & Memories", lines: [
      "Samyak: Kuch log Mom and Dad ko kuch kehna chahte the tonight.",
      "[Any short heartfelt messages or video messages first]",
      "Samyak: Ab thoda family time. Ashoo Bua, Ajai Fufaji and Kartik Bhai have a few words for Mom and Dad. Aaiye, please!",
      "[Family speech, about 4 minutes]",
      "Samyak: [After the speech] Thank you, aap teeno ka. That was really sweet.",
      "Anshi: And Pankaj uncle has a song for them. He's going to sing \"Tere Sang Yaara\". Pankaj uncle, please come up!",
    ] },
    { cue: "8:01 PM · Mom & Dad speak, then Dad sings", lines: [
      "Anshi: Okay, we've done enough talking for one night. Mama, Mami, it's your turn. Come say a few words!",
      "[Mom & Dad speak for about 2.5 minutes]",
      "Samyak: Dad, abhi baithna mat. Ek cheez aur baaki hai. He's going to sing \"Tum Se Hi Din Hota Hai\" for Mom. Dad, ho jaaye!",
      "[Photos of their home, trips, adventures and gym days play behind him]",
    ] },
    { cue: "8:08 PM · Birthday cake for Ashoo Bua", lines: [
      "Anshi: Before the finale, there's one more thing to celebrate tonight. It's also Ashoo Bua's birthday!",
      "Samyak: Sab log saath mein gaao, please!",
      "[Bring out the birthday cake. \"Baar Baar Din Ye Aaye\" plays and everyone sings]",
      "Anshi: [After she cuts the cake] Happy birthday, Ashoo Bua! Okay, one last thing for Mama and Mami...",
    ] },
    { cue: "8:15 PM · Finale", lines: [
      "Samyak: Mom, Dad, sab ne apna turn le liya. This last one is just for the two of you.",
      "Both: The floor is all yours.",
      "[\"Tere Bina Nahi Lagda Dil\" plays]",
      "Anshi: [After the dance] Okay, time for the anniversary cake! Sab log paas aa jao.",
    ] },
    { cue: "8:32 PM · Game 3: Bollywood trivia", lines: [
      "Samyak: DJ se pehle ek last game, and this time sab khelenge. It's Bollywood trivia!",
      "Anshi: Table wise answer karo, zor se bolo. Fastest table wins.",
      "[8 to 10 quick questions, taking turns, then announce the winning table]",
    ] },
    { cue: "8:44 PM · Group photo, then DJ", lines: [
      "Anshi: Thank you all so much for coming tonight. It really means a lot to us and to Mama and Mami. Now everyone come in for a group photo!",
      "Samyak: Happy 25th, Mom and Dad. Hum aap dono se bahut pyaar karte hain. Here's to 25 more years of Mom being right. Hamesha ki tarah.",
      "Both: Happy anniversary! DJ, it's all yours!",
    ] },
  ],

  // Emcee script v2 (frozen): same order as v1, warm and casual. Start a line with "Samyak:",
  // "Anshi:" or "Both:". Anything in [brackets] is a note or a name to fill in.
  scriptV2: [
    { cue: "6:30 PM · Welcome", lines: [
      "Samyak: Hi everyone, namaste, and thank you so much for coming tonight. I'm Samyak.",
      "Anshi: And I'm Anshi, Samyak's cousin. We're your hosts tonight, so please be nice to us.",
      "Samyak: Mom and Dad have been married for 25 years now. 25 saal, and Dad still asks Mom where his keys are. Every single day.",
      "Anshi: And Mami still knows exactly where they are. Honestly, I think that's the whole secret.",
      "Anshi: We've got dances, songs, a few games and a lot of old photos tonight. Some of them are very cute, and some of them are a little embarrassing. Sorry in advance, Mama.",
      "Samyak: And yes, we know everyone's waiting for the food. It opens after The Shaadi, so please stay with us till then.",
      "Samyak: But first, the people who started it all. Grandpa, Grandma, please come up and say a few words.",
    ] },
    { cue: "6:36 PM · Grand Entrance", lines: [
      "Anshi: Thank you, Grandpa and Grandma. That really set the tone for tonight.",
      "Samyak: Okay, everyone up on your feet for this one. Our uncles and aunts have been practising for weeks, so let's make some noise for them.",
      "[Uncles & aunts dance in to \"Wah Wah Ramji\". As it ends, the Flipperachi track starts]",
      "Both: And here they are, the reason we're all here. Mama and Mami!",
    ] },
    { cue: "6:41 PM · Grandpa sings for the couple", lines: [
      "Samyak: Mom, Dad, please take a seat. Tonight you don't have to do anything, just sit back and enjoy.",
      "Anshi: And we're starting with something really special. Grandpa is going to sing \"Pyar Deewana Hota Hai\" for the two of you. Grandpa, over to you.",
      "[Samyak and Anshi both slip away during Grandpa's song to get ready. Ajai Fufaji takes the mic for Samyak's dance, then Samyak takes it for Anshi & Yashi's]",
    ] },
    { cue: "6:48 PM · Dad's early photos, then Samyak's dance", lines: [
      "[Ajai Fufaji has the mic for this part]",
      "Ajai Fufaji: Thank you, Grandpa, that was lovely. Hi everyone, I'm stealing the mic from the kids for a few minutes.",
      "Ajai Fufaji: Before he was Dad to Samyak, he was this guy. [Click through Dad's early photos]",
      "Ajai Fufaji: Look at that hair! Aur yeh bike. Some things clearly never change.",
      "Ajai Fufaji: Samyak has a dance for his dad tonight. Let's give him a big cheer. Samyak, come on up!",
      "[After his dance, Samyak takes the mic from Ajai Fufaji]",
    ] },
    { cue: "6:52 PM · Mom's early photos, then Anshi & Yashi's dance", lines: [
      "Samyak: Thank you, thank you. And thanks, Fufaji, for covering for me.",
      "Samyak: Now this is Mom, before she had to deal with Dad and me every day. [Click through Mom's photos]",
      "Samyak: Anshi and Yashi have a dance for her. Please give them a big cheer. Anshi, Yashi, come on up!",
    ] },
    { cue: "6:57 PM · The Rishta", lines: [
      "Samyak: That was so good. Big round of applause for Anshi and Yashi! Okay, we're both back.",
      "Anshi: So then came the rishta. Two families meeting, lots of chai, and two people trying their best to look calm. [Click through the first meeting and engagement photos]",
      "Samyak: Kake and Surbhi are going to show us how that first meeting might have gone. Kake, Surbhi, come on up!",
      "Anshi: [After the dance] Thank you both, that was so sweet!",
    ] },
    { cue: "7:06 PM · Game 1: Belan & Dumbbell game", lines: [
      "Samyak: Okay, game time! Mom, Dad, come sit here back to back, please.",
      "Anshi: You each get a belan and a dumbbell. Belan means Mami, dumbbell means Mama.",
      "Samyak: We'll ask a question, and you raise the belan or the dumbbell for whoever the answer is. No peeking, no talking to each other. Everyone else, you're the judges, so keep them honest.",
      "Anshi: Mama, a small tip. If you're not sure, just hold up the belan. Ghar pe bhi toh wahi karte ho.",
      "[21 questions in the Game questions tab (password needed). Take turns asking.]",
      "Samyak: Okay, that was a lot more honest than we expected. Please no fighting in the car on the way home. Big hand for them!",
    ] },
    { cue: "7:23 PM · Song before the wedding", lines: [
      "Anshi: Next, Dad's friend Rajesh uncle has a song for them. He's going to sing \"Loote Koi Mann Ka Nagar\". Rajesh uncle, please come up!",
      "Samyak: [After the song] Thank you so much, Rajesh uncle. Chalo, ab shaadi ki taraf chalte hain.",
    ] },
    { cue: "7:27 PM · The Shaadi", lines: [
      "Samyak: Here are some photos from the big day. [Click through]",
      "Anshi: Mami, you look exactly the same. Mama... no comment. Okay, to bring back a bit of that shaadi feeling, here are Gayatri and Hanisha!",
    ] },
    { cue: "7:31 PM · Dinner is open", lines: [
      "Anshi: Okay everyone, the moment you've actually been waiting for. Khana lag gaya hai!",
      "Samyak: Please grab a plate whenever you like. We'll keep the show going while you eat. And uncles, please leave a little for us too.",
    ] },
    { cue: "7:32 PM · Game 2: Prop song game", lines: [
      "Samyak: You can keep eating, but stay with us, because we've got another game for you.",
      "Anshi: Surbhi is running this one. It's a prop song game, and it's going to be fun. Surbhi, over to you!",
      "[Surbhi explains and runs the game. Details to come]",
      "Anshi: Thank you, Surbhi! And well played, everyone.",
    ] },
    { cue: "7:44 PM · Uncle Grandpa's poetry", lines: [
      "[Speak softly here, let the room settle]",
      "Samyak: Can we all quiet down for a few minutes, please.",
      "Anshi: Uncle Grandpa has written something for Mama and Mami. Uncle Grandpa, please.",
      "Anshi: [After the poem, give it a moment] Thank you, Uncle Grandpa. That was really beautiful.",
    ] },
    { cue: "7:49 PM · Wishes & Memories", lines: [
      "Samyak: A few people wanted to say something to Mom and Dad tonight.",
      "[Any short speeches or video messages first]",
      "Anshi: And Pankaj uncle has a song for them. He's going to sing \"Tere Sang Yaara\". Pankaj uncle, please come up!",
    ] },
    { cue: "7:56 PM · Mom & Dad speak, then Dad sings", lines: [
      "Anshi: Okay, we've done enough talking for one night. Mama, Mami, it's your turn. Come say a few words!",
      "[Mom & Dad speak for about 2.5 minutes]",
      "Samyak: Dad, don't sit down just yet. He has one more thing for Mom. He's going to sing \"Tum Se Hi Din Hota Hai\". Dad, all yours.",
      "[Photos of their home, trips, adventures and gym days play behind him]",
    ] },
    { cue: "8:03 PM · Birthday cake for Ashoo Bua", lines: [
      "Anshi: Before the finale, there's one more thing to celebrate tonight. It's also Ashoo Bua's birthday!",
      "Samyak: Everyone, please sing along.",
      "[Bring out the birthday cake. \"Baar Baar Din Ye Aaye\" plays and everyone sings]",
      "Anshi: [After she cuts the cake] Happy birthday, Ashoo Bua! Okay, one last thing for Mama and Mami...",
    ] },
    { cue: "8:10 PM · Finale", lines: [
      "Samyak: Mom, Dad, everyone has had their turn tonight. This last one is just for the two of you.",
      "Both: The floor is all yours.",
      "[\"Tere Bina Nahi Lagda Dil\" plays]",
      "Anshi: [After the dance] Okay, time for the anniversary cake! Sab log paas aa jao.",
    ] },
    { cue: "8:27 PM · Game 3: Bollywood trivia", lines: [
      "Samyak: One last game before the DJ takes over, and this time everyone plays. It's Bollywood trivia!",
      "Anshi: Answer as a table and shout it out loud. Fastest table wins.",
      "[8 to 10 quick questions, taking turns, then announce the winning table]",
    ] },
    { cue: "8:39 PM · Group photo, then DJ", lines: [
      "Anshi: Thank you all so much for coming tonight. It really means a lot to us and to Mama and Mami. Now everyone come in for a group photo!",
      "Samyak: Happy 25th, Mom and Dad. We love you both so much. Here's to 25 more years of Mom being right.",
      "Both: Happy anniversary! DJ, it's all yours!",
    ] },
  ],

  // Emcee script v1 (the original, kept as is). Switch to it with the
  // v1 / v2 toggle in the Emcee script tab.
  script: [
    { cue: "6:30 PM · Welcome", lines: [
      "Samyak: Hi everyone, namaste, and thank you so much for coming! I'm Samyak...",
      "Anshi: ...and I'm Anshi, Samyak's cousin. We're your hosts tonight.",
      "Samyak: Mom and Dad have been married for 25 years now. Haan ji, 25. Hum bhi believe nahi kar pa rahe.",
      "Anshi: 25 years, and Mama still asks Mami where his keys are. Roz. Every single day.",
      "Anshi: We've got some dances, some songs, a couple of games, and lots of photos. Please enjoy, khana kha ke jaana, and don't leave early!",
      "Samyak: Also, the food is after The Shaadi, so if you're hungry, please clap louder. Jitni zor se taali, utna jaldi khana.",
      "Samyak: But first, the people who made all of this possible. Grandpa, Grandma, please aaiye.",
    ] },
    { cue: "6:36 PM · Grand Entrance", lines: [
      "Anshi: Thank you, Grandpa and Grandma. That was really sweet.",
      "Samyak: Chalo, everyone up on your feet please. Our uncles and aunts have been practising, so thoda shor machao...",
      "[Uncles & aunts dance in. As their song ends, the Flipperachi track starts]",
      "Both: ...and here they are, the jodi of the night!",
    ] },
    { cue: "6:41 PM · Grandpa sings for the couple", lines: [
      "Anshi: Mama, Mami, please sit. Aaj aapko kuch nahi karna, bas enjoy karo.",
      "Samyak: Grandpa has a song for you both. Grandpa, over to you!",
      "[Samyak slips away during Grandpa's song to get ready. Anshi has the mic for Samyak's dance, then they swap]",
    ] },
    { cue: "6:48 PM · Dad's early photos, then Samyak's dance", lines: [
      "Anshi: Thank you, Grandpa! Samyak's gone to get ready, so it's just me for a bit.",
      "Anshi: Let's go back a bit. Before he was Mama, he was this guy. [Click through Dad's early photos]",
      "Anshi: Look at that hair! Mama, woh hairstyle kahan gaya? And the bike! Okay, Samyak has something for his dad. Samyak, come on up!",
      "[After his dance, Samyak takes the mic and Anshi goes to get ready]",
    ] },
    { cue: "6:52 PM · Mom's early photos, then Anshi's dance", lines: [
      "Samyak: Thank you! Okay, now Anshi's getting ready, so you're stuck with me.",
      "Samyak: And here's Mom before she was Mom. [Click through Mom's photos] Anshi has a dance for her. Anshi, come on up!",
    ] },
    { cue: "6:57 PM · The Rishta", lines: [
      "Samyak: Big round of applause for Anshi! Okay, we're both back.",
      "Anshi: So then came the rishta. Two families meeting, lots of chai, and probably two very nervous people. [Click through the first meeting and engagement photos]",
      "Samyak: Kake and Surbhi are going to show us how that might have gone. Kake, Surbhi, come on up!",
      "Anshi: [After the dance] Thank you both!",
    ] },
    { cue: "7:06 PM · Game 1: Shoe game", lines: [
      "Anshi: Alright, game time! Mama, Mami, come sit here back to back. Take off your shoes, and hold one of yours and one of each other's.",
      "Samyak: We'll ask a question, and you raise the shoe of whoever the answer is. No peeking and no talking to each other! Everyone else, you're the judges.",
      "Anshi: Mama, a tip. If you're not sure, just hold up Mami's shoe. That's what you do at home anyway.",
      "[21 questions in the Shoe game questions tab (password needed). Take turns asking.]",
      "Anshi: Okay, that was more honest than we expected. Ghar jaake koi ladai nahi, please. Big hand for them!",
    ] },
    { cue: "7:23 PM · Song before the wedding", lines: [
      "Samyak: Next up, Dad's friend Rajesh uncle has a song for them. Rajesh uncle, please come up!",
      "Anshi: [After the song] Thank you so much, Rajesh uncle! Chalo, ab shaadi ki taraf chalte hain.",
    ] },
    { cue: "7:27 PM · The Shaadi", lines: [
      "Anshi: Here are some photos from the big day. Dekho, kitne young lag rahe hain!",
      "Samyak: And to bring back some of that shaadi feeling, here are Gayatri and Hanisha!",
    ] },
    { cue: "7:31 PM · Dinner is open", lines: [
      "Anshi: Okay everyone, the moment you've all actually been waiting for. Khana lag gaya hai!",
      "Samyak: Please go grab a plate whenever you want. We'll keep going while you eat. And uncles, please thoda humare liye bhi chhod dena.",
    ] },
    { cue: "7:32 PM · Game 2: Prop song game", lines: [
      "Samyak: You can keep eating, but stay with us, because we have another game.",
      "Anshi: Surbhi is running this one. It's a prop song game. Surbhi, over to you!",
      "[Surbhi explains and runs the game. Details to come]",
      "Anshi: Thank you, Surbhi! And well played, everyone. Sab ne kamaal kar diya.",
    ] },
    { cue: "7:44 PM · Uncle Grandpa's poetry", lines: [
      "[Speak softly here, the room should settle down]",
      "Samyak: Okay, can we all quiet down for a few minutes please.",
      "Anshi: Uncle Grandpa has been writing poetry for as long as we can remember, and he's written something for the two of them. Uncle Grandpa, please.",
      "Anshi: [After the poem, let it sit for a moment] Thank you, Uncle Grandpa. That was beautiful.",
    ] },
    { cue: "7:49 PM · Wishes & Memories", lines: [
      "Samyak: A few people wanted to say something to Mom and Dad tonight.",
      "[Any short speeches or video messages first]",
      "Anshi: And Pankaj uncle has a song for them. Pankaj uncle, please come up!",
    ] },
    { cue: "7:56 PM · Mom & Dad speak, then Dad sings", lines: [
      "Anshi: Okay, humne bahut baatein kar li. Mama, Mami, your turn. Come say a few words!",
      "[Mom & Dad speak for about 2.5 minutes]",
      "Samyak: And Dad has one more thing. He's going to sing a song for Mom. I've heard him practising at home, so trust me, he's ready. Dad, ho jaaye!",
      "[Photos of their home, trips, adventures and gym days play behind him]",
    ] },
    { cue: "8:03 PM · Birthday cake for [aunt]", lines: [
      "Anshi: Before we finish, there's one more thing to celebrate. It's also [aunt]'s birthday today!",
      "Samyak: [Bring out the birthday cake] Everyone, let's sing! Happy birthday to you...",
      "Anshi: [After she cuts the cake] Happy birthday, [aunt]! Okay, one last thing for our jodi of the night...",
    ] },
    { cue: "8:10 PM · Finale", lines: [
      "Samyak: Mom, Dad, we've all had our turn. Now it's just the two of you.",
      "Both: The floor is all yours.",
      "Anshi: [After the dance] Okay, time for the anniversary cake! Sab log paas aa jao.",
    ] },
    { cue: "8:27 PM · Game 3: Bollywood trivia", lines: [
      "Samyak: One last game before the DJ takes over, and everyone can play. It's Bollywood trivia!",
      "Anshi: Answer as a table and zor se shout it out. Fastest table wins.",
      "[8 to 10 quick questions, taking turns, then announce the winning table]",
    ] },
    { cue: "8:39 PM · Group photo, then DJ", lines: [
      "Anshi: Thank you all so much for coming tonight. It really means a lot to us. Dil se thank you. Okay, everyone come in for a group photo!",
      "Samyak: Happy 25th, Mom and Dad. Love you both. Here's to 25 more years of Mom being right. Hamesha ki tarah.",
      "Both: Happy anniversary! DJ, it's all yours!",
    ] },
  ],

  roles: [
    { role: "Hosts / MCs", does: "Welcome, story narration, run the games (script in the Emcee script tab). An uncle introduces Samyak's dance, and Samyak introduces Anshi & Yashi's", who: "Samyak & Anshi" },
    { role: "Tech helper", does: "Runs the slideshow and music, cues each act's song", who: "TBD" },
    { role: "Games helper", does: "Sets up the belan & dumbbell game chairs, 2 belans and 2 dumbbells, and the props for Surbhi's prop song game, keeps score in Bollywood trivia, gives prizes", who: "TBD" },
    { role: "Performance lead", does: "Collects the lineup, runs a rehearsal, keeps acts short", who: "TBD" },
    { role: "Decorations crew (2 to 3 people)", does: "Decorate the venue the morning of the party: decorations, backdrop and photo corner", who: "TBD" },
    { role: "Cake pickup", does: "Collect both cakes before the party (the birthday cake and the anniversary cake) and keep them hidden until their moments", who: "TBD" },
    { role: "Photographer", does: "Candid photos plus the group photo at the end", who: "TBD" },
  ],

  // done: true puts a tick next to it
  timeline: [
    { by: "By Nov 7", task: "Lock the run of show, pick the host and helpers, create the GitHub repo", done: false },
    { by: "By Nov 10", task: "Send guests the ask for photos, messages and performance sign-ups", done: false },
    { by: "By Nov 14", task: "Finalize shoe game and Bollywood trivia questions, confirm the performance lineup", done: false },
    { by: "By Nov 20", task: "All photos and messages in, slideshow built", done: false },
    { by: "By Nov 24", task: "Run-through of the slideshow on the actual TV or projector, performance rehearsal", done: false },
    { by: "Nov 26", task: "Pack the prop song game props (check with Surbhi) and trivia prizes, test every song on the playlist", done: false },
    { by: "Nov 27, before the party", task: "Pick up both cakes (birthday and anniversary), names TBD", done: false },
    { by: "Nov 27, morning", task: "Decorations crew (2 to 3 people, names TBD) decorates the venue and sets up the photo corner", done: false },
    { by: "Nov 27, evening", task: "The party", done: false },
  ],
};
