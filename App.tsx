import { StyleSheet, LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { StackRoute } from './src/routes/Stack.routes';
import React from 'react';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

export default function App() {
  return (
    <NavigationContainer>
      <StackRoute />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
