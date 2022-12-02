import { ProjectNameEnum, ProjectType, ProjectTypeEnum } from '../types';
import React from 'react';

const projects: ProjectType[] = [
  {
    type: ProjectTypeEnum.group,
    name: ProjectNameEnum.safecube,
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
    type: ProjectTypeEnum.group,
    name: ProjectNameEnum.safecubeUI,
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
    type: ProjectTypeEnum.perso,
    name: ProjectNameEnum.weather,
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
    type: ProjectTypeEnum.perso,
    name: ProjectNameEnum.kittenChat,
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
    type: ProjectTypeEnum.perso,
    name: ProjectNameEnum.tips,
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
    type: ProjectTypeEnum.group,
    name: ProjectNameEnum.sepsis,
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
    type: ProjectTypeEnum.group,
    name: ProjectNameEnum.gamovore,
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
    type: ProjectTypeEnum.group,
    name: ProjectNameEnum.wallKingArt,
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
    type: ProjectTypeEnum.perso,
    name: ProjectNameEnum.lioraPicture,
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

export default projects;
