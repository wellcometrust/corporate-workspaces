// @flow
import React, { createContext, useState } from 'react';
import type { Node } from 'react';

const defaultState = {
  isSearchActive: false,
  openSearch: () => {}
};

type ContextProps = {|
  isSearchActive: boolean,
  openSearch: (bool: boolean) => void
|};

type ProviderProps = {|
  children: Node
|};

const SearchContext = createContext<ContextProps>(defaultState);

export const SearchContextProvider = ({ children }: ProviderProps) => {
  const [state, setState] = useState({
    isSearchActive: false,
    openSearch: bool =>
      setState(prevState => ({ ...prevState, isSearchActive: bool }))
  });

  return (
    <SearchContext.Provider value={state}>{children}</SearchContext.Provider>
  );
};

export default SearchContext;
