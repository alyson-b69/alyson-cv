import { HardSkillEnum, IconsEnum } from '../../types';
import {
  GiGecko,
  GiMagnifyingGlass,
  GiPencilBrush,
  GiThreeFriends,
} from 'react-icons/gi';
import html from '../../img/html.jpg';
import js from '../../img/js.jpg';
import css from '../../img/css.png';
import node from '../../img/node.jpg';
import postgresql from '../../img/postgrsql.png';
import react from '../../img/react.jpg';
import express from '../../img/express.jpg';
import mysql from '../../img/sql.jpg';
import github from '../../img/github.jpg';
import postman from '../../img/postman.jpg';
import procreate from '../../img/procreate.jpg';
import typescript from '../../img/typescript.png';
import redux from '../../img/redux.jpg';
import leaflet from '../../img/leaflet.png';
import storybook from '../../img/storybook.png';
import styledComponents from '../../img/styled-components.jpeg';
import webstorm from '../../img/webstorm.png';
import clickUp from '../../img/clickup.png';
import figma from '../../img/figma.png';

export const renderIcon = (icon: IconsEnum) => {
  switch (icon) {
    case IconsEnum.GiGecko:
      return <GiGecko fontSize={'4rem'} />;
    case IconsEnum.GiPencilBrush:
      return <GiPencilBrush fontSize={'4rem'} />;
    case IconsEnum.GiMagnifyingGlass:
      return <GiMagnifyingGlass fontSize={'4rem'} />;
    case IconsEnum.GiThreeFriends:
      return <GiThreeFriends fontSize={'4rem'} />;
  }
};

export const renderHardSkillImg = (skill: HardSkillEnum) => {
  switch (skill) {
    case HardSkillEnum.HTML:
      return <img src={html} alt={skill} />;
    case HardSkillEnum.JavaScript:
      return <img src={js} alt={skill} />;
    case HardSkillEnum.CSS:
      return <img src={css} alt={skill} />;
    case HardSkillEnum.NodeJS:
      return <img src={node} alt={skill} />;
    case HardSkillEnum.PostgreSQL:
      return <img src={postgresql} alt={skill} />;
    case HardSkillEnum.ReactJS:
      return <img src={react} alt={skill} />;
    case HardSkillEnum.ExpressJS:
      return <img src={express} alt={skill} />;
    case HardSkillEnum.MySql:
      return <img src={mysql} alt={skill} />;
    case HardSkillEnum.Github:
      return <img src={github} alt={skill} />;
    case HardSkillEnum.Postman:
      return <img src={postman} alt={skill} />;
    case HardSkillEnum.Procreate:
      return <img src={procreate} alt={skill} />;
    case HardSkillEnum.TypeScript:
      return <img src={typescript} alt={skill} />;
    case HardSkillEnum.Redux:
      return <img src={redux} alt={skill} />;
    case HardSkillEnum.Leaflet:
      return <img src={leaflet} alt={skill} />;
    case HardSkillEnum.Storybook:
      return <img src={storybook} alt={skill} />;
    case HardSkillEnum.StyledComponents:
      return <img src={styledComponents} alt={skill} />;
    case HardSkillEnum.Webstorm:
      return <img src={webstorm} alt={skill} />;
    case HardSkillEnum.ClickUp:
      return <img src={clickUp} alt={skill} />;
    case HardSkillEnum.Figma:
      return <img src={figma} alt={skill} />;
    default:
      return <img src={''} alt={skill} />;
  }
};
