import { Link } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { View, Text,StyleSheet, Pressable, Image } from 'react-native'
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

    const [count, setCount] = useState(0)
    const [details,setDetails] = useState(false);
    const [show,setShow] = useState();

    let arr = [];
    async function fetchAPI(){
        const url = "https://api.spoonacular.com/recipes/complexSearch?query=pasta&apiKey=c66e7cf3945d487dbcf00b297c3f77d7";
        const response  = await fetch(url);
        const data = await response.json();
  
        for(let i = 0;i<(data.results).length;i++){
          arr[i] = data.results[i];
        }
        setDetails(true);
  
        setShow(arr.map((item)=>{
  
          return(
            <View style={{height:25,width:250,backgroundColor:"black"}} key={item.id}>
                <Text style={{color:"white"}}>{item.title}</Text>
                <Image 
                    source={{url:item.image}}
                />
            </View>
          );
        }));
      }


    return (
        <View>
            <View style={styles.parentView}>
                <Text style={styles.heading}>Recipes</Text>
                <Pressable
                    style={styles.button}   
                    onPress={fetchAPI}
                >
                    <Text
                        style={styles.buttonLabel}
                    >Generate</Text>
                </Pressable>

                <View>
                    {details ? show :<Text>Retrieving...</Text> }
                </View>
            </View>        
        </View>
    )
}
