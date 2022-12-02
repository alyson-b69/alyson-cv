import {
  CompetenceType,
  ExperienceType,
  FormationType,
  HardSkillEnum,
  IconsEnum,
  LinkType,
  PortfolioProjectEnum,
  PortfolioType,
  PortfolioTypeEnum,
  RecommendationType,
} from './types';
import React from 'react';

export const links: LinkType[] = [
  {
    id: 'about',
    label: 'À propos',
  },
  { id: 'skills', label: 'Compétences' },
  { id: 'experiences', label: 'Expériences' },
  {
    id: 'formations',
    label: 'Formations',
  },
  { id: 'portfolio', label: 'Portefolio' },
  { id: 'contact', label: 'contact' },
  { id: 'recommendations', label: 'Avis' },
];

export const about: React.ReactNode = (
  <>
    <p>Salut 👋 </p>
    <p>
      Je suis Alyson, ancienne comptable, aujourd'hui titrée Développeuse Web &
      Mobile.
    </p>
    <p>
      Après une formation intensive orientée <strong>JavaScript</strong> de 6
      mois au sein de la Wild Code School, j'ai eu la chance d'intégrer une
      super start-up en janvier 2021, en tant qu'unique{' '}
      <strong>développeuse front</strong>.
    </p>
    <p>
      Safecube, c'est une équipe de 15 petits humains qui se sont spécialisés
      dans le suivi temps réel de containers pour proposer des solutions de
      suivi 100% digitale via l'agrégation de données, ou dotée d’objets
      connectés, dit <strong>IoT</strong>.
    </p>
    <p>
      Je m'y épanouie depuis maintenant 2 ans, jonglant entre{' '}
      <strong>refontes graphiques</strong> et création de{' '}
      <strong>nouvelles features</strong>. Ce projet <strong>big-data</strong>{' '}
      ainsi que la team <strong>passionnée</strong> ont favorisés ma montée en
      compétences.
    </p>
    <p>
      Je suis désormais en quête d'une nouvelle
      <strong> aventure exaltante</strong>, dans une société porteuse d'un
      projet <strong>novateur</strong> et <strong>utile</strong>, au sein de
      laquelle je pourrais apporter ma pierre à l'édifice.
    </p>
    <p>
      Vive, <strong>curieuse</strong>, et très <strong> enthousiaste</strong>,
      je ne manque jamais d'idées, ni de ressources, pour mener à bien les
      missions qui me sont confiées. <strong>Autonome</strong>, j'apprécie
      néanmoins le <strong>travail en équipe</strong>, et j'apporte volontiers,
      en plus de mes compétences et de mon savoir-être, quelques douceurs à
      partager pour motiver les troupes.
    </p>
  </>
);

export const competences: CompetenceType = {
  softSkills: [
    {
      name: `Esprit d'équipe`,
      quote: `Toute seule je vais vite, ensemble on va loin ...`,
      author: `Ensemble - Grand Corps Malade`,
      icon: IconsEnum.GiThreeFriends,
    },
    {
      name: `Capacité d'adaptation`,
      quote: `Ce qui fait l'Homme, c'est sa grande capacité d'adaptation.`,
      author: `Socrate`,
      icon: IconsEnum.GiGecko,
    },
    {
      name: `Curiosité`,
      quote: `La curiosité est le plus court chemin menant à la connaissance.`,
      author: `Ramdou`,
      icon: IconsEnum.GiMagnifyingGlass,
    },
    {
      name: `Créativité`,
      quote: `La créativité, c'est l'intelligence qui s'amuse.`,
      author: `Alberto`,
      icon: IconsEnum.GiPencilBrush,
    },
  ],
  hardSkills: {
    languages: [
      HardSkillEnum.HTML,
      HardSkillEnum.CSS,
      HardSkillEnum.JavaScript,
      HardSkillEnum.TypeScript,
      HardSkillEnum.MySql,
      HardSkillEnum.PostgreSQL,
    ],
    frameworks: [
      HardSkillEnum.ReactJS,
      HardSkillEnum.Redux,
      HardSkillEnum.StyledComponents,
      HardSkillEnum.Storybook,
      HardSkillEnum.Leaflet,
      HardSkillEnum.NodeJS,
      HardSkillEnum.ExpressJS,
    ],
    tools: [
      HardSkillEnum.Webstorm,
      HardSkillEnum.Github,
      HardSkillEnum.Postman,
      HardSkillEnum.ClickUp,
      HardSkillEnum.Procreate,
      HardSkillEnum.Figma,
    ],
  },
};

