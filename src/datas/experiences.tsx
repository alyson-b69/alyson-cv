import { ExperienceType } from '../types';
import React from 'react';

const experiences: ExperienceType[] = [
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

export default experiences;
