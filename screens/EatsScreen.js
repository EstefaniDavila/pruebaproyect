import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler'; 


import Home from '../src/screens/Home';
import Add from '../src/screens/Add';
import Ayuda from '../src/screens/Ayuda';
import Nosotros from '../src/screens/Nosotros';
import Guia from '../src/screens/Guia';

import TabConfig from "../src/components/TapConfig";

const EatsScreen = () => {
    const Stack = createStackNavigator();

  return (
      <Stack.Navigator >
        <Stack.Screen name="Home" component={TabConfig} options={{headerShown: false}}/>
        <Stack.Screen name="Add" component={Add} options={{title: 'Cancelar'}}/>
        <Stack.Screen name="Ayuda" component={Ayuda} options={{title: 'Regresar'}}/>
        <Stack.Screen name="Nosotros" component={Nosotros} options={{title: 'Regresar'}}/>
        <Stack.Screen name="Guia" component={Guia} options={{title: 'Regresar'}}/>
      </Stack.Navigator>
  )
}

export default EatsScreen

const styles = StyleSheet.create({
})