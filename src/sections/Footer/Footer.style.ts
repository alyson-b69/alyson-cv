import styled, { css } from 'styled-components';
import beat from '../../services/animations/beat';
import bounce from '../../services/animations/bounce';

export const FooterBox = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 90%;
    margin: auto;
    @media only screen and (max-width: ${theme.responsive.max}) {
      display: flex;
      flex-direction: column;
      gap: ${theme.getSpacing(10)};
      width: 100%;
    }
  `}
`;

export const FooterCol = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.getSpacing(4)};
    text-align: center;
    align-items: center;
  `}
`;

export const IconsLine = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.getSpacing(4)};
    justify-content: center;

    & a {
      color: ${theme.colors.lightTextColor};
      transition: color ease-in-out 0.3s, transform ease-in-out 0.5s;

      & * {
        cursor: pointer;
      }

      &:hover {
        color: ${theme.colors.accentTextColor};
        animation: ${bounce} ease-in-out 0.5s;
        transform: rotate(360deg);
      }
    }
  `}
`;

export const InfoLine = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.getSpacing(2)};
    text-align: left;

    & a {
      cursor: pointer;
      color: ${theme.colors.accentTextColor};
    }

    @media only screen and (max-width: ${theme.responsive.max}) {
      justify-content: center;
    }
  `}
`;

export const CopyRight = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.getSpacing(4)};
    color: ${theme.colors.disabledTextColor};
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${theme.getSpacing(1)};

    & div:nth-of-type(2) {
      display: flex;
      gap: ${theme.getSpacing(1)};

      &::before {
        display: block;
        content: '- ';
        @media only screen and (max-width: ${theme.responsive.max}) {
          display: none;
        }
      }
    }

    & span {
      display: block;
      color: ${theme.colors.primaryLightTextColor};
      animation: ${beat} 1s ease-in-out;
      animation-iteration-count: infinite;
    }

    @media only screen and (max-width: ${theme.responsive.max}) {
      text-align: center;
      width: 60%;
      line-height: 1.5rem;
      flex-direction: column;

      & * {
        white-space: nowrap;
      }
    }
  `}
`;

export const StyledImage = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: 265px;
    margin: auto;
    cursor: pointer;

    & * {
      cursor: pointer;
    }

    & img {
      width: 100%;
      border-radius: ${theme.borderRadius.m};
      border: solid 2px ${theme.colors.lightTextColor};
      max-height: 350px;
    }

    & div {
      position: absolute;
      bottom: 2px;
      width: 100%;
      background: ${theme.colors.lightTextColor};
      color: ${theme.colors.primaryTextColor};
      padding: ${theme.getSpacing(2)};
      border-radius: 0 0 ${theme.borderRadius.m} ${theme.borderRadius.m};
      opacity: 0.7;
    }
  `}
`;

export const StyledMap = styled.div`
  ${({ theme }) => css`
    display: block;
    overflow: hidden;
    width: 265px;
    border: solid 2px ${theme.colors.accentTextColor};
    border-radius: ${theme.borderRadius.m};
    min-height: 150px;
    max-height: 150px;

    & .leaflet-container {
      min-height: 150px;
      height: 100%;
      width: 100%;
      border-radius: ${theme.borderRadius.m};
    }

    & .leaflet-div-icon {
      background: transparent;
      border: none;
    }

    & .leaflet-popup-close-button span {
      cursor: pointer;
    }

    & .marker-icon {
      & img {
        width: 20px;
        cursor: pointer;
      }
    }

    & .leaflet-popup-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      & a {
        width: 100%;
        text-align: center;
        cursor: pointer;
        color: ${theme.colors.accentTextColor};
        transition: all ease-in-out 0.3s;

        &:hover {
          font-weight: bold;
        }
      }
    }
  `}
`;
