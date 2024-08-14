import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const {width} = Dimensions.get('window');
const Login = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const handleLogin = () => {
    console.log('kjwecbjehv i have been hoitted');
    // Navigate to Home screen
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/Naka_logo.png')}
        style={styles.HomeLogoTop}
      />
      <Text style={styles.LoginText}>Login</Text>

      <View style={styles.LoginSection}>
        <Text style={styles.label}>Email/Mobile</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email or mobile"
          placeholderTextColor="#000" 
        />

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          placeholderTextColor="#000" 
          secureTextEntry={true}
        />

        <TouchableOpacity style={styles.buttonContainer} onPress={handleLogin}>
          <Text style={styles.LoginBtn}>Submit</Text>
        </TouchableOpacity>
      </View>

      <Image
        source={require('../../assets/loginmain.png')}
        style={styles.loginLogo}
      />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    paddingHorizontal: 20,
  },
  HomeLogoTop: {
    width: width * 0.8,
    alignSelf: 'center',
    marginVertical: 2,
  },
  LoginText: {
    fontWeight: 'bold',
    fontSize: 28,
    textAlign: 'center',
    marginTop: 30,
    color:'#000'
  },
  LoginSection: {
    marginTop: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
        color:'#000'
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
         color:'#000'
  },
  LoginBtn: {
    borderRadius: 5,
    color: '#fff',
    fontSize: 16,
    fontWeight: 'normal',
    backgroundColor:'#2196F3',
    padding:10,
    textAlign:'center'
  },
  buttonContainer: {},
  loginLogo:{
    width:300,
    height:400,
    alignSelf:'center',
    marginTop:80
  }
});
