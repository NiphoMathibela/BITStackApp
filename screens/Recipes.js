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

    let arr = [];
    async function fetchAPI() {
        const url = "https://api.spoonacular.com/recipes/complexSearch?query=pasta&apiKey=3d9b032d1cef400eabd3d513695bb161";
        const response = await fetch(url);
        const data = await response.json();

        for (let i = 0; i < (data.results).length; i++) {
            arr[i] = data.results[i];
        }
        setDetails(true);

        setShow(arr.map((item) => {

            return (
                <View style={styles.recipeCard} key={item.id}>
                    <Image
                        source={{ url: item.image }}
                    />
                    <Text style={{ color: "white", fontSize: 20, fontWeight: "700", margin: 10 }}>{item.title}</Text>
                </View>
            );
        }));
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
