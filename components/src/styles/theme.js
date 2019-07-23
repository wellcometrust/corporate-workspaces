// @flow
import colours from './colours';
import { fontFamily } from './fonts';
import mediaQuery from './media-queries';
import { breakpoints } from './breakpoints';
import { fontSize, lineHeight } from './typography';

type Theme = {|
  spacingUnit: number,
  colours: Object,
  fontFamily: Object,
  mediaQuery: Object,
  space: Array<number>,
  breakpoints: Array<number>,
  maxWidth: number,
  fontSize: Object,
  lineHeight: Object,
  searchHeightWide: number
|};

/**
 * Default theme
 *
 * @type {Object}
 */

const themeBreakpoints = Object.values(breakpoints).map(val =>
  parseInt(val, 10)
);

const theme: Theme = {
  spacingUnit: 8,
  searchHeightWide: 64,
  colours,
  fontFamily,
  mediaQuery,
  space: [0, 12, 20, 40, 48], // rebass
  breakpoints: themeBreakpoints, // rebass
  maxWidth: breakpoints.xlarge,
  fontSize,
  lineHeight
};

export default theme;
