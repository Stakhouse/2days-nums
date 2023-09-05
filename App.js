import React from 'react';
import { Provider } from 'react-native-paper';
import AppNavigation from './navigation/AppNavigation.js';

export default function App() {
  return (
    <Provider>
      <AppNavigation />
    </Provider>
  );
}
