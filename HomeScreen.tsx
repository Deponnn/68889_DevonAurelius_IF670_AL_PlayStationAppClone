import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

const recentGames = [
  {
    name: 'PRO EVOLUTION SOCCER 2018',
    image: require('./assets/ps-logo.png'),
    played: '10h',
    trophies: ['🛡️', '🏆', '🥈'],
  },
  {
    name: 'Fortnite',
    image: require('./assets/ps-logo.png'),
    played: '2068h',
    trophies: ['🏆', '🥇'],
  },
  {
    name: 'Watchdogs 2',
    image: require('./assets/ps-logo.png'),
    played: '58h',
    trophies: ['🎖️', '🏅'],
  },
  {
    name: 'Uncharted 4',
    image: require('./assets/ps-logo.png'),
    played: '132h',
    trophies: ['🏆', '🥈', '🥇'],
  },
  {
    name: 'Assassin Creed: Unity',
    image: require('./assets/ps-logo.png'),
    played: '205h',
    trophies: ['🥇', '🎮'],
  },
  {
    name: 'Overwatch 2',
    image: require('./assets/ps-logo.png'),
    played: '110h',
    trophies: ['🥇', '🏆'],
  },
  {
    name: 'Resident Evil: Biohazard',
    image: require('./assets/ps-logo.png'),
    played: '80h',
    trophies: ['🕹️', '🏅'],
  },
];

const HomeScreen = ({ navigation }) => {
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
          </Card>
        ))}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
