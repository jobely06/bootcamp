import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function BlueScreen({ navigation }) {
  return (
    <View style={[styles.container, { backgroundColor: 'blue' }]}>
      <TouchableOpacity
        style={[styles.button, styles.redButton]}
        onPress={() => navigation.navigate('Red')}>
        <Text style={styles.buttonText}>Red</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.greenButton]}
        onPress={() => navigation.navigate('Green')}>
        <Text style={styles.buttonText}>Green</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, styles.blueButton]}
        onPress={() => navigation.navigate('Blue')}>
        <Text style={styles.buttonText}>Blue</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.whiteButton]}
        onPress={() => navigation.navigate('Home')}>
        <Text style={[styles.buttonText, { color: 'black' }]}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 150,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 15,
  },
  redButton: {
    backgroundColor: 'red',
  },
  greenButton: {
    backgroundColor: 'green',
  },
  whiteButton: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
