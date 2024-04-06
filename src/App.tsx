import React, {useState, useEffect} from 'react';
import {StyleSheet, View, ImageBackground, Image} from 'react-native';

import {Button, AlertContainer, Title, SplashScreen} from './components';

const LOGO_IMG = Image.resolveAssetSource(require('./images/logo.png')).uri;

const App: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ImageBackground
      source={{
        uri: LOGO_IMG,
      }}
      style={styles.backgroundImage}>
      <Title />
      <AlertContainer />

      <View style={styles.buttonContainer}>
        <Button text="Start Monitoring" />
        <Button text="View Reports" />
      </View>

      <View>{isVisible && <SplashScreen />}</View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  buttonContainer: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    display: 'flex',
    gap: 20,
  },
});

export default App;
