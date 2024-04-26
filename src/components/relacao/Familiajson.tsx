import React from "react";
import { Text } from "react-native";
import Membro from "./Membro";
import Padrao from "../../estilos/Padrao";


interface FamiliaProps {
    dados: { nome: string; sobreNome: string}[];
}

function getMmebros(registros: FamiliaProps){
    return registros.dados.map((membro, index) => [
        <Membro key={index} nome={membro.nome} sobreNome={membro.sobreNome} />
    ]);
}

const Familia: React.FC<FamiliaProps> = (props) => (
    <>
    <Text style={Padrao.textoDestaque}>Membros da Familia</Text>
    {getMmebros(props)}
    </>
);

export default Familia;