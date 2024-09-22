import designImage from '../assets/design.png';
import designSticker from '../assets/stickerDesign.svg';
import codeImage from '../assets/code.png';
import codeSticker from '../assets/stickerCode.svg';
import motionImage from '../assets/motion.png';
import motionSticker from '../assets/stickerMotion.svg';
import responsivImage from '../assets/responsiv.png';
import responsivSticker from '../assets/stickerResponsiv.svg';
import easterEggImage from '../assets/easterEgg.png';
import easterEggSticker from '../assets/stickerEasterEgg.svg';
import bigBossImage from '../assets/bigboss.png';
import bigBossSticker from '../assets/stickerBigBoss.svg';

const cards = [
  {
    category: 'DESIGN',
    notation: '/6 pts',
    title: "L'artiste de renom",
    color: 'purple',
    cursors: [
      {
        pseudo: '@maislina_',
        isReversed: false,
      },
    ],
    illustration: designImage,
    p1: '<b>Le design</b>, c’est son terrain de jeu. Il maîtrise et retranscrit correctement chaque pixel de la maquette.',
    p2: 'Virtuose des couleurs il ne se trompe jamais de code HEX, de spacing ou de border-radius ; <b>Figma n’a aucun secret pour ce Dev de talent</b>.',
    sticker: designSticker,
  },
  {
    category: 'CODE',
    notation: '/6 pts',
    title: 'Le Bâtisseur de code',
    color: 'pink',
    cursors: [
      {
        pseudo: '@Chris',
        isReversed: false,
      },
    ],
    illustration: codeImage,
    p1: 'Ses lignes de code sont des fondations solides. C’est <b>un maître du front</b>, capable de structurer les systèmes les plus complexes sans se casser la tête.',
    p2: '<b>Maitre de VSCode</b>, il a surement fini le challenge en s’assurant d’avoir le code le plus clair et le plus propre des 36 participants.',
    sticker: codeSticker,
  },
  {
    category: 'MOTION',
    notation: '/3 pts',
    title: 'Le maître de la fluidité',
    color: 'green',
    cursors: [
      {
        pseudo: '@Lina',
        isReversed: false,
      },
      {
        pseudo: '@Chris',
        isReversed: false,
      },
    ],
    illustration: motionImage,
    p1: "Aucun composant ne s’affiche sans une <b>animation soignée</b>. Ses transitions sont légères, dynamiques et fluides, captivant l'utilisateur à chaque interaction.",
    p2: 'Ce dev a l’oeil et maitrise <b>le motion</b> mieux que n’importe qui.',
    sticker: motionSticker,
  },
  {
    category: 'RESPONSIV',
    notation: '/2 pts',
    title: 'Le chercheur de breakpoint',
    color: 'blue',
    cursors: [
      {
        pseudo: '@Lina',
        isReversed: false,
      },
      {
        pseudo: '@Chris',
        isReversed: false,
      },
    ],
    illustration: responsivImage,
    p1: 'Quelle que soit la taille de l’écran, il garantit une expérience utilisateur sans faille. Chaque site <b>s’adapte à tous les supports</b>, du mobile au grand écran.',
    p2: 'Il fait attention à <b>chaque breakpoint</b> attentivement, on ne pourra pas le reprendre à l’inspection!',
    sticker: responsivSticker,
  },
  {
    category: 'EASTER EGG',
    notation: '/3 pts',
    title: 'Le maître des secrets',
    color: 'mustard',
    cursors: [
      {
        pseudo: '@Lina',
        isReversed: false,
      },
      {
        pseudo: '@Chris',
        isReversed: false,
      },
    ],
    illustration: easterEggImage,
    p1: 'Derrière une ligne de code bien choisie se cache un <b>secret bien gardé</b>. Il glisse la surprise qui surprendra les utilisateurs les plus curieux.',
    p2: 'Dev attentif aux comportements utilisateurs il saura cacher l’<b>Easter Egg</b> au meilleur endroit.',
    sticker: easterEggSticker,
  },
  {
    category: 'BIG BOSS',
    notation: 'Infinite pts',
    title: 'Le sur-boosted',
    color: 'orange',
    cursors: [
      {
        pseudo: '@Lina',
        isReversed: false,
      },
      {
        pseudo: '@Chris',
        isReversed: false,
      },
    ],
    illustration: bigBossImage,
    p1: 'Il excelle dans tous les domaines, alliant design, propreté de code, réactivité, animations fluides et créativité cachée. <b>Un vrai prodige</b> qui a su briller dans chaque aspect du développement.',
    p2: 'Ce dev aux <b>multitalents</b> a reçu la standing ovation du jury.',
    sticker: bigBossSticker,
  },
];

export default cards;
