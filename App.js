import React from 'react';
import { BlurView } from 'expo-blur';

import { createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';
import { auth } from "./firebase";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { 
  StyleSheet, ScrollView, 
  KeyboardAvoidingView, Image, 
  Text, View, TouchableOpacity, TextInput, Alert
} from 'react-native';
import { Provider } from 'react-redux';
import { store } from './store'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-gesture-handler'; 
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native'

import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
import EatsScreen from './screens/EatsScreen';


const uri = "https://ak.picdn.net/shutterstock/videos/1060308725/thumb/1.jpg"
const profilePicture = 'https://randomuser.me/api/portraits/men/27.jpg'

export default function App() {
  const Stack = createStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
       <SafeAreaProvider>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? "padding": "height" } 
          style={{flex: 1}}
          keyboardVerticalOffset={Platform.OS === 'ios' ? -64 : 0}>
        <Stack.Navigator initialRouteName='Login'>
            <Stack.Screen 
              name="Login" 
              component={LoginScreen} 
              options={{
                title: 'Iniciar Sesion'
            }} />
            <Stack.Screen 
              name="HomeScreen" 
              component={HomeScreen} 
              options={{ 
                headerShow: false,
            }} />
            <Stack.Screen 
              name="MapScreen" 
              component={MapScreen} 
              options={{ 
                headerShow: false,
            }} />
            <Stack.Screen 
              name="EatsScreen" 
              component={EatsScreen} 
              options={{ 
                headerShow: false,
            }} />
          </Stack.Navigator>
        </KeyboardAvoidingView>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}



function LoginScreen() {

  const [email, setEmail] = React.useState('')
  const [ password, setPassword] = React.useState('')
  const navigation = useNavigation();


  const handleCreateAccount = () => {
    console.log(email, password)
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log('Account created!')
      navigation.navigate('HomeScreen')
      const user = userCredential.user;
      console.log(user)
    })
    .catch(error => {
      console.log(error)
      Alert.alert('Usuario ya existente, no se puede crear la cuenta')
    })
  }

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log('Signed in!')
      const user = userCredential.user;
      console.log(user)
      navigation.navigate('HomeScreen');
    })
    .catch(error => {
      console.log(error)
      Alert.alert('El usuario que has escrito no existe')
    })
  }

  return (
      <View style={styles.container}>
        <Image source={{ uri }} style={[styles.image, StyleSheet.absoluteFill]} />
        <View style={{width: 100, height: 100, backgroundColor: 'purple', position: 'absolute' }}></View>
        <View style={{width: 100, height: 100, backgroundColor: 'blue', top: 120, position: 'absolute', transform: [{rotate: '50deg'}] }}></View>
        <View style={{width: 100, height: 100, backgroundColor: 'red', bottom: 120, position: 'absolute', borderRadius: 50, transform: [{rotate: '50deg'}]}}></View>
        <ScrollView contentContainerStyle= {{
          flex: 1,
          width: '100%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <BlurView intensity={100}>
            <View style={styles.login}>
              <Image source={{ uri: profilePicture }} style={styles.profilePicture} />
              <View>
                <Text style={{fontSize:17, fontWeight: '400', color: 'white'}}>E-mail</Text>
                <TextInput onChangeText={(text) => setEmail(text)} style={styles.input} placeholder="e-mail" />
              </View>
              <View>
                <Text style={{fontSize:17, fontWeight: '400', color: 'white'}}>Contraseña</Text>
                <TextInput onChangeText={(text) => setPassword(text)}style={styles.input} placeholder="Contraseña" secureTextEntry={true} />
              </View>
              <TouchableOpacity onPress={handleSignIn} style={[styles.button, {backgroundColor: '#00CFEB90'}]}>
                <Text style={{fontSize: 17, fontWeight: '400', color: 'white'}}>Iniciar Sesión</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleCreateAccount} style={[styles.button, {backgroundColor: '#6792F090'}]}>
                <Text style={{fontSize: 17, fontWeight: '400', color: 'white'}}>Crear Cuenta</Text>
              </TouchableOpacity>
            </View>
          </BlurView>

        </ScrollView>
      </View>
    );
}

const Stack = createNativeStackNavigator();



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  login: {
    width: 350,
    height: 500,
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: '#fff',
    borderWidth: 1,
    marginVertical: 30,
  },
  input: {
    width: 250,
    height: 40,
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ffffff90',
    marginBottom: 20,
  },
  button: {
    width: 250,
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    borderColor: '#fff',
    borderWidth: 1,
  }

});