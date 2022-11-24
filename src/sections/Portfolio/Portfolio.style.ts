import styled, { css } from 'styled-components';
import { Slide } from 'react-awesome-reveal';
import beat from '../../services/animations/beat';

export const StyledEffect = styled(Slide)`
  width: 100%;
`;

export const StyledPortfolioCard = styled.div<{ revert: boolean }>`
  ${({ revert, theme }) => css`
    width: 100%;
    display: grid;
    grid-template-rows: minmax(0, 1fr);
    grid-template-columns: repeat(12, minmax(0, 1fr));
    align-items: center;
    margin-top: ${theme.getSpacing(10)};
    position: relative;

    &:nth-of-type(odd) {
      justify-content: ${revert ? 'flex-end' : 'flex-start'};
    }

    @media only screen and (max-width: ${theme.responsive.max}) {
      display: flex;
      flex-direction: column-reverse;
    }
  `}
`;

export const ImageWrapper = styled.div<{ revert: boolean }>`
  ${({ theme, revert }) => css`
    grid-column-start: ${revert ? 7 : 1};
    grid-column-end: ${revert ? 13 : 7};
    grid-row-start: 1;
    position: relative;

    & button {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%) !important;
      opacity: 0;
      transition: opacity ease-in-out 0.3s;
    }

    &:hover {
      & button {
        opacity: 1;
      }

      & .project-img {
        filter: brightness(0.7);
      }
    }

    & .project-img {
      position: absolute;
      width: 62.6%;
      left: 18.7%;
      top: 12.9%;
      height: 65.2%;
      filter: brightness(1);
      transition: filter ease-in-out 0.3s;
    }

    & .mockup {
      width: 100%;
    }

    @media only screen and (max-width: ${theme.responsive.max}) {
      width: 70%;
      max-width: 100%;
    }
  `}
`;

export const ProjectWrapper = styled.div<{ revert: boolean }>`
  ${({ theme, revert }) => css`
    background: ${theme.colors.primaryTextColor};
    color: ${theme.colors.primaryLightTextColor};
    padding: ${theme.getSpacing(6)};
    width: 100%;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    gap: ${theme.getSpacing(4)};
    border-radius: ${theme.borderRadius.m};
    grid-row-start: 1;
    grid-column-start: ${revert ? 1 : 7};
    grid-column-end: ${revert ? 7 : 13};
    z-index: 2;

    & h4 {
      color: ${theme.colors.accentTextColor};
      font-size: ${theme.fontSize.m};
      display: flex;
      width: 100%;
      justify-content: space-between;

      & em {
        font-size: ${theme.fontSize.s};
        color: ${theme.colors.disabledTextColor};
        font-weight: ${theme.fontWeight.normal};
      }
    }

    & p {
      font-size: ${theme.fontSize.s};
      line-height: ${theme.fontSize.m};
      margin-bottom: ${theme.getSpacing(2)};
    }

    & a {
      color: ${theme.colors.lightTextColor};
      cursor: pointer;
      transition: all ease-in-out 0.3s;

      & * {
        cursor: pointer;
      }

      &:hover {
        color: ${theme.colors.accentTextColor};
      }
    }

    @media only screen and (max-width: ${theme.responsive.max}) {
      width: 100%;
      max-width: 100%;
    }
  `}
`;

export const InlineIcons = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    gap: ${theme.getSpacing(4)};

    & a:hover {
      animation: ${beat} ease-in-out 0.5s;
    }
  `}
`;

export const InlineStacks = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    gap: ${theme.getSpacing(2)};
    flex-wrap: wrap;
    align-items: center;
  `}
`;

export const ProjectDescription = styled.div`
  ${({ theme }) => css`
    max-height: 165px;
    overflow-y: scroll;

    & strong {
      color: ${theme.colors.accentTextColor};
    }
  `}
`;
