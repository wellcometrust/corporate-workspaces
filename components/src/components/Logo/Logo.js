// @flow
import React from 'react';
import styled from 'styled-components';

type Props = {|
  title?: string,
  fill?: string,
  className?: string,
  data: {
    viewBox: string,
    fillRule: string,
    path: string
  }
|};

const defaultProps = {
  title: '',
  fill: '#fff',
  className: ''
};

const StyledLogo = styled.svg`
  height: 100%;
`;

const Logo = ({
  title,
  fill,
  className,
  data: { viewBox, fillRule, path },
  ...otherProps
}: Props) => (
  <StyledLogo
    viewBox={viewBox}
    className={className}
    role="img"
    aria-labelledby="logo-title"
    preserveAspectRatio="xMinYMid"
    {...otherProps}
  >
    {title ? <title id="logo-title">{title}</title> : ''}
    <path d={path} fill={fill} fillRule={fillRule} />
  </StyledLogo>
);

Logo.defaultProps = defaultProps;

export default Logo;
