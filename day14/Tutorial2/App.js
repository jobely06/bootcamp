import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RedScreen from './screens/RedScreen';
import GreenScreen from './screens/GreenScreen';
import BlueScreen from './screens/BlueScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={ColorButtons} />
        <Stack.Screen name="Red" component={RedScreen} />
        <Stack.Screen name="Green" component={GreenScreen} />
        <Stack.Screen name="Blue" component={BlueScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const ColorButtons = ({ navigation }) => {
  return (
    <View style={styles.container}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
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
  blueButton: {
    backgroundColor: 'blue',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
