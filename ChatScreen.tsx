import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const chatData = [
  { id: '1', name: 'User1', message: 'Hey, how are you?', unread: 3 },
  { id: '2', name: 'User2', message: 'Let\'s play tomorrow!', unread: 0 },
  { id: '3', name: 'User3', message: 'Where are we meeting?', unread: 1 },
  { id: '4', name: 'User4', message: 'Have you finished the game?', unread: 5 },
  { id: '5', name: 'User5', message: 'Check this out, cool!', unread: 2 },
  { id: '6', name: 'User6', message: 'Let\'s chat later.', unread: 0 },
  { id: '7', name: 'User7', message: 'Got a new game, wanna play?', unread: 0 },
  { id: '8', name: 'User8', message: 'You missed the stream!', unread: 4 },
  { id: '9', name: 'User9', message: 'What\'s your favorite game?', unread: 6 },
  { id: '10', name: 'User10', message: 'Are you free today?', unread: 0 },
];

const ChatScreen = ({ navigation }) => {
  const renderChatItem = ({ item }) => (
    <TouchableOpacity style={styles.chatItem}>
      <Image
        source={require('./assets/profile-icon.png')}
        style={styles.profileImage}
      />
      <View style={styles.chatContent}>
        <Text style={styles.username}>{item.name}</Text>
        <Text style={styles.message}>{item.message}</Text>
      </View>
      {item.unread > 0 && (
        <View style={styles.unreadBadge}>
          <Text style={styles.unreadText}>{item.unread}</Text>
        </View>
      )}
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1, backgroundColor: '#1e1e1e' }}>
      {/* Back Button */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
      </View>

      {/* Chat List */}
      <FlatList
        data={chatData}
        keyExtractor={(item) => item.id}
        renderItem={renderChatItem}
        style={styles.chatList}
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
  chatList: {
    padding: 10,
  },
  chatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2c2c2c',
    marginBottom: 15,
    padding: 10,
    borderRadius: 10,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  chatContent: {
    flex: 1,
    marginLeft: 10,
  },
  username: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  message: {
    color: '#b0b0b0',
    fontSize: 14,
  },
  unreadBadge: {
    backgroundColor: '#003e96',
    padding: 5,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  unreadText: {
    color: 'white',
    fontSize: 12,
  },
});

export default ChatScreen;
