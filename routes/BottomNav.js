import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home'
import Favourite from '../screens/Favourite'
import Recipes from '../screens/Recipes'
import Profile from '../screens/Profile'
import Ionicons from 'react-native-vector-icons/Ionicons'


const Tab = createBottomTabNavigator();

function BottomNav() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarActiveTintColor: '#37BD6B',
                tabBarInactiveTintColor: '#000',
                tabBarLabelStyle: {
                    fontSize: 12,
                },
                tabBarStyle: {
                    backgroundColor: '#fff',
                    borderTopWidth: 0,
                    elevation: 0,
                    shadowOpacity: 0,
                    height: 78,
                    borderRadius: 8,
                    marginHorizontal: 20,
                    marginBottom: 19,
                    marginTop: 10,
                    padding:10,
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    bottom: 0,
                    shadowColor: '#000',
                    shadowOffset: {
                        width: 0,
                        height: 8,
                    },
                    shadowOpacity: 0.53,
                    shadowRadius: 13.97,
                    elevation: 21,

                },

            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="ios-home" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Favourite"
                component={Favourite}
                options={{
                    tabBarLabel: 'Favourite',
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="ios-heart" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Recipes"
                component={Recipes}
                options={{
                    tabBarLabel: 'Recipes',
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="ios-restaurant" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="ios-person" color={color} size={26} />
                    ),
                }}
            />
        </Tab.Navigator>

    )
}

export default BottomNav