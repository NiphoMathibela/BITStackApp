import { useState } from 'react'
import React from 'react'
import { View, Text, Pressable } from 'react-native'

export default function Favourite({navigation}) {

  return (
    <View>
      <Text>Favourite</Text>
      <Pressable onPress={() => navigation.navigate('ExpDate')}>
        <Text>I'm pressable!</Text>
      </Pressable>
    </View>
  )
}
