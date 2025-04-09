import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, Modal, Button } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

const recentGames = [
      {
        name: 'Fortnite',
        image: require('./assets/ps-logo.png'),
        played: '2068h',
        trophies: ['🏆', '🥇'],
        description: 'A popular battle royale game where you fight to be the last one standing.',
      },
      {
        name: 'Watchdogs 2',
        image: require('./assets/ps-logo.png'),
        played: '58h',
        trophies: ['🎖️', '🏅'],
        description: 'A hacking-themed open-world game set in a fictional version of San Francisco.',
      },
      {
        name: 'Uncharted 4',
        image: require('./assets/ps-logo.png'),
        played: '132h',
        trophies: ['🏆', '🥈', '🥇'],
        description: 'A thrilling action-adventure game that follows Nathan Drake on his treasure hunting journey.',
      },
      {
        name: 'Assassin Creed: Unity',
        image: require('./assets/ps-logo.png'),
        played: '205h',
        trophies: ['🥇', '🎮'],
        description: 'An open-world action-adventure game set during the French Revolution.',
      },
      {
        name: 'Resident Evil: Biohazard',
        image: require('./assets/ps-logo.png'),
        played: '80h',
        trophies: ['🕹️', '🏅'],
        description: 'A survival horror game that immerses you in a creepy, tense environment with zombies.',
      },
      {
        name: 'Grand Theft Auto V',
        image: require('./assets/ps-logo.png'),
        played: '1000h',
        trophies: ['🏆', '🥇', '🎖️'],
        description: 'An open-world action-adventure game set in the city of Los Santos.',
      },
      {
        name: 'Apex Legends',
        image: require('./assets/ps-logo.png'),
        played: '150h',
        trophies: ['🏆', '🥇'],
        description: 'A free-to-play battle royale with unique heroes and abilities.',
      },
      {
        name: 'FIFA 22',
        image: require('./assets/ps-logo.png'),
        played: '120h',
        trophies: ['🏆', '🥇'],
        description: 'A football simulation game offering realistic graphics and gameplay.',
      },
    ];

const HomeScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedGame, setSelectedGame] = useState(null);

  const handleGamePress = (game) => {
    setSelectedGame(game); // Set selected game to show details
    setModalVisible(true); // Open the modal
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedGame(null); // Reset selected game
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#1e1e1e' }}>
      {/* Header with Chat and Friendlist */}
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

      {/* ScrollView containing Profil, Notification, Settings, and Recently Played */}
      <ScrollView style={{ padding: 20 }}>
        
        {/* Profil Pengguna, Notifikasi, Pengaturan */}
        <View style={{ flexDirection: 'row', alignItems: 'center', paddingBottom: 10, backgroundColor: '#1e1e1e' }}>
          {/* Profil Pengguna */}
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image source={require('./assets/profile-icon.png')} style={{ width: 40, height: 40, borderRadius: 20 }} />
              <Text style={{ color: 'white', marginLeft: 10 }}>Depon Ajaa</Text>
            </View>
          </TouchableOpacity>

          {/* Ikon Notifikasi dan Pengaturan */}
          <View style={{ flexDirection: 'row', marginLeft: 'auto' }}>
            <TouchableOpacity onPress={() => navigation.navigate('Notification')} style={{ marginRight: 20 }}>
              <Image source={require('./assets/notification-icon.png')} style={{ width: 30, height: 30 }} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
              <Image source={require('./assets/settings-icon.png')} style={{ width: 30, height: 30 }} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Recently Played Section */}
        <Text style={{ color: 'white', fontSize: 22, marginBottom: 10 }}>Recently Played</Text>
        {recentGames.map((game, index) => (
          <Card key={index} style={{ marginBottom: 20, backgroundColor: '#2c2c2c' }}>
            <Card.Cover source={game.image} />
            <Card.Content>
              <Title style={{ color: 'white' }}>{game.name}</Title>
              <Paragraph style={{ color: 'white' }}>Played: {game.played}</Paragraph>
            </Card.Content>
            <Card.Actions>
              <Text style={{ color: '#003e96' }}>Trophies: {game.trophies.join(' ')}</Text>
            </Card.Actions>
            <TouchableOpacity onPress={() => handleGamePress(game)} style={{ padding: 10, backgroundColor: '#003e96', borderRadius: 5 }}>
              <Text style={{ color: 'white', textAlign: 'center' }}>View Details</Text>
            </TouchableOpacity>
          </Card>
        ))}
      </ScrollView>

      {/* Modal for Game Details */}
      {selectedGame && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={closeModal}
        >
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
            <View style={{ backgroundColor: '#1e1e1e', padding: 20, borderRadius: 10, width: '80%' }}>
              <Text style={{ color: 'white', fontSize: 20, marginBottom: 10 }}>{selectedGame.name}</Text>
              <Text style={{ color: 'white', marginBottom: 10 }}>{selectedGame.description}</Text>
              <Text style={{ color: 'white', marginBottom: 10 }}>Played: {selectedGame.played}</Text>
              <Button title="Close" onPress={closeModal} />
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
};

export default HomeScreen;
