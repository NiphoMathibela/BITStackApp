import React, { Component, useState, useRef } from 'react';
import { Pressable, Text, View, ScrollView } from 'react-native';
import mockData from '../assets/mockData';
import DisplayBlock from '../components/DisplayBlock';
import Ionicons from 'react-native-vector-icons/Ionicons';
import img from "../assets/a83e84142bf74fd65fc91fb5352c7576.jpg"
const tess = require("tesseract.js")

const ExpDateScreen = ({ navigation }) => {

    const ingredients = ["Grain bread", "Ham", "Egg", "Cumcumber", "Bulk garlic", "Yellow onions"]

    const recipeItems = ingredients.map((item) =>
        <View className="w-96 h-24 bg-lightGreen rounded-md mx-auto p-4 my-2 ">
            <View className="flex-row items-center justify-between">
                <View className="flex-row items-center">
                    <View>
                        <Text className="text-base font-semibold">{item}</Text>
                        <Text>8 days before expiry</Text>
                    </View>
                </View>
                <View className="mr-4">

                    {/* {isFavourite ? <Ionicons name={"close-outline"} size={38} color={"#37BD6B"} /> : <Ionicons name={"heart"} size={29} color={"#37BD6B"} /> } */}
                </View>
            </View>
        </View>
    )

    return (
        <View className="mt-8">
            <ScrollView>
                <View className="w-full h-8 my-4">
                    <Pressable className="ml-2" onPress={() => navigation.navigate('Home', { name: 'Jane' })}><Ionicons name={"chevron-back-outline"} size={38} color={"#37BD6B"} /></Pressable>
                </View>
                {recipeItems}
                <Pressable onPress={() => navigation.navigate("recipes")} className= "bg-green w-48 h-16 mx-auto my-4 rounded-md p-4 items-center">
                <View>
                    <Text className = "text-white">Generate recipes</Text>
                </View>
            </Pressable>
            </ScrollView>
            
        </View>
    )
}

export default ExpDateScreen

