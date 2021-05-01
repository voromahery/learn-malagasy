// import React from 'react';
// import {Text} from 'react-native';
// import {createStackNavigator} from '@react-navigation/stack';
// import {NavigationContainer} from '@react-navigation/native';
// import HomeScreen from '../Screens/HomeScreen/HomeScreen';
// import LearningScreen from '../Screens/HomeScreen/LearningScreen';

// const Stack = createStackNavigator();

// export const ScreenStack = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="HomeScreen" component={HomeScreen} />
//         <Stack.Screen
//           name="LearningScreen"
//           component={LearningScreen}
//           options={({route}) => {
//             return {
//               headerTitle: () => {
//                 return <Text>{route.params.item.id}</Text>;
//               },
//             };
//           }}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default ScreenStack;
