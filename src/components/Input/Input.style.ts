import styled, { css } from 'styled-components';

export const InputContainer = styled.div<{ width?: string }>`
  position: relative;
  width: ${({ width }) => width};
`;

export const InputWrapper = styled.div<{
  width?: string;
}>`
  position: relative;
  width: ${({ width }) => width || '100%'};
`;

export const StyledInput = styled.input<{
  isActive: boolean;
  width?: string;
  height?: number;
  isSuccess?: boolean;
  isError?: boolean;
  isAutocompleted?: boolean;
}>`
  ${({
    theme,
    height,
    isActive,
    width,
    isSuccess,
    isError,
    isAutocompleted,
  }) => css`
    height: ${height ? `${height}px` : `${theme.defaultValues.inputHeight}px`};
    border-radius: ${theme.borderRadius.m};
    border: solid 1px
      ${isActive
        ? theme.colors.accentTextColor
        : isSuccess || isAutocompleted
        ? theme.colors.inputSuccessBorderColor
        : isError
        ? theme.colors.inputErrorBorderColor
        : theme.colors.disabledTextColor};
    box-shadow: ${isActive ? theme.shadow.activeInput : 'inherit'};
    font-size: ${theme.fontSize.s};
    padding-left: ${theme.getSpacing(4)};
    color: ${isActive ? 'inherit' : theme.colors.primaryTextColor};
    width: ${width || '100%'};
    box-sizing: border-box;
    transition: all ease-in-out 0.3s;
    font-family: ${theme.fontFamily.main};
    /* clears the ‘X’ from Internet Explorer */

    &[type='search']::-ms-clear {
      display: none;
      width: 0;
      height: 0;
    }

    &[type='search']::-ms-reveal {
      display: none;
      width: 0;
      height: 0;
    }

    /* clears the ‘X’ from Chrome */

    &[type='search']::-webkit-search-decoration,
    &[type='search']::-webkit-search-cancel-button,
    &[type='search']::-webkit-search-results-button,
    &[type='search']::-webkit-search-results-decoration {
      display: none;
    }

    @media only screen and (max-width: ${theme.responsive.max}) {
      font-size: ${theme.fontSize.s};
    }

    &::placeholder {
      color: ${theme.colors.inputPlaceholderColor};
      font-size: ${theme.fontSize.s};
      @media only screen and (max-width: ${theme.responsive.max}) {
        font-size: ${theme.fontSize.s};
      }
    }

    &:-webkit-autofill {
      -webkit-background-clip: text;
    }

    &:focus,
    :focus-visible {
      border-color: ${theme.colors.accentTextColor};
      box-shadow: ${theme.shadow.activeInput};
      color: ${theme.colors.primaryTextColor};
    }
  `}
`;
