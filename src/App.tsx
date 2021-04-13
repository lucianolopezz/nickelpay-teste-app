import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';

import Routes from './routes';

import theme from './theme';

const src: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="dark-content" />
      <Routes />
    </ThemeProvider>
  );
};

export default src;
