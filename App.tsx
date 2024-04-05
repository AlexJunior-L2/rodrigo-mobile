import React, { Component } from "react";
import {View, Text, StyleSheet} from "react-native";
import Simples from "./src/components/Simples";

export default class App extends Component {
  render(){
    return (
      <View style={estilos.container}>
        <Text style={estilos.fonte}>Olá Mundo</Text>
        <Simples texto="Programando em react-native" />
      </View>
    );
  }
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

  },
  fonte: {
    fontSize: 40
  },
})