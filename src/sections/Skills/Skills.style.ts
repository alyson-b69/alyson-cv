import styled, { css } from 'styled-components';

export const StyledSkillsContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${theme.getSpacing(12)};
    width: 100%;
    max-width: 1200px;

    & h3 {
      color: ${theme.colors.accentTextColor};
      font-size: ${theme.fontSize.l};
      margin: ${theme.getSpacing(10)} 0;
    }

    & h4 {
      font-size: ${theme.fontSize.m};
      text-transform: uppercase;
      text-align: center;
      margin-bottom: ${theme.getSpacing(4)};
    }
  `}
`;

export const SoftSkillsContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 90%;
    gap: ${theme.getSpacing(6)};
    justify-content: space-around;
    z-index: 1;
    @media only screen and (max-width: ${theme.responsive.max}) {
      flex-direction: column;
      width: 100%;
      justify-content: center;
      align-items: center;
    }
  `}
`;

export const SoftSkillCard = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all ease-in-out 0.3s;
    max-width: 150px;
    width: 150px;
    text-align: center;
    cursor: pointer;

    & * {
      cursor: pointer;
    }

    & p {
      margin-top: ${theme.getSpacing(4)};
      max-width: 130px;
    }

    &:hover {
      color: ${theme.colors.accentTextColor};
    }
  `}
`;

export const HardSkillsContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.getSpacing(10)};
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-around;

    @media only screen and (max-width: ${theme.responsive.max}) {
      flex-direction: column;
      align-items: center;
      gap: ${theme.getSpacing(10)};
    }
  `}
`;

export const HardSkillsCol = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.getSpacing(4)};
    flex-wrap: wrap;
    @media only screen and (max-width: ${theme.responsive.max}) {
      flex-direction: column;
    }
  `}
`;

export const StyledHardSkillCard = styled.div<{ isTitle?: boolean }>`
  ${({ theme, isTitle }) => css`
    display: flex;
    flex-direction: column;
    border-radius: 0.25rem;
    background: ${isTitle
      ? theme.colors.primaryTextColor
      : theme.colors.lightTextColor};
    color: ${isTitle
      ? theme.colors.accentTextColor
      : theme.colors.primaryTextColor};
    max-width: 120px;
    min-width: 120px;
    text-align: center;
    border: solid 1px ${theme.colors.lightTextColor};
    justify-content: center;
    font-size: ${theme.fontSize.xxs};

    & img {
      max-width: 120px;
      max-height: 75px;
      height: 75px;
      border-radius: 0.25rem 0.25rem 0 0;
      margin: 0;
    }

    & p {
      padding: ${theme.getSpacing(3)} ${theme.getSpacing(1)};
    }

    & h4 {
      max-width: 100px;
      text-align: center;
      font-size: ${theme.fontSize.s};
      margin: auto;
      line-height: ${theme.fontSize.l};
    }

    @media only screen and (max-width: ${theme.responsive.max}) {
      max-width: 250px;
      min-width: 250px;
      border: ${isTitle ? 'none' : `solid 1px ${theme.colors.lightTextColor}`};
      & img {
        max-width: 250px;
        max-height: 150px;
        height: 150px;
      }
    }
  `}
`;
