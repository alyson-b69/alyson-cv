import styled, { css } from 'styled-components';

export const StyledContainerAbout = styled.div`
  ${({ theme }) => css`
    display: grid;
    max-width: 1200px;
    gap: ${theme.getSpacing(10)};
    padding: ${theme.getSpacing(12)};
    grid-template-columns: 3fr 9fr;

    & img {
      width: 100%;
      border-radius: 0.25rem;
      padding: 0.25rem;
      background: #fff;
      border: solid 1px ${theme.colors.lightTextColor};
      margin-top: auto;
      margin-bottom: 0;
      box-shadow: ${theme.shadow.box};
    }

    & p {
      margin-bottom: ${theme.getSpacing(2)};
      font-size: ${theme.fontSize.s};
    }

    & strong {
      color: ${theme.colors.accentTextColor};
    }

    @media only screen and (max-width: ${theme.responsive.max}) {
      padding: ${theme.getSpacing(6)};
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: ${theme.getSpacing(3)};

      & h2 {
        justify-content: center;
      }

      & img {
        max-width: 300px;
      }
    }
  `}
`;
