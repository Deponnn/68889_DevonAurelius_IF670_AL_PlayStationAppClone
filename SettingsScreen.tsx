import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

const SettingsScreen = ({ navigation }) => {
  const handleSignOut = () => {
    // Navigate back to the Login Screen
    navigation.replace('Login');  // Using replace to remove the SettingsScreen from the navigation stack
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#1e1e1e' }}>
      {/* Header with Back button */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Settings</Text>
      </View>

      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {/* Section 1: PlayStation App */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>PlayStation App</Text>
          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionText}>Appearance</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionText}>Clear Cache</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionText}>Mobile Data Saving</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionText}>Push Notifications</Text>
          </TouchableOpacity>
        </View>

        {/* Section 2: Console Management */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Console Management</Text>
          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionText}>Captures</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionText}>Pair Console with App</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionText}>Scan QR Code</Text>
          </TouchableOpacity>
        </View>

        {/* Section 3: Party */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Party</Text>
          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionText}>Privacy</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionText}>Voice Chat Connection</Text>
          </TouchableOpacity>
        </View>

        {/* Section 4: PlayStation Network */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>PlayStation Network</Text>
          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionText}>Account Information</Text>
          </TouchableOpacity>
        </View>

        {/* Section 5: App and Legal Info */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>App and Legal Info</Text>
          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionText}>App Licence Agreement</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionText}>Privacy Policy</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionText}>PSN Terms of Service</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionText}>About PS Store</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Sign out Button */}
      <TouchableOpacity style={styles.signOutButton} onPress={handleSignOut}>
        <Text style={styles.signOutButtonText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#003366',
    padding: 15,
  },
  backText: {
    color: 'white',
    fontSize: 16,
    marginRight: 10,
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  scrollViewContent: {
    padding: 10,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    color: 'white',
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  option: {
    backgroundColor: '#2c2c2c',
    padding: 15,
    marginBottom: 5,
    borderRadius: 5,
  },
  optionText: {
    color: 'white',
    fontSize: 16,
  },
  signOutButton: {
    backgroundColor: 'red',
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 20,
  },
  signOutButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SettingsScreen;
