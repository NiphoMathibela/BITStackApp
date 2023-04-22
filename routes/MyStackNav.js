import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import BottomNav from './BottomNav';

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
        </Stack.Navigator>
    )
}
