import React from 'react';
import { ThemeProvider } from 'styled-components';
import Layout from './src/components/layout';
import { GlobalStyle, theme } from './src/theme/GlobalStyle';

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Layout>{element}</Layout>
  </ThemeProvider>
)