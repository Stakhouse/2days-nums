import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { theme } from './PaperTheme.js';
import AppNavigation from './navigation/AppNavigation.js';

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <AppNavigation />
    </PaperProvider>
  );
}

