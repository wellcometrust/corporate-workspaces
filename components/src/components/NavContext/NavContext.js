// @flow
import React, { createContext, useState } from 'react';
import type { Node } from 'react';

const defaultState = {
  isNavActive: false,
  openNav: () => {}
};

type ContextProps = {|
  isNavActive: boolean,
  openNav: (bool: boolean) => void
|};

type ProviderProps = {|
  children: Node
|};

const NavContext = createContext<ContextProps>(defaultState);

export const NavContextProvider = ({ children }: ProviderProps) => {
  const [state, setState] = useState({
    isNavActive: false,
    openNav: bool =>
      setState(prevState => ({ ...prevState, isNavActive: bool }))
  });

  return <NavContext.Provider value={state}>{children}</NavContext.Provider>;
};

export default NavContext;
