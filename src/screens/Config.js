import React from 'react';
import { View, Text, FlatList, StyleSheet, StatusBar, SafeAreaView,
TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
const ajustes = [
  
  {
    id: 2,
    name: 'Ayuda y Soporte',
    icon: 'customerservice',
    screen: 'Ayuda'
  },
  {
    id: 3,
    name: 'Sobre Nosotros',
    icon: 'eyeo',
    screen: 'Nosotros'
  },
  {
    id: 4,
    name: 'Guia',
    icon: 'questioncircleo',
    screen: 'Guia'
  },
]
const Config = () => {
  const navigation = useNavigation( );
return (
  <FlatList
    data = {ajustes}
    keyExtractor={(item) => item.id}
    renderItem={({item}) => (
      <TouchableOpacity
          onPress={() => navigation.navigate(item.screen)}
          style={styles.container}
          >  
          <View style={styles.item}>
              <AntDesign name={item.icon} size={25} color="black" style={{paddingTop: 12}} />
              <Text style={styles.name}>{item.name}</Text>
          </View>
      </TouchableOpacity>
  )}
  />
)


}

export default Config


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
      },
    item: {
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      backgroundColor: 'white',
      flexDirection: "row",
    },
    name: {
      fontSize: 20,
      paddingTop: 10,
      marginLeft: 5,
    },
  });