import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import React, {useState} from 'react';
import {WebView} from 'react-native-webview';

const NakaStore = () => {
  const [loading, setLoading] = useState(true);

  return (
    <View style={styles.container}>
      {loading && (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="red" style={styles.Laoder}/>
        </View>
      )}
      <WebView
        source={{uri: 'https://usm.channelonline.com/nakatech/storesite/'}}
        style={{flex: 1}}
        onLoadStart={() => setLoading(true)}
        onLoadEnd={() => setLoading(false)}
      />
    </View>
  );
};

export default NakaStore;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loaderContainer: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',

    backgroundColor: 'rgba(255, 255, 255, 0.7)', // Optional: slightly opaque background
  },
  Laoder:{

    maxHeight:100,
  }
});
