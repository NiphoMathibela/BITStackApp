import React, { useState } from 'react'
import { View, Text, Pressable, StyleSheet, Alert, Image } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { launchCameraAsync, useCameraPermissions, PermissionStatus, launchImageLibraryAsync, MediaTypeOptions } from 'expo-image-picker';


const Home = ({ navigation }) => {
  const [pickedImage, setPickedImage] = useState();
  const [cameraPermissionStatus, requestPermission] = useCameraPermissions();
  const [isModalVisible, setModalVisible] = useState(false);
  const delay = ms => new Promise(res => setTimeout(res, ms));

  const goToIngredients = async () => {
    await delay(4000);
    navigation.navigate("ExpDate")
  };

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

    goToIngredients();
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

    goToIngredients()
  }

  return (
    <View style={styles.container}>
      <View style={styles.imagePreview}>
        {imagePreview && <Image style={{ width: 250, height: 350 }} source={{ uri: pickedImage }} />}
      </View>


      <View className="mt-48">
        <View style={styles.button}>
          <Pressable style={styles.button} onPress={pickImage}>
            <Text style={styles.text}>Choose an image from your files</Text>
          </Pressable>
        </View>

        <View style={styles.button} >
          <Pressable style={styles.button} onPress={takeImageHandler} className="flex-row items-center justify-between m-auto">
            <View style={styles.iconContainer} >
              <Ionicons name={"camera-outline"} size={32} color={"white"} />
            </View>
            <Text style={styles.text} >Snap your reciept</Text>
          </Pressable>
        </View>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    // flex: 1,
    // justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 90,
  },
  button: {
    backgroundColor: '#37BD6B',
    padding: 4,
    borderRadius: 8,
    margin: 11,
  },
  iconContainer: {
    backgroundColor: '#37BD6B',
    padding: 2,
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