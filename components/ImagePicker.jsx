import React from "react";
import {Button, View} from 'react-native';
import {launchCameraAsync} from 'expo-image-picker';

const ImagePicker = () => {
    async function takeImageHandler(){
        const image = await launchCameraAsync({
            aspect: [16, 9],
            quality: 0.5
        });
        console.log(image);
    }
    return <View>
        <View>
            <Button onPress={takeImageHandler}></Button>
        </View>
    </View>
}

export default ImagePicker;