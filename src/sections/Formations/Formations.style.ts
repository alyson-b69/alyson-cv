import styled, { css } from 'styled-components';

export const StyledFormationContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${theme.getSpacing(12)};
    width: 100%;
  `}
`;

export const FormationsBlock = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 80%;
    gap: ${theme.getSpacing(2)};
    @media only screen and (max-width: ${theme.responsive.max}) {
      width: 100%;
    }
  `}
`;

export const FormationRow = styled.div`
  ${({ theme }) => css`
    display: flex;
    min-height: ${theme.getSpacing(15)};
    gap: ${theme.getSpacing(2)};
  `}
`;

export const FormationDescription = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.lightTextColor};
    color: ${theme.colors.primaryTextColor};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    border-radius: ${theme.borderRadius.s};
    text-align: center;

    & em {
      margin-top: ${theme.getSpacing(2)};
      color: ${theme.colors.accentTextColor};
    }
  `}
`;

export const FormationYear = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.disabledTextColor};
    color: ${theme.colors.lightTextColor};
    border-radius: ${theme.borderRadius.s};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 20%;
  `}
`;
