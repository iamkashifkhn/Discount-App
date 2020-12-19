import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import  History from './components/History';
import DiscountScreen from './components/DiscountScreen';
 
import React from 'react'
import {View,Text} from 'react-native'


const Stack = createStackNavigator();


const App = () => {
  return(
 <NavigationContainer>
      <Stack.Navigator initialRouteName="Discount">
 
        <Stack.Screen name="Discount" component={DiscountScreen}/>
        <Stack.Screen name="History" component={History}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}


export default App;