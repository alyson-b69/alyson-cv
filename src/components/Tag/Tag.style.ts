import styled, { css } from 'styled-components';

export const StyledTag = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.accentTextColor};
    color: ${theme.colors.primaryLightTextColor};
    font-size: ${theme.fontSize.xxs};
    padding: 0 ${theme.getSpacing(2)};
    border-radius: ${theme.getSpacing(5)};
    line-height: ${theme.getSpacing(5)};
    width: max-content;
    align-items: center;
    max-height: ${theme.getSpacing(7)};
    height: ${theme.getSpacing(7)};
    display: flex;
    gap: ${theme.getSpacing(2)};
  `}
`;
