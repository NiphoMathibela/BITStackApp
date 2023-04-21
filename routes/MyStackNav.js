import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import BottomNav from './BottomNav';
import Recipe from '../screens/Recipe';

const Stack = createStackNavigator();

export default function MyStackNav() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="BottomNav" component={BottomNav} />
            <Stack.Screen name="recipe" component={Recipe}/>
        </Stack.Navigator>
    )
}
