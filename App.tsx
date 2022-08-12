import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ThemeProvider } from 'styled-components'
import { Home } from './src/pages/Home';
import theme from './src/global/styles/theme';
import React from 'react';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      {/*<Welcome/>*/}
      <Home />
    </ThemeProvider>
  );
}