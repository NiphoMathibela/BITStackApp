import { Text, View, Image, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import {useState} from "react";

const DisplayBlock = (props) => {

    const [isFavourite, setIsFavourite]  = useState(true);

    return(
        <View className = "w-96 h-24 bg-lightGreen rounded-md mx-auto p-0.5 my-2 ">
            <View className= "flex-row items-center justify-between">
                <View className = "flex-row items-center">
                <Image source={props.img} className="h-24 w-24"></Image>
                <View>
                    <Text className = "text-base font-semibold">{props.heading}</Text>
                    <TextInput placeholder= "Enter an expiry date"className = "w-48"></TextInput>
                </View>
                </View>
                <View className= "mr-4">

                {/* {isFavourite ? <Ionicons name={"close-outline"} size={38} color={"#37BD6B"} /> : <Ionicons name={"heart"} size={29} color={"#37BD6B"} /> } */}
                </View>
            </View>
        </View>
    )
}

export default DisplayBlock;