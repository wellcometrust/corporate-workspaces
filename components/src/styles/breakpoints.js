/**
 * Breakpoints for media queries
 *
 * @type {Object}
 */

const breakpoints = {
  small: 768,
  medium: 1024,
  large: 1200,
  xlarge: 1344,
  xxlarge: 1500
};

/**
 * Generate Media Query from object
 *
 * @param {string} attribute
 * @param {Object} data
 * @param {string} unit the unit which we are measuring
 * @returns {string} media query
 */

const generateMediaQueries = (attribute, data, unit = '') =>
  Object.keys(data).reduce((acc, breakpoint) => {
    let style = acc;
    if (breakpoint === 'base') {
      style += `${attribute}: ${data[breakpoint] + unit};`;
    } else {
      style += `@media (min-width: ${breakpoints[breakpoint]}) {
        ${attribute}: ${data[breakpoint] + unit};
      }`;
    }
    return style;
  }, '');

export { generateMediaQueries, breakpoints };
