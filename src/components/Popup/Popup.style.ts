/* eslint-disable complexity */
import styled, { css } from 'styled-components';
import Popup from 'reactjs-popup';
import anvil from '../../services/animations/anvil';
import { WindowContextProps } from '../../services/contexts/WindowContext';

export const StyledPopup = styled(Popup)<{
  fullScreen: boolean;
  windowSize: WindowContextProps;
}>`
  ${({ theme, fullScreen, windowSize }) => css`
    &-overlay {
      background-color: #00000066;
    }

    &-content {
      font-family: ${theme.fontFamily.main};
      margin-top: ${fullScreen ? theme.getSpacing(4) : 'auto'};
      width: ${fullScreen
        ? `${windowSize.windowWidth * 0.95}px`
        : 'fit-content'};
      max-width: ${`${windowSize.windowWidth * (fullScreen ? 0.95 : 0.8)}px`};
      max-height: ${fullScreen
        ? `${windowSize.windowHeight * 0.95}px`
        : `${windowSize.windowHeight * 0.8}px`};
      height: ${fullScreen ? `${windowSize.windowHeight * 0.95}px` : 'auto'};
      background-color: ${theme.colors.primaryLightTextColor};
      border-radius: 5px;
      display: flex;
      flex-direction: column;
      position: relative;
      padding: ${theme.getSpacing(4)};
      overflow: visible;
      animation: ${anvil} 0.3s cubic-bezier(0.38, 0.1, 0.36, 0.9) forwards;
      -webkit-animation: ${anvil} 0.3s cubic-bezier(0.38, 0.1, 0.36, 0.9)
        forwards;

      @media only screen and (max-width: ${theme.responsive.max}) {
        // width: 90%;
        // max-width: 90%;
        height: max-content;
        max-height: 90%;
      }

      & .close {
        position: absolute;
        top: ${theme.getSpacing(3)};
        right: ${theme.getSpacing(3)};
        cursor: pointer;
        z-index: 40;
        color: ${theme.colors.accentTextColor};
        opacity: 0.6;
        transition: opacity ease-in-out 0.3s;

        &:hover {
          opacity: 1;
        }

        & * {
          cursor: pointer;
        }
      }

      & .title {
        width: 100%;
        margin-bottom: ${theme.getSpacing(3)};

        & h2 {
          max-width: ${'100%'};
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          margin-bottom: ${theme.getSpacing(3)};
          line-height: 25px;
        }
      }

      & .content {
        overflow-y: auto;
        flex-grow: 1;
      }
    }
  `}
`;

export const ButtonContainer = styled.div<{
  center: boolean;
}>`
  ${({ theme, center }) => css`
    display: flex;
    justify-content: ${center ? 'center' : 'end'};
    margin-top: auto;
    padding-top: ${theme.getSpacing(3)};

    & button {
      height: 32px;
      min-height: 32px;
      max-height: 32px;
      margin: auto ${theme.getSpacing(1)} auto ${theme.getSpacing(1)};
      width: fit-content;
    }
  `}
`;

export const TopIcon = styled.div<{ iconColor?: string }>`
  ${({ theme, iconColor }) => css`
    position: absolute;
    border-radius: 50%;
    border: 3px solid ${iconColor || theme.colors.accentTextColor};
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.primaryLightTextColor};
    padding: ${theme.getSpacing(1)};
    top: 0;
    right: 50%;
    transform: translate(50%, -50%);
  `}
`;
