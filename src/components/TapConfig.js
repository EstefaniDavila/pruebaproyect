import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Home from '../screens/Home';
import Config from '../screens/Config';



const Tab = createBottomTabNavigator();
export default function TabConfig() {
    return (
            <Tab.Navigator>
              <Tab.Screen name="Home" component={HomeScreen} options={{
                headerShown: true,
                title: 'Inicio',
                tabBarIcon: ({}) => (
                    <MaterialCommunityIcons name="home" size={40} color="#00B8FF" />
                ),
                tabBarInactiveTintColor: "#000",
                tabBarInactiveBackgroundColor: "#EAEAEA"
                }}/>
              <Tab.Screen name="Config" component={ConfigScreen} options={{
                headerShown: true,
                title: 'Configuracion',
                tabBarIcon: ({}) => (
                    <Ionicons name="settings-sharp" size={35} color="#00B8FF" />
                ),
                tabBarInactiveTintColor: "#000",
                tabBarInactiveBackgroundColor: "#EAEAEA"
                }}/>
            </Tab.Navigator>
    )
}

function HomeScreen() {
    return (
      <Home />
    );
  }

function ConfigScreen(){
    return (
        <Config />
    );
}