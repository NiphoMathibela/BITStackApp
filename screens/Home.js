import React, { useState } from 'react'
import { View, Text, Pressable, StyleSheet, Alert } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import {launchCameraAsync, useCameraPermissions, PermissionStatus} from 'expo-image-picker';

const Home = () => {

  const [pickedImage, setPickedImage] = useState();
  const[cameraPermissionStatus, requestPermission] = useCameraPermissions();

  async function verifyPermission() {

    if(cameraPermissionStatus.status === PermissionStatus.UNDETERMINED){
      const permissionResponse = await requestPermission();
      return permissionResponse.granted;
    }

    if(cameraPermissionStatus.status === PermissionStatus.DENIED){
      Alert("Insuffient permission");
    };
    return false;

  }
  
  async function takeImageHandler(){
    const hasPermission = await verifyPermission();

    if(hasPermission){
      return;
    }
    const image = await launchCameraAsync({
      aspect: [16, 9],
      quality: 0.5
    });
    setPickedImage(image.uri);
  }

  let imagePreview = <Text>No Picture taken yet</Text>

  if(pickedImage){
    imagePreview = <Image styles={styles.image} source={{uri: pickedImage }}/>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.imagePreview}>
        {imagePreview}
      </View>
      <View style={styles.button}>
        <Pressable  style={styles.button} >
          <View style={styles.iconContainer}>
            <Ionicons name={"camera-outline"} size={42} color={"white"} onPress={takeImageHandler} />
          </View>
          <Text style={styles.text}>Snap your Food Item</Text>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#37BD6B',
    padding: 7,
    borderRadius: 8,
  },
  iconContainer: {
    backgroundColor: '#37BD6B',
    borderRadius: 50,
    padding: 7,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
  imagePreview :{
    width: '100%',
    height: 200,
    marginVertical: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: '100%',
    height: '100%'
  }
});

export default Home;