import React from "react";
import { Text } from "react-native";
import Padrao from "../estilos/Padrao";
import ValidaUsuario from "./ValidaUsuario";

export default (props: any) => {

    const usuario = props.usuario || {}

    return (
        <>
         <ValidaUsuario valido={usuario && usuario.nome && usuario.email}>
             <Text style={Padrao.textoGrande}>
               Usuario Logado
             </Text>
             <Text style={Padrao.textoGrande}>
               {usuario.nome} - {usuario.email}
             </Text>
        </ValidaUsuario>
        </>
    )
}