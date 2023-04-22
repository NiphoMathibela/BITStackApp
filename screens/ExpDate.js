import React, {Component, useState, useRef} from 'react';
import { Pressable, Text, View } from 'react-native';
import mockData from '../assets/mockData';
import DisplayBlock from '../components/DisplayBlock';
import BottomNav from '../routes/BottomNav';
import Ionicons from 'react-native-vector-icons/Ionicons';
import tes from "tesseract.js"

const ExpDateScreen = ({navigation}) => {

    const [display, setDisplay] = useState("")
    const [text, setText] = useState("");
   
    const handleClick = () => {
    
      tes.recognize(
        "../assets/a83e84142bf74fd65fc91fb5352c7576.png",'eng',
        { 
          logger: m => console.log(m) 
        }
      )
      .catch (err => {
        console.error(err);
      })
      .then(result => {

        let text = result.text
        setText(text);
    
      })
    }

const sortedData = text.split("\n")
console.log(sortedData)

    const recipeItems = mockData.map((item) => 
        <DisplayBlock img = {item.img} heading = {item.title} description = {item.exp}/>
    )

    const print = sortedData.map((item) => {
        <DisplayBlock heading = {item}/>
    })

    return(
        <View className = "mt-8">
            <View className = "w-full h-8 my-4">
            <Pressable className = "ml-2" onPress={() => navigation.navigate('Home', { name: 'Jane' })}><Ionicons name={"chevron-back-outline"} size={38} color={"#37BD6B"}  /></Pressable>
            </View>

            <Pressable onPress={handleClick}>
                <Text>Click me</Text>
            </Pressable>
            {print}
        </View>
    )
}

export default ExpDateScreen

