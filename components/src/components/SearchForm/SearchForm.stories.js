import React from 'react';
import { storiesOf } from '@storybook/react';
import SearchForm from './SearchForm';
import SearchFormReadme from './SearchForm.md';

storiesOf('Components|SearchForm', module).add(
  'SearchForm (default)',
  () => <SearchForm />,
  { readme: { sidebar: SearchFormReadme } }
);
