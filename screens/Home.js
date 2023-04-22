import React, { useState } from 'react'
import { View, Text, Pressable, StyleSheet, Alert, Image } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { launchCameraAsync, useCameraPermissions, PermissionStatus, launchImageLibraryAsync, MediaTypeOptions } from 'expo-image-picker';


const Home = () => {
  const [pickedImage, setPickedImage] = useState();
  const [cameraPermissionStatus, requestPermission] = useCameraPermissions();
  const [isModalVisible, setModalVisible] = useState(false);



  async function verifyPermission() {
    if (cameraPermissionStatus.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission();
      return permissionResponse.granted;
    }

    if (cameraPermissionStatus.status === PermissionStatus.DENIED) {
      Alert("Insuffient permission");
    };
    return false;
  }

  async function takeImageHandler() {
    const hasPermission = await verifyPermission();
    if (hasPermission) {
      return;
    }

    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5
    });
    setPickedImage(image.uri);
  }

  let imagePreview = <Text>No Picture taken yet</Text>

  if (pickedImage) {
    imagePreview = <Image styles={styles.image} source={{ uri: pickedImage }} />;
  }

  async function pickImage() {
    let result = await launchImageLibraryAsync({
      mediaTypes: MediaTypeOptions.Images,
      allowsEditing: true
    })
    if (!result.canceled) {
      setPickedImage(result.uri);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.imagePreview}>
        {imagePreview && <Image style={{ width: 100, height: 100 }} source={{ uri: pickedImage }} />}
      </View>
      <View style={styles.button}>
        <Pressable style={styles.button} onPress={pickImage}>
          <Text style={styles.text}>Choose an image from your files</Text>
        </Pressable>
      </View>

      <View style={styles.button} >
        <Pressable style={styles.button} >
          <View style={styles.iconContainer} >
            <Ionicons name={"camera-outline"} size={42} color={"white"} onPress={takeImageHandler} />
          </View>
          <Text style={styles.text} >Snap your Food Item</Text>
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
    padding: 9,
    borderRadius: 8,
    margin: 11
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
  imagePreview: {
    height: 200,
  },
  image: {
    width: '100%',
    height: '100%'
  }
});

export default Home;