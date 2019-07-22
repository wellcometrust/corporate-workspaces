// @flow
import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import { rem, rgba } from 'polished';

import NavContext from '../NavContext/NavContext';
import SearchContext from '../SearchContext/SearchContext';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import { BackButton, CloseButton } from '../Button/ButtonStyles';
import { visuallyHidden } from '../../styles/accessibility';

const SearchPane = styled.div.attrs(props => ({
  className: classNames({
    'search-active': props.isSearchActive
  })
}))`
  background: ${props => props.theme.colours.white};
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  transform: translate3d(100%, 0, 0);
  transition: transform ease 0.4s;
  z-index: 4;

  ${props => props.theme.mediaQuery.max('medium')`
    bottom: 0;

    &.search-active {
      transform: translate3d(0, 0, 0);
    }
  `}

  ${props => props.theme.mediaQuery.min('medium')`
    position: absolute;
    transform: translate3d(0, -100%, 0);
  `}
`;

const SearchPaneContent = styled.div`
  align-items: center;
  background: ${props => props.theme.colours.white};
  display: flex;
  height: 100%;
  justify-content: stretch;
  padding: ${props => rem(props.theme.spacingUnit * 2)};
  position: relative;
  transition: transform ease 0.4s;
  width: 100%;
  z-index: 1;

  ${props => props.theme.mediaQuery.min('small')`
    padding-left: ${rem(props.theme.spacingUnit * 4)};
    padding-right: ${rem(props.theme.spacingUnit * 4)};
  `}

  ${props => props.theme.mediaQuery.min('medium')`
    min-height: ${rem(props.theme.searchHeightWide)};
    padding: 0;
  `}

  .search-active & {
    box-shadow: ${props => rem(-props.theme.spacingUnit / 2)} 0
      ${props => rem(props.theme.spacingUnit * 1.5)}
      ${props =>
        props.theme.colours.black && rgba(props.theme.colours.black, 0.1)};
  }
`;

const SearchPaneContainer = styled.div`
  max-width: ${props => rem(props.theme.maxWidth)};
  width: 100%;

  /* TODO: Consolidate global "container" styles in a more appropriate place */
  ${props => props.theme.mediaQuery.min('medium')`
    align-items:center;
    display: flex;
    margin: 0 5%;
  `}

  /* global maxWidth + 5% margin on left and right */
  @media (min-width: ${props => rem(props.theme.maxWidth * 1.1)}) {
    margin: 0 auto;
  }
`;

const SearchControls = styled.div`
  ${props => props.theme.mediaQuery.max('medium')`
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
  `}

  ${props => props.theme.mediaQuery.min('medium')`
    margin-left: -${rem(props.theme.spacingUnit * 4)};
  `}
`;

const SearchForm = styled.form`
  align-items: center;
  display: flex;
  justify-content: stretch;
  width: 100%;
`;

const SearchLabel = styled.label`
  flex: auto;
`;

const SearchInput = styled.input`
  background: ${props => props.theme.colours.lightGrey};
  padding: ${props => rem(props.theme.spacingUnit * 1.5)}
    ${props => rem(props.theme.spacingUnit * 2)};

  ${props => props.theme.mediaQuery.min('medium')`
    background: ${props.theme.colours.white};
  `};
`;

const SearchSubmitButton = styled(Button)`
  ${props => props.theme.mediaQuery.max('medium')`
    padding: 0;
  
    .btn__text {
      ${visuallyHidden}
    }
    
    .btn__icon {
      margin: 0;
    }
  `}
`;

const SearchBackButton = styled(BackButton)`
  border-top: 1px solid ${props => props.theme.colours.lightGrey};
`;

const SearchPaneOverlay = styled.div`
  ${props => props.theme.mediaQuery.min('medium')`
    background: ${props => props.theme.colours.white &&
      rgba(props.theme.colours.white, 0.9)};
    content: "";
    height: 100vh;
    left: 0;
    opacity: 0;
    position: absolute;
    right: 0;
    top: 0;
    transition: opacity 0.4s ease, visibility 0s ease 0.4s;
    visibility: hidden;
    z-index: 0;
    
    .search-active & {
      opacity: 1;
      transition: opacity 0.4s ease, visibility 0s ease 0s;
      visibility: visible;
    }
  `}
`;

const addBodyClass = className => {
  if (typeof window !== 'undefined' && document.body) {
    document.body.classList.add(className);
  }
};

const removeBodyClass = className => {
  if (typeof window !== 'undefined' && document.body) {
    document.body.classList.remove(className);
  }
};

export default () => {
  const { openNav } = useContext(NavContext);
  const { isSearchActive, openSearch } = useContext(SearchContext);

  useEffect(() => {
    if (isSearchActive) {
      addBodyClass('search-open');
    } else {
      removeBodyClass('search-open');
    }

    // TODO add return value for unmount
    return () => removeBodyClass('search-open');
  });

  const closeAll = () => {
    openNav(false);
    openSearch(false);
  };

  return (
    <SearchPane isSearchActive={isSearchActive}>
      <SearchPaneContent>
        <SearchPaneContainer>
          <SearchControls>
            <CloseButton type="button" onClick={closeAll}>
              <Icon name="close" />
              Close <span className="visually-hidden">search</span>
            </CloseButton>
            <SearchBackButton type="button" onClick={() => openSearch(false)}>
              <Icon name="arrowNarrow" title="Back" />
              Back to menu
            </SearchBackButton>
          </SearchControls>

          <SearchForm role="search" action="/search" method="GET">
            <SearchLabel htmlFor="search">
              <span className="visually-hidden">Search</span>
              <SearchInput
                name="search"
                id="search"
                type="search"
                placeholder="Search wellcome.ac.uk"
              />
            </SearchLabel>
            <SearchSubmitButton
              type="submit"
              icon="search"
              iconPlacement="right"
            >
              Search
            </SearchSubmitButton>
          </SearchForm>
        </SearchPaneContainer>
      </SearchPaneContent>
      <SearchPaneOverlay onClick={closeAll} />
    </SearchPane>
  );
};
