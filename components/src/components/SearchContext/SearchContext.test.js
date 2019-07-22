import React from 'react';
import { mount } from 'enzyme';

import '../../test/mocks/match-media.mock';
import SearchContext, { SearchContextProvider } from './SearchContext';

describe('<SearchContextProvider />', () => {
  let output;

  beforeEach(() => {
    output = mount(
      <SearchContextProvider>
        <SearchContext.Consumer>
          {({ isSearchActive }) => (
            <>
              <div className="test-isSearchActive">
                {isSearchActive.toString()}
              </div>
            </>
          )}
        </SearchContext.Consumer>
      </SearchContextProvider>
    );
  });

  afterEach(() => {
    output.unmount();
  });

  it('renders the component', () => {
    expect(output).toMatchSnapshot();
  });

  it('has `isSearchActive` property set to false', () => {
    expect(output.find('.test-isSearchActive').text()).toBe('false');
  });
});
