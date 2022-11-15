import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  ${({ theme }) => css`
    display: block;
    background-image: ${theme.gradients.bitterToPink};
    padding: ${theme.getSpacing(3)} ${({ theme }) => theme.getSpacing(9)};
    border-radius: ${theme.borderRadius.m};
    box-shadow: 1px 1px 3px 0 rgb(0 0 0 / 30%);
    color: ${theme.colors.lightTextColor};
    font-size: ${theme.fontSize.xs};
    font-weight: 600;
    letter-spacing: 2px;
    text-transform: uppercase;
    border: 0;
    cursor: pointer;
    transition: ${theme.transition.medium};
    z-index: 2;
    overflow: hidden;

    :after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 0;
      height: 100%;
      background-color: rgba(255, 255, 255, 0.4);
      -webkit-transition: none;
      -moz-transition: none;
      transition: none;
      border-radius: ${theme.getSpacing(2)};
    }

    &:hover {
      box-shadow: rgb(0 0 0 / 20%) 0 0 20px 0;
      transform: translateY(-3px);
      // This is for shining effect on hover
      &:after {
        width: 120%;
        background-color: rgba(255, 255, 255, 0);
        transition: all 0.4s ease-in-out;
        transition-delay: 0.2s;
      }
    }
  `}
`;
