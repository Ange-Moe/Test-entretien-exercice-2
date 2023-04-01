import React, { Component } from "react";
import { View,Text, StyleSheet } from "react-native";

export default class About extends Component{



    render(){
        return(
        <View style={style.view}>
            <Text style={style.title}>A propos de moi</Text>
            <Text>
                Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Debitis magnam iste perferendis mollitia dolore nulla minus vero adipisci sint consequatur?
                 Nesciunt, quaerat blanditiis! Aspernatur vel explicabo magni est nisi obcaecati cupiditate, eum, veniam facilis ratione aliquam
                  totam velit aperiam illum quam quo, harum beatae ab modi laudantium. Quod, molestiae totam.
            </Text>
        </View>
        )
    }
}

const style = StyleSheet.create ({
    view:{
        margin:20
    },
    title:{
        fontSize:22,
        marginBottom:20

    }
})