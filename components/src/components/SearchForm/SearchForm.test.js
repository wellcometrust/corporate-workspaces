import React from 'react';
import { shallow } from 'enzyme';
import SearchForm from './SearchForm';

describe('<SearchForm />', () => {
  const output = shallow(<SearchForm />);

  it('renders the component', () => {
    expect(output).toMatchSnapshot();
  });
});