export const experiences: ExperienceType[] = [
  {
    year: 2022,
    jobs: [
      {
        title: 'Safecube - Développeuse web (front)',
        start: '04/01/2021',
        end: 'maintenant',
        location: 'Lyon (69)',
        description: (
          <>
            <p>
              Reprise du développement de l'interface utilisateur de Safecube
              (anciennement codée par une ESN), permettant le tracking de
              conteneurs en temps réel.
            </p>
            <p>Refonte du design existant (maquettes + intégration).</p>
            <p>Création d'une librairie de composants partagés.</p>
            <p>
              Design et implémentation de nouvelles features en fonction du
              besoin client.
            </p>
            <p>Accompagnement d'un stagiaire d'Epitech durant 5 mois.</p>
          </>
        ),
        inverted: true,
      },
    ],
  },
  {
    year: 2020,
    jobs: [
      {
        title:
          'Wild Code School - Formation développement web ReactJS / NodeJS',
        start: '28/05/2020',
        end: '19/12/2020',
        location: 'Lyon (69)',
        description: (
          <>
            <p>
              Formation intensive afin d'apprendre les languages de
              programmation web et mobile, ainsi que la gestion de projets en
              méthodes agiles.
            </p>
            <p>
              Réalisation en équipe de 2 projets fictifs et un projet client
              pour mettre en application les acquis.
            </p>
            <p>
              Réalisations de multiples projets personnels en parallèle pour
              consolider mes acquis et tester de nouvelles choses.
            </p>
          </>
        ),
        inverted: false,
      },
    ],
  },
  {
    year: 2019,
    jobs: [
      {
        title: 'Lip Intérim - Comptable',
        start: '01/07/2019',
        end: '30/09/2019',
        location: 'Lyon (69)',
        description: (
          <>
            <p>Comptabilité générale des filiales du groupe</p>
            <p>
              Mise en place de passerelles entre les logiciels métiers et
              comptables
            </p>
          </>
        ),
        inverted: true,
      },
      {
        title: 'Restalliance - Comptable',
        start: '01/09/2018',
        end: '30/06/2019',
        location: 'Lyon (69)',
        description: (
          <>
            <p>Comptabilité filiale COGEREST & Cuisines centrales</p>
            <p>Participation à la migration CEGID</p>
          </>
        ),
        inverted: false,
      },
    ],
  },
  {
    year: 2018,
    jobs: [
      {
        title: `Carré d'Or Immobilier - Comptable`,
        start: '01/10/2015',
        end: '30/09/2018',
        location: 'Lyon (69)',
        description: (
          <>
            <p>Comptabilité multisociétés (environs 30).</p>
          </>
        ),
        inverted: true,
      },
    ],
  },
  {
    year: 2015,
    jobs: [
      {
        title: `Mutualité Sociale Agricole - Comptable`,
        start: '01/03/2014',
        end: '30/09/2015',
        location: 'Bourg-en-Bresse (01)',
        description: (
          <>
            <p>Comptabilité fournisseurs.</p>
          </>
        ),
        inverted: false,
      },
    ],
  },
  {
    year: 2014,
    jobs: [
      {
        title: `Adapei de l'Ain - Assistante Comptable`,
        start: '01/10/2013',
        end: '28/02/2014',
        location: 'Villard-Les-Dombes (01)',
        description: (
          <>
            <p>Intérim.</p>
          </>
        ),
        inverted: true,
      },
    ],
  },
  {
    year: 2013,
    jobs: [
      {
        title: `Hertz LSA - Comptable alternance`,
        start: '01/08/2012',
        end: '31/08/2013',
        location: 'Viriat (01)',
        description: (
          <>
            <p>Comptabilité clients.</p>
          </>
        ),
        inverted: false,
      },
    ],
  },
  {
    year: 2012,
    jobs: [
      {
        title: `Ekylis - Comptable Alternance`,
        start: '01/08/2011',
        end: '31/07/2012',
        location: 'Lyon (69)',
        description: (
          <>
            <p>Gestion d'un portefeuille de 5 clients.</p>
          </>
        ),
        inverted: true,
      },
    ],
  },
];

