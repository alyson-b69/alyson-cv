import styled, { css } from 'styled-components';
import { TooltipPosition } from './TooltipQuote';

const tipPositionCss = (position: TooltipPosition) => {
  switch (position) {
    case 'top':
      return css`
        top: 0;
        left: 50%;
        transform: translate(-50%, calc(-100% - 8px)) scale3d(0.2, 0.2, 1);
      `;
    case 'right':
      return css`
        right: 0;
        top: 50%;
        transform: translate(calc(100% + 8px), -50%) scale3d(0.2, 0.2, 1);
      `;
    case 'bottom':
      return css`
        bottom: 0;
        left: 50%;
        transform: translate(-50%, calc(100% + 8px)) scale3d(0.2, 0.2, 1);
      `;
    case 'left':
      return css`
        left: 0;
        top: 50%;
        transform: translate(calc(-100% - 8px), -50%) scale3d(0.2, 0.2, 1);
      `;
  }
};

const afterPositionCss = (position: TooltipPosition, borderColor: string) => {
  switch (position) {
    case 'top':
      return css`
        border-width: 8px 8px 0 8px;
        border-color: ${borderColor} transparent transparent transparent;
        top: -8px;
        left: 50%;
        transform: translate(-50%, 0) scale3d(0.2, 0.2, 1);
      `;
    case 'right':
      return css`
        border-width: 8px 8px 8px 0;
        border-color: transparent ${borderColor} transparent transparent;
        right: -8px;
        top: 50%;
        transform: translate(0, -50%) scale3d(0.2, 0.2, 1);
      `;
    case 'bottom':
      return css`
        border-width: 0 8px 8px 8px;
        border-color: transparent transparent ${borderColor} transparent;
        bottom: -8px;
        left: 50%;
        transform: translate(-50%, 0) scale3d(0.2, 0.2, 1);
      `;
    case 'left':
      return css`
        border-width: 8px 0 8px 8px;
        border-color: transparent transparent transparent ${borderColor};
        left: -8px;
        top: 50%;
        transform: translate(0, -50%) scale3d(0.2, 0.2, 1);
      `;
  }
};

const hoverTipPositionCss = (position: TooltipPosition) => {
  switch (position) {
    case 'top':
      return css`
        transform: translate(-50%, calc(-100% - 8px)) scale3d(1, 1, 1);
      `;
    case 'right':
      return css`
        transform: translate(calc(100% + 8px), -50%) scale3d(1, 1, 1);
      `;
    case 'bottom':
      return css`
        transform: translate(-50%, calc(100% + 8px)) scale3d(1, 1, 1);
      `;
    case 'left':
      return css`
        transform: translate(calc(-100% - 8px), -50%) scale3d(1, 1, 1);
      `;
  }
};

const hoverAfterPositionCss = (position: TooltipPosition) => {
  switch (position) {
    case 'top':
      return css`
        transform: translate(-50%, 0) scale3d(1, 1, 1);
      `;
    case 'right':
      return css`
        transform: translate(0, -50%) scale3d(1, 1, 1);
      `;
    case 'bottom':
      return css`
        transform: translate(-50%, 0) scale3d(1, 1, 1);
      `;
    case 'left':
      return css`
        transform: translate(0, -50%) scale3d(1, 1, 1);
      `;
  }
};

export const TooltipWrapper = styled.i<{ position: TooltipPosition }>`
  ${({ position, theme }) => {
    const thisBorderColor = theme.colors.accentTextColor;
    return css`
      position: relative;
      box-sizing: border-box;
      cursor: default;
      display: block;
      width: fit-content;
      height: fit-content;
      z-index: 1;

      & div.tip {
        position: absolute;
        background: #fff;
        color: ${theme.colors.primaryTextColor};
        line-height: 1.2em;
        font-style: normal;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
        min-width: max-content;
        max-width: 200px;
        opacity: 0;
        visibility: hidden;
        border: solid 1px ${thisBorderColor};
        z-index: 4;
        box-sizing: border-box;
        border-radius: ${theme.borderRadius.m};
        transition: all 0.2s ease-in-out;
        font-size: ${theme.fontSize.xxs};

        ${tipPositionCss(position)}
      }

      &:after {
        width: 0;
        height: 0;
        border-style: solid;
        content: '';
        position: absolute;
        opacity: 0;
        visibility: hidden;
        box-sizing: border-box;
        transition: all 0.1s ease-in-out;
        ${afterPositionCss(position, thisBorderColor)}
      }

      &:hover div.tip,
      :hover:after {
        opacity: 1;
        visibility: visible;
      }

      &:hover div.tip {
        ${hoverTipPositionCss(position)};
      }

      &:hover:after {
        ${hoverAfterPositionCss(position)}
        transition: all .2s .1s ease-in-out;
      }
    `;
  }}
`;

export const TooltipTitle = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.accentTextColor};
    color: ${theme.colors.primaryLightTextColor};
    padding: ${theme.getSpacing(2)};
    font-size: ${theme.fontSize.s};
    font-weight: bold;
    border-radius: ${theme.borderRadius.s} ${theme.borderRadius.s} 0 0;
  `}
`;

export const TooltipQuoteTxt = styled.div`
  ${({ theme }) => css`
    padding: ${theme.getSpacing(2)};
    font-size: ${theme.fontSize.s};
    font-style: italic;
    max-width: 250px;
  `}
`;

export const TooltipAuthor = styled.div`
  ${({ theme }) => css`
    padding: ${theme.getSpacing(2)};
    font-size: ${theme.fontSize.s};
    font-weight: bold;
  `}
`;
