// @flow
import wellcomeBoldWebfont from '../static/fonts/wellcome-bold-webfont.woff';
import wellcomeBoldWebfont2 from '../static/fonts/wellcome-bold-webfont.woff2';

type Fonts = {|
  base: '"Helvetica Neue", Helvetica, Arial, sans-serif',
  display: 'Wellcome-Bold'
|};

/**
 * Font families
 *
 * @type {Object}
 */

const fontFamily: Fonts = {
  base: '"Helvetica Neue", Helvetica, Arial, sans-serif',
  display: 'Wellcome-Bold'
};

export { wellcomeBoldWebfont, wellcomeBoldWebfont2, fontFamily };
