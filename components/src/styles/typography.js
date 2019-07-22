import { fontFamily } from './fonts';

/**
 * Font sizes
 *
 * @type {Object}
 */
const fontSize = {
  xxsmall: 11,
  xsmall: 12,
  small: 14,
  medium: 16,
  large: 18,
  xlarge: 20,
  xxlarge: 24,
  xxxlarge: 28,
  xxxxlarge: 32,
  xxxxxlarge: 36
};

/**
 * Line height sizes
 *
 * @type {Object}
 */
const lineHeight = {
  xsmall: 1.4,
  small: 1.5,
  medium: 1.7
};

/**
 * Typography definitions for DynamicComponent
 *
 * @type {Object}
 */
const typography = {
  // hero or page title or h1
  canon: {
    fontFamily: fontFamily.display,
    fontSize: {
      base: fontSize.xxxxlarge,
      medium: fontSize.xxxxxlarge
    },
    lineHeight: lineHeight.xsmall
  },
  // article title h1
  trafalgar: {
    fontFamily: fontFamily.display,
    fontSize: {
      base: fontSize.xxlarge,
      medium: fontSize.xxxlarge
    },
    fontWeight: 'bold',
    lineHeight: lineHeight.xsmall
  },
  // section title h2
  parangon: {
    fontSize: {
      base: fontSize.xxlarge
    },
    fontWeight: 'bold',
    lineHeight: lineHeight.small
  },
  // heading h3
  doublePica: {
    fontSize: {
      base: fontSize.xlarge
    },
    fontWeight: 'bold',
    lineHeight: lineHeight.small
  },
  // heading h4
  minion: {
    fontSize: {
      base: fontSize.medium
    },
    fontWeight: 'bold',
    lineHeight: lineHeight.small
  },
  // quote
  greatPrimer: {
    fontFamily: fontFamily.display,
    fontSize: {
      base: fontSize.large
    },
    fontWeight: 'bold',
    lineHeight: lineHeight.small
  },
  // introduction
  twoLinePica: {
    fontSize: {
      base: fontSize.large
    },
    lineHeight: lineHeight.medium
  },
  // body
  bodyCopy: {
    fontSize: {
      base: fontSize.medium
    },
    lineHeight: lineHeight.medium
  },
  // caption
  longPrimer: {
    fontSize: {
      base: fontSize.xsmall
    },
    lineHeight: lineHeight.small
  },
  // caption bold
  bourgeois: {
    fontSize: {
      base: fontSize.xsmall
    },
    fontWeight: 'bold',
    lineHeight: lineHeight.small
  },
  // legal
  diamond: {
    fontSize: {
      base: fontSize.xxsmall
    },
    lineHeight: lineHeight.small
  },
  // meta data
  brevier: {
    fontSize: {
      base: fontSize.small
    },
    lineHeight: lineHeight.small
  },
  // breadcrumbs
  pica: {
    fontSize: {
      base: fontSize.small
    },
    lineHeight: lineHeight.small
  }
};

export { fontSize, lineHeight, typography };
