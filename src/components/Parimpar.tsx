import React from "react";
import { Text } from "react-native";
import Padrao from "../estilos/Padrao";

function getResultado(num: number){
    const resultado = num %2==0 ? 'PAR' : 'IMPAR';

    return resultado
}

export default (props: { numero: number; }) => (
    <Text style={Padrao.ex}>{getResultado(props.numero)}</Text>
)