import React from 'react'
import { View, Text, StyleSheet, FlatList, StatusBar, Image, TouchableOpacity, Pressable } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Pasta from '../assets/pasta.png'
import { Button } from 'react-native-paper';
import axios from 'axios';


const DATA = [
    {
        id: '1',
        title: 'Pasta',
        img: 'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
        id: '2',
        title: 'Second Item',
        img: 'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'

    },
    {
        id: '3',
        title: 'Third Item',
        img: 'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'

    },
];


const test = () => {
    var config = {
        method: 'get',
        url: `https://api.spoonacular.com/recipes/random?number=1&tags=vegetarian,dessert,key=3d9b032d1cef400eabd3d513695bb161`,
        headers: {}
    };
    (axios(config)).then(function (response) {
        console.log('response: ', response.data.results);
        setPlaces(response.data.results);
    }).catch(function (error) {
        console.log('response: ', error);
    });
}



const Item = ({ title, img }) => (
    <TouchableOpacity style={styles.item}>
        <Image source={{ uri: img }} style={styles.img}></Image>
        <Text style={styles.title}> {title}</Text>
        <Ionicons name="ios-heart-outline" color={'#000'} size={26} style={styles.icon} />
    </TouchableOpacity>
);
export default function Recipes() {
    return (
        <View>
            <Text className="" style={styles.text}>
                Recipes
            </Text>
            <FlatList
                data={DATA}
                renderItem={({ item }) => <Item title={item.title} img={item.img} />}
                keyExtractor={item => item.id}
            />
            <Button onPress={test}>Test</Button>
        </View>
    )
}
const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        marginTop: 20,
        marginLeft: 20,
        marginBottom: 30,
        fontWeight: 'bold'
    },
    container: {
        flex: 1,
        // marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        flexDirection: 'row',
        // alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'rgba(55, 189, 107, 0.28)',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 10
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    img: {
        width: 100,
        height: 100,
        // borderRadius: 50,
        marginLeft: 20,
        marginRight: 20
    }
})
