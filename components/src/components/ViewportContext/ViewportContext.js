// @flow
import React, { createContext, useEffect, useState } from 'react';
import type { Node } from 'react';

import mediaQueries from '../../utils/media-queries';

const defaultState = {
  isMobile: true,
  setIsMobile: () => {}
};

type ContextProps = {|
  isMobile: boolean,
  setIsMobile: (bool: boolean) => void
|};

type ProviderProps = {|
  children: Node
|};

const ViewportContext = createContext<ContextProps>(defaultState);

export const ViewportContextProvider = ({ children }: ProviderProps) => {
  const [state, setState] = useState({
    isMobile: true,
    setIsMobile: bool =>
      setState(prevState => ({ ...prevState, isMobile: bool }))
  });

  /**
   * useEffect hook with empty array argument is equivalent of
   * componentDidMount lifecycle method
   * used here to provide client side functionality
   * for setting up media query list (MQL) listener
   */
  useEffect(() => {
    const mql = window.matchMedia(mediaQueries.mediumMax);
    const handler = event => {
      state.setIsMobile(event.matches);
    };

    // Set initial state
    state.setIsMobile(mql.matches);

    // Set up listener
    mql.addListener(handler);

    // Remove listener on cleanup
    return () => mql.removeListener(handler);

    // Empty array as final argument ensures effect is only run on mount and unmount
  }, []);

  return (
    <ViewportContext.Provider value={state}>
      {children}
    </ViewportContext.Provider>
  );
};

export default ViewportContext;
