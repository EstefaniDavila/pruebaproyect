import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Nosotros = () => {
    return (
        <View style={{ backgroundColor: '#FFD833'}}>
        <Text style={{textAlign: "center", fontWeight: "bold"}}>Sobre Nosotros</Text>
        <Text> 

        </Text>
         <Text  style={{textAlign: "center"}}>
            Nosotros somos un grupo de 6 estudiantes de la carrera de Diseño y desarrollo de Software que esta implementando un proyecto de envio de comida a delivery para las personas que tengan dificultades al ir a realizar las compras de manera presenial
        </Text>
         <Image
      style={{ height: 200, width: 300, resizeMode: 'contain', alignSelf:'center' }}
      source={require("./img/comida.png")}
      resizeMode="contain"
      resizeMethod="resize"
    />
    <Text style={{textAlign: "center", fontWeight: "bold"}}>Integrantes</Text>
    <Text> 
            
        </Text>
    <Text style={{textAlign: "center"}}>Carbajal Valdivia, Yonela Isamar </Text>
    <Text style={{textAlign: "center"}}>Davila Guerra, Estefani Abigail </Text>
    <Text style={{textAlign: "center"}}>Layme Castilla, Yeshua Josue </Text>
    <Text style={{textAlign: "center"}}>Mollocondo Mendoza, Victor Rodrigo </Text>
    <Text style={{textAlign: "center"}}>Quiñones del Carpio, Gabriel Omar </Text>
    <Text style={{textAlign: "center"}}>Soto Tapia, Miguel Angel </Text>
    
    <Image
      style={{ height: 200, width: 300, resizeMode: 'contain', alignSelf:'center'}}
      source={require("./img/comunidad.png")}
    />
        </View>
    )
}

export default Nosotros

const styles = StyleSheet.create({})