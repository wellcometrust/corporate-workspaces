// @flow
import { css } from 'styled-components';

import { breakpoints } from './breakpoints';

type Rule = 'min' | 'max' | 'range';

/**
 * Template for width rules
 *
 * @param   {string} rule - width property (min, max or range)
 * @returns {string} assembled width property such as min-width or max-width
 */
const mediaWidthRule = (rule: Rule) =>
  `${{ min: 'min', max: 'max', range: '' }[rule] || 'min'}-width`;

/**
 * Template for media rules
 *
 * @param   {string} rule - width property such as min-width
 * @param   {number} width - breakpoint size (768, 1024, etc...)
 * @returns {string} width rule converted to EMs
 */
const ruleTemplate = (rule: string, width: number) => {
  // converts px to em
  const emWidth = parseFloat(width / 16).toFixed(3);
  return `(${rule}: ${emWidth}em)`;
};

/**
 * Calculates and assembles breakpoint width properties
 *
 * @param   {string} widthKey - breakpoint width (small, medium, etc...)
 * @param   {string} rule - width property (min, max or range)
 * @param   {string} limitKey - breakpoint max width required for the range rule
 * @returns {string} width rule such as (min-width: 48em)
 */
const mediaRules = (widthKey: string, rule: Rule, limitKey?: string) => {
  const width = breakpoints[widthKey];
  const limit = breakpoints[limitKey];

  const baseWidthRule = mediaWidthRule(rule);

  const baseRule = ruleTemplate(
    baseWidthRule,
    rule !== 'max' ? width : width - 1
  );

  let limitWidthRule;
  let limitRule;

  if (limit && width) {
    limitWidthRule = mediaWidthRule(limit <= width ? 'min' : 'max');
    limitRule = ruleTemplate(limitWidthRule, limit - 1);

    return [].concat([baseRule], [limitRule]).join(' and ');
  }

  return [baseRule];
};

/**
 * @media mixin for styled components
 *
 * @param   {string} width - breakpoint width (small, medium, etc...)
 * @param   {string} rule - width property (min, max or range)
 * @param   {string} limit - breakpoint max width required for the range rule
 * @returns {string} @media rule with given CSS arguments
 */
const mediaMixin = (width: string, rule: Rule = 'min', limit?: string) => (
  ...args: any
) => css`
  @media ${mediaRules(width, rule, limit)} {
    ${css(...args)}
  }
`;

/**
 * @typedef  {Object} Media
 * @property {string} min - min breakpoint width
 * @property {string} max - max breakpoint width
 * @property {string} range - min and max breakpoint range
 */

/**
 * Returns a media query from a given breakpoint width(s)
 *
 * @returns {Media} media queries
 *
 * @example mediaQuery.min('small') will generate @media (min-width: 48em) {}
 */
const mediaQuery = {
  // @media (min-width: n)
  min: (width: string) => mediaMixin(width, 'min'),
  // @media (max-width: n)
  max: (width: string) => mediaMixin(width, 'max'),
  // @media (min-width: n) and (max-width: n)
  range: (width: string, limit: string) => mediaMixin(width, 'range', limit)
};

export default mediaQuery;
