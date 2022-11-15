import styled, { css } from 'styled-components';

interface StyledTopNavProps {
  show: boolean;
}

export const StyledTopNav = styled.div<StyledTopNavProps>`
  ${({ theme, show }) => css`
    position: fixed;
    display: ${show ? 'flex' : 'none'};
    width: 100%;
    bottom: ${theme.getSpacing(5)};
    height: ${theme.getSpacing(5)};
    right: ${theme.getSpacing(4)};
    justify-content: flex-end;
    align-items: flex-end;
    z-index: 10;

    & svg {
      cursor: pointer;
    }

    & .roundArrow {
      background-color: ${theme.colors.accentTextColor};
      border-radius: 50%;
      animation: fadeIn 0.3s;
      transition: opacity 0.4s;
      opacity: 0.5;
      color: ${theme.colors.primaryTextColor};

      &:hover {
        opacity: 1;
      }
    }
  `}
`;
