import React from 'react'
import { View, Text } from 'react-native'
import DisplayBlock from '../components/DisplayBlock'


export default function Recipes() {
    return (
        <View className= "mt-10">
            <Text>Recipes</Text>
            <DisplayBlock heading= {"Test"} description= {"Big test"}/>
        </View>
    )
}
