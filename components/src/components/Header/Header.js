import React, { useContext } from 'react';
import styled from 'styled-components';
import { rgba, rem } from 'polished';
import classNames from 'classnames';

import NavContext from '../NavContext/NavContext';
import SearchContext from '../SearchContext/SearchContext';
import NavLinks from '../NavLinks/NavLinks';
import Hamburger from '../Hamburger/Hamburger';
import SearchForm from '../SearchForm/SearchForm';
import Link from '../Link/Link';
import Logo from '../Logo/Logo';
import Icon from '../Icon/Icon';

import navLinks from '../../data/default-site-links.json';
import {useSticky} from "../Header/use-sticky";
import theme from '../../styles/theme';
import logoData from '../Logo/constants';
import { CloseButton, SearchButton } from '../Button/ButtonStyles';

const { colours, spacingUnit, maxWidth, mediaQuery } = theme;

const MobileNav = styled.div`
  ${mediaQuery.max('medium')`
    background: ${props => props.theme.colours.white};
    bottom: 0;
    overflow-x: hidden;
    overflow-y: auto;
    position: fixed;
    right: 0;
    top: 0;
    transform: translate3d(100%, 0, 0);
    transition: transform 0.4s;
    width: 80vw;
    z-index: 4;

    &.is-active {
      box-shadow: 
        ${rem(-spacingUnit / 2)} 0 ${rem(spacingUnit * 1.5)} 
        rgba(${props => props.theme.colours.black}), 0.1)};
      transform: translate3d(0, 0, 0);
    }
  `}

  ${mediaQuery.min('medium')`
    align-items: center;
    display: flex;
    flex: auto;
    flex-flow: row-reverse nowrap;
    justify-content: space-between;
  `}
`;

const MobileNavHeader = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: ${rem(spacingUnit * 8)};
`;

const NavCloseButton = styled(CloseButton)`
  ${mediaQuery.min('medium')`
    display: none;
  `}
`;
const Header = styled.header.attrs(props => ({
  className: classNames({
    'search-active': props.isSearchActive
  })
}))`
  background: ${props => props.theme.colours.darkBlue};
  height: ${rem(spacingUnit * 5.5)};
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 2;

  ${mediaQuery.min('small')`
    height: ${rem(spacingUnit * 10)};
    transition: height 0.3s ease-in-out, transform ease 0.4s;

    &.sticky {
      height: ${rem(spacingUnit * 7.5)};
    }
  `}
`;

const HeaderContainer = styled.div`
  display: flex;
  height: 100%;
  max-width: ${rem(maxWidth)};

  ${mediaQuery.min('small')`
    margin: 0 5%;
  `}
  
  ${mediaQuery.min('medium')`
    align-items: center;
  `}

  /* global maxWidth + 5% margin on left and right */
  @media (min-width: ${rem(maxWidth * 1.1)}) {
    margin: 0 auto;
  }
`;

const MobileNavOverlay = styled.div`
  ${mediaQuery.max('medium')`
    background: rgba(${props => props.theme.colours.white}, 0.6)};
    bottom: 0;
    left: 0;
    opacity: 0;
    position: fixed;
    right: 0;
    top: 0;
    transition: opacity 0.4s ease, visibility 0s ease 0.4s;
    visibility: hidden;
    z-index: 3;

    &.is-active {
      opacity: 1;
      transition: opacity 0.4s ease, visibility 0s ease 0s;
      visibility: visible;
    }
  `}
`;

const LogoContainer = styled.div`
  height: 100%;
  max-width: ${rem(spacingUnit * 18.25)};
  position: relative;
  width: 100%;
  z-index: 2;

  svg {
    background: ${props => props.theme.colours.darkBlue};
    position: absolute;
    transition: opacity 0.3s ease-in-out;

    &.transparent {
      opacity: 0;
    }
  }

  .brand-link {
    display: block;
    height: 100%;
  }

  ${mediaQuery.max('small')`
    .logo--large {
      display: none;
    }
  `}

  ${mediaQuery.min('small')`
    max-width: ${rem(spacingUnit * 10)};
    
    .logo--small {
      display: none;
    }
  `}

  ${mediaQuery.min('medium')`
    margin-right: ${rem(spacingUnit * 3.5)};
  `}
`;

export default ({ children }) => {

  const [ref, sticky] = useSticky();
  const { isNavActive, openNav } = useContext(NavContext);
  const { isSearchActive, openSearch } = useContext(SearchContext);

  // TODO: find a better way to handle logo switch
  // isMobile returns initial state first which results in 'double rendering'
  const logoSmallClass = classNames({
    'logo--small': true,
    transparent: sticky
  });

  const logoLargeClass = classNames({
    'logo--large': true,
    transparent: sticky
  });
  return (
  <Header ref={ref} className={sticky ? 'sticky' : ''}>
    <HeaderContainer>
      <>
        <LogoContainer>
          <Link prefetch href="/">
            <a className="brand-link">
              <Logo data={logoData.medium} title="Wellcome" />
              <Logo data={logoData.small} className={logoSmallClass} />
              <Logo data={logoData.large} className={logoLargeClass} />
            </a>
          </Link>
        </LogoContainer>
        <Hamburger onClick={() => openNav(true)} />
        <MobileNav className={isNavActive ? 'is-active' : ''}>
          <MobileNavHeader>
            <NavCloseButton type="button" onClick={() => openNav(false)}>
              <Icon name="close" />
              Close <span className="visually-hidden">menu</span>
            </NavCloseButton>
            <SearchButton
              type="button"
              onClick={() => openSearch(true)}
              className={isSearchActive ? 'is-disabled' : ''}
            >
              Search
              <Icon name="search" />
            </SearchButton>
          </MobileNavHeader>
          <nav>
            <NavLinks data={navLinks} />
          </nav>
        </MobileNav>
        <SearchForm />
        <MobileNavOverlay
          className={isNavActive ? 'is-active' : ''}
          onClick={() => openNav(false)}
        />
      </>
    </HeaderContainer>
  </Header>
  )
};
