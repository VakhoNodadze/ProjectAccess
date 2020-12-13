const baseline = [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64];

const breakpoints = ['300px', '700px', '900px', '1200px'];

// aliases
breakpoints.small = 300;
breakpoints.medium = 700;
breakpoints.large = 900;
breakpoints.xlarge = 1200;

breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];

export { breakpoints };

export const themes = {
  light: {
    // new theme
    breakpoints,
    // fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
    fonts: {
      regular: 'Sagoe-Regular, Roboto, sans-serif',
      bold: 'Sagoe-Bold, Roboto, sans-serif',
      semibold: 'Sagoe-SemiBold, Roboto, sans-serif',
      light: 'Sagoe-Light, Roboto, sans-serif'
    },
    color: {
      // main
      white: '#fff',
      textColor: '#000',
      backgroundPr: '#fff',
      backgroundSec: '#F3F3F3',
      divideBg: '#D8D8D8',
      black: '#000000',
      text: '#000',
      textSecondary: 'rgba(0,0,0,0.37)',
      inActiveText: '#C6C6C6',
      placeholder: 'rgba(0,0,0,0.5)',
      reverseText: '#00000029',
      gray000: '#dcdcdc',
      gray100: '#00000029',
      gray200: '#C6C6C6',
      gray400: '#666666',
      gray600: '#707070',
      purple: '#7E7EF1',
      blue: '#305ECA',
      input: '#33A3DC',
      textBlue: '#44A0D3',
      red: '#ff6666',
      border: '#00000029',
      button: 'green'
    },
    radius: { none: 0, sm: 4, md: 8, lg: 12, xl: 16, rounded: '100rem' },
    space: baseline,
    shadows: {
      none: 'none',
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05);',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);'
    },
    grid: {
      containerMaxWidth: {
        xs: '540px',
        sm: '720px',
        md: '960px',
        lg: '1136px',
        xl: '1236px'
      },
      gutterWidth: '16px',
      colCount: 12
    },
    fontSizes: {
      huge: '48px',
      h1: '36px',
      h2: '21px',
      h3: '16px',
      body: '16px',
      body2: '0.8rem',
      caption: '0.7rem'
    },
    lineHeights: {
      h1: '56px',
      h2: '40px',
      h3: '32px',
      h4: '24px',
      body: '24px',
      body2: '20px',
      caption: '16px'
    },
    // end new theme
    type: 'light',
    fontSize: {
      tiny: '11px',
      mini: '0.7rem',
      small: '13px',
      default: '0.8rem',
      big: '16px',
      large: '18px'
    },
    palette: {
      transparent: {
        200: 'rgba(0, 0, 0, 0)',
        300: 'rgba(0, 0, 0, 0.064)',
        500: 'rgba(0, 0, 0, 0)',
        1000: 'rgba(0, 0, 0, 0.54)'
      },
      default: {
        200: 'rgba(0, 0, 0, .034)',
        300: 'rgba(0, 0, 0, .084)',
        500: 'rgba(0, 0, 0, .34)',
        1000: 'rgba(0, 0, 0, .44)'
      },
      inverted: {
        200: 'rgba(255, 255, 255, .034)',
        500: 'rgba(255, 255, 255, .34)',
        700: 'rgba(255, 255, 255, .54)',
        1000: 'rgba(255, 255, 255, 1)'
      },
      secondary: {
        200: 'rgba(0, 0, 0, .034)',
        300: 'rgba(0, 0, 0, .084)',
        500: 'rgba(0, 0, 0, .34)',
        1000: '#7E7EF1'
      },
      primary: {
        200: 'rgba(38, 117, 254, .064)',
        500: 'rgba(38, 117, 254, .54)',
        800: 'rgba(38, 117, 254, .84)',
        900: 'rgba(38, 117, 254, .94)',
        1000: '#33A3DC'
      },
      danger: {
        200: '#F1E8E9',
        500: 'rgba(234, 61, 83, .54)',
        1000: 'rgba(234, 61, 83, 1)'
      },
      info: {
        200: 'rgba(250, 120, 16, .064)',
        500: 'rgba(250, 120, 16, .54)',
        1000: 'rgba(250, 120, 16, 1)'
      },
      success: {
        200: 'rgba(0, 217, 176, .64)',
        500: 'rgba(0, 217, 176, .54)',
        1000: 'rgba(0, 217, 176, 1)'
      },
      elementBgSecondary: {
        200: 'rgba(0,0,0, .014)',
        500: 'rgba(0,0,0, .024)',
        1000: 'rgba(0,0,0, .034)'
      }
    },
    avatarSize: {
      tiny: '28px',
      mini: '32px',
      small: '42px',
      default: '46px',
      normal: '64px',
      large: '84px',
      big: '120px',
      huge: '154px'
    },
    imageSize: {
      mini: '124px',
      small: '200px',
      default: '300px',
      big: '450px',
      large: '600px',
      fluid: '100%'
    },
    elementSize: {
      tiny: '24px',
      mini: '32px',
      small: '40px',
      default: '48px',
      big: '56px',
      large: '64px'
    },
    borderRadius: {
      tiny: '2px',
      small: '4px',
      default: '6px',
      big: '8px',
      circular: '100%',
      rounded: '100rem'
    },
    boxShadow: {
      default: '1px 4px 8px rgba(0, 0, 0, 0.1)',
      primary: '0px 1px 4px rgba(0, 0, 0, 0.36)'
    },
    spacing: {
      noSpacing: 0,
      tiny: 2,
      mini: 4,
      small: 6,
      default: 8,
      big: 16,
      large: 24,
      extraLarge: 32,
      huge: 38,
      extraHuge: 44
    },
    animation: {
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      // Objects enter the screen at full velocity from off-screen and
      // slowly decelerate to a resting point.
      easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
      // Objects leave the screen at full velocity. They do not decelerate when off-screen.
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      // The sharp curve is used by objects that may return to the screen at any time.
      sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
    },
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      // most basic recommended timing
      default: 300,
      // this is to be used in complex animations
      complex: 375,
      // recommended when something is entering screen
      enteringScreen: 225,
      // recommended when something is leaving screen
      leavingScreen: 195
    }
  },
  dark: {
    // new theme
    breakpoints,
    // fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
    fonts: {
      regular: 'Sagoe-Regular, Roboto, sans-serif',
      bold: 'Sagoe-Bold, Roboto, sans-serif',
      semibold: 'Sagoe-SemiBold, Roboto, sans-serif',
      light: 'Sagoe-Light, Roboto, sans-serif'
    },
    color: {
      // main
      white: '#fff',
      textColor: '#fff',
      backgroundPr: '#0c111d',
      backgroundSec: '#06090f',
      divideBg: '#D8D8D8',
      black: '#000000',
      text: '#fff',
      reverseText: '#06090f',
      textSecondary: 'rgba(255, 255, 255, 0.9)',
      inActiveText: '#C6C6C6',
      placeholder: 'rgba(255,255,255,0.5)',
      gray000: '#dcdcdc',
      gray100: '#00000029',
      gray200: '#C6C6C6',
      gray400: '#666666',
      gray600: '#707070',
      purple: '#7E7EF1',
      blue: '#305ECA',
      input: '#33A3DC',
      textBlue: '#44A0D3',
      red: '#ff6666',
      border: 'rgba(255,255,255,0.8)',
      button: '#305ECA'
    },
    radius: { none: 0, sm: 4, md: 8, lg: 12, xl: 16, rounded: '100rem' },
    space: baseline,
    shadows: {
      none: 'none',
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05);',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);'
    },
    grid: {
      containerMaxWidth: {
        xs: '540px',
        sm: '720px',
        md: '960px',
        lg: '1136px',
        xl: '1236px'
      },
      gutterWidth: '16px',
      colCount: 12
    },
    fontSizes: {
      huge: '48px',
      h1: '36px',
      h2: '21px',
      h3: '16px',
      body: '16px',
      body2: '0.8rem',
      caption: '0.7rem'
    },
    lineHeights: {
      h1: '56px',
      h2: '40px',
      h3: '32px',
      h4: '24px',
      body: '24px',
      body2: '20px',
      caption: '16px'
    },
    // end new theme
    type: 'dark',
    fontSize: {
      tiny: '11px',
      mini: '0.7rem',
      small: '13px',
      default: '0.8rem',
      big: '16px',
      large: '18px'
    },
    palette: {
      transparent: {
        200: 'rgba(0, 0, 0, 0)',
        300: 'rgba(0, 0, 0, 0.064)',
        500: 'rgba(0, 0, 0, 0)',
        1000: 'rgba(0, 0, 0, 0.54)'
      },
      default: {
        200: 'rgba(0, 0, 0, .034)',
        300: 'rgba(0, 0, 0, .084)',
        500: 'rgba(0, 0, 0, .34)',
        1000: 'rgba(0, 0, 0, .44)'
      },
      inverted: {
        200: 'rgba(255, 255, 255, .034)',
        500: 'rgba(255, 255, 255, .34)',
        700: 'rgba(255, 255, 255, .54)',
        1000: 'rgba(255, 255, 255, 1)'
      },
      secondary: {
        200: 'rgba(0, 0, 0, .034)',
        300: 'rgba(0, 0, 0, .084)',
        500: 'rgba(0, 0, 0, .34)',
        1000: '#7E7EF1'
      },
      primary: {
        200: 'rgba(38, 117, 254, .064)',
        500: 'rgba(38, 117, 254, .54)',
        800: 'rgba(38, 117, 254, .84)',
        900: 'rgba(38, 117, 254, .94)',
        1000: '#33A3DC'
      },
      danger: {
        200: '#F1E8E9',
        500: 'rgba(234, 61, 83, .54)',
        1000: 'rgba(234, 61, 83, 1)'
      },
      info: {
        200: 'rgba(250, 120, 16, .064)',
        500: 'rgba(250, 120, 16, .54)',
        1000: 'rgba(250, 120, 16, 1)'
      },
      success: {
        200: 'rgba(0, 217, 176, .64)',
        500: 'rgba(0, 217, 176, .54)',
        1000: 'rgba(0, 217, 176, 1)'
      },
      elementBgSecondary: {
        200: 'rgba(0,0,0, .014)',
        500: 'rgba(0,0,0, .024)',
        1000: 'rgba(0,0,0, .034)'
      }
    },
    avatarSize: {
      tiny: '28px',
      mini: '32px',
      small: '42px',
      default: '46px',
      normal: '64px',
      large: '84px',
      big: '120px',
      huge: '232px'
    },
    imageSize: {
      mini: '124px',
      small: '200px',
      default: '300px',
      big: '450px',
      large: '600px',
      fluid: '100%'
    },
    elementSize: {
      tiny: '24px',
      mini: '32px',
      small: '40px',
      default: '48px',
      big: '56px',
      large: '64px'
    },
    borderRadius: {
      tiny: '2px',
      small: '4px',
      default: '6px',
      big: '8px',
      circular: '100%',
      rounded: '100rem'
    },
    boxShadow: {
      default: '1px 4px 8px rgba(0, 0, 0, 0.1)',
      primary: '0px 1px 4px rgba(0, 0, 0, 0.36)'
    },
    spacing: {
      noSpacing: 0,
      tiny: 2,
      mini: 4,
      small: 6,
      default: 8,
      big: 16,
      large: 24,
      extraLarge: 32,
      huge: 38,
      extraHuge: 44
    },
    animation: {
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      // Objects enter the screen at full velocity from off-screen and
      // slowly decelerate to a resting point.
      easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
      // Objects leave the screen at full velocity. They do not decelerate when off-screen.
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      // The sharp curve is used by objects that may return to the screen at any time.
      sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
    },
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      // most basic recommended timing
      default: 300,
      // this is to be used in complex animations
      complex: 375,
      // recommended when something is entering screen
      enteringScreen: 225,
      // recommended when something is leaving screen
      leavingScreen: 195
    }
  }
};

export const {light, dark} = themes;