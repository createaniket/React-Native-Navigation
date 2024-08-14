import {
  Button,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

//Navigations
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {RootStackParamList} from '../App';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
const {width} = Dimensions.get('window');
const Home = ({navigation}: HomeProps) => {
  return (
    <View style={styles.HomeScreen}>
      <Image
        source={require('../../assets/Naka_logo.png')}
        style={styles.HomeLogoTop}
      />

      {/* <Text>Home Screen</Text> */}
      {/* <Button
        title="Go to Details"
        onPress={() => navigation.push('Details')}
      /> */}

      <View style={styles.HomeAllCards}>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.push('NakaStore')}>
          <Text style={styles.cardHeadingText}>NAKA Online Store</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.push('ManagedService')}>
          <Text style={styles.cardHeadingText}>NAKA Managed Service</Text>

          <Text style={styles.cardDescription}>
            Click here to visit Managed service by NAKA.
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  HomeScreen: {
    backgroundColor: '#CC0200',
    flex: 1,
  },
  HomeLogoTop: {
    width: width * 0.8,
    alignSelf: 'center',
    marginVertical: 10,
  },
  homeMainHeading: {
    margin: 20,
  },
  HomeAllCards: {
    marginVertical: 200,
  },
  card: {
    width: 350,
    height: 200,
    backgroundColor: '#000',
    marginVertical: 10,
    alignSelf: 'center',
    borderRadius: 10,
    padding: 10,
    display: 'flex',
    justifyContent: 'center',
  },
  cardHeadingText: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 28,
    alignSelf: 'center',
  },
  cardDescription: {
    fontSize: 14,
    marginVertical: 20,
    color: '#fff',
    alignSelf: 'center',
  },
  cardBottomText: {
    fontSize: 18,
    color: '#000',
  },
});
