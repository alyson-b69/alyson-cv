import styled, { css } from 'styled-components';
import { JackInTheBox } from 'react-awesome-reveal';

export const StyledForm = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.getSpacing(2)};
    width: 600px;
    @media only screen and (max-width: ${theme.responsive.max}) {
      width: 100%;
    }
  `}
`;

export const FormRow = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 6fr;
    gap: ${theme.getSpacing(2)};
    align-items: center;
    font-size: ${theme.fontSize.s};
    color: ${theme.colors.accentTextColor};
    font-weight: bold;
    @media only screen and (max-width: ${theme.responsive.max}) {
      display: flex;
      flex-direction: column;
    }
  `}
`;

export const StyledEffect = styled(JackInTheBox)`
  ${({ theme }) => css`
    @media only screen and (max-width: ${theme.responsive.max}) {
      width: 100%;
    }
  `}
`;
