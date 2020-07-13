import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeContainer from '../screen/Home/HomeContainer';
const Stack = createStackNavigator();

function AppStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Home" component={HomeContainer} />
    </Stack.Navigator>
  );
}

export default function App() {
  return <NavigationContainer>{AppStack()}</NavigationContainer>;
}

// export default App();
