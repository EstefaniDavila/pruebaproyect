import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Guia = () => {
    return (
        <View style={{ backgroundColor: '#33FFE4'}}>
        <Text style={{textAlign: "center", fontWeight: "bold"}}>Guia</Text>
        <Text> 

        </Text>
         <Text  style={{textAlign: "center"}}>
            Esta guia sirve para que los usuarios no se pierdan al momento de hacer uso de las funcionalidades
            del aplicativo para pedir comida por delivery
        </Text>
        <Text> 
            
        </Text>
         <Image
      style={{ height: 200, width: 300, resizeMode: 'contain', alignSelf:'center' }}
      source={require("./img/guia.jpg")}
      resizeMode="contain"
      resizeMethod="resize"
    />
    <Text> 
            
            </Text>
    <Text style={{textAlign: "center", fontWeight: "bold"}}>PASOS</Text>
    <Text> 
            
        </Text>
    <Text style={{textAlign: "center"}}>1er PASO: Registrarse  o Iniciar Sesion</Text>
    <Text style={{textAlign: "center"}}>2do PASO: Ingresar al menu de comida </Text>
    <Text style={{textAlign: "center"}}>3er PASO: Añadr el pedido de la comida</Text>
    <Text style={{textAlign: "center"}}>4to PASO: Ingresar a la opcion de Uber</Text>
    <Text style={{textAlign: "center"}}>5to PASO: Realizar el pedido de su comida </Text>
    <Text style={{textAlign: "center"}}>6to PASO: Disfrutar la comida</Text>
    <Text> 
            
    </Text>
    <Image
      style={{ height: 200, width: 300, resizeMode: 'contain', alignSelf:'center'}}
      source={require("./img/pasos.png")}
    />
        </View>
    )
}

export default Guia

const styles = StyleSheet.create({})