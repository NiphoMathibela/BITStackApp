import { Text, View } from 'react-native';

const DisplayBlock = (props) => {
    return(
        <View className = "w-96 h-24 bg-lightGreen rounded-md m-auto ">
            <Text>Test</Text>
            <Text>{props.mainText}</Text>
        </View>
    )
}

export default DisplayBlock;