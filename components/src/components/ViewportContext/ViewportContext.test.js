import React from 'react';
import { mount } from 'enzyme';

import '../../test/mocks/match-media.mock';
import ViewportContext, { ViewportContextProvider } from './ViewportContext';

describe('<ViewportContextuProvider />', () => {
  let output;

  beforeEach(() => {
    output = mount(
      <ViewportContextProvider>
        <ViewportContext.Consumer>
          {({ isMobile }) => (
            <div className="test-isMobile">{isMobile.toString()}</div>
          )}
        </ViewportContext.Consumer>
      </ViewportContextProvider>
    );
  });

  afterEach(() => {
    output.unmount();
  });

  it('renders the component', () => {
    expect(output).toMatchSnapshot();
  });

  it('has `isMobile` property set to true', () => {
    expect(output.find('.test-isMobile').text()).toBe('true');
  });
});
