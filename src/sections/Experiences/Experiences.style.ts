import styled, { css } from 'styled-components';

export const StyledTimeline = styled.ul`
  ${({ theme }) => css`
    padding: 20px 0 20px;
    position: relative;
    list-style: none;
    display: flex;
    flex-direction: column;

    //Timeline stroke
    &:before {
      top: 0;
      bottom: 0;
      position: absolute;
      content: ' ';
      width: 2px;
      background-color: ${theme.colors.disabledTextColor};
      left: 50%;
      margin-left: -1.5px;
      @media only screen and (max-width: ${theme.responsive.max}) {
        left: 0;
        margin-left: 0;
      }
    }

    & li {
      margin-bottom: 25px;
      position: relative;

      &:before,
      :after {
        content: ' ';
        display: table;
      }

      &:after {
        clear: both;
      }
    }
  `}
`;

export const StyledYear = styled.li`
  ${({ theme }) => css`
    display: block;
    width: 60px;
    margin: 0 auto;
    padding: 3px 0;
    font-weight: bold;
    text-align: center;
    box-shadow: 0 0 11px rgba(0, 0, 0, 0.35);
    border-radius: ${theme.borderRadius.m};
    background: ${theme.colors.primaryLightTextColor};
    @media only screen and (max-width: ${theme.responsive.max}) {
      margin-left: -20px;
    }
  `}
`;

export const TimelineCard = styled.li<{ inverted?: boolean }>`
  ${({ theme, inverted }) => css`
    align-self: ${inverted ? 'flex-end' : 'flex-start'};
    background: ${theme.colors.primaryLightTextColor};
    border: 1px solid #d4d4d4;
    padding: 20px;
    border-radius: ${theme.borderRadius.m};
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.15);
    height: fit-content;

    &:before {
      position: absolute;
      top: 26px;
      right: -15px;
      display: inline-block;
      border-top: 15px solid transparent;
      border-left: 15px solid #ccc;
      border-right: 0 solid #ccc;
      border-bottom: 15px solid transparent;
      content: ' ';
      ${inverted
        ? css`
            border-left-width: 0;
            border-right-width: 15px;
            left: -15px;
            right: auto;
          `
        : ''}
      content: ' ';
    }

    &:after {
      position: absolute;
      top: 27px;
      right: -14px;
      display: inline-block;
      border-top: 14px solid transparent;
      border-left: 14px solid #fff;
      border-right: 0 solid #fff;
      border-bottom: 14px solid transparent;

      ${inverted
        ? css`
            border-left-width: 0;
            border-right-width: 14px;
            left: -14px;
            right: auto;
          `
        : ''}
      content: ' ';
    }
  `}
`;

export const Circle = styled.div<{ inverted: boolean; left?: number }>`
  ${({ theme, inverted, left }) => css`
    position: absolute;
    top: 23px;
    left: ${inverted ? 'calc(-20px - 4% - 15px)' : 'calc(100% + 2% + 15px)'};
    text-align: center;
    background: #333;
    color: #fff;
    width: 30px;
    height: 30px;
    line-height: 30px;
    // margin-left: -16px;
    border: 3px solid #fa6862;
    border-radius: 50%;
    z-index: 10;
    @media only screen and (max-width: ${theme.responsive.max}) {
      left: ${left ? `${left}px` : ''};
    }
  `}
`;

export const JobTitle = styled.h4`
  ${({ theme }) => css`
    color: ${theme.colors.accentTextColor};
    font-size: ${theme.fontSize.m};
    margin-bottom: ${theme.getSpacing(2)};
  `}
`;

export const JobInfos = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.secondaryTextColor};
    display: flex;
    align-items: center;
    gap: ${theme.getSpacing(2)};
    font-size: ${theme.fontSize.xs};
    margin-bottom: ${theme.getSpacing(2)};
    @media only screen and (max-width: ${theme.responsive.max}) {
      flex-direction: column;
      align-items: flex-start;
    }
  `}
`;

export const JobDescription = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.primaryTextColor};
    display: flex;
    flex-direction: column;
    gap: ${theme.getSpacing(1)};
    font-size: ${theme.fontSize.s};
    margin-bottom: ${theme.getSpacing(2)};
    line-height: ${theme.fontSize.m};
  `}
`;
