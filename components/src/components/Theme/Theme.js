// @flow
import * as React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from '../../styles/theme';

type Props = {|
  children: React.Node
|};

const Theme = ({ children }: Props) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
