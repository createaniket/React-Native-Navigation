import React from 'react';
import {TouchableOpacity, Image, StyleSheet} from 'react-native';

// Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Screens
import Home from './screens/Home';
import Details from './screens/Details';
import NakaStore from './screens/NakaStore';
import ManagedService from './screens/ManagedService';
import Login from './screens/Login';
import RegisterComplaint from './screens/RegisterComplaint';
import Splash from './screens/Splash';

export type RootStackParamList = {
  Home: undefined;
  Details: undefined;
  NakaStore: undefined;
  ManagedService: undefined;
  Login: undefined;
  RegisterComplaint: undefined;
  Splash:undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {
  const Handling = () => {
    console.log('User profile hitted');
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">

      <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="NakaStore"
          component={NakaStore}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ManagedService"
          component={ManagedService}
          options={({navigation}) => ({
            headerShown: true,
            title: '',

            headerRight: () => (
              <TouchableOpacity onPress={() => Handling()}>
                <Image
                  source={require('../assets/user.png')} // Replace with your user icon path
                  style={styles.icon}
                />
              </TouchableOpacity>
            ),
          })}
        />

        <Stack.Screen
          name="RegisterComplaint"
          component={RegisterComplaint}
          options={({navigation}) => ({
            headerShown: true,
            title: '',

            headerRight: () => (
              <TouchableOpacity onPress={() => Handling()}>
                <Image
                  source={require('../assets/user.png')} // Replace with your user icon path
                  style={styles.icon}
                />
              </TouchableOpacity>
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 25,
    height: 25,
    marginHorizontal: 10,
  },
});

export default App;
