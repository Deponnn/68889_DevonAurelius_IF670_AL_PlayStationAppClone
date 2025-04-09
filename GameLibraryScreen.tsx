import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Modal, ScrollView, StyleSheet } from 'react-native';


const gamesInLibrary = [
  {
    name: 'Fortnite',
    image: require('./assets/ps-logo.png'),
    description: 'A battle royale game where you build, fight, and survive.',
  },
  {
    name: 'Watchdogs 2',
    image: require('./assets/ps-logo.png'),
    description: 'An open-world game with a hacker protagonist, set in San Francisco.',
  },
  {
    name: 'Uncharted 4',
    image: require('./assets/ps-logo.png'),
    description: 'An action-adventure game about Nathan Drake exploring ancient treasures.',
  },
  {
    name: 'Assassin Creed: Unity',
    image: require('./assets/ps-logo.png'),
    description: 'A historical action RPG set in the French Revolution with stealth and parkour elements.',
  },
  {
    name: 'Resident Evil: Biohazard',
    image: require('./assets/ps-logo.png'),
    description: 'A survival horror game where you battle mutated monsters in a spooky mansion.',
  },
  {
    name: 'Grand Theft Auto V',
    image: require('./assets/ps-logo.png'),
    description: 'An open-world action-adventure game where you perform missions in the city of Los Santos.',
  },
  {
    name: 'Apex Legends',
    image: require('./assets/ps-logo.png'),
    description: 'A fast-paced, team-based battle royale shooter game with unique characters.',
  },
  {
    name: 'FIFA 22',
    image: require('./assets/ps-logo.png'),
    description: 'A soccer simulation game that lets you play with real-world teams and players.',
  },
];

const GameLibraryScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedGame, setSelectedGame] = useState(null);

  const openGameModal = (game) => {
    setSelectedGame(game);
    setModalVisible(true);
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#1e1e1e' }}>
      {/* Custom Header */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10, backgroundColor: '#003366' }}>
        <Image source={require('./assets/ps-logo.png')} style={{ width: 40, height: 40 }} />
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => navigation.navigate('Chat')} style={{ marginRight: 20 }}>
            <Image source={require('./assets/chat-icon.png')} style={{ width: 30, height: 30 }} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Friend List')}>
            <Image source={require('./assets/friendlist-icon.png')} style={{ width: 30, height: 30 }} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Game Library Content */}
      <ScrollView style={{ padding: 20 }}>
        <Text style={{ color: 'white', fontSize: 22, marginBottom: 10 }}>Games in Your Library</Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {gamesInLibrary.map((game, index) => (
            <TouchableOpacity key={index} onPress={() => openGameModal(game)} style={styles.gameCard}>
              <Image source={game.image} style={styles.gameImage} />
              <Text style={styles.gameName}>{game.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </ScrollView>

      {/* Modal Pop-up for Selected Game */}
      {selectedGame && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
            <View style={styles.modalContent}>
              <Text style={{ color: 'white', fontSize: 18, marginBottom: 10 }}>{selectedGame.name}</Text>
              <Text style={{ color: 'white', marginBottom: 20 }}>{selectedGame.description}</Text>
              <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeButton}>
                <Text style={{ color: 'white' }}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  gameCard: {
    marginRight: 15,
    backgroundColor: '#2c2c2c',
    borderRadius: 10,
    overflow: 'hidden',
    width: 150,
    alignItems: 'center',
  },
  gameImage: {
    width: 150,
    height: 150,
    resizeMode: 'cover',
  },
  gameName: {
    color: 'white',
    padding: 10,
    fontWeight: 'bold',
  },
  modalContent: {
    width: 300,
    backgroundColor: '#1e1e1e',
    padding: 20,
    borderRadius: 10,
  },
  closeButton: {
    backgroundColor: '#003e96',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
  },
});

export default GameLibraryScreen;
