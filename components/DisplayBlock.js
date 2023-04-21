import { Text, View, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'

const DisplayBlock = (props) => {
    return(
        <View className = "w-96 h-24 bg-lightGreen rounded-md m-auto p-0.5 ">
            <View className= "flex-row items-center justify-between">
                <View className = "flex-row items-center">
                <Image source={require("../assets/beer.png")} className="h-24 w-24"></Image>
                <View>
                    <Text className = "text-base font-semibold">{props.heading}</Text>
                    <Text>{props.description}</Text>
                </View>
                </View>
                <Ionicons name={"close-outline"} size={38} color={"#37BD6B"} />
            </View>
        </View>
    )
}

export default DisplayBlock;