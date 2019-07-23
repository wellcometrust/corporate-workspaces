import React from 'react';
import { shallow } from 'enzyme';

import Theme from './Theme';

describe('<Theme />', () => {
  const output = shallow(<Theme />);

  it('renders the component', () => {
    expect(output).toMatchSnapshot();
  });
});
