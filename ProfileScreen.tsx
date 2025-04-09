import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';


const trophies = [
  { id: '1', image: require('./assets/trophy.png'), count: 12 },
  { id: '2', image: require('./assets/trophy.png'), count: 0 },
  { id: '3', image: require('./assets/trophy.png'), count: 1 },
  { id: '4', image: require('./assets/trophy.png'), count: 5 },
  { id: '5', image: require('./assets/trophy.png'), count: 31 },
];

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: '#1e1e1e' }}>
      {/* Custom Header with Back Button */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text>
      </View>

      {/* Profile Section */}
      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        <View style={styles.profileContainer}>
          <Image source={require('./assets/profile-icon.png')} style={styles.profileImage} />
          <Text style={styles.userName}>Depon Ajaa</Text>
          <Text style={styles.userHandle}>ComFort_YT</Text>

          {/* Profile Menu */}
          <View style={styles.menuContainer}>
            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuText}>Online Status</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuText}>Share Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuText}>Edit Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuText}>Privacy</Text>
            </TouchableOpacity>
          </View>

          {/* Trophies Section */}
          <Text style={styles.sectionTitle}>Trophies</Text>
          <View style={styles.trophiesContainer}>
            {trophies.map((trophy) => (
              <View key={trophy.id} style={styles.trophy}>
                <Image source={trophy.image} style={styles.trophyImage} />
                <Text style={styles.trophyCount}>{trophy.count}</Text>
              </View>
            ))}
          </View>

          {/* Recently Played Section */}
          <Text style={styles.sectionTitle}>Recently Played</Text>
          <View style={styles.recentlyPlayed}>
            <Text style={styles.recentGame}>PES 2018</Text>
            <Text style={styles.recentGame}>Fortnite</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#003366',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backButton: {
    backgroundColor: '#003e96',
    padding: 10,
    borderRadius: 5,
  },
  backText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  headerTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: 20,
    padding: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  userName: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  userHandle: {
    color: '#b0b0b0',
    fontSize: 16,
    marginBottom: 20,
  },
  menuContainer: {
    width: '100%',
    marginBottom: 20,
  },
  menuItem: {
    backgroundColor: '#2c2c2c',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  menuText: {
    color: 'white',
    fontSize: 16,
  },
  sectionTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  trophiesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 20,
  },
  trophy: {
    alignItems: 'center',
  },
  trophyImage: {
    width: 40,
    height: 40,
    marginBottom: 5,
  },
  trophyCount: {
    color: 'white',
    fontSize: 14,
  },
  recentlyPlayed: {
    alignItems: 'center',
  },
  recentGame: {
    color: 'white',
    fontSize: 18,
    marginVertical: 5,
  },
});

export default ProfileScreen;
