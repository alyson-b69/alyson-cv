import { ProjectNameEnum } from '../../types';
import liora from '../../img/liora.png';
import wallKingArt from '../../img/wallkingart.png';
import gamovore from '../../img/gamovore.png';
import chat from '../../img/chat-wild-dev.png';
import weather from '../../img/weather.png';
import tips from '../../img/tips.png';
import safecube from '../../img/safecube.png';
import safecubeUI from '../../img/safecubeUI.png';
import sepsis from '../../img/sepsis.png';

export const renderImage = (projectName: ProjectNameEnum) => {
  switch (projectName) {
    case ProjectNameEnum.lioraPicture:
      return (
        <img
          src={liora}
          alt={ProjectNameEnum.lioraPicture}
          className={'project-img'}
        />
      );
    case ProjectNameEnum.wallKingArt:
      return (
        <img
          src={wallKingArt}
          alt={ProjectNameEnum.wallKingArt}
          className={'project-img'}
        />
      );
    case ProjectNameEnum.gamovore:
      return (
        <img
          src={gamovore}
          alt={ProjectNameEnum.gamovore}
          className={'project-img'}
        />
      );
    case ProjectNameEnum.kittenChat:
      return (
        <img
          src={chat}
          alt={ProjectNameEnum.kittenChat}
          className={'project-img'}
        />
      );
    case ProjectNameEnum.weather:
      return (
        <img
          src={weather}
          alt={ProjectNameEnum.weather}
          className={'project-img'}
        />
      );
    case ProjectNameEnum.tips:
      return (
        <img src={tips} alt={ProjectNameEnum.tips} className={'project-img'} />
      );
    case ProjectNameEnum.safecube:
      return (
        <img
          src={safecube}
          alt={ProjectNameEnum.safecube}
          className={'project-img'}
        />
      );
    case ProjectNameEnum.safecubeUI:
      return (
        <img
          src={safecubeUI}
          alt={ProjectNameEnum.safecubeUI}
          className={'project-img'}
        />
      );
    case ProjectNameEnum.sepsis:
      return (
        <img
          src={sepsis}
          alt={ProjectNameEnum.sepsis}
          className={'project-img'}
        />
      );
  }
};
