import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const AlertContainer = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Recent Intrusion Alerts</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
});

export default AlertContainer;
