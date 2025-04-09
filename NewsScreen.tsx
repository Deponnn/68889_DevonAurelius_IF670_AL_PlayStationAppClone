import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';


const newsUpdates = [
  {
    title: 'Fortnite',
    time: '7 hours ago',
    description: 'Ballistic Test Grounds — Ballistic’s first Test Grounds update is here! "Test Grounds" is a new playlist in Fortnite, replacing what was previously unranked Ballistic. The purpose of Test Grounds is for you to try out shell maps, and we’ve got two in v34.30!',
    image: require('./assets/ps-logo.png'), 
  },
  {
    title: 'Minecraft',
    time: '5 days ago',
    description: 'Minecraft has released a major update with new blocks, mobs, and gameplay features! Explore the updated world and discover new content.',
    image: require('./assets/ps-logo.png'), 
  },
  {
    title: 'The Witcher 3: Wild Hunt',
    time: '1 week ago',
    description: 'The Witcher 3: Wild Hunt received a new patch that fixes bugs and improves gameplay balance. A must-have for all Witcher fans!',
    image: require('./assets/ps-logo.png'), 
  },
  {
    title: 'Cyberpunk 2077',
    time: '1 week ago',
    description: 'Cyberpunk 2077 gets a huge update with new fixes, and improvements to gameplay! The dystopian world of Night City has never looked better.',
    image: require('./assets/ps-logo.png'), 
  },
  {
    title: 'Grand Theft Auto V',
    time: '10 days ago',
    description: 'Rockstar Games announces a major update for Grand Theft Auto V, bringing in new vehicles, missions, and bug fixes.',
    image: require('./assets/ps-logo.png'), 
  },
  {
    title: 'Red Dead Redemption 2',
    time: '2 weeks ago',
    description: 'Red Dead Redemption 2 gets a new update with additional story missions, performance improvements, and new online content!',
    image: require('./assets/ps-logo.png'), 
  },
  {
    title: 'Call of Duty: Warzone',
    time: '1 week ago',
    description: 'The new Call of Duty: Warzone update brings exciting new battle royale features, weapons, and maps for players to enjoy.',
    image: require('./assets/ps-logo.png'), 
  },
  {
    title: 'Apex Legends',
    time: '1 week ago',
    description: 'Apex Legends drops a big update with new characters, maps, and seasonal content that will keep you coming back for more.',
    image: require('./assets/ps-logo.png'), 
  },
  {
    title: 'FIFA 22',
    time: '3 days ago',
    description: 'FIFA 22 introduces new gameplay features, updated rosters, and a revamped Career Mode. Get your hands on the latest version today.',
    image: require('./assets/ps-logo.png'), 
  },
  {
    title: 'Overwatch 2',
    time: '4 days ago',
    description: 'Overwatch 2 Beta is finally here with new heroes, maps, and exciting new game modes! The team-based shooter has evolved.',
    image: require('./assets/ps-logo.png'), 
  },
  {
    title: 'Horizon Forbidden West',
    time: '1 day ago',
    description: 'Horizon Forbidden West update brings new story content, improved graphics, and new gameplay mechanics for Aloy\'s adventure.',
    image: require('./assets/ps-logo.png'), 
  },
  {
    title: 'Assassin’s Creed Valhalla',
    time: '3 days ago',
    description: 'Assassin’s Creed Valhalla expands with a brand new DLC! Embark on an exciting journey with new raids, locations, and storylines.',
    image: require('./assets/ps-logo.png'), 
  },
  {
    title: 'Final Fantasy XVI',
    time: '2 weeks ago',
    description: 'Final Fantasy XVI reveals new gameplay mechanics and stunning visuals in their latest trailer. The game promises to be one of the biggest RPGs of the year.',
    image: require('./assets/ps-logo.png'), 
  },
  {
    title: 'Dying Light 2',
    time: '5 days ago',
    description: 'Dying Light 2’s latest update adds new parkour moves, improved combat mechanics, and new content for survivors to enjoy.',
    image: require('./assets/ps-logo.png'), 
  },
];

const NewsScreen = ({ navigation }) => {
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

      {/* Content */}
      <ScrollView style={{ padding: 20 }}>
        {newsUpdates.map((news, index) => (
          <View key={index} style={{ marginBottom: 20, backgroundColor: '#2c2c2c', borderRadius: 10, overflow: 'hidden' }}>
            {/* Image and Title */}
            <Image source={news.image} style={{ width: '100%', height: 200, resizeMode: 'cover' }} />
            <View style={{ padding: 10 }}>
              <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>{news.title}</Text>
              <Text style={{ color: 'white', fontSize: 12, marginBottom: 10 }}>{news.time}</Text>
              <Text style={{ color: 'white', fontSize: 14, marginBottom: 10 }}>{news.description}</Text>
              <TouchableOpacity
                onPress={() => alert('Learn More')}
                style={{
                  backgroundColor: '#003e96',
                  paddingVertical: 8,
                  paddingHorizontal: 15,
                  borderRadius: 5,
                  alignItems: 'center',
                }}
              >
                <Text style={{ color: 'white', fontSize: 14 }}>Learn More</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default NewsScreen;
