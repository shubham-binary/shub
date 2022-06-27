// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTab from './BottomTab';
import SideDrawer from '../screen/SideDrawer';


const Stack = createNativeStackNavigator();

function NavigationScreen() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen
                    name="bottom"
                    component={BottomTab}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Home"
                    component={SideDrawer}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default NavigationScreen;