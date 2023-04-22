import React, {Component} from 'react';
import { Pressable, Text, View } from 'react-native';
import mockData from '../assets/mockData';
import DisplayBlock from '../components/DisplayBlock';
import BottomNav from '../routes/BottomNav';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ExpDateScreen = ({navigation}) => {

    const recipeItems = mockData.map((item) => 
        <DisplayBlock img = {item.img} heading = {item.title} description = {item.exp}/>
    )
    return(
        <View className = "mt-8">
            <View className = "w-full h-8 my-4">
            <Pressable className = "ml-2" onPress={() => navigation.navigate('Home', { name: 'Jane' })}><Ionicons name={"chevron-back-outline"} size={38} color={"#37BD6B"}  /></Pressable>
            </View>
            {recipeItems}
        </View>
    )
}

export default ExpDateScreen

