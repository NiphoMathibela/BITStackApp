import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import BottomNav from './BottomNav';
import Recipe from '../screens/Recipe';
import ExpDateScreen from '../screens/ExpDate';
import Donate from '../screens/Donate';

const Stack = createStackNavigator();

export default function MyStackNav() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                headerStyle: {
                    backgroundColor: '#f4511e',
                },
            }}
        >
            <Stack.Screen name="BottomNav" component={BottomNav} />
            <Stack.Screen name="ExpDate" component={ExpDateScreen}/>
            <Stack.Screen name="recipe" component={Recipe}/>
            <Stack.Screen name="Donate" component={Donate}/>
        </Stack.Navigator>
    )
}
