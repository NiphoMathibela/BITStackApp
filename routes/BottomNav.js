import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Home from '../screens/Home'
import Favourite from '../screens/Favourite'
import Recipes from '../screens/Recipes'
import Profile from '../screens/Profile'
import ExpDate from '../screens/ExpDate'
import Ionicons from 'react-native-vector-icons/Ionicons'



Tab = createMaterialBottomTabNavigator();

function BottomNav() {
    return (
        <Tab.Navigator
            headerShown={false}
            Label={false}
            activeColor="#37BD6B"
            // inactiveColor="#37BD6B"

            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Home') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'Favourite') {
                        iconName = focused ? 'heart' : 'heart-outline';
                    } else if (route.name === 'Recipes') {
                        iconName = focused ? 'book' : 'book-outline';
                    } else if (route.name === 'Profile') {
                        iconName = focused ? 'person' : 'person-outline';
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },

            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',

            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarColor: '#37BD6B',
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="home" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Favourite"
                component={Favourite}
                options={{
                    tabBarLabel: 'Favourite',
                    tabBarColor: '#37BD6B',
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="heart" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Recipes"
                component={Recipes}
                options={{
                    tabBarLabel: 'Recipes',
                    tabBarColor: '#37BD6B',
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="book" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarColor: '#37BD6B',
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="person" color={color} size={26} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

export default BottomNav