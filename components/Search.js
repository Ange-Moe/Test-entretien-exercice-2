import React, { Component } from "react";
import {View, TextInput, StyleSheet} from "react-native"

export default class Home extends Component{
    constructor(props){
        super(props)
        this.state ={
            city:'Montpellier'
        }
    }

    setCity(city){
        this.setState({city})
    }


    render(){
        return(
          <View>
         <TextInput
        style={styles.input}
        value={this.state.city}
        onChangeText={(text)=>(this.setCity(text))}

         />
          </View>  
        )
    }
}
const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });