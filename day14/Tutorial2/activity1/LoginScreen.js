import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';  // For eye icon

// Styled components
const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #f7f7f7;
`;

const Title = styled.Text`
  font-size: 36px;
  font-weight: bold;
  color: #4b6cb7;
  margin-bottom: 40px;
`;

const InputContainer = styled.View`
  width: 80%;
  margin-bottom: 15px;
  background-color: #fff;
  border-radius: 10px;
  padding: 10px;
  elevation: 3; /* for Android shadow */
  shadow-color: #000; 
  shadow-opacity: 0.1; 
  shadow-radius: 5px;
`;

const Input = styled.TextInput`
  width: 100%;
  height: 40px;
  font-size: 16px;
  padding-left: 10px;
`;

const Button = styled.TouchableOpacity`
  background-color: #4b6cb7;
  width: 80%;
  height: 45px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-top: 20px;
`;

const ButtonText = styled.Text`
  font-size: 18px;
  color: white;
  font-weight: bold;
`;

const EyeIcon = styled(Icon)`
  position: absolute;
  right: 10px;
  top: 15px;
`;

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    // Login logic goes here
    console.log('Logged in with:', email, password);
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
        <Container>
          <Title>Login</Title>

          {/* Email Input */}
          <InputContainer>
            <Input
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />
          </InputContainer>

          {/* Password Input */}
          <InputContainer>
            <Input
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
            />
            <EyeIcon
              name={showPassword ? 'visibility' : 'visibility-off'}
              size={24}
              color="#4b6cb7"
              onPress={() => setShowPassword(!showPassword)}
            />
          </InputContainer>

          {/* Login Button */}
          <Button onPress={handleLogin}>
            <ButtonText>Log In</ButtonText>
          </Button>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
