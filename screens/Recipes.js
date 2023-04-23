import { Link } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Pressable, Image, ScrollView } from 'react-native'
import data from "../data/db.json"



export default function Recipes({ navigation }) {
    
    const styles = StyleSheet.create({
        appBar: {
            height: 50,
            marginBottom: 50
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
            borderWidth: 2,
            borderColor: 'black',
            borderStyle: 'solid',
            borderRadius: 10,
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            backgroundColor: "black",
            marginTop: 20,

        },
        buttonIcon: {
            paddingRight: 8,
        },
        buttonLabel: {
            color: '#fff',
            fontSize: 16,
        },
        parentView: {
            height: "93.5%",
            marginLeft: 12,
            marginRight: 12
        },
        heading: {
            fontWeight: "bold",
            fontSize: 24,
            marginBottom: 30
        },

        recipeCard: {
            height: 100,
            width: 360,
            backgroundColor: "rgba(55, 189, 107, 0.28)",
            marginTop: 10,
            marginBottom: 10,
            marginRight: 10,
            borderRadius: 10,
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 10
        },
        div: {
            marginTop: 10,
            marginBottom: 10

        }
    })

    const [count, setCount] = useState(0)
    const [details, setDetails] = useState(false);
    const [show, setShow] = useState();
    const [items,setItems]=useState([]);

    let arr = [];

    const ingredients = ["Grain bread", "Ham", "Egg", "Cumcumber", "Bulk garlic", "Yellow onions"]

    async function fetchAPI() {

        for(var i = 0;i<ingredients.length;i++){

            const url = `https://api.spoonacular.com/recipes/complexSearch?query=${ingredients[i]}&apiKey=c66e7cf3945d487dbcf00b297c3f77d7`;
            const response = await fetch(url);
            const data = await response.json();
            // console.log(data.results[0]);
            for (let i = 0; i < (data.results).length; i++) {
                arr[i] = data.results[i];
                setItems(prevItem => [...prevItem,data.results[i]]);
            }
            setDetails(true);
    
    
            setShow(items.map((item) => {
    
    
                return (
    
                    <Pressable
                        key={item.id}
                        onPress={async()=>{
                            //Function to fetch the ingredients for the food item with the details
                            const baseUrl = `https://api.spoonacular.com/recipes/${item.id}/information?includeNutrition=false&apiKey=c66e7cf3945d487dbcf00b297c3f77d7`;
                            const baseResponse = await fetch(baseUrl);
                            const data2 = await baseResponse.json();
                            let instructions = data2.instructions;
                            // if(instructions.substring(0,8) == "<ol><li>"){
                            //     instructions = instructions.substring(8,((instructions.length)-10));
                            // }   
                            navigation.navigate('recipe',{id:item.id,title:item.title,instructions:instructions, image:item.image})
                        }}
                    >
                        <View style={styles.recipeCard} >
                         <Image
                            source={{ url: item.image }}
                            style={{ width: 80, height: 80, borderRadius: 10 }}
                        />
                            <Text style={{ color: "white", fontSize: 20, fontWeight: "700", margin: 10 }}>{item.title}</Text>
                        </View>     
                    </Pressable>
    
                );
            }));
        }

        
    }
    return (
        <View>
            <View style={styles.parentView}>
                {/* <Text style={styles.heading}>Recipes</Text> */}
                <Pressable
                    style={styles.button}
                    onPress={fetchAPI}
                >
                    <Text
                        style={styles.buttonLabel}
                    >
                        Show Recipes
                    </Text>
                </Pressable>

                <ScrollView style={styles.div}>
                    {details ? show : <Text>Retrieving...</Text>}
                </ScrollView>
            </View>
        </View>
    )
}