export const formations: FormationType[] = [
  {
    name: 'Titre Développeur Web & Mobiles',
    school: 'Wild Code School',
    year: '2020',
  },
  {
    name: 'BTS Comptabilité',
    school: 'Sciences-U',
    year: '2013',
  },
  {
    name: 'Bac pro Comptabilité',
    school: 'Lycée St-Charles',
    year: '2011',
  },
];

export const portfolio: PortfolioType[] = [
  {
    type: PortfolioTypeEnum.group,
    name: PortfolioProjectEnum.safecube,
    description: (
      <>
        <p>
          Reprise du développement de l'interface utilisateur de Safecube
          (anciennement codée par une ESN).
        </p>
        <p>Création de maquettes sous FIGMA des nouvelles features.</p>
        <p>Tickting des besoins front auprès de l'équipe back-end.</p>
        <p>
          Implémentation des nouvelles features (exemples: création d'un
          tutoriel intéractif, Import d'expéditions en masse via un fichier
          Excel, création d'alertes dynamiques, gestionnaire de tags,
          remplacement de PowerBI par des analytics internes, définition de
          zones sur une carte, création de chart pour le monitoring des
          températures et de l'humidité, etc ...).
        </p>
        <p>Mise en place de Google Analytics.</p>
        <p>Maintient de l'application en Anglais et en Français.</p>
        <p>NB : J'étais la seule développeuse front de la société.</p>
      </>
    ),
    period: '01/2021 à 12/2022',
    stacks: [
      'React JS',
      'Typescript',
      'Redux',
      'Redux-saga',
      'Leaflet',
      'd3',
      'chartJS',
      'Intl',
      'Reactour',
    ],
    websiteLink: 'https://app.safecube.com/auth/login',
    githubLink: null,
  },
  {
    type: PortfolioTypeEnum.group,
    name: PortfolioProjectEnum.safecubeUI,
    period: '12/2021 à 12/2022',
    description: (
      <>
        <p>
          Développement à l'aide de Storybook d'une librairie de composants
          partagés, mise à disposition pour la plateforme Safecube et la
          plateforme Locatrack du groupe.
        </p>
        <p>
          Cette mission m'a familiarisée entre autre avec le typage générique,
          qui m'était jusqu'alors inconnue et m'a permis d'apprendre à mieux
          concevoir mes composants de base afin qu'ils soient rééllement
          réutilisables.
        </p>
        <p>
          Ça a également permis à la société d'uniformiser le design des
          différentes plateformes à son actif.
        </p>
      </>
    ),
    stacks: ['React JS', 'Typescript', 'Storybook', 'Styled-components'],
    websiteLink: 'https://ui.safecube.com/',
    githubLink: null,
  },
  {
    type: PortfolioTypeEnum.perso,
    name: PortfolioProjectEnum.weather,
    period: 'Décembre 2020',
    description: (
      <>
        <p>
          Réalisation d'une WebApp météo en 1 semaine pour mon test technique
          Safecube. L'app devait afficher la météo de 4 villes européennes de
          mon choix, en utilisant l'API OpenWeatherMap.
        </p>
        <p>
          Je devais utiliser axios pour récupérer les données de l'API, Redux
          pour stocker les états et redux-saga pour une procédure asynchrone.
        </p>
      </>
    ),
    stacks: ['React JS', 'Redux', 'Redux-saga', 'Bootstrap'],
    websiteLink: 'https://weather.alyson-b.fr/',
    githubLink: 'https://github.com/alyson-b69/safecube_weather',
  },
  {
    type: PortfolioTypeEnum.perso,
    name: PortfolioProjectEnum.kittenChat,
    description: (
      <>
        <p>Réalisation d'une WebApp de chat en temps réel.</p>
        <p>
          Après avoir suivi un cours d'introduction aux web sockets au sein de
          la Wild, j'ai voulu pousser un peu plus loin l'apprentissage.
        </p>
        <p>
          <strong>Pour tester → </strong>
          Id: guest@gmail.com - Mdp: Alyson-b69
        </p>
      </>
    ),
    period: '11/2020',
    stacks: ['ReactJS', 'Node JS', 'Express JS', 'Socket IO'],
    websiteLink: 'https://chat.alyson-b.fr',
    githubLink:
      'https://github.com/alyson-b69?tab=repositories&q=kitten-box&type=&language=&sort=',
  },
  {
    type: PortfolioTypeEnum.perso,
    name: PortfolioProjectEnum.tips,
    description: (
      <>
        <p>
          Création d'une Web App de partage de Tips en Node JS / MySQL, dans le
          but de me perfectionner en back.
        </p>
        <p>
          Le site permet de consulter tous les tips créés, et, après
          authentification, de créer des tips, de les mettre en favoris pour les
          retrouver facilement.
        </p>
        <p>
          <strong>Pour tester → </strong>
          Id: guest@gmail.com - Mdp: Alyson-b69
        </p>
      </>
    ),
    period: '12/2020',
    stacks: ['React JS', 'Bootstrap', 'SCSS', 'Node JS', 'MySQL'],
    websiteLink: 'https://tips.alyson-b.fr/',
    githubLink: 'https://github.com/alyson-b69/tips',
  },
  {
    type: PortfolioTypeEnum.group,
    name: PortfolioProjectEnum.sepsis,
    period: '09/2020 à 12/2020',
    description: (
      <>
        <p>
          Projet client au sein de la Wild en collaboration avec PREVIA MEDICAL.
        </p>
        <p>
          Création d'un serveur au normes FHIR alimenté par des données
          médicales anonymisées.
        </p>
        <p>
          Création d'une interface à implémenter dans les logiciels hospitaliers
          : un listing des patients triable et filtrable, ainsi qu'une vue
          détaillée par patient avec des graphiques pour mettre en évidences les
          constantes.
        </p>
        <p>Nb : Code source et site non divulgable.</p>
      </>
    ),
    stacks: [
      'ReactJS',
      'Material-UI',
      'NodeJS',
      'Express JS',
      'PostgrSQL',
      'Azure',
      'Chart JS',
    ],
    websiteLink: 'https://www.previa-medical.com/sepsis_fr.html',
    githubLink: null,
  },
  {
    type: PortfolioTypeEnum.group,
    name: PortfolioProjectEnum.gamovore,
    description: (
      <>
        <p>
          Deuxieme projet fictif réalisé lors de ma formation à la Wild Code
          School.
        </p>
        <p>
          Création d'une interface permettant de mettre en relation des gamers
          désireux de trouver de noueaux partenaires de jeu.
        </p>
        <p>
          Plateforme permettant de s'authentifier, de gérer son profile (avec
          notemment les disponibilités de jeux), possibilité d'ajouter un jeu à
          sa liste de favoris et de voir les autres joueurs ayant aimé ce titre,
          puis de rentrer en contact avec eux via un chat.
        </p>
        <p>
          <strong>Pour tester → </strong>
          Id: alyson.bernabeu.test@gmail.com - Mdp: Choucroute69
        </p>
      </>
    ),
    period: '07/2020 à 08/2020',
    stacks: ['React JS', 'Styled-components', 'Firebase'],
    websiteLink: 'https://gamovore.netlify.app/',
    githubLink:
      'https://github.com/WildCodeSchool/Lyon-js-202005-project-gamovore',
  },
  {
    type: PortfolioTypeEnum.group,
    name: PortfolioProjectEnum.wallKingArt,
    description: (
      <>
        <p>Premier projet fictif au sein de la Wild. </p>
        <p>
          Un site web répertoriant des street artistes, avec une page de détails
          et une galerie pour chacun d'entre eux.
        </p>
      </>
    ),
    period: '06/2020 à 07/2020',
    stacks: ['HTML', 'CSS', 'JavaScript'],
    websiteLink:
      'https://wildcodeschool.github.io/Lyon-js-202005-project-anonymous/',
    githubLink:
      'https://github.com/WildCodeSchool/Lyon-js-202005-project-anonymous',
  },
  {
    type: PortfolioTypeEnum.perso,
    name: PortfolioProjectEnum.lioraPicture,
    period: '02/2020',
    description: (
      <>
        <p>Création d'un site sous Wordpress pour une photographe.</p>
        <p>
          Réalisation de la charte Graphique, du logo et du thème personnalisé.
        </p>
        <p>Gestion de contenu.</p>
      </>
    ),
    stacks: ['PHP', 'html', 'CSS'],
    websiteLink: 'https://liorapictures.site/',
    githubLink: null,
  },
];

export const recommendations: RecommendationType[] = [
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
