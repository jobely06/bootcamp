import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native';

export default function App() {

  const handlePress = (buttonName) => {
    console.log(`${buttonName} Pressed!`);
  };

  return (
    <ImageBackground
      source={require('./background.jpg')} // Replace with a cooler or abstract image
      style={styles.container}
      resizeMode="cover"
    >
      <View style={styles.card}>
        <Image
          source={require('./logo.png')} // Replace with your logo or avatar
          style={styles.image}
        />

        <Text style={styles.title}>Welcome to MyApp</Text>
        <Text style={styles.subtitle}>Let’s get started</Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonPrimary} onPress={() => handlePress('Start')}>
            <Text style={styles.buttonText}>Start</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonSecondary} onPress={() => handlePress('Settings')}>
            <Text style={styles.buttonTextSecondary}>Settings</Text>
          </TouchableOpacity>
        </View>
      </View>

      <StatusBar style="light" />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#001f3f',
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 20,
    padding: 30,
    width: '85%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#004080',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#444',
    marginTop: 8,
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    width: '100%',
  },
  buttonPrimary: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonSecondary: {
    backgroundColor: '#e0e0e0',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  buttonTextSecondary: {
    color: '#333',
    fontSize: 16,
    fontWeight: '600',
  },
});
