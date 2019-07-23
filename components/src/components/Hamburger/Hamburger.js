// @flow
import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

import theme from '../../styles/theme';

const { colours, spacingUnit, mediaQuery, fontSize } = theme;

type Props = {|
  label?: string,
  onClick: Function
|};

const defaultProps = {
  label: 'Menu'
};

const Button = styled.button`
  align-items: center;
  cursor: pointer;
  color: ${props => props.theme.colours.white};
  display: flex;
  font-size: ${rem(fontSize.small)};
  letter-spacing: ${rem(0.4)};
  margin-left: auto;

  ${mediaQuery.min('medium')`
    display: none;
  `}
`;

const LinesContainer = styled.div`
  width: ${rem(spacingUnit * 2)};
  height: ${rem(spacingUnit * 2)};
  display: inline-block;
  position: relative;
  margin: 0 ${rem(spacingUnit * 3)} 0 ${rem(spacingUnit * 1.5)};

  ${mediaQuery.min('small')`
    margin-right: 0;
  `}
`;

const linesCommon = `
  width: ${rem(spacingUnit * 2)};
  height: ${rem(spacingUnit / 4)};
  position: absolute;
  background-color: ${props => props.theme.colours.white};
`;

const Lines = styled.span`
  ${linesCommon};
  display: block;
  top: 50%;
  transform: translateY(-50%);

  &:before,
  &:after {
    ${linesCommon};
    content: '';
    display: block;
  }

  &:before {
    top: ${rem(-spacingUnit * 0.75)};
  }

  &:after {
    bottom: ${rem(-spacingUnit * 0.75)};
  }
`;

const Hamburger = ({ label, ...props }: Props) => (
  <Button type="button" aria-label={label} {...props}>
    <span>{label}</span>

    <LinesContainer>
      <Lines />
    </LinesContainer>
  </Button>
);

Hamburger.defaultProps = defaultProps;

export default Hamburger;
