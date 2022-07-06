import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import React, { useState } from 'react';
import tw from 'twrnc';
import { FlatList, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { selectTravelTimeInformation } from '../slices/navSlice';
import { useSelector } from 'react-redux';

const data = [
    {
        id: 'Uber-X-123',
        title: 'Uber X',
        multiplier: 1,
        image: 'https://links.papareact.com/3pn'
    },
    {
        id: 'Uber-XL-456',
        title: 'Uber XL',
        multiplier: 1.2,
        image: 'https://links.papareact.com/5w8'
    },
    {
      id: 'Uber-Lux-789',
      title: 'Uber Lux',
      multiplier: 1.2,
      image: 'https://links.papareact.com/7pf'
    }
]


const RideOptionsCard = () => {
    const navigation = useNavigation();
    const [selected, setselected] = useState(null)
    const travelTimeInformation = useSelector(selectTravelTimeInformation)
    
  return (
    <SafeAreaView style={tw`bg-white flex-grow `}>
       <View> 
        <TouchableOpacity 
            onPress={() => navigation.navigate('NavigateCard')}
            >           
        </TouchableOpacity>
        <Text style={tw`text-center py-5`}>
          Select a Ride - {travelTimeInformation?.distance?.text}
        </Text>
      </View>
      
      <FlatList 
        data = {data}
        keyExtractor={(item) => item.id}
        renderItem = {({item: {id, title, multiplier, image}, item }) => (
          
          <TouchableOpacity 
            onPress={() => setselected(item)}
            style= {tw` flex-1  ${id === selected?.id && "bg-gray-200"}`}>
            <View style= {tw` flex-row justify-between px-10`} >
            <Image 
             style={{
               width:80,
               height:80,
               resizeMode: "contain"
            }}
            source={{uri: image}}
            />
            <View>
              <Text style = {tw`flex-row font-semibold`} >{title}</Text>
              <Text >{travelTimeInformation?.duration?.text} de viaje</Text>
            </View>
            <Text >
              S/. {travelTimeInformation?.duration?.value} </Text>
            </View>
          </TouchableOpacity>
        )}
      />
      <View style={tw`mt-auto border-t border-gray-200`}>
        <TouchableOpacity 
          disabled={!selected} 
          style={tw`bg-black py-7 px-15 top-1 m-5 ${!selected && 'bg-gray-300'}`}>
          <Text style={tw`text-center text-white`} >Choose {selected?.title}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default RideOptionsCard;

const styles = StyleSheet.create({})