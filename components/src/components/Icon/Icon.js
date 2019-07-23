// @flow
import React from 'react';
import styled from 'styled-components';

import * as icons from './index';

type Props = {
  className?: string,
  height?: string,
  name: string,
  width?: string
};

const defaultProps = {
  className: 'icon',
  height: '1rem',
  width: '1rem'
};

const IconContainer = styled.div`
  height: ${props => props.height || '1rem'};
  width: ${props => props.width || '1rem'};

  svg {
    display: block;
    height: 100%;
    max-width: 100%;
  }
`;

const Icon = ({ className, name, width, height }: Props) => {
  return (
    <IconContainer
      className={className}
      height={height}
      width={width}
      aria-hidden
    >
      {icons[name]({ role: 'img' })}
    </IconContainer>
  );
};

Icon.defaultProps = defaultProps;

export default Icon;
