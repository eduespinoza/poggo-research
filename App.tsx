import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainPage from './MainPage'; // Your main page component
import NewPage from './NewPage'; // The new page you want to navigate to
import GenQRPage from './GenQr';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MainPage" component={MainPage} />
        <Stack.Screen name="NewPage" component={NewPage} />
        <Stack.Screen name="GenQRPage" component={GenQRPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
