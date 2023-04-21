import { Link } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { View, Text,StyleSheet, Pressable } from 'react-native'
import data from "../data/db.json"


export default function Recipes({navigation}) {

    const styles = StyleSheet.create({
        appBar:{
            height:50,
            marginBottom:50
        },
        buttonContainer: {
            width: 32,
            height: 10,
            marginHorizontal: 2,
            alignItems: 'center',
            justifyContent: 'center',
            padding: 3,
          },
          button: {
            borderWidth:2,
            borderColor:'black',
            borderStyle:'solid',
            borderRadius: 10,
            height:50,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            backgroundColor:"black"
          
          },
          buttonIcon: {
            paddingRight: 8,
          },
          buttonLabel: {
            color: '#fff',
            fontSize: 16,
          },
          parentView:{
            marginLeft:12,
            marginRight:12
        },
            heading:{
            fontWeight:"bold",
            fontSize:24,
            marginBottom:30
        },
    })

    const meals = data.meals.map((meal)=>{
        return(
            <View key={meal.id}>
                <Pressable style={styles.button} onPress={() => {
                    navigation.navigate('recipe',{receipe:meal.id})    
                    }}>
                    <Text style={styles.buttonLabel}>{meal.meal}</Text>
                </Pressable>
            </View>
        );
    })



    return (
        <View>
            <View style={styles.appBar}>

            </View>
            <View style={styles.parentView}>
                <Text style={styles.heading}>Recipes</Text>
                {/* Remove comments from code below to be able to see the recipe options and to be able to redirect to recipe detail */}
                {/* {meals} */}
            </View>

            
        </View>
    )
}
