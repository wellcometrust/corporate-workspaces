import React from 'react';
import { storiesOf } from '@storybook/react';
import Logo from './Logo';
import LogoReadme from './Logo.md';
import logoData from './constants';

const stories = storiesOf('Components|Logo', module);

stories
  .addParameters({
    readme: {
      sidebar: LogoReadme
    }
  })
  .add('small', () => {
    const logoSmall = logoData.small;
    return <Logo data={logoSmall} fill="black" />;
  })
  .add('medium', () => {
    const logoMedium = logoData.medium;
    return <Logo data={logoMedium} fill="black" />;
  })
  .add('large', () => {
    const logoLarge = logoData.large;
    return <Logo data={logoLarge} fill="black" />;
  });
