import styled, { css } from 'styled-components';

export const RecommendationContainer = styled.div`
  margin-top: 24px;
  display: flex;
  gap: 24px;
  flex-direction: column;
  max-width: 1200px;
`;

export const RecommendationCard = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding: 24px;
    background: ${theme.colors.primaryLightTextColor};
    border-radius: 8px;
    margin: auto;
    font-size: 0.9rem;
    box-shadow: ${theme.shadow.box};

    & p {
      margin-bottom: 8px;
    }
  `}
`;

export const RecommendationHeader = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.getSpacing(3)};
    margin-bottom: ${theme.getSpacing(3)};
    align-items: center;

    & h4 {
      font-size: ${theme.fontSize.m};
      color: ${theme.colors.accentTextColor};
      margin-bottom: ${theme.getSpacing(1)};
    }

    & img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
    }
  `}
`;

export const RecommendationDate = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.inputPlaceholderColor};
    font-style: italic;
    font-size: ${theme.fontSize.xs};
  `}
`;
