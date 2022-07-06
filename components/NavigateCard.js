import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '@env';
import { useDispatch } from 'react-redux';
import { setDestination } from '../slices/navSlice';
import { useNavigation } from '@react-navigation/native';
import NavFavourites from './NavFavourites';
import { Icon } from 'react-native-elements';



const NavigateCard = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation( );

  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`text-center py-3`}>Bienvenido a caminos hukniray!</Text>
      <View style={tw`border-t border-gray-200 flex-shrink`}>
        <View>
        <GooglePlacesAutocomplete 
                placeholder="A donde vas?" 
                styles={toInputBoxStyles}
                fetchDetails={true}
                returnKeyType={'search'}
                minLength={2}
                onPress={(data, details = null) => {
                    dispatch(
                        setDestination({ 
                            location: details.geometry.location,
                            description: data.description,
                        })
                    );
                    navigation.navigate('RideOptionsCard');
                }}
                enablePoweredByContainer={false}
                query={{
                key: GOOGLE_MAPS_APIKEY,
                language: "es"
                }}
                nearbyPlacesAPI="GooglePlacesSearch"
                debounce={400}
              />
        </View>

        <NavFavourites />
      </View>
      <View style={tw`flex-row bg-white justify-evenly py-2  border-t `}>
        <TouchableOpacity 
           onPress={() => navigation.navigate("RideOptionsCard")}
           style={tw`flex flex-row justify-between bg-black w-24 px-5 py-4 rounded-full`}>
          <Icon 
            name="car" 
            type="font-awesome" 
            color="white" 
            size={17} />
          <Text style={tw`text-white text-center`}>Rides</Text>
        </TouchableOpacity>
        <TouchableOpacity 
            
            style={tw`flex flex-row justify-between w-24 px-5 py-4 
            rounded-full`}
            >
          <Icon 
            name="fast-food-outline" 
            type="ionicon" 
            color="black" 
            size={20} />
          <Text style={tw`text-center`}>Eats</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default NavigateCard;

const toInputBoxStyles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        paddingTop: 15,
        flex: 0,
    },
    textInput: {
        backgroundColor: "#DDDDDF",
        borderRadius:0,
        fontSize: 12,
    },
    textInputContainer: {
        paddingHorizontal: 20,
        paddingBottom: 0,
    },
});