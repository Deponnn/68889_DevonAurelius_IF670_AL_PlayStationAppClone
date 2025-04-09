import React from 'react';
import { View, Text, Alert } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { StackNavigationProp } from '@react-navigation/stack';

// Tipe untuk navigasi
type RootStackParamList = {
  Login: undefined;
  Register: undefined;
};

type RegisterScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Register'>;

interface RegisterScreenProps {
  navigation: RegisterScreenNavigationProp;
}

const RegisterScreen: React.FC<RegisterScreenProps> = ({ navigation }) => {
  
  // Fungsi untuk menampilkan notifikasi dan kembali ke halaman login
  const handleRegister = () => {
    // Menampilkan notifikasi pop-up
    Alert.alert('Account Created!', 'Your account has been successfully created.', [
      {
        text: 'OK',
        onPress: () => {
          // Navigasi kembali ke halaman login
          navigation.navigate('Login');
        },
      },
    ]);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20, backgroundColor: 'black' }}>
      <Text style={{ fontSize: 30, textAlign: 'center', marginBottom: 20, color: 'white' }}>Create a PlayStation Account</Text>
      <Text style={{ fontSize: 16, textAlign: 'center', marginBottom: 30, color: 'white' }}>Sign Up</Text>
      
      <TextInput
        label="Email Address"
        mode="outlined"
        keyboardType="email-address"
        style={{ marginBottom: 20, backgroundColor: 'white' }}
        theme={{ colors: { primary: '#003e96' } }} // Removed underlineColor
      />
      
      <TextInput
        label="Password"
        mode="outlined"
        secureTextEntry
        style={{ marginBottom: 20, backgroundColor: 'white' }}
        theme={{ colors: { primary: '#003e96' } }} // Removed underlineColor
      />
      
      <Button mode="contained" onPress={handleRegister} style={{ marginBottom: 10, backgroundColor: '#003e96' }}>
        Register
      </Button>
      
      <Button
        mode="text"
        onPress={() => navigation.navigate('Login')}
        labelStyle={{ color: '#003e96' }} // Use labelStyle for text color
        style={{ alignSelf: 'center' }}
      >
        Already have an account? Sign In
      </Button>
    </View>
  );
};

export default RegisterScreen;
