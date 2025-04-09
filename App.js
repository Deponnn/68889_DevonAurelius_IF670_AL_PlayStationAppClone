import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';  // Import Ionicons untuk ikon
import { TouchableOpacity, Image } from 'react-native';

// Mengimpor screens
import HomeScreen from './HomeScreen';  // Pastikan path sesuai
import NewsScreen from './NewsScreen';  // Pastikan path sesuai
import PSStoreScreen from './PSStoreScreen';  // Pastikan path sesuai
import GameLibraryScreen from './GameLibraryScreen';  // Pastikan path sesuai
import SearchScreen from './SearchScreen';  // Pastikan path sesuai
import LoginScreen from './LoginScreen';  // Pastikan path sesuai
import RegisterScreen from './RegisterScreen';  // Pastikan path sesuai
import ChatScreen from './ChatScreen';  // ChatScreen yang baru
import FriendListScreen from './FriendListScreen';  // FriendListScreen yang baru
import ProfileScreen from './ProfileScreen'; // Pastikan path sesuai
import NotificationScreen from './NotificationScreen'; // Pastikan path sesuai
import SettingsScreen from './SettingsScreen'; // Pastikan path sesuai

// Stack navigator untuk Login dan Register
const Stack = createStackNavigator();

// Bottom Tab navigator untuk Home
const Tab = createBottomTabNavigator();

// Tab navigasi yang hanya ada di Home
const HomeTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarStyle: { backgroundColor: '#003366', borderTopColor: '#003366' },
        tabBarActiveTintColor: '#ffffff', // Active tab color
        tabBarInactiveTintColor: '#b0b0b0', // Inactive tab color
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
          headerShown: false, // Menonaktifkan header pada tab Home
        }}
      />
      <Tab.Screen
        name="News"
        component={NewsScreen}
        options={{
          tabBarLabel: 'News',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="newspaper" color={color} size={size} />
          ),
          headerShown: false, // Menonaktifkan header pada tab News
        }}
      />
      <Tab.Screen
        name="PS Store"
        component={PSStoreScreen}
        options={{
          tabBarLabel: 'PS Store',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="storefront" color={color} size={size} />
          ),
          headerShown: false, // Menonaktifkan header pada tab PS Store
        }}
      />
      <Tab.Screen
        name="Game Library"
        component={GameLibraryScreen}
        options={{
          tabBarLabel: 'Game Library',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="game-controller" color={color} size={size} />
          ),
          headerShown: false, // Menonaktifkan header pada tab Game Library
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" color={color} size={size} />
          ),
          headerShown: false, // Menonaktifkan header pada tab Search
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }} // Menyembunyikan header di halaman Login
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ headerShown: false }} // Menyembunyikan header di halaman Register
        />
        <Stack.Screen
          name="Home"
          component={HomeTabs} // Menampilkan Bottom Tab Navigator di Home
          options={{ headerShown: false }} // Menyembunyikan header di halaman Home
        />
        <Stack.Screen
          name="News"
          component={NewsScreen}
          options={{ headerShown: false }} // Menyembunyikan header di halaman News
        />
        <Stack.Screen
          name="PS Store"
          component={PSStoreScreen}
          options={{ headerShown: false }} // Menyembunyikan header di halaman PS Store
        />
        <Stack.Screen
          name="Game Library"
          component={GameLibraryScreen}
          options={{ headerShown: false }} // Menyembunyikan header di halaman Game Library
        />
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{ headerShown: false }} // Menyembunyikan header di halaman Search
        />
        <Stack.Screen
          name="Chat"
          component={ChatScreen}
          options={{ headerShown: false }} // Menyembunyikan header di halaman Chat
        />
        <Stack.Screen
          name="Friend List"
          component={FriendListScreen}
          options={{ headerShown: false }} // Menyembunyikan header di halaman Friend List
        />
        {/* Menambahkan Profile, Notification dan Settings Screens */}
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ headerShown: false }} // Menyembunyikan header di halaman Profile
        />
        <Stack.Screen
          name="Notification"
          component={NotificationScreen}
          options={{ headerShown: false }} // Menyembunyikan header di halaman Notification
        />
        <Stack.Screen
          name="Settings"
          component={SettingsScreen}
          options={{ headerShown: false }} // Menyembunyikan header di halaman Settings
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
