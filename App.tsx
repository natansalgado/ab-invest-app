import { LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { StackRoute } from './src/routes/Stack.routes';

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
