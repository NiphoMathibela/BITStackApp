import React from 'react'
import { View, Text, Button } from 'react-native'
import ExpDate from "./ExpDate"
import BottomNav from '../routes/BottomNav'

export default function Home({ navigation }) {
  return (
    <View>
      <Text>Home</Text>
      <Button
        title="Go Expiry Date Page"
        onPress={() =>
          navigation.navigate('ExpDate', { name: 'Jane' })
        }
      />
    </View>
  )
}
