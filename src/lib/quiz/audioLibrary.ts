import artificialAudio from "../../assets/audios/artificial.mp3";
import brokenAudio from "../../assets/audios/broken.mp3";
import burningAudio from "../../assets/audios/burning.mp3";
import carefulAudio from "../../assets/audios/careful.mp3";
import dethroneAudio from "../../assets/audios/dethrone.mp3";
import digitalAudio from "../../assets/audios/digital.mp3";
import dyingAudio from "../../assets/audios/dying.mp3";
import evenAudio from "../../assets/audios/even.mp3";
import exitAudio from "../../assets/audios/exit.mp3";
import feralAudio from "../../assets/audios/feral.mp3";
import fountainAudio from "../../assets/audios/fountain.mp3";
import glassAudio from "../../assets/audios/glass.mp3";
import greyAudio from "../../assets/audios/grey.mp3";
import hellAudio from "../../assets/audios/hell.mp3";
import idwtAudio from "../../assets/audios/idwt.mp3";
import imposeAudio from "../../assets/audios/impose.mp3";
import leftAudio from "../../assets/audios/left.mp3";
import loadingAudio from "../../assets/audios/loading.mp3";
import mercyAudio from "../../assets/audios/mercy.mp3";
import nowhereAudio from "../../assets/audios/nowhere.mp3";
import pretendAudio from "../../assets/audios/pretend.mp3";
import saidAudio from "../../assets/audios/said.mp3";
import specterAudio from "../../assets/audios/specter.mp3";
import villainAudio from "../../assets/audios/villain.mp3";
import worstAudio from "../../assets/audios/worst.mp3";

import type { MediaAsset } from "./types";

export const AUDIO_MEDIA_LIBRARY: MediaAsset[] = [
  {
    id: "artificial",
    src: artificialAudio,
    alt: "Artificial Suicide audio snippet",
    source: "Sumerian Records",
  },
  {
    id: "broken",
    src: brokenAudio,
    alt: "Broken Youth audio snippet",
    source: "Sumerian Records",
  },
  {
    id: "burning",
    src: burningAudio,
    alt: "Burning Out audio snippet",
    source: "Sumerian Records",
  },
  {
    id: "careful",
    src: carefulAudio,
    alt: "Careful What You Wish For audio snippet",
    source: "Sumerian Records",
  },
  {
    id: "dethrone",
    src: dethroneAudio,
    alt: "Dethrone audio snippet",
    source: "Sumerian Records",
  },
  {
    id: "digital",
    src: digitalAudio,
    alt: "DIGITAL FOOTPRINT audio snippet",
    source: "Sumerian Records",
  },
  {
    id: "dying",
    src: dyingAudio,
    alt: "Dying To Love audio snippet",
    source: "Sumerian Records",
  },
  {
    id: "even",
    src: evenAudio,
    alt: "EVEN audio snippet",
    source: "Sumerian Records",
  },
  {
    id: "exit",
    src: exitAudio,
    alt: "Exit Wounds audio snippet",
    source: "Sumerian Records",
  },
  {
    id: "feral",
    src: feralAudio,
    alt: "F E R A L audio snippet",
    source: "Sumerian Records",
  },
  {
    id: "fountain",
    src: fountainAudio,
    alt: "The Fountain audio snippet",
    source: "Sumerian Records",
  },
  {
    id: "glass",
    src: glassAudio,
    alt: "Glass Houses audio snippet",
    source: "Sumerian Records",
  },
  {
    id: "grey",
    src: greyAudio,
    alt: "The Grey audio snippet",
    source: "Sumerian Records",
  },
  {
    id: "hell",
    src: hellAudio,
    alt: "The Hell I Overcame audio snippet",
    source: "Sumerian Records",
  },
  {
    id: "idwt",
    src: idwtAudio,
    alt: "IDWT$ audio snippet",
    source: "Sumerian Records",
  },
  {
    id: "impose",
    src: imposeAudio,
    alt: "Impose audio snippet",
    source: "Sumerian Records",
  },
  {
    id: "left",
    src: leftAudio,
    alt: "Left For Good audio snippet",
    source: "Sumerian Records",
  },
  {
    id: "loading",
    src: loadingAudio,
    alt: "LOADING SCREEN audio snippet",
    source: "Sumerian Records",
  },
  {
    id: "mercy",
    src: mercyAudio,
    alt: "Mercy audio snippet",
    source: "Sumerian Records",
  },
  {
    id: "nowhere",
    src: nowhereAudio,
    alt: "Nowhere To Go audio snippet",
    source: "Sumerian Records",
  },
  {
    id: "pretend",
    src: pretendAudio,
    alt: "Just Pretend audio snippet",
    source: "Sumerian Records",
  },
  {
    id: "said",
    src: saidAudio,
    alt: "Said & Done audio snippet",
    source: "Sumerian Records",
  },
  {
    id: "specter",
    src: specterAudio,
    alt: "Specter audio snippet",
    source: "Sumerian Records",
  },
  {
    id: "villain",
    src: villainAudio,
    alt: "Like A Villain audio snippet",
    source: "Sumerian Records",
  },
  {
    id: "worst",
    src: worstAudio,
    alt: "The Worst In Me audio snippet",
    source: "Sumerian Records",
  },
];

export function getAudioAsset(id: string): MediaAsset | undefined {
  return AUDIO_MEDIA_LIBRARY.find((asset) => asset.id === id);
}
