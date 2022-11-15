import styled, { css } from 'styled-components';

export const StyledSection = styled.section`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${theme.colors.primaryTextColor};
    color: ${theme.colors.lightTextColor};
    overflow-y: visible;

    & h2 {
      font-size: ${theme.fontSize.xxl};
      color: ${theme.colors.lightTextColor};
      font-family: ${theme.fontFamily.main};
      margin: ${theme.getSpacing(4)} 0;
      display: flex;
      align-items: center;
      gap: ${theme.getSpacing(3)};
      text-transform: uppercase;
    }

    & h3 {
      color: ${theme.colors.accentTextColor};
      font-size: ${theme.fontSize.l};
      margin-bottom: ${theme.getSpacing(6)};
    }

    &:nth-of-type(even) {
      background: ${theme.colors.lightTextColor};
      color: ${theme.colors.primaryTextColor};

      & h2 {
        color: ${theme.colors.accentTextColor};
      }

      & h3 {
        color: ${theme.colors.primaryTextColor};
      }
    }

    &#intro {
      min-height: calc(100vh - ${theme.defaultValues.navBarHeight - 1}px);

      & h2 {
        color: ${theme.colors.accentTextColor};
      }

      & h3 {
        color: ${theme.colors.lightTextColor};
      }

      @media only screen and (max-width: ${theme.responsive.max}) {
        & h2 {
          text-align: center;
          font-size: ${theme.fontSize.l};
        }

        & h3 {
          text-align: center;
          font-size: ${theme.fontSize.m};
        }

        & > div {
          margin: auto;
        }
      }
    }

    @media only screen and (max-width: ${theme.responsive.max}) {
      & h2 {
        font-size: ${theme.fontSize.l};
      }

      & h3 {
        font-size: ${theme.fontSize.m};
      }
    }
  `}
`;

export const StyledContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${theme.getSpacing(12)};
    margin: auto;
    width: 100%;
    max-width: 1200px;
    @media only screen and (max-width: ${theme.responsive.max}) {
      padding: ${theme.getSpacing(6)};
    }
  `}
`;
