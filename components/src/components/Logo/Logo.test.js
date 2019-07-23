import React from 'react';
import { shallow } from 'enzyme';

import Logo from './Logo';
import logoData from './constants';

describe('<Logo />', () => {
  it('renders a small logo', () => {
    const output = shallow(<Logo data={logoData.small} />);

    expect(output).toMatchSnapshot();
  });

  it('renders a medium logo', () => {
    const output = shallow(<Logo data={logoData.medium} />);

    expect(output).toMatchSnapshot();
  });

  it('renders a large logo', () => {
    const output = shallow(<Logo data={logoData.large} />);

    expect(output).toMatchSnapshot();
  });

  it('renders as a black logo', () => {
    const output = shallow(<Logo data={logoData.large} fill="black" />);

    expect(output).toMatchSnapshot();
  });
});
