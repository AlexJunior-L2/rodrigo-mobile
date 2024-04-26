import React from "react";
import { Button } from "react-native";

export default (props: any) => {

    function executar(){
        console.warn('Botão acionado.')
    }

return (
    <>
      <Button
          title='Executor'
          onPress={executar}
      />

      <Button
          title='Executor 2'
          onPress={function(){console.warn('Exec 2')}}
      />

      <Button
          title='Executor 3'
          onPress={()=> console.warn('Exec 3')}
      />
    </>
   )
}