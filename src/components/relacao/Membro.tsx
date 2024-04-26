import React from "react";
import { Text } from "react-native";
import Padrao from "../../estilos/Padrao";


export default (props: any) => (
    <>
    <Text style={Padrao.textoDestaque}>Membros da Familia</Text>
        {props.children}
    </>
    
)