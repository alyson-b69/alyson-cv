import { PortfolioProjectEnum } from '../../types';
import liora from '../../img/liora.png';
import wallKingArt from '../../img/wallkingart.png';
import gamovore from '../../img/gamovore.png';
import chat from '../../img/chat-wild-dev.png';
import weather from '../../img/weather.png';
import tips from '../../img/tips.png';
import safecube from '../../img/safecube.png';
import safecubeUI from '../../img/safecubeUI.png';
import sepsis from '../../img/sepsis.png';

export const renderImage = (projectName: PortfolioProjectEnum) => {
  switch (projectName) {
    case PortfolioProjectEnum.lioraPicture:
      return (
        <img
          src={liora}
          alt={PortfolioProjectEnum.lioraPicture}
          className={'project-img'}
        />
      );
    case PortfolioProjectEnum.wallKingArt:
      return (
        <img
          src={wallKingArt}
          alt={PortfolioProjectEnum.wallKingArt}
          className={'project-img'}
        />
      );
    case PortfolioProjectEnum.gamovore:
      return (
        <img
          src={gamovore}
          alt={PortfolioProjectEnum.gamovore}
          className={'project-img'}
        />
      );
    case PortfolioProjectEnum.kittenChat:
      return (
        <img
          src={chat}
          alt={PortfolioProjectEnum.kittenChat}
          className={'project-img'}
        />
      );
    case PortfolioProjectEnum.weather:
      return (
        <img
          src={weather}
          alt={PortfolioProjectEnum.weather}
          className={'project-img'}
        />
      );
    case PortfolioProjectEnum.tips:
      return (
        <img
          src={tips}
          alt={PortfolioProjectEnum.tips}
          className={'project-img'}
        />
      );
    case PortfolioProjectEnum.safecube:
      return (
        <img
          src={safecube}
          alt={PortfolioProjectEnum.safecube}
          className={'project-img'}
        />
      );
    case PortfolioProjectEnum.safecubeUI:
      return (
        <img
          src={safecubeUI}
          alt={PortfolioProjectEnum.safecubeUI}
          className={'project-img'}
        />
      );
    case PortfolioProjectEnum.sepsis:
      return (
        <img
          src={sepsis}
          alt={PortfolioProjectEnum.sepsis}
          className={'project-img'}
        />
      );
  }
};
