import anythingImg from "../../assets/images/anything.png";
import artificialImg from "../../assets/images/artificial.png";
import burningImg from "../../assets/images/burning.png";
import carefulImg from "../../assets/images/careful.png";
import concreteImg from "../../assets/images/concrete.png";
import dethroneImg from "../../assets/images/dethrone.png";
import digitalImg from "../../assets/images/digital.png";
import drainImg from "../../assets/images/drain.png";
import exitImg from "../../assets/images/exit.png";
import fountainImg from "../../assets/images/fountain.png";
import glassImg from "../../assets/images/glass.png";
import hellImg from "../../assets/images/hell.png";
import imposeImg from "../../assets/images/impose.png";
import justImg from "../../assets/images/just.png";
import leftImg from "../../assets/images/left.png";
import limitsImg from "../../assets/images/limits.png";
import nervousImg from "../../assets/images/nervous.png";
import specterImg from "../../assets/images/specter.png";
import thereImg from "../../assets/images/there.png";
import villainImg from "../../assets/images/villain.png";
import worstImg from "../../assets/images/worst.png";

import type { MediaAsset } from "./types";

// ============================================================
// BIBLIOTECA DE MÍDIAS – TODAS AS 21 IMAGENS
// ============================================================
export const MEDIA_LIBRARY: MediaAsset[] = [
  {
    id: "anything",
    src: anythingImg,
    alt: "Anything > Human visual",
    source: "Sumerian Records",
  },
  {
    id: "artificial",
    src: artificialImg,
    alt: "Artificial Suicide still",
    source: "Sumerian Records",
  },
  {
    id: "burning",
    src: burningImg,
    alt: "Burning Out promo",
    source: "Sumerian Records",
  },
  {
    id: "careful",
    src: carefulImg,
    alt: "Careful What You Wish For",
    source: "Sumerian Records",
  },
  {
    id: "concrete",
    src: concreteImg,
    alt: "Concrete Jungle warehouse",
    source: "Sumerian Records",
  },
  {
    id: "dethrone",
    src: dethroneImg,
    alt: "Dethrone live shot",
    source: "Sumerian Records",
  },
  {
    id: "digital",
    src: digitalImg,
    alt: "Digital glitch art",
    source: "Sumerian Records",
  },
  {
    id: "drain",
    src: drainImg,
    alt: "The Drain collaborative visual",
    source: "Sumerian Records",
  },
  {
    id: "exit",
    src: exitImg,
    alt: "Exit Wounds scene",
    source: "Sumerian Records",
  },
  {
    id: "fountain",
    src: fountainImg,
    alt: "The Fountain imagery",
    source: "Sumerian Records",
  },
  {
    id: "glass",
    src: glassImg,
    alt: "Glass Houses still",
    source: "Sumerian Records",
  },
  {
    id: "hell",
    src: hellImg,
    alt: "The Hell I Overcame",
    source: "Sumerian Records",
  },
  {
    id: "impose",
    src: imposeImg,
    alt: "Impose visual",
    source: "Sumerian Records",
  },
  {
    id: "just",
    src: justImg,
    alt: "Just Pretend video still",
    source: "Sumerian Records",
  },
  {
    id: "left",
    src: leftImg,
    alt: "Left for Good artwork",
    source: "Sumerian Records",
  },
  {
    id: "limits",
    src: limitsImg,
    alt: "Limits concept art",
    source: "Sumerian Records",
  },
  {
    id: "nervous",
    src: nervousImg,
    alt: "Nervous live capture",
    source: "Sumerian Records",
  },
  {
    id: "specter",
    src: specterImg,
    alt: "Specter visual",
    source: "Sumerian Records",
  },
  {
    id: "there",
    src: thereImg,
    alt: "There's a visual",
    source: "Sumerian Records",
  },
  {
    id: "villain",
    src: villainImg,
    alt: "Like a Villain still",
    source: "Sumerian Records",
  },
  {
    id: "worst",
    src: worstImg,
    alt: "The Worst in Me",
    source: "Sumerian Records",
  },
];

export function getMediaAsset(id: string): MediaAsset | undefined {
  return MEDIA_LIBRARY.find((asset) => asset.id === id);
}
