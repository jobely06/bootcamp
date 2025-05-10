import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, StatusBar, Image, FlatList, KeyboardAvoidingView, Platform, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window'); // Get screen dimensions

export default function App() {
  // State to manage email and password input for login
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);  // To track login state
  const [messages, setMessages] = useState([
    { id: '1', text: 'Hello! How are you?' },
    { id: '2', text: 'I am good, thanks! How about you?' },
  ]);
  const [newMessage, setNewMessage] = useState('');

  // Function to handle login
  const handleLogin = () => {
    if (email === 'lapac@gmail.com' && password === 'password') {
      setIsLoggedIn(true);  // Set login state to true
    } else {
      alert('Invalid credentials');
    }
  };

  // Function to send a new message
  const sendMessage = () => {
    if (newMessage.trim()) {
      const newMessageObj = { id: String(messages.length + 1), text: newMessage };
      setMessages([...messages, newMessageObj]);
      setNewMessage('');
    }
  };

  // Render login form or chat UI based on login status
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <StatusBar style="auto" />
      {/* Logo in top-right corner if logged in */}
      <Image
        source={require('./assets/logo1.png')}
        style={isLoggedIn ? styles.logoSmall : styles.logo} // Change logo size and position after login
      />

      {/* App Title */}
      <Text style={styles.appName}>{isLoggedIn ? 'Marites Guild' : ''}</Text>

      {!isLoggedIn ? (
        // Login Form
        <>
          {/* Email Input */}
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />

          {/* Password Input */}
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          {/* Login Button */}
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          {/* Register Text */}
          <Text style={styles.registerText}>
            Don't have an account?{' '}
            <Text style={styles.link} onPress={() => alert('Navigate to Register')}>
              Sign Up
            </Text>
          </Text>
        </>
      ) : (
        // Chat UI after login
        <>
          {/* Chat messages */}
          <FlatList
            data={messages}
            renderItem={({ item }) => (
              <View style={styles.messageBubble}>
                <Text style={styles.messageText}>{item.text}</Text>
              </View>
            )}
            keyExtractor={(item) => item.id}
            style={styles.messageList}
            contentContainerStyle={styles.messageListContainer}
          />

          {/* Text input for new message */}
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Type a message..."
              value={newMessage}
              onChangeText={setNewMessage}
            />
            <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
              <Text style={styles.sendButtonText}>Send</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'lightskyblue',
  },
  logo: {
    position: 'absolute',
    top: height * 0.1, // 10% from the top of the screen
    right: width * 0.25, // 20% from the right of the screen
    width: width * 0.50,  // 30% of the screen width
    height: height * 0.25, // 20% of the screen height
  },
  logoSmall: {
    position: 'absolute',
    top: height * 0.05, // 5% from the top of the screen
    right: width * 0.05, // 5% from the right of the screen
    width: width * 0.15, // 15% of the screen width
    height: height * 0.1, // 10% of the screen height
  },
  appName: {
    fontSize: width * 0.08, // Adjust font size based on screen width
    fontWeight: 'bold',
    marginBottom: height * 0.05, // Margin relative to screen height
    color: '#2C3E50',
  },
  input: {
    height: height * 0.07, // Adjust input height based on screen height
    width: '100%',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    paddingLeft: 10,
    marginBottom: height * 0.02, // Margin relative to screen height
    backgroundColor: '#fff',
  },
  button: {
    height: height * 0.07, // Button height based on screen height
    width: '100%',
    backgroundColor: '#3498db',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: height * 0.02, // Margin relative to screen height
  },
  buttonText: {
    color: '#fff',
    fontSize: width * 0.05, // Font size based on screen width
    fontWeight: 'bold',
  },
  registerText: {
    color: '#7f8c8d',
  },
  link: {
    color: '#3498db',
    fontWeight: 'bold',
  },
  messageList: {
    flex: 1,
    width: '100%',
    marginBottom: height * 0.05, // Margin based on screen height
  },
  messageListContainer: {
    paddingBottom: 10,
  },
  messageBubble: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 20,
    marginBottom: 10,
    maxWidth: '80%',
    alignSelf: 'flex-start',
  },
  messageText: {
    color: '#fff',
    fontSize: width * 0.04, // Font size relative to screen width
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#ddd',
    width: '100%',
  },
  sendButton: {
    backgroundColor: '#3498db',
    padding: 10,
    marginLeft: 10,
    borderRadius: 20,
  },
  sendButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
