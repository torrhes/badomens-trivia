import { getAudioAsset } from "./audioLibrary";
import type { Question } from "./types";

// ============================================================
// PERGUNTAS DE ÁUDIO – 24 QUESTÕES (UMA POR ÁUDIO)
// ============================================================
export const SONG_QUESTIONS: Question[] = [
  // ============================================================
  // artificial.mp3 → "ARTIFICIAL SUICIDE"
  // ============================================================
  {
    id: "audio-artificial",
    category: "song",
    difficulty: "medium",
    question: "Which song is this audio from?",
    options: ["ARTIFICIAL SUICIDE", "Dethrone", "The Hell I Overcame", "Like A Villain"],
    correctAnswer: "ARTIFICIAL SUICIDE",
    explanation:
      "The heavy, industrial riff and aggressive delivery are unmistakably from 'ARTIFICIAL SUICIDE'.",
    source: "Sumerian Records",
    mediaType: "audio",
    mediaAssetId: "artificial",
    mediaUrl: getAudioAsset("artificial")?.src,
    imageSource: getAudioAsset("artificial")?.source,
  },

  // ============================================================
  // broken.mp3 → "Broken Youth"
  // ============================================================
  {
    id: "audio-broken",
    category: "song",
    difficulty: "hard",
    question: "Which song is this audio from?",
    options: ["Broken Youth", "Glass Houses", "Exit Wounds", "F E R A L"],
    correctAnswer: "Broken Youth",
    explanation:
      "The melancholic yet heavy opening is a signature of 'Broken Youth' from the debut album.",
    source: "Sumerian Records",
    mediaType: "audio",
    mediaAssetId: "broken",
    mediaUrl: getAudioAsset("broken")?.src,
    imageSource: getAudioAsset("broken")?.source,
  },

  // ============================================================
  // burning.mp3 → "Burning Out"
  // ============================================================
  {
    id: "audio-burning",
    category: "song",
    difficulty: "medium",
    question: "Which song is this audio from?",
    options: [
      "Burning Out",
      "Burning Out (Acoustic)",
      "Careful What You Wish For",
      "Kingdom of Cards",
    ],
    correctAnswer: "Burning Out",
    explanation:
      "The soaring chorus and emotional build are classic 'Burning Out' – one of the band's most anthemic tracks.",
    source: "Sumerian Records",
    mediaType: "audio",
    mediaAssetId: "burning",
    mediaUrl: getAudioAsset("burning")?.src,
    imageSource: getAudioAsset("burning")?.source,
  },

  // ============================================================
  // careful.mp3 → "Careful What You Wish For"
  // ============================================================
  {
    id: "audio-careful",
    category: "song",
    difficulty: "medium",
    question: "Which song is this audio from?",
    options: ["Careful What You Wish For", "The Hell I Overcame", "Said and Done", "Mercy"],
    correctAnswer: "Careful What You Wish For",
    explanation:
      "The brooding, atmospheric intro is a dead giveaway for 'Careful What You Wish For'.",
    source: "Sumerian Records",
    mediaType: "audio",
    mediaAssetId: "careful",
    mediaUrl: getAudioAsset("careful")?.src,
    imageSource: getAudioAsset("careful")?.source,
  },

  // ============================================================
  // dethrone.mp3 → "Dethrone"
  // ============================================================
  {
    id: "audio-dethrone",
    category: "song",
    difficulty: "easy",
    question: "Which song is this audio from?",
    options: ["Dethrone", "Blood", "Mercy", "The Hell I Overcame"],
    correctAnswer: "Dethrone",
    explanation: "The aggressive, chugging guitar and defiant vocals are unmistakably 'Dethrone'.",
    source: "Sumerian Records",
    mediaType: "audio",
    mediaAssetId: "dethrone",
    mediaUrl: getAudioAsset("dethrone")?.src,
    imageSource: getAudioAsset("dethrone")?.source,
  },

  // ============================================================
  // digital.mp3 → "DIGITAL FOOTPRINT"
  // ============================================================
  {
    id: "audio-digital",
    category: "song",
    difficulty: "expert",
    question: "Which song is this audio from?",
    options: ["DIGITAL FOOTPRINT", "IDWT$", "The Grey", "Nowhere to Go"],
    correctAnswer: "DIGITAL FOOTPRINT",
    explanation:
      "The glitchy, electronic-infused sound is unique to the visual release 'DIGITAL FOOTPRINT'.",
    source: "Sumerian Records",
    mediaType: "audio",
    mediaAssetId: "digital",
    mediaUrl: getAudioAsset("digital")?.src,
    imageSource: getAudioAsset("digital")?.source,
  },

  // ============================================================
  // dying.mp3 → "Dying To Love"
  // ============================================================
  {
    id: "audio-dying",
    category: "song",
    difficulty: "easy",
    question: "Which song is this audio from?",
    options: ["Dying To Love", "Just Pretend", "Bad Decisions", "Somebody Else"],
    correctAnswer: "Dying To Love",
    explanation: "The vulnerable, piano-driven intro is characteristic of 'Dying To Love'.",
    source: "Sumerian Records",
    mediaType: "audio",
    mediaAssetId: "dying",
    mediaUrl: getAudioAsset("dying")?.src,
    imageSource: getAudioAsset("dying")?.source,
  },

  // ============================================================
  // even.mp3 → "EVEN"
  // ============================================================
  {
    id: "audio-even",
    category: "song",
    difficulty: "hard",
    question: "Which song is this audio from?",
    options: ["EVEN", "V.A.N", "Inferno", "Obsidian"],
    correctAnswer: "EVEN",
    explanation:
      "The dark, hypnotic atmosphere is a signature of 'EVEN', a deep cut from the Concrete Jungle OST.",
    source: "Sumerian Records",
    mediaType: "audio",
    mediaAssetId: "even",
    mediaUrl: getAudioAsset("even")?.src,
    imageSource: getAudioAsset("even")?.source,
  },

  // ============================================================
  // exit.mp3 → "Exit Wounds"
  // ============================================================
  {
    id: "audio-exit",
    category: "song",
    difficulty: "hard",
    question: "Which song is this audio from?",
    options: ["Exit Wounds", "Glass Houses", "The Worst in Me", "Broken Youth"],
    correctAnswer: "Exit Wounds",
    explanation: "The raw, emotional opening is instantly recognizable as 'Exit Wounds'.",
    source: "Sumerian Records",
    mediaType: "audio",
    mediaAssetId: "exit",
    mediaUrl: getAudioAsset("exit")?.src,
    imageSource: getAudioAsset("exit")?.source,
  },

  // ============================================================
  // feral.mp3 → "F E R A L"
  // ============================================================
  {
    id: "audio-feral",
    category: "song",
    difficulty: "medium",
    question: "Which song is this audio from?",
    options: ["F E R A L", "Malice", "Hedonist", "Crawl"],
    correctAnswer: "F E R A L",
    explanation: "The chaotic, aggressive riff and shouted vocals are pure 'F E R A L' energy.",
    source: "Sumerian Records",
    mediaType: "audio",
    mediaAssetId: "feral",
    mediaUrl: getAudioAsset("feral")?.src,
    imageSource: getAudioAsset("feral")?.source,
  },

  // ============================================================
  // fountain.mp3 → "The Fountain"
  // ============================================================
  {
    id: "audio-fountain",
    category: "song",
    difficulty: "medium",
    question: "Which song is this audio from?",
    options: ["The Fountain", "The Letdown", "Reprise (The Sound of the End)", "Crawl"],
    correctAnswer: "The Fountain",
    explanation:
      "The melodic, almost ethereal guitar line is the hallmark of the closing track 'The Fountain'.",
    source: "Sumerian Records",
    mediaType: "audio",
    mediaAssetId: "fountain",
    mediaUrl: getAudioAsset("fountain")?.src,
    imageSource: getAudioAsset("fountain")?.source,
  },

  // ============================================================
  // glass.mp3 → "Glass Houses"
  // ============================================================
  {
    id: "audio-glass",
    category: "song",
    difficulty: "easy",
    question: "Which song is this audio from?",
    options: ["Glass Houses", "Exit Wounds", "The Worst in Me", "Broken Youth"],
    correctAnswer: "Glass Houses",
    explanation: "The iconic opening riff is instantly recognizable as the debut album's opener.",
    source: "Sumerian Records",
    mediaType: "audio",
    mediaAssetId: "glass",
    mediaUrl: getAudioAsset("glass")?.src,
    imageSource: getAudioAsset("glass")?.source,
  },

  // ============================================================
  // grey.mp3 → "The Grey"
  // ============================================================
  {
    id: "audio-grey",
    category: "song",
    difficulty: "easy",
    question: "Which song is this audio from?",
    options: ["The Grey", "IDWT$", "Somebody Else", "Who Are You?"],
    correctAnswer: "The Grey",
    explanation: "The moody, atmospheric verses and explosive chorus are signature 'The Grey'.",
    source: "Sumerian Records",
    mediaType: "audio",
    mediaAssetId: "grey",
    mediaUrl: getAudioAsset("grey")?.src,
    imageSource: getAudioAsset("grey")?.source,
  },

  // ============================================================
  // hell.mp3 → "The Hell I Overcame"
  // ============================================================
  {
    id: "audio-hell",
    category: "song",
    difficulty: "medium",
    question: "Which song is this audio from?",
    options: ["The Hell I Overcame", "Dethrone", "Blood", "Mercy"],
    correctAnswer: "The Hell I Overcame",
    explanation:
      "The powerful, anthemic chorus and heavy breakdown are unmistakably from this FGBGFM standout.",
    source: "Sumerian Records",
    mediaType: "audio",
    mediaAssetId: "hell",
    mediaUrl: getAudioAsset("hell")?.src,
    imageSource: getAudioAsset("hell")?.source,
  },

  // ============================================================
  // idwt.mp3 → "IDWT$"
  // ============================================================
  {
    id: "audio-idwt",
    category: "song",
    difficulty: "expert",
    question: "Which song is this audio from?",
    options: ["IDWT$", "DIGITAL FOOTPRINT", "The Grey", "What Do You Want from Me?"],
    correctAnswer: "IDWT$",
    explanation:
      "The electronic-infused, industrial sound is unique to 'IDWT$' (I Don't Wanna Talk).",
    source: "Sumerian Records",
    mediaType: "audio",
    mediaAssetId: "idwt",
    mediaUrl: getAudioAsset("idwt")?.src,
    imageSource: getAudioAsset("idwt")?.source,
  },

  // ============================================================
  // impose.mp3 → "Impose"
  // ============================================================
  {
    id: "audio-impose",
    category: "song",
    difficulty: "easy",
    question: "Which song is this audio from?",
    options: ["Impose", "Specter", "Dying To Love", "Left For Good"],
    correctAnswer: "Impose",
    explanation:
      "The modern, synth-heavy production and tight groove are classic 'Impose' from the 2025 singles.",
    source: "Sumerian Records",
    mediaType: "audio",
    mediaAssetId: "impose",
    mediaUrl: getAudioAsset("impose")?.src,
    imageSource: getAudioAsset("impose")?.source,
  },

  // ============================================================
  // left.mp3 → "Left For Good"
  // ============================================================
  {
    id: "audio-left",
    category: "song",
    difficulty: "easy",
    question: "Which song is this audio from?",
    options: ["Left For Good", "Novocaine", "Dust in the Wind", "Nomad"],
    correctAnswer: "Left For Good",
    explanation:
      "The melancholic, reflective melody is a perfect match for the 2025 single 'Left For Good'.",
    source: "Sumerian Records",
    mediaType: "audio",
    mediaAssetId: "left",
    mediaUrl: getAudioAsset("left")?.src,
    imageSource: getAudioAsset("left")?.source,
  },

  // ============================================================
  // loading.mp3 → "LOADING SCREEN"
  // ============================================================
  {
    id: "audio-loading",
    category: "song",
    difficulty: "expert",
    question: "Which song is this audio from?",
    options: ["LOADING SCREEN", "VANish", "Obsidian", "Inferno"],
    correctAnswer: "LOADING SCREEN",
    explanation:
      "The ambient, cinematic soundscape is unmistakably from the original soundtrack piece 'LOADING SCREEN'.",
    source: "Sumerian Records",
    mediaType: "audio",
    mediaAssetId: "loading",
    mediaUrl: getAudioAsset("loading")?.src,
    imageSource: getAudioAsset("loading")?.source,
  },

  // ============================================================
  // mercy.mp3 → "Mercy"
  // ============================================================
  {
    id: "audio-mercy",
    category: "song",
    difficulty: "medium",
    question: "Which song is this audio from?",
    options: ["Mercy", "Said and Done", "Blood", "Running in Circles"],
    correctAnswer: "Mercy",
    explanation: "The slow-burning, emotionally charged intro is classic 'Mercy' from FGBGFM.",
    source: "Sumerian Records",
    mediaType: "audio",
    mediaAssetId: "mercy",
    mediaUrl: getAudioAsset("mercy")?.src,
    imageSource: getAudioAsset("mercy")?.source,
  },

  // ============================================================
  // nowhere.mp3 → "Nowhere To Go"
  // ============================================================
  {
    id: "audio-nowhere",
    category: "song",
    difficulty: "easy",
    question: "Which song is this audio from?",
    options: ["Nowhere To Go", "Take Me First", "Concrete Jungle", "What It Cost"],
    correctAnswer: "Nowhere To Go",
    explanation:
      "The driving, urgent riff and soaring chorus are a dead giveaway for 'Nowhere To Go'.",
    source: "Sumerian Records",
    mediaType: "audio",
    mediaAssetId: "nowhere",
    mediaUrl: getAudioAsset("nowhere")?.src,
    imageSource: getAudioAsset("nowhere")?.source,
  },

  // ============================================================
  // pretend.mp3 → "Just Pretend"
  // ============================================================
  {
    id: "audio-pretend",
    category: "song",
    difficulty: "easy",
    question: "Which song is this audio from?",
    options: ["Just Pretend", "Bad Decisions", "The Grey", "Somebody Else"],
    correctAnswer: "Just Pretend",
    explanation:
      "The intimate, stripped-back intro and emotive vocals are unmistakably 'Just Pretend'.",
    source: "Sumerian Records",
    mediaType: "audio",
    mediaAssetId: "pretend",
    mediaUrl: getAudioAsset("pretend")?.src,
    imageSource: getAudioAsset("pretend")?.source,
  },

  // ============================================================
  // said.mp3 → "Said & Done"
  // ============================================================
  {
    id: "audio-said",
    category: "song",
    difficulty: "hard",
    question: "Which song is this audio from?",
    options: ["Said & Done", "Mercy", "Blood", "Kingdom of Cards"],
    correctAnswer: "Said & Done",
    explanation: "The punchy, aggressive riff and defiant lyrics are pure 'Said & Done' energy.",
    source: "Sumerian Records",
    mediaType: "audio",
    mediaAssetId: "said",
    mediaUrl: getAudioAsset("said")?.src,
    imageSource: getAudioAsset("said")?.source,
  },

  // ============================================================
  // specter.mp3 → "Specter"
  // ============================================================
  {
    id: "audio-specter",
    category: "song",
    difficulty: "easy",
    question: "Which song is this audio from?",
    options: ["Specter", "Impose", "Dying To Love", "Left For Good"],
    correctAnswer: "Specter",
    explanation:
      "The dark, electronic-tinged atmosphere is the hallmark of the 2025 single 'Specter'.",
    source: "Sumerian Records",
    mediaType: "audio",
    mediaAssetId: "specter",
    mediaUrl: getAudioAsset("specter")?.src,
    imageSource: getAudioAsset("specter")?.source,
  },

  // ============================================================
  // villain.mp3 → "Like A Villain"
  // ============================================================
  {
    id: "audio-villain",
    category: "song",
    difficulty: "easy",
    question: "Which song is this audio from?",
    options: ["Like A Villain", "Bad Decisions", "Just Pretend", "Concrete Jungle"],
    correctAnswer: "Like A Villain",
    explanation:
      "The theatrical, brooding intro and catchy chorus are unmistakably 'Like A Villain'.",
    source: "Sumerian Records",
    mediaType: "audio",
    mediaAssetId: "villain",
    mediaUrl: getAudioAsset("villain")?.src,
    imageSource: getAudioAsset("villain")?.source,
  },

  // ============================================================
  // worst.mp3 → "The Worst In Me"
  // ============================================================
  {
    id: "audio-worst",
    category: "song",
    difficulty: "medium",
    question: "Which song is this audio from?",
    options: ["The Worst In Me", "Glass Houses", "F E R A L", "Enough, Enough Now"],
    correctAnswer: "The Worst In Me",
    explanation:
      "The raw, vulnerable opening and introspective lyrics are signature 'The Worst In Me'.",
    source: "Sumerian Records",
    mediaType: "audio",
    mediaAssetId: "worst",
    mediaUrl: getAudioAsset("worst")?.src,
    imageSource: getAudioAsset("worst")?.source,
  },
];
