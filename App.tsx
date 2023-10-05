import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { theme } from './src/PaperTheme';
import AppNavigation from './navigation/AppNavigation';

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <AppNavigation />
    </PaperProvider>
  );
}

