import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {DotIndicator} from 'react-native-indicators';

import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const Splash = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 3000);
  }, []);

  return (
    <View style={styles.SpalshScreen}>
      <View style={styles.splashMainContainer}>
        <Image
          source={require('../../assets/nakaN.png')}
          style={styles.NakaStartLogoN}
        />
        <Text style={styles.SplashTitle}>Managed Services</Text>
      <DotIndicator color="white"  style={styles.Laoder}/>
      </View>

    </View>
  );
};


export default Splash;

const styles = StyleSheet.create({
  SpalshScreen: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',

  },
  Laoder:{ 
    maxHeight:100,
  },

  splashMainContainer:{

  },
  SplashTitle: {
    color: '#fff',
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 36,
  },
  NakaStartLogoN: {
    width: 250,
    height: 300,
    alignSelf: 'center',

    marginVertical: 40,

  },
});
