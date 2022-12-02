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

export interface JobType {
  title: string;
  start: string;
  end: string | null;
  location: string;
  description: React.ReactNode;
  inverted: boolean;
}

export interface ExperienceType {
  year: number;
  jobs: JobType[];
}

export interface TrainingType {
  name: string;
  school: string;
  year: string;
}

export enum ProjectTypeEnum {
  group = 'Projet de groupe',
  perso = 'Projet perso',
}

export enum ProjectNameEnum {
  safecube = 'Plateforme Safecube',
  safecubeUI = 'Librairie Safecube UI',
  weather = 'Weather App',
  kittenChat = 'Kitten-box live chat',
  tips = 'Tips',
  sepsis = 'Sepsis',
  gamovore = 'Gamovore',
  wallKingArt = 'Wall King Art',
  lioraPicture = 'Liora Picture',
}

export interface ProjectType {
  type: ProjectTypeEnum;
  name: ProjectNameEnum;
  period: string;
  description: React.ReactNode;
  stacks: string[];
  websiteLink: string | null;
  githubLink: string | null;
  img?: string;
}

export interface RecommendationType {
  name: string;
  job: string;
  imgUrl: string;
  relation: string;
  date: string;
  content: React.ReactNode;
}
