import React, { Component } from "react";
import {View, Text, StyleSheet} from "react-native";
import Simples from "./src/components/Simples";
import Frag from "./src/components/Frag";
import ParImpar from "./src/components/Parimpar";
import Familia from "./src/components/relacao/Familia";
import Membro from "./src/components/relacao/Membro";
import Familiajson from "./src/components/relacao/Familiajson";
import UsuarioLogado from "./src/components/UsuarioLogado";
import Botao from "./src/components/Botao";

const membrosFamilia1 = [
  { "nome": "Rodrigo", "sobreNome": "Lima" },
  { "nome": "Luciana", "sobreNome": "Alvarenga"}
]

const membrosFamilia2 = [
  { "nome": "Alfredo", "sobreNome": "Silva" },
  { "nome": "João", "sobreNome": "Silva" },
  { "nome": "Maria", "sobreNome": "Silva" }
]

export default class App extends Component {
  render(){
    return (
      <View style={estilos.container}>
        {/* <Text style={estilos.fonte}>Olá Mundo</Text>
        <Simples valor="Programando em react native/>" */}
        {/*<Frag titulo="Titulo" 
    subTitulo="Sub Titulo" /> */}
        {/*<ParImpar numero={11} /> */}
        {/*<Familia>
          <Membro nome="Platao" sobreNome="Diogenes"/>
          <Membro nome="Aristoteles" sobreNome="Socrates"/>
           </Familia>

        <Familia>
          <Membro nome="Friedrich" sobreNome="Nietzsche"/>
          <Membro nome="Nicolau" sobreNome="Maquíavel"/>
        </Familia>   */}
        {/* <FamiliaJson membros={membrosFamilia1} />
        <FamiliaJson membros={membrosFamilia2}/> */}
        {/* <FamiliaJsonMap membros={membrosFamilia1} />
        <FamiliaJsonMap membros={membrosFamilia2}/> */}
        {/*<UsuarioLogado usuario={ {"nome":"teste", "email":"teste@teste.com"} } />
        <UsuarioLogado usuario={ {"nome":"teste 2"} } />
        <UsuarioLogado usuario={ {"email":"warley@warley.com"} } />
        <UsuarioLogado usuario={ {} } />
        <UsuarioLogado usuario={ null } />*/}
        <Botao/>

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