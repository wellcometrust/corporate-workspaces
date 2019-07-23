import React from 'react';
import { storiesOf } from '@storybook/react';

import Icon from './Icon';
import IconReadme from './Icon.md';

storiesOf('Components|Icon', module).add(
  'Icons',
  () => (
    <div>
      <p>Chevron</p>
      <Icon name="arrowNarrow" />
      <p>Close</p>
      <Icon name="circleCross" />
      <p>Facebook button for share or follow</p>
      <Icon name="facebook" />
      <p>Twitter button for share or follow</p>
      <Icon name="twitter" />
      <p>LinkedIn button for share or follow</p>
      <Icon name="linkedin" />
      <p>YouTube button for share or follow</p>
      <Icon name="youTube" />
      <p>Email</p>
      <Icon name="emailAddress" />
      <p>Message</p>
      <Icon name="message" />
      <p>Phone</p>
      <Icon name="phone" />
      <p>Fax button for share or follow</p>
      <Icon name="fax" />
      <p>Twitter button for share or follow</p>
      <Icon name="twitter" />
    </div>
  ),
  { readme: { sidebar: IconReadme } }
);
