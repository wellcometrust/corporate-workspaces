// @flow
import React from 'react';
import styled from 'styled-components';

import Item from './NavItem';
import theme from '../../styles/theme';

const { colours, mediaQuery } = theme;

type NavLinksType = {
  id: string,
  text: string,
  url: string,
  navLinks?: NavLinksType[]
};

type Props = {
  data: NavLinksType[]
};

const NavList = styled.ul`
  border-top: 1px solid ${props => props.theme.colours.lightGrey};
  list-style: none;
  margin: 0;
  padding: 0;

  ${mediaQuery.min('medium')`
    border-top: none;
    display: flex;
  `}
`;

const Ul = ({ data }) => {
  const children = (childNodes, parentNode) =>
    childNodes && (
      <NavList>
        <Item
          key={parentNode.id}
          text={parentNode.text}
          url={parentNode.url}
          className="first"
        />
        <Ul data={childNodes} />
      </NavList>
    );

  return data.map(node => (
    <Item key={node.id} text={node.text} url={node.url}>
      {children(node.navLinks, node)}
    </Item>
  ));
};

const NavLinks = ({ data }: Props) => {
  return (
    <NavList>
      <Ul data={data} />
    </NavList>
  );
};

export default NavLinks;
