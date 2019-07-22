// @flow
import React from 'react';
import type { Node } from 'react';
import styled from 'styled-components';
import { lighten, rem } from 'polished';

import theme from '../../styles/theme';
import Icon from '../Icon/Icon';

const { colours, spacingUnit, fontSize, lineHeight } = theme;

type ButtonProps = {|
  className?: string,
  children: Node,
  disabled?: boolean,
  href?: string | null,
  icon?: string,
  iconPlacement?: '' | 'left' | 'right',
  type?: string
|};

const defaultProps = {
  className: '',
  disabled: false,
  href: null,
  icon: '',
  iconPlacement: 'left',
  type: 'button'
};

const StyledButton = styled.button.attrs(props => ({
  as: props.href && 'a'
}))`
  align-items: center;
  background: ${colours.blue};
  border: none;
  border-radius: 2px;
  color: ${props => props.theme.colours.white};
  cursor: pointer;
  display: inline-flex;
  font-size: ${rem(fontSize.small)};
  height: ${rem(spacingUnit * 5.5)};
  justify-content: center;
  letter-spacing: ${rem(0.4)};
  line-height: ${lineHeight.medium};
  min-height: ${rem(spacingUnit * 5.5)};
  min-width: ${rem(spacingUnit * 5.5)};
  padding: 0 ${rem(spacingUnit * 4)};
  text-decoration: none;
  transition: background ease 0.4s;

  &:hover {
    background: ${lighten(0.1, colours.blue)};
    color: ${props => props.theme.colours.white};
  }

  &[disabled] {
    background: ${colours.darkGrey};
    color: ${colours.lightGrey};
    cursor: not-allowed;
  }

  .btn__icon--left {
    margin-left: -${rem(spacingUnit * 2)};
    margin-right: ${rem(spacingUnit * 2)};
  }

  .btn__icon--right {
    margin-left: ${rem(spacingUnit * 2)};
    margin-right: -${rem(spacingUnit * 2)};
  }
`;

const Button = ({
  children,
  className,
  disabled,
  href,
  icon,
  iconPlacement,
  type
}: ButtonProps) => {
  return (
    <StyledButton
      className={className}
      disabled={disabled}
      href={href}
      type={!href ? type : null}
    >
      {icon && (iconPlacement === 'left' || iconPlacement === '') && (
        <Icon name={icon} className="btn__icon btn__icon--left" />
      )}
      <span className="btn__text">{children}</span>
      {icon && iconPlacement === 'right' && (
        <Icon name={icon} className="btn__icon btn__icon--right" />
      )}
    </StyledButton>
  );
};

Button.defaultProps = defaultProps;

export default Button;
