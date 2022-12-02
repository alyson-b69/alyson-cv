import { RecommendationType } from '../types';
import React from 'react';

const recommendations: RecommendationType[] = [
  {
    name: 'Maxence MELONI',
    job: 'Senior software engineer - NodeJs (8y) - ReactJs (8y) - Typescript',
    imgUrl:
      'https://media-exp1.licdn.com/dms/image/C4D03AQHYu45bKsxIXA/profile-displayphoto-shrink_100_100/0/1572277072957?e=1675296000&v=beta&t=Bgyvgr2twqRzU2OmZ0KkyXYJDu1H-_qopHFSeu3QC1g',
    date: '28 novembre 2022',
    relation: `Maxence a été le professeur d'Alyson`,
    content: (
      <>
        <p>
          Alyson était la meilleure élève de sa promotion, elle s'est donné à
          110% pour arriver à être une vraie développeuse. J'ai eu l'occasion de
          suivre son évolution après la formation et sa courbe de progression
          m'a vraiment impressionné !
        </p>
        <p>
          Pleine d'énergie et toujours de bonne humeur au travail, je pense que
          c'est un très bon élément à intégrer dans son équipe.
        </p>
        <p>J'espère pouvoir l'intégrer un jour dans ma future équipe !</p>
      </>
    ),
  },
  {
    name: 'Alban DEFLANDRE',
    job: 'IT Consultant',
    imgUrl:
      'https://media-exp1.licdn.com/dms/image/C5103AQFk_A0q3EPC7Q/profile-displayphoto-shrink_100_100/0/1517227869963?e=1675296000&v=beta&t=vwMouYKrX55rqSAQJhUcLE91Fw8UOUG3Z1-G1pE5EBg',
    date: '25 novembre 2022',
    relation: `Alban a été le manager direct d'Alyson`,
    content: (
      <>
        <p>
          Ce fut un vrai plaisir de pouvoir accompagner Alyson dés sa sortie de
          formation. Elle a immédiatement démontrer son talent à délivrer. Sa
          curiosité et sa régularité parfaite pendant ces 2 ans lui ont permis
          de perfectionner ses connaissances et fait maintenant d'elle une
          développeuse chevronnée.
        </p>
        <p>Sa bonne humeur et son rire communicatif vont nous manquer.</p>
        <p>Bon vent à toi en espérant que nos chemins se recroisent.</p>
      </>
    ),
  },
  {
    name: 'Jack GOODALL',
    job: 'Full Stack Web Developer',
    imgUrl:
      'https://media-exp1.licdn.com/dms/image/C4E03AQHCNax31l2EAg/profile-displayphoto-shrink_100_100/0/1654172251350?e=1675296000&v=beta&t=im0b6DAsqZQB6wJpKRl3H8u9gNdghOepIesyjhG2A7U',
    date: '24 novembre 2022',
    relation: 'Jack travaillait avec Alyson dans la même équipe',
    content: (
      <>
        <p>
          J'ai eu le grand plaisir de travailler avec Alyson pendant 6 mois à
          Safecube. Nous avons collaboré étroitement sur le développement
          front-end d'une application React.js.
        </p>
        <p>
          Alyson a de très bonnes compétences en développement web et maîtrise
          le JavaScript, TypeScript, HTML, et le CSS, ainsi que React.js, Redux
          saga, et Storybook.
        </p>
        <p>
          Elle m'a appris de nombreuses choses sur le front-end et le travail en
          équipe est efficace avec elle.
        </p>
        <p>Je la recommande sans hésitation!</p>
      </>
    ),
  },
  {
    name: 'Rodolphe MARBOT',
    job: 'Data Scientist chez Safecube',
    imgUrl:
      'https://media-exp1.licdn.com/dms/image/C4E03AQE9ix-CoW3txQ/profile-displayphoto-shrink_100_100/0/1614851240285?e=1675296000&v=beta&t=igVawzEd_xoUgIF5KWS0UNkzo0sAm129w16cj121vzg',
    date: '22 novembre 2022',
    relation: 'Rodolphe travaillait avec Alyson dans la même équipe',
    content: (
      <>
        <p>
          J'ai eu l'occasion de travailler avec Alyson à maintes reprises et ce
          fût un plaisir à chaque fois. Elle est particulièrement passionnée et
          impliquée par ce quelle réalise, et fait preuve d'une grande
          créativité dans son travail.
        </p>
        <p>Je ne peux qu'avoir hâte de collaborer avec Alyson dans le futur.</p>
      </>
    ),
  },
  {
    name: 'Jean-Sébastien DENIZE',
    job: 'Enseignant technique',
    imgUrl:
      'https://media-exp1.licdn.com/dms/image/C4D03AQFph_8KcuGmbg/profile-displayphoto-shrink_100_100/0/1590183140092?e=1675296000&v=beta&t=ssFqwZu71fOJYp8UqaysXcteUQ5eNr1jewUuV5JY5S4',
    date: '22 novembre 2022',
    relation: `Jean-Sébastien était le professeur d'Alyson`,
    content: (
      <>
        <p>
          Alyson est une véritable athlète du code, elle mettra tout en oeuvre
          pour réaliser une application de qualité dans les délais. J'ai été
          ravi de travailler avec elle et elle fera une très bonne lead dev dans
          votre équipe !!!
        </p>
      </>
    ),
  },
  {
    name: 'Arthur OLLIER CLABODTS',
    job: 'Développeur IoT chez Safecube',
    imgUrl:
      'https://media-exp1.licdn.com/dms/image/C5603AQF9Nuj1RPLyQw/profile-displayphoto-shrink_100_100/0/1516995479862?e=1675296000&v=beta&t=6TWmiLg_WjVkDwGGbDupSUsallRbFjmfCm7fq5lIb9o',
    date: '22 novembre 2022',
    relation: 'Arthur travaillait avec Alyson dans la même équipe',
    content: (
      <>
        <p>
          Alyson est une développeuse qui m'a fourni une belle librairie de
          composants frontend pour nos applications, elle nous a proposé des
          idées ludiques originales et ergonomiques pour celles-ci tout en
          contribuant pleinement à leur développement. Alyson possède un bon
          relationnel 🦄 et c'était un plaisir de travailler avec elle, nous
          avons pu utiliser les fonctionnalités développées demandées en temps
          et en heure. Nous avons partagé un espace de travail commun qu'elle a
          toujours laissé ordonné et bien rangé. Spook 🐕 apporte aussi sa
          petite touche, non regrettable aux afterworks.
        </p>
      </>
    ),
  },
  {
    name: 'Waël CHEAIB',
    job: 'Founder and CEO chez Safecube',
    imgUrl:
      'https://media-exp1.licdn.com/dms/image/C4D03AQFg9JCFPeJfTA/profile-displayphoto-shrink_100_100/0/1614852635423?e=1675296000&v=beta&t=PCovKttj56_Yohsd0CyihQHSLLxCH2MTYposD9wcHiA',
    date: '22 novembre 2022',
    relation: `Waël était le manager direct d'Alyson`,
    content: (
      <>
        <p>
          Alyson est une personne très engagée, sérieuse et appliquée dans son
          travail. Elle adore les nouveaux challenges et profite de chaque
          opportunité pour acquérir de nouvelles compétences et une nouvelle
          expertise dans son métier.
        </p>
        <p>
          Par ailleurs Alyson est quelqu'un de très agréable au quotidien, elle
          déborde d'énergie et son sourire est contagieux !
        </p>
      </>
    ),
  },
];

export default recommendations;
