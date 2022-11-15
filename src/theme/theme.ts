import { colorPalette } from './colorPalette';

const SPACING_UNIT = 4;
const MEASUREMENT_UNIT = 'px';

export const light = {
  fontFamily: {
    main: `'Lato', 'Helvetica', 'Arial', sans-serif`,
  },
  fontSize: {
    xxl: '2rem',
    xl: '1.8rem',
    l: '1.5rem',
    m: '1.1rem',
    s: '0.9rem',
    xs: '0.8rem',
    xxs: '0.7rem',
  },
  fontWeight: {
    extraBold: '900',
    bold: '700',
    normal: '400',
    light: '300',
    thin: '100',
  },
  shadow: {
    floating: 'rgb(0 0 0 / 0.12) 0px 1px 1px, rgb(0 0 0 / 0.12) 0px 2px 2px',
    box: '0 0 10px 0 rgb(0 0 0 / 0.1)',
    boxHovered: '0 0 15px 0 rgb(0 0 0 / 0.15)',
    activeInput: '0px 0px 6px 3px rgba(255, 90, 128, 0.1)',
  },
  transition: {
    slow: 'all 0.4s ease-in-out',
    medium: 'all 0.3s ease-in-out',
    fast: 'all 0.2s ease-in-out',
  },
  borderRadius: {
    l: '32px',
    m: '8px',
    s: '5px',
    xs: '4px',
  },
  defaultValues: {
    inputHeight: 40,
    navBarHeight: 60,
  },
  responsive: {
    max: '1200px',
    maxNumber: 1200,
  },
  getSpacing: (size: number): string => {
    return `${size * SPACING_UNIT}${MEASUREMENT_UNIT}`;
  },
  colors: {
    primaryTextColor: colorPalette.reachBlack,
    secondaryTextColor: colorPalette.grey,
    primaryLightTextColor: colorPalette.white,
    lightTextColor: colorPalette.cultured,
    accentTextColor: colorPalette.brinkPink,
    disabledTextColor: colorPalette.grey + 60,

    // Inputs
    inputBorderColor: colorPalette.culturedDark,
    inputBackgroundColor: colorPalette.cultured,
    inputColor: colorPalette.raisinBlack,
    inputPlaceholderColor: colorPalette.grey,
    inputErrorBorderColor: colorPalette.lightRed,
    inputSuccessBorderColor: colorPalette.green,
  },

  gradients: {
    bitterToPink: `linear-gradient(135deg, ${colorPalette.bittersweet}, ${colorPalette.brinkPink})`,
  },
};

export type ThemeType = typeof light;

const theme = light;

export type ColorType = typeof theme.colors;

export default theme;
