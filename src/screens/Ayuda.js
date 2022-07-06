import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Ayuda = () => {
    return (
        <View style={{ backgroundColor: '#FF7E33'}}>
        <Text style={{textAlign: "center", fontWeight: "bold"}}>Ayuda y Soporte</Text>
        <Text> 

        </Text>
         <Text  style={{textAlign: "center"}}>
            En esta vista podras contactarte con nosotros cuando tengas algun inconveniente o queja al momento
            de que estes usando nuestro aplicativo
        </Text>
         <Image
      style={{ height: 200, width: 300, resizeMode: 'contain', alignSelf:'center' }}
      source={require("./img/ayudaa.jpg")}
      resizeMode="contain"
      resizeMethod="resize"
    />
    <Text style={{textAlign: "center", fontWeight: "bold"}}>Integrantes</Text>
    <Text> 
            
        </Text>
    <Text style={{textAlign: "center"}}>Yonela Carbajal 987654321</Text>
    <Text style={{textAlign: "center"}}>Estefani Abigail 987654321</Text>
    <Text style={{textAlign: "center"}}>Yeshua Josue 987654321</Text>
    <Text style={{textAlign: "center"}}>Victor Rodrigo 987654321</Text>
    <Text style={{textAlign: "center"}}>Gabriel Omar 987654321</Text>
    <Text style={{textAlign: "center"}}>Miguel Angel 987654321</Text>
    
    <Image
      style={{ height: 200, width: 300, resizeMode: 'contain', alignSelf:'center'}}
      source={require("./img/soporte.jpg")}
    />
        </View>
    )
}

export default Ayuda

const styles = StyleSheet.create({})