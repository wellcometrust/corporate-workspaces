// @flow
import React, { useContext, useState } from 'react';
import type { Node } from 'react';
import styled from 'styled-components';
import { rem, rgba } from 'polished';
import classNames from 'classnames';

import ViewportContext from '../ViewportContext/ViewportContext';
import Link from './ActiveLink';
import Icon from '../Icon/Icon';
import theme from '../../styles/theme';
import { BackButton } from '../Button/ButtonStyles';

const { colours, spacingUnit, maxWidth, mediaQuery, fontSize } = theme;

type Props = {
  className?: string,
  text: string,
  url: string,
  children?: Node
};

const defaultProps = {
  className: '',
  children: null
};

const NavItem = styled.li`
  ${mediaQuery.max('medium')`
    border-bottom: 1px solid ${props => props.theme.colours.lightGrey};
  `}
`;

const NavLink = styled.a`
  display: block;
  padding: ${rem(spacingUnit * 2.25)} ${rem(spacingUnit * 1.5)}
    ${rem(spacingUnit * 2.25)} ${rem(spacingUnit * 2)};
  text-decoration: none;

  &:hover {
    color: ${props => props.theme.colours.darkBlue};
  }

  span {
    display: inline-block;
    position: relative;
  }

  span:before {
    background-color: ${props => props.theme.colours.darkBlue};
    bottom: 0;
    content: '';
    height: ${rem(spacingUnit / 4)};
    left: 0;
    position: absolute;
    transition: width 0.3s ease-in-out;
    width: 0;
  }

  &.active span:before,
  &:hover span:before {
    width: 100%;
  }

  .has-children & {
    align-items: center;
    display: flex;
    justify-content: space-between;
  }

  ${mediaQuery.min('small')`
    padding-left: ${rem(spacingUnit * 4)};
    padding-right: ${rem(spacingUnit * 4)};
  `}

  ${mediaQuery.min('medium')`
    color: ${props => props.theme.colours.white};
    padding: ${rem(2 * spacingUnit)}

    &:hover {
      color: ${props => props.theme.colours.white};
    }

    span:before {
      background-color: ${props => props.theme.colours.white};
    }

    .icon {
      display: none;
    }

    &.active + .nav-secondary {
      display: block;
    }
  `}
`;

const NavPane = styled.div`
  background: ${props => props.theme.colours.white};
  border-top: 1px solid ${props => props.theme.colours.lightGrey};
  left: 0;
  position: absolute;
  z-index: 1;

  ${mediaQuery.max('medium')`
    bottom: 0;
    right: 0;
    top: ${rem(spacingUnit * 8)};
    transform: translate3d(100%, 0, 0);
    transition: transform 0.4s ease;
    z-index: 3;

    .is-active {
      top: 0;
    }

    &.is-active {
      transform: translate3d(0, 0, 0);
    }
  `}

  ${mediaQuery.min('medium')`
    box-shadow: 
      0 ${rem(spacingUnit / 2)} ${rem(spacingUnit * 1.5)} 
      0 ${props => props.theme.colours.black && rgba(props.theme.colours.black, 0.1)};
    bottom: ${rem(-spacingUnit * 4)};
    display: none;
    padding: 0 5%;
    width: 100%;

    a {
      color: ${props => props.theme.colours.darkBlue};
      font-size: ${rem(fontSize.small)};
      min-height: ${rem(spacingUnit * 4)};
      padding: 0 ${rem(spacingUnit * 2)};
    }

    a:hover {
      color: ${props => props.theme.colours.darkBlue};
    }

    span:before {
      background-color: ${props => props.theme.colours.darkBlue};
      bottom: ${rem(-spacingUnit / 2)};
    }

    ul {
      margin: 0 auto;
      max-width: ${rem(maxWidth)};
      padding-left: ${rem(spacingUnit * 13.5)};
    }
  `}
`;

const Item = ({ className, text, url, children }: Props) => {
  const [isActive, setIsActive] = useState(false);
  const { isMobile } = useContext(ViewportContext);

  const itemClasses = classNames(className, {
    'has-children': children
  });

  const childClasses = classNames({
    'nav-secondary': true,
    'is-active': isActive
  });

  const handleItemClick = e => {
    if (children && isMobile) {
      e.preventDefault();
      setIsActive(!isActive);
    }
  };

  return (
    <NavItem className={itemClasses}>
      <Link activeClassName="active" prefetch href={url} passHref>
        <NavLink href={url} onClick={handleItemClick}>
          <span>{text}</span>
          {children && <Icon name="arrowNarrow" />}
        </NavLink>
      </Link>
      {children && (
        <NavPane className={childClasses}>
          <BackButton type="button" onClick={handleItemClick}>
            <Icon name="arrowNarrow" />
            Back to menu
          </BackButton>
          {children}
        </NavPane>
      )}
    </NavItem>
  );
};

Item.defaultProps = defaultProps;

export default Item;
