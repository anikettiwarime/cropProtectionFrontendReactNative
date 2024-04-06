import React from 'react';
import {Text, StyleSheet} from 'react-native';

const Title = () => (
  <Text style={styles.title}>Animal Intrusion Detection App</Text>
);

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'green',
    textAlign: 'center',
  },
});

export default Title;
