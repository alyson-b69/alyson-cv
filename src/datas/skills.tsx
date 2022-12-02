import { CompetenceType, HardSkillEnum, IconsEnum } from '../types';

const skills: CompetenceType = {
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

export default skills;
