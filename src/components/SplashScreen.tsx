import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const SPLASH_IMG = Image.resolveAssetSource(
  require('../images/splash.png'),
).uri;

const SplashScreen = () => (
  <View style={styles.rootView}>
    <View style={styles.childView}>
      <Image
        source={{
          uri: SPLASH_IMG,
        }}
        resizeMode="cover"
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  rootView: {
    justifyContent: 'center',
    flex: 1,
    margin: 10,
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  childView: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});

export default SplashScreen;
