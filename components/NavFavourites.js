import { Text, View } from 'react-native';
import React from 'react';
import { FlatList } from 'react-native';
import { TouchableOpacity, StyleSheet } from 'react-native';
import tw from 'twrnc';
import { Icon } from 'react-native-elements';

const data = [
    {
        id:"123",
        icon:"home",
        location:"Home",
        destination:"Code Street London, UK",
    },
    {
        id:"456",
        icon:"briefcase",
        location:"Estudio",
        destination:"Tecsup, Arequipa, Perú",
    }
]

const NavFavourites = () => {
  return (
  <FlatList
   data = {data}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() =>(
        <View style={[tw`bg-gray-200`, { height: 0.5}]}/>
      )}
      renderItem={({item: { location, destination, icon } }) => (
        <TouchableOpacity 
        onPress={() => {
          if (shouldSetOrigin) {
            dispatch(
              setOrigin({
                location,
                description,
              })
            );
            navigation.navigate("MapScreen");
          } else {
            dispatch(
              setDestination({
                location,
                description,
              })
            );
          }
        }}
          style={tw`flex-row items-center p-2`}>  
            <Icon 
               style={tw`mr-4 rounded-full bg-gray-300 p-3`}
               name={icon}
               type="ionicon"
               color="white"
               size={18}
            />
            <View>
                <Text style={tw`font-semibold text-lg`}>{location}</Text>
                <Text style={tw` text-gray-500`}>{destination}</Text>
            </View>
        </TouchableOpacity>
      
    )}
    />
  )
}

export default NavFavourites

const styles = StyleSheet.create({})