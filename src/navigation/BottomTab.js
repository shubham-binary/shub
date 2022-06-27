import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from '../screen/LoginScreen';
import RegisterScreen from '../screen/RegisterScreen';


const Tab = createBottomTabNavigator();

function BottomTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Registeration_Form" component={RegisterScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Login_Form" component={LoginScreen} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}

export default BottomTab;