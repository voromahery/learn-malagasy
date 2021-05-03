import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import LearningScreen from '../Screens/LearningScreen/LearningScreen';

const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
        <Stack.Screen name="Learning" component={LearningScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
