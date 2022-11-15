import React from 'react';

export interface LinkType {
  id: string;
  label: string;
}

export enum IconsEnum {
  GiGecko = 'GiGecko',
  GiThreeFriends = 'GiThreeFriends',
  GiPencilBrush = 'GiPencilBrush',
  GiMagnifyingGlass = 'GiMagnifyingGlass',
}

export interface SoftSkillType {
  name: string;
  quote: string;
  author: string;
  icon: IconsEnum;
}

export enum HardSkillEnum {
  HTML = 'HTML',
  CSS = 'CSS',
  JavaScript = 'JavaScript',
  TypeScript = 'TypeScript',
  MySql = 'MySql',
  PostgreSQL = 'PostgreSQL',
  NodeJS = 'Node JS',
  ReactJS = 'React JS',
  ExpressJS = 'Express JS',
  StyledComponents = 'Styled-Components',
  Storybook = 'Storybook',
  Leaflet = 'Leaflet',
  Redux = 'Redux',
  Webstorm = 'Webstorm',
  Github = 'Github',
  Postman = 'Postman',
  Procreate = 'Procreate',
  ClickUp = 'Click up',
  Figma = 'Figma',
}

export interface CompetenceType {
  softSkills: SoftSkillType[];
  hardSkills: {
    languages: HardSkillEnum[];
    frameworks: HardSkillEnum[];
    tools: HardSkillEnum[];
  };
}

export interface ExperiencesType {
  year: number;
  jobs: {
    title: string;
    start: string;
    end: string | null;
    location: string;
    description: React.ReactNode;
    inverted: boolean;
  }[];
}

export interface FormationType {
  name: string;
  school: string;
  year: string;
}

export enum PortfolioTypeEnum {
  group = 'Projet de groupe',
  perso = 'Projet perso',
}

export enum PortfolioProjectEnum {
  safecube = 'Plateforme Safecube',
  safecubeUI = 'Librairie Safecube UI',
  weather = 'Weather App',
  kittenChat = 'Kitten-chat',
  tips = 'Tips',
  sepsis = 'Sepsis',
  gamovore = 'Gamovore',
  wallKingArt = 'Wall King Art',
  lioraPicture = 'Liora Picture',
}

export interface PortfolioType {
  type: PortfolioTypeEnum;
  name: PortfolioProjectEnum;
  period: string;
  description: React.ReactNode;
  stacks: string[];
  websiteLink: string | null;
  githubLink: string | null;
  img?: string;
}
