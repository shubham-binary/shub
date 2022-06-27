import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import DetailScreen from "./detailScreen";
import HomeScreen from "./HomeScreen";
import OptionScreen from "./OptionScreen";

const Drawer = createDrawerNavigator();
const SideDrawer = () => {
    return (
        <Drawer.Navigator
            screenOptions={{
                drawerActiveBackgroundColor: '#5352ed',
                drawerActiveTintColor: '#fff',
                drawerInactiveBackgroundColor: '#70a1ff',
                drawerInactiveTintColor: '#fff',
            }}
        >
            <Drawer.Screen
                name="Dashboard"
                component={HomeScreen}
                options={{
                    drawerIcon: () => (
                        <MaterialCommunity
                            name="view-dashboard"
                            size={20}
                            color="#fff"
                            style={{ fontWeight: 'bold' }}
                        />
                    ),
                }}
            />
            <Drawer.Screen
                name="Options"
                component={OptionScreen}
                options={{
                    drawerIcon: () => (
                        <MaterialCommunity
                            name="cog-outline"
                            size={20}
                            color="#fff"
                            style={{ fontWeight: 'bold' }}
                        />
                    ),
                }}
            />
            <Drawer.Screen
                name="Details"
                component={DetailScreen}
                options={{
                    drawerIcon: () => (
                        <MaterialCommunity
                            name="cog-outline"
                            size={20}
                            color="#fff"
                            style={{ fontWeight: 'bold' }}
                        />
                    ),
                }}
            />
        </Drawer.Navigator>
    );
}

export default SideDrawer;