import styled, { css } from 'styled-components';

export const StyledApp = styled.div`
  ${({ theme }) => css`
    max-width: 100vw;
    overflow: hidden;

    & * {
      font-family: ${theme.fontFamily.main};
    }
  `}
`;

export const StyledContent = styled.div`
  ${({ theme }) => css`
    max-height: calc(100vh - ${theme.defaultValues.navBarHeight}px);
    overflow-x: scroll;
    scroll-behavior: smooth;
  `}
`;
