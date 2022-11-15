import styled, { css } from 'styled-components';

export const NavBarWrapper = styled.div`
  ${({ theme }) => css`
    box-shadow: ${theme.shadow.box};
    z-index: 1;
    position: relative;
  `}
`;

export const NavBarTop = styled.div`
  ${({ theme }) => css`
    box-shadow: ${theme.shadow.box};
    z-index: 11;
  `}
`;

export const StyledNavBar = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 2fr 9fr;
    padding: ${theme.getSpacing(4)} ${theme.getSpacing(20)};
    gap: ${theme.getSpacing(8)};
    background: ${theme.colors.primaryLightTextColor};
    height: ${theme.defaultValues.navBarHeight}px;
    width: 100%;
    overflow: visible;
    max-width: 1200px;
    margin: auto;
    z-index: 2;

    @media only screen and (max-width: ${theme.responsive.max}) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: ${theme.getSpacing(4)} ${theme.getSpacing(10)};
    }
  `}
`;

export const StyledLogo = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.primaryTextColor};
    cursor: pointer;
    transition: all ease-in-out 0.3s;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    gap: ${theme.getSpacing(2)};
    font-weight: bold;
    min-width: fit-content;

    &:hover {
      color: ${theme.colors.accentTextColor};
    }
  `}
`;

export const StyledNavBarList = styled.div<{ isOpen: boolean }>`
  ${({ theme, isOpen }) => css`
    display: flex;
    gap: ${theme.getSpacing(4)};
    justify-content: space-between;
    align-items: center;
    transition: right ease-in-out 0.3s;
    @media only screen and (max-width: ${theme.responsive.max}) {
      padding: ${theme.getSpacing(10)};
      position: absolute;
      flex-direction: column;
      justify-content: flex-start;
      gap: ${theme.getSpacing(8)};
      height: calc(100vh - 60px);
      background: ${theme.colors.primaryLightTextColor};
      top: 60px;
      z-index: -1;
      right: ${isOpen ? 0 : '-300px'};
      box-shadow: ${theme.shadow.box};
    }
  `}
`;

export const StyledNavItem = styled.a<{ isActive: boolean }>`
  ${({ theme, isActive }) => css`
    color: ${isActive
      ? theme.colors.accentTextColor
      : theme.colors.primaryTextColor};
    cursor: pointer;
    transition: all ease-in-out 0.3s;
    text-transform: uppercase;
    font-weight: ${isActive ? 'bold' : 'normal'};

    &:hover {
      color: ${theme.colors.accentTextColor};
    }
  `}
`;

export const StyledBurger = styled.div<{ isOpen: boolean }>`
  ${({ theme, isOpen }) => css`
    display: none;
    z-index: 10;
    width: 20px;
    height: 20px;
    cursor: pointer;

    & span {
      display: block;
      cursor: pointer;
      position: relative;
      top: 0;
      height: ${theme.getSpacing(1)};
      background-color: ${isOpen
        ? theme.colors.accentTextColor
        : theme.colors.primaryTextColor};
      margin-bottom: 4px;
      transition: 0.3s ease transform, 0.3s ease top, 0.3s ease width,
        0.3s ease right;
      border-radius: ${theme.borderRadius.m};

      &.line-1 {
        transform-origin: 0;
        ${isOpen &&
        css`
          top: -2px;
          transform: rotateZ(45deg);
        `}
      }

      &.line-2 {
        right: 0;
        width: 20px;
        ${isOpen &&
        css`
          width: 30px;
          top: 0;
          right: 6.5px;
          transform: rotateZ(-45deg);
        `};
      }

      &.line-3 {
        margin-bottom: 0;
        transform-origin: 20px;
        ${isOpen &&
        css`
          top: 2px;
          transform: rotateZ(45deg);
        `}
      }
    }

    @media only screen and (max-width: ${theme.responsive.max}) {
      display: block;
    }
  `}
`;
