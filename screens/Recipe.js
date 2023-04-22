import {React,useEffect, useState} from 'react'
import { View, Text,StyleSheet,Image } from 'react-native'
import BottomNav from '../routes/BottomNav'
import data from "../data/db.json";



export default function Recipe({navigation,route}) {

    const styles = StyleSheet.create({
        appBar:{
            height:50,
            marginBottom:50
        },parentView:{
            marginLeft:12,
            marginRight:12
        },
        heading:{
            fontWeight:"bold",
            fontSize:24,
            marginBottom:30
        },
        subheading:{
            fontWeight:"bold",
            fontSize:20,
            marginBottom:15
        },
        recipeCard:{
            backgroundColor:"rgba(55, 189, 107, 0.28)",
            padding:16,
            borderRadius:10
        },
        recipeDetails:{
            fontSize:16,
            fontWeight:'800',
            lineHeight:24,
        }

    })

    const id = route.params.id;
    const instructions = route.params.instructions;
    const title = route.params.title;

    
    
   
    return (
        <View>
            <View style={styles.appBar}></View>
            {
                        <View style={styles.parentView}>
                                <Text style={styles.heading}>{title}</Text>
                                <Image source={{ uri: meal.image }} style={{ height: 300, width: 350, marginBottom: 10 }} />
                                <View style={styles.recipeCard}>
                                    <Text style={styles.subheading}>Preparations Steps</Text>
                                    <Text style={styles.recipeDetails}>{instructions}</Text>
                            </View>
                        </View>
            }
        </View>
    )
}