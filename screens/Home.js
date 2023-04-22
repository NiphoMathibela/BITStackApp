import React from 'react'
import { View, Text, Pressable, StyleSheet } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

const Home = () => {

  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Pressable  style={styles.button} >
          <View style={styles.iconContainer}>
            <Ionicons name={"camera-outline"} size={42} color={"white"}  />
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
  }
})
export default Home;