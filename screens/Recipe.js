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
            fontSize:15,
            marginBottom:15
        },
        recipeCard:{
            backgroundColor:"rgba(55, 189, 107, 0.28)",
            padding:16,
            borderRadius:10
        },
        recipeDetails:{
            fontSize:16,
            fontWeight:'700'
        }

    })

    // https://api.spoonacular.com/recipes/{id}/ingredientWidget.json


    const id = route.params.id;
    const data = route.params.arr;
    const [meal,setMeal] = useState();
    const [state,setState] = useState(false);

    useEffect(()=>{
        // setMeal(data[id]);
        // setState(true);
        // alert(data[0].title);
        data.forEach(element => {
            if(element.id == id){
                setMeal(element);
                setState(true);
            }
        });
    },[])


    
    return (
        <View>
            <View style={styles.appBar}></View>
            { state?
                <>
                    <View style={styles.parentView}>
                                <Text style={styles.heading}>{meal.title}</Text>
                                <View style={styles.recipeCard}>
                                    <Text style={styles.subheading}>Preparations Steps</Text>
                                    <Text style={styles.recipeDetails}>lorem ipsum</Text>
                            </View>
                    </View>
                </>
            
            :<Text>Retrieving...</Text>}
        </View>
    )
}