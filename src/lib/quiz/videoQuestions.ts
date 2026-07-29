import { getMediaAsset } from "./mediaLibrary";
import type { Question } from "./types";

export const VIDEO_QUESTIONS: Question[] = [
  // ------------------------------------------------------------------
  // 1. anything.png → "Anything > Human"
  // ------------------------------------------------------------------
  {
    id: "video-anything",
    category: "video",
    difficulty: "medium",
    question: "Which song is this video from?",
    options: ["Anything > Human", "Artificial Suicide", "Miracle", "Nowhere to Go"],
    correctAnswer: "Anything > Human",
    explanation:
      "This atmospheric visual matches the orchestral, haunting vibe of 'Anything > Human', featured on the Concrete Jungle OST.",
    funFact:
      "The orchestral version of this track was also released, giving it an even more cinematic feel.",
    source: "Sumerian Records",
    mediaType: "image",
    mediaAssetId: "anything",
    mediaUrl: getMediaAsset("anything")?.src,
    imageSource: getMediaAsset("anything")?.source,
  },

  // ------------------------------------------------------------------
  // 2. artificial.png → "Artificial Suicide"
  // ------------------------------------------------------------------
  {
    id: "video-artificial",
    category: "video",
    difficulty: "easy",
    question: "Which song is this video from?",
    options: ["Artificial Suicide", "Like a Villain", "The Grey", "IDWT$"],
    correctAnswer: "Artificial Suicide",
    explanation:
      "The industrial, glitch-heavy aesthetic is a perfect match for the high‑energy single 'Artificial Suicide'.",
    funFact:
      "The song's title and visuals explore themes of digital self‑destruction and identity crises.",
    source: "Sumerian Records",
    mediaType: "image",
    mediaAssetId: "artificial",
    mediaUrl: getMediaAsset("artificial")?.src,
    imageSource: getMediaAsset("artificial")?.source,
  },

  // ------------------------------------------------------------------
  // 3. burning.png → "Burning Out"
  // ------------------------------------------------------------------
  {
    id: "video-burning",
    category: "video",
    difficulty: "easy",
    question: "Which song is this video from?",
    options: ["Burning Out", "The Death of Peace of Mind", "Just Pretend", "Bad Decisions"],
    correctAnswer: "Burning Out",
    explanation:
      "The fiery imagery and intense close‑ups are directly tied to the promotional material for 'Burning Out'.",
    funFact:
      "An acoustic version of 'Burning Out' appears on the FGBGFM Unplugged EP, showcasing a softer side.",
    source: "Sumerian Records",
    mediaType: "image",
    mediaAssetId: "burning",
    mediaUrl: getMediaAsset("burning")?.src,
    imageSource: getMediaAsset("burning")?.source,
  },

  // ------------------------------------------------------------------
  // 4. careful.png → "Careful What You Wish For"
  // ------------------------------------------------------------------
  {
    id: "video-careful",
    category: "video",
    difficulty: "medium",
    question: "Which song is this video from?",
    options: ["Careful What You Wish For", "Kingdom of Cards", "Said and Done", "Mercy"],
    correctAnswer: "Careful What You Wish For",
    explanation:
      "The visual's dark, cautionary tone aligns perfectly with the lyrics and mood of 'Careful What You Wish For'.",
    funFact: "This track got both an acoustic and a 'Vocalat' version, showing its versatility.",
    source: "Sumerian Records",
    mediaType: "image",
    mediaAssetId: "careful",
    mediaUrl: getMediaAsset("careful")?.src,
    imageSource: getMediaAsset("careful")?.source,
  },

  // ------------------------------------------------------------------
  // 5. concrete.png → "Concrete Jungle"
  // ------------------------------------------------------------------
  {
    id: "video-concrete",
    category: "video",
    difficulty: "easy",
    question: "Which song is this video from?",
    options: ["Concrete Jungle", "The Drain", "Nowhere to Go", "Take Me First"],
    correctAnswer: "Concrete Jungle",
    explanation:
      "The raw, urban warehouse setting is iconic for the title track of the band's third album.",
    funFact:
      "A reimagined version, 'Concrete Jungle (The Sound of the End)', appears on the Concrete Jungle OST.",
    source: "Sumerian Records",
    mediaType: "image",
    mediaAssetId: "concrete",
    mediaUrl: getMediaAsset("concrete")?.src,
    imageSource: getMediaAsset("concrete")?.source,
  },

  // ------------------------------------------------------------------
  // 6. dethrone.png → "Dethrone"
  // ------------------------------------------------------------------
  {
    id: "video-dethrone",
    category: "video",
    difficulty: "hard",
    question: "Which song is this video from?",
    options: ["Dethrone", "The Hell I Overcame", "Blood", "Mercy"],
    correctAnswer: "Dethrone",
    explanation:
      "The aggressive, rebellious visual style is unmistakably linked to the hard‑hitting single 'Dethrone'.",
    funFact:
      "Dethrone is one of the band's heaviest tracks, and it's often a live setlist highlight.",
    source: "Sumerian Records",
    mediaType: "image",
    mediaAssetId: "dethrone",
    mediaUrl: getMediaAsset("dethrone")?.src,
    imageSource: getMediaAsset("dethrone")?.source,
  },

  // ------------------------------------------------------------------
  // 7. digital.png → "The Death of Peace of Mind" (tema digital)
  // ------------------------------------------------------------------
  {
    id: "video-digital",
    category: "video",
    difficulty: "medium",
    question: "Which song is this video from?",
    options: ["The Death of Peace of Mind", "What It Cost", "Somebody Else", "Bad Decisions"],
    correctAnswer: "The Death of Peace of Mind",
    explanation:
      "The glitchy, digital distortion reflects the title track's exploration of modern anxiety and information overload.",
    funFact: "This song was the lead single from the album and set the tone for the entire record.",
    source: "Sumerian Records",
    mediaType: "image",
    mediaAssetId: "digital",
    mediaUrl: getMediaAsset("digital")?.src,
    imageSource: getMediaAsset("digital")?.source,
  },

  // ------------------------------------------------------------------
  // 8. drain.png → "The Drain"
  // ------------------------------------------------------------------
  {
    id: "video-drain",
    category: "video",
    difficulty: "medium",
    question: "Which song is this video from?",
    options: ["The Drain", "Even", "Anything > Human", "Digital Footprint"],
    correctAnswer: "The Drain",
    explanation:
      "The collaborative visual with HEALTH and SWARM has a distinct industrial and dark atmosphere.",
    funFact:
      "An orchestral version of 'The Drain' was released on the Concrete Jungle OST, adding a symphonic layer.",
    source: "Sumerian Records",
    mediaType: "image",
    mediaAssetId: "drain",
    mediaUrl: getMediaAsset("drain")?.src,
    imageSource: getMediaAsset("drain")?.source,
  },

  // ------------------------------------------------------------------
  // 9. exit.png → "Exit Wounds"
  // ------------------------------------------------------------------
  {
    id: "video-exit",
    category: "video",
    difficulty: "easy",
    question: "Which song is this video from?",
    options: ["Exit Wounds", "F E R A L", "Malice", "Hedonist"],
    correctAnswer: "Exit Wounds",
    explanation:
      "The raw, emotional intensity of the imagery matches the debut album's standout track 'Exit Wounds'.",
    funFact:
      "This song was one of the first to gain traction for the band, thanks to its relatable lyrics.",
    source: "Sumerian Records",
    mediaType: "image",
    mediaAssetId: "exit",
    mediaUrl: getMediaAsset("exit")?.src,
    imageSource: getMediaAsset("exit")?.source,
  },

  // ------------------------------------------------------------------
  // 10. fountain.png → "The Fountain"
  // ------------------------------------------------------------------
  {
    id: "video-fountain",
    category: "video",
    difficulty: "hard",
    question: "Which song is this video from?",
    options: ["The Fountain", "The Letdown", "Reprise (The Sound of the End)", "Crawl"],
    correctAnswer: "The Fountain",
    explanation:
      "The symbolic, almost ethereal visual is associated with the closing track of the debut album.",
    funFact: "The Fountain features some of the most poetic lyrics in the band's early catalogue.",
    source: "Sumerian Records",
    mediaType: "image",
    mediaAssetId: "fountain",
    mediaUrl: getMediaAsset("fountain")?.src,
    imageSource: getMediaAsset("fountain")?.source,
  },

  // ------------------------------------------------------------------
  // 11. glass.png → "Glass Houses"
  // ------------------------------------------------------------------
  {
    id: "video-glass",
    category: "video",
    difficulty: "easy",
    question: "Which song is this video from?",
    options: ["Glass Houses", "Exit Wounds", "The Worst in Me", "Broken Youth"],
    correctAnswer: "Glass Houses",
    explanation:
      "The sharp, angular visual is a direct reference to the opener of the debut album.",
    funFact: "The song's opening riff is one of the most recognizable in the band's discography.",
    source: "Sumerian Records",
    mediaType: "image",
    mediaAssetId: "glass",
    mediaUrl: getMediaAsset("glass")?.src,
    imageSource: getMediaAsset("glass")?.source,
  },

  // ------------------------------------------------------------------
  // 12. hell.png → "The Hell I Overcame"
  // ------------------------------------------------------------------
  {
    id: "video-hell",
    category: "video",
    difficulty: "medium",
    question: "Which song is this video from?",
    options: ["The Hell I Overcame", "Dethrone", "Blood", "Mercy"],
    correctAnswer: "The Hell I Overcame",
    explanation: "The fiery, intense imagery aligns with the powerful chorus of this FGBGFM track.",
    funFact:
      "Both an acoustic and a remix version of this song exist, showing its enduring popularity.",
    source: "Sumerian Records",
    mediaType: "image",
    mediaAssetId: "hell",
    mediaUrl: getMediaAsset("hell")?.src,
    imageSource: getMediaAsset("hell")?.source,
  },

  // ------------------------------------------------------------------
  // 13. impose.png → "Impose"
  // ------------------------------------------------------------------
  {
    id: "video-impose",
    category: "video",
    difficulty: "medium",
    question: "Which song is this video from?",
    options: ["Impose", "Specter", "Dying to Love", "Left for Good"],
    correctAnswer: "Impose",
    explanation: "The modern, sleek visual style is a perfect match for the 2025 single 'Impose'.",
    funFact:
      "Impose was released alongside 'Specter' and marked a new creative phase for the band.",
    source: "Sumerian Records",
    mediaType: "image",
    mediaAssetId: "impose",
    mediaUrl: getMediaAsset("impose")?.src,
    imageSource: getMediaAsset("impose")?.source,
  },

  // ------------------------------------------------------------------
  // 14. just.png → "Just Pretend"
  // ------------------------------------------------------------------
  {
    id: "video-just",
    category: "video",
    difficulty: "easy",
    question: "Which song is this video from?",
    options: ["Just Pretend", "The Grey", "Bad Decisions", "Who Are You?"],
    correctAnswer: "Just Pretend",
    explanation:
      "The melancholic, intimate visual is unmistakably from the promotional material for 'Just Pretend'.",
    funFact:
      "An unplugged version appears on the FGBGFM Unplugged EP, and a version with Kenny Hoopla was released later.",
    source: "Sumerian Records",
    mediaType: "image",
    mediaAssetId: "just",
    mediaUrl: getMediaAsset("just")?.src,
    imageSource: getMediaAsset("just")?.source,
  },

  // ------------------------------------------------------------------
  // 15. left.png → "Left for Good"
  // ------------------------------------------------------------------
  {
    id: "video-left",
    category: "video",
    difficulty: "hard",
    question: "Which song is this video from?",
    options: ["Left for Good", "Novocaine", "Dust in the Wind", "Nomad"],
    correctAnswer: "Left for Good",
    explanation:
      "The somber, reflective imagery matches the tone of the 2025 single 'Left for Good'.",
    funFact:
      "This track was released alongside 'Dying to Love' and 'Impose' as part of a string of new material.",
    source: "Sumerian Records",
    mediaType: "image",
    mediaAssetId: "left",
    mediaUrl: getMediaAsset("left")?.src,
    imageSource: getMediaAsset("left")?.source,
  },

  // ------------------------------------------------------------------
  // 16. limits.png → "Limits"
  // ------------------------------------------------------------------
  {
    id: "video-limits",
    category: "video",
    difficulty: "expert",
    question: "Which song is this video from?",
    options: ["Limits", "Running in Circles", "Kingdom of Cards", "If I'm There"],
    correctAnswer: "Limits",
    explanation:
      "The stark, boundary‑pushing visual is directly tied to the deluxe edition track 'Limits', which explores themes of self‑imposed barriers.",
    funFact:
      "'Limits' was added as a bonus track on the deluxe version of 'Finding God Before God Finds Me' in 2020.",
    source: "Sumerian Records",
    mediaType: "image",
    mediaAssetId: "limits",
    mediaUrl: getMediaAsset("limits")?.src,
    imageSource: getMediaAsset("limits")?.source,
  },

  // ------------------------------------------------------------------
  // 17. nervous.png → "NERVOUS SYSTEM" (feat. iRis.EXE)
  // ------------------------------------------------------------------
  {
    id: "video-nervous",
    category: "video",
    difficulty: "expert",
    question: "Which song is this video from?",
    options: ["NERVOUS SYSTEM", "V.A.N", "Inferno", "Obsidian"],
    correctAnswer: "NERVOUS SYSTEM",
    explanation:
      "The glitchy, high‑tension visual is a perfect match for the collaborative electronic track 'NERVOUS SYSTEM', featuring iRis.EXE from the Concrete Jungle OST.",
    funFact:
      "This track is one of the most experimental collaborations on the OST, blending Bad Omens' heavy style with hyper‑pop and industrial elements from iRis.EXE.",
    source: "Sumerian Records",
    mediaType: "image",
    mediaAssetId: "nervous",
    mediaUrl: getMediaAsset("nervous")?.src,
    imageSource: getMediaAsset("nervous")?.source,
  },

  // ------------------------------------------------------------------
  // 18. specter.png → "Specter"
  // ------------------------------------------------------------------
  {
    id: "video-specter",
    category: "video",
    difficulty: "medium",
    question: "Which song is this video from?",
    options: ["Specter", "Impose", "Dying to Love", "Left for Good"],
    correctAnswer: "Specter",
    explanation: "The dark, ghostly visual is directly tied to the 2025 single 'Specter'.",
    funFact:
      "Specter was released alongside 'Impose', and both tracks showcase a more electronic influence.",
    source: "Sumerian Records",
    mediaType: "image",
    mediaAssetId: "specter",
    mediaUrl: getMediaAsset("specter")?.src,
    imageSource: getMediaAsset("specter")?.source,
  },

  // ------------------------------------------------------------------
  // 19. there.png → "If I'm There"
  // ------------------------------------------------------------------
  {
    id: "video-there",
    category: "video",
    difficulty: "hard",
    question: "Which song is this video from?",
    options: ["If I'm There", "Kingdom of Cards", "Said and Done", "Mercy"],
    correctAnswer: "If I'm There",
    explanation:
      "The intimate, reflective visual is directly tied to the emotional ballad 'If I'm There' from the album 'Finding God Before God Finds Me'.",
    funFact:
      "'If I'm There' is one of the band's most stripped‑back and vulnerable tracks, often praised for its raw vocal delivery.",
    source: "Sumerian Records",
    mediaType: "image",
    mediaAssetId: "there",
    mediaUrl: getMediaAsset("there")?.src,
    imageSource: getMediaAsset("there")?.source,
  },

  // ------------------------------------------------------------------
  // 20. villain.png → "Like a Villain"
  // ------------------------------------------------------------------
  {
    id: "video-villain",
    category: "video",
    difficulty: "easy",
    question: "Which song is this video from?",
    options: ["Like a Villain", "Bad Decisions", "Just Pretend", "Concrete Jungle"],
    correctAnswer: "Like a Villain",
    explanation:
      "The dark, theatrical visual is a perfect match for the brooding single 'Like a Villain'.",
    funFact:
      "The song's chorus is one of the catchiest on the album, often getting crowds singing along.",
    source: "Sumerian Records",
    mediaType: "image",
    mediaAssetId: "villain",
    mediaUrl: getMediaAsset("villain")?.src,
    imageSource: getMediaAsset("villain")?.source,
  },

  // ------------------------------------------------------------------
  // 21. worst.png → "The Worst in Me"
  // ------------------------------------------------------------------
  {
    id: "video-worst",
    category: "video",
    difficulty: "medium",
    question: "Which song is this video from?",
    options: ["The Worst in Me", "Glass Houses", "F E R A L", "Enough, Enough Now"],
    correctAnswer: "The Worst in Me",
    explanation:
      "The raw, vulnerable visual captures the self‑reflective tone of this deep cut from the debut album.",
    funFact:
      "The song explores themes of self‑sabotage and inner darkness, a recurring topic in the band's lyrics.",
    source: "Sumerian Records",
    mediaType: "image",
    mediaAssetId: "worst",
    mediaUrl: getMediaAsset("worst")?.src,
    imageSource: getMediaAsset("worst")?.source,
  },
];
