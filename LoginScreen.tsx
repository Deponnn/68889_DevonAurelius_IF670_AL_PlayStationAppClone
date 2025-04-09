import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Home: undefined;  // Menambahkan Home ke dalam param list navigasi
};

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

interface LoginScreenProps {
  navigation: LoginScreenNavigationProp;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Logic untuk login (misalnya cek email dan password)
    if (email && password) {
      alert('Login Successful!');
      navigation.navigate('Home');  // Navigasi ke Home setelah login berhasil
    } else {
      alert('Please fill out both email and password.');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20, backgroundColor: '#003366' }}>
      <Image source={require('./assets/ps-logo.png')} style={{ width: 150, height: 150, alignSelf: 'center', marginBottom: 20 }} />
      
      <Text style={{ fontSize: 30, textAlign: 'center', color: 'white', marginBottom: 20 }}>Welcome to PlayStation App</Text>
      <Text style={{ fontSize: 16, textAlign: 'center', color: 'white', marginBottom: 30 }}>Sign In</Text>
      
      <TextInput
        label="Sign-In ID (Email Address)"
        mode="outlined"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
        style={{ marginBottom: 20, backgroundColor: 'white' }}
        theme={{ colors: { primary: '#003e96' } }}
      />
      
      <TextInput
        label="Password"
        mode="outlined"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={{ marginBottom: 20, backgroundColor: 'white' }}
        theme={{ colors: { primary: '#003e96' } }}
      />
      
      <Button
        mode="contained"
        onPress={handleLogin}
        style={{ marginBottom: 10, backgroundColor: 'white' }}
        labelStyle={{ color: 'black', textAlign: 'center' }}
      >
        Sign In
      </Button>
      
      <Button
        mode="text"
        onPress={() => navigation.navigate('Register')}
        labelStyle={{ color: 'white' }}
        style={{ alignSelf: 'center' }}
      >
        Register
      </Button>
    </View>
  );
};

export default LoginScreen;
