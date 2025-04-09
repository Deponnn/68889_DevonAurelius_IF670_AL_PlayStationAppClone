import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const friendsData = [
  { id: '1', name: 'Boldne0', lastOnline: '8 months ago', status: 'Offline', image: require('./assets/profile-icon.png') },
  { id: '2', name: 'harrygunawan149', lastOnline: 'over a year ago', status: 'Offline', image: require('./assets/profile-icon.png') },
  { id: '3', name: 'Jonessen_28', lastOnline: 'over a year ago', status: 'Offline', image: require('./assets/profile-icon.png') },
  { id: '4', name: 'Jorgensen_07', lastOnline: '5 months ago', status: 'Online', image: require('./assets/profile-icon.png') },
  { id: '5', name: 'KANG_Jagoan', lastOnline: '2 months ago', status: 'Offline', image: require('./assets/profile-icon.png') },
  { id: '6', name: 'Kuroku_ID', lastOnline: 'over a year ago', status: 'Offline', image: require('./assets/profile-icon.png') },
  { id: '7', name: 'NotAriesss', lastOnline: 'over a year ago', status: 'Offline', image: require('./assets/profile-icon.png') },
  { id: '8', name: 'PikuserukaSame', lastOnline: '1 week ago', status: 'Online', image: require('./assets/profile-icon.png') },
];

const FriendListScreen = ({ navigation }) => {

  const renderFriendItem = ({ item }) => (
    <View style={styles.friendItem}>
      <Image source={item.image} style={styles.profileImage} />
      <View style={styles.friendContent}>
        <Text style={styles.friendName}>{item.name}</Text>
        <Text style={styles.lastOnline}>{`Last online ${item.lastOnline}`}</Text>
      </View>
      <Text style={item.status === 'Online' ? styles.onlineStatus : styles.offlineStatus}>{item.status}</Text>
    </View>
  );

  return (
    <View style={{ flex: 1, backgroundColor: '#1e1e1e' }}>
      {/* Custom Header with Back Button */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Friends</Text>
      </View>

      {/* Friends List */}
      <FlatList
        data={friendsData}
        keyExtractor={(item) => item.id}
        renderItem={renderFriendItem}
        style={styles.friendList}
      />
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
  friendList: {
    padding: 10,
  },
  friendItem: {
    flexDirection: 'row',
    backgroundColor: '#2c2c2c',
    marginBottom: 15,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  friendContent: {
    marginLeft: 10,
    flex: 1,
  },
  friendName: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  lastOnline: {
    color: '#b0b0b0',
    fontSize: 14,
  },
  onlineStatus: {
    color: '#00FF00', // Green for online
  },
  offlineStatus: {
    color: '#FF0000', // Red for offline
  },
});

export default FriendListScreen;

