import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Modal } from 'react-native';


const games = {
  topGames: [
    {
      name: 'FC 25',
      image: require('./assets/ps-logo.png'),
      price: 'Rp 999,000',
      tag: 'Game Trial',
      description: 'A new soccer experience with realistic gameplay and more.',
    },
    {
      name: 'The Show 25',
      image: require('./assets/ps-logo.png'),
      price: 'Rp 1,029,000',
      tag: '',
      description: 'Experience the excitement of MLB, with new features and gameplay.',
    },
    {
      name: 'NBA 2K23',
      image: require('./assets/ps-logo.png'),
      price: 'Rp 999,000',
      tag: '',
      description: 'The most realistic basketball simulation game.',
    },
    {
      name: 'FIFA 23',
      image: require('./assets/ps-logo.png'),
      price: 'Rp 1,199,000',
      tag: 'Popular',
      description: 'The ultimate football experience, now with hyper-realistic graphics.',
    },
    {
      name: 'Gran Turismo 7',
      image: require('./assets/ps-logo.png'),
      price: 'Rp 899,000',
      tag: 'Exclusive',
      description: 'Drive the most realistic cars in the world with GT7.',
    },
  ],
  newGames: [
    {
      name: 'Hamster Playground',
      image: require('./assets/ps-logo.png'),
      price: 'Free',
      description: 'A fun and exciting adventure game with your hamster friend.',
    },
    {
      name: 'Up',
      image: require('./assets/ps-logo.png'),
      price: 'Rp 139,000',
      description: 'An emotional journey of adventure and exploration.',
    },
    {
      name: 'Lego Star Wars',
      image: require('./assets/ps-logo.png'),
      price: 'Rp 499,000',
      description: 'Join the Lego version of the iconic Star Wars saga!',
    },
    {
      name: 'Minecraft Dungeons',
      image: require('./assets/ps-logo.png'),
      price: 'Rp 250,000',
      description: 'A dungeon-crawling adventure in the Minecraft universe.',
    },
    {
      name: 'Fall Guys',
      image: require('./assets/ps-logo.png'),
      price: 'Free',
      description: 'A battle royale style game featuring jellybean characters.',
    },
  ],
  shooter: [
    {
      name: 'Call of Duty',
      image: require('./assets/ps-logo.png'),
      price: 'Rp 499,000',
      description: 'Experience fast-paced warfare in this popular shooter series.',
    },
    {
      name: 'Apex Legends',
      image: require('./assets/ps-logo.png'),
      price: 'Free',
      description: 'A tactical battle royale game with unique characters and abilities.',
    },
    {
      name: 'Battlefield 2042',
      image: require('./assets/ps-logo.png'),
      price: 'Rp 899,000',
      description: 'Fight in large-scale battles with advanced vehicles and weapons.',
    },
    {
      name: 'Overwatch 2',
      image: require('./assets/ps-logo.png'),
      price: 'Free',
      description: 'A team-based shooter with unique heroes and abilities.',
    },
    {
      name: 'Valorant',
      image: require('./assets/ps-logo.png'),
      price: 'Free',
      description: 'A tactical first-person shooter with 5v5 gameplay.',
    },
  ],
  rpg: [
    {
      name: 'Final Fantasy XV',
      image: require('./assets/ps-logo.png'),
      price: 'Rp 899,000',
      description: 'Embark on a grand journey to save the world in this epic RPG.',
    },
    {
      name: 'The Witcher 3',
      image: require('./assets/ps-logo.png'),
      price: 'Rp 450,000',
      description: 'Play as Geralt of Rivia in a world filled with monsters and magic.',
    },
    {
      name: 'Elden Ring',
      image: require('./assets/ps-logo.png'),
      price: 'Rp 1,299,000',
      description: 'The next-generation RPG by FromSoftware, set in a vast open world.',
    },
    {
      name: 'Horizon Zero Dawn',
      image: require('./assets/ps-logo.png'),
      price: 'Rp 350,000',
      description: 'A stunning open-world RPG where you hunt robotic creatures.',
    },
    {
      name: 'Dragon Age Inquisition',
      image: require('./assets/ps-logo.png'),
      price: 'Rp 449,000',
      description: 'A fantasy RPG where you lead the Inquisition to save the world.',
    },
  ],
};

const PSStoreScreen = ({ navigation }) => {
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

      {/* Content */}
      <ScrollView style={{ padding: 20 }}>
        {/* Top Games Section */}
        <Text style={{ color: 'white', fontSize: 22, marginBottom: 10 }}>Top Games in Your Country</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ marginBottom: 20 }}>
          {games.topGames.map((game, index) => (
            <View key={index} style={{ marginRight: 10, backgroundColor: '#2c2c2c', borderRadius: 10, overflow: 'hidden' }}>
              <Image source={game.image} style={{ width: 150, height: 150, resizeMode: 'cover' }} />
              <View style={{ padding: 10 }}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>{game.name}</Text>
                <Text style={{ color: '#003e96' }}>{game.tag}</Text>
                <Text style={{ color: 'white' }}>{game.price}</Text>
                <TouchableOpacity onPress={() => openGameModal(game)} style={{ marginTop: 10, backgroundColor: '#003e96', padding: 10, borderRadius: 5 }}>
                  <Text style={{ color: 'white', textAlign: 'center' }}>More Info</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </ScrollView>

        {/* New Games Section */}
        <Text style={{ color: 'white', fontSize: 22, marginBottom: 10 }}>New Games for You</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ marginBottom: 20 }}>
          {games.newGames.map((game, index) => (
            <View key={index} style={{ marginRight: 10, backgroundColor: '#2c2c2c', borderRadius: 10, overflow: 'hidden' }}>
              <Image source={game.image} style={{ width: 150, height: 150, resizeMode: 'cover' }} />
              <View style={{ padding: 10 }}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>{game.name}</Text>
                <Text style={{ color: 'white' }}>{game.price}</Text>
                <TouchableOpacity onPress={() => openGameModal(game)} style={{ marginTop: 10, backgroundColor: '#003e96', padding: 10, borderRadius: 5 }}>
                  <Text style={{ color: 'white', textAlign: 'center' }}>More Info</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </ScrollView>

        {/* Shooter Games Section */}
        <Text style={{ color: 'white', fontSize: 22, marginBottom: 10 }}>Shooter Games</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ marginBottom: 20 }}>
          {games.shooter.map((game, index) => (
            <View key={index} style={{ marginRight: 10, backgroundColor: '#2c2c2c', borderRadius: 10, overflow: 'hidden' }}>
              <Image source={game.image} style={{ width: 150, height: 150, resizeMode: 'cover' }} />
              <View style={{ padding: 10 }}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>{game.name}</Text>
                <Text style={{ color: 'white' }}>{game.price}</Text>
                <TouchableOpacity onPress={() => openGameModal(game)} style={{ marginTop: 10, backgroundColor: '#003e96', padding: 10, borderRadius: 5 }}>
                  <Text style={{ color: 'white', textAlign: 'center' }}>More Info</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </ScrollView>

        {/* RPG Games Section */}
        <Text style={{ color: 'white', fontSize: 22, marginBottom: 10 }}>RPG Games</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ marginBottom: 20 }}>
          {games.rpg.map((game, index) => (
            <View key={index} style={{ marginRight: 10, backgroundColor: '#2c2c2c', borderRadius: 10, overflow: 'hidden' }}>
              <Image source={game.image} style={{ width: 150, height: 150, resizeMode: 'cover' }} />
              <View style={{ padding: 10 }}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>{game.name}</Text>
                <Text style={{ color: 'white' }}>{game.price}</Text>
                <TouchableOpacity onPress={() => openGameModal(game)} style={{ marginTop: 10, backgroundColor: '#003e96', padding: 10, borderRadius: 5 }}>
                  <Text style={{ color: 'white', textAlign: 'center' }}>More Info</Text>
                </TouchableOpacity>
              </View>
            </View>
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
            <View style={{ width: 300, backgroundColor: '#1e1e1e', padding: 20, borderRadius: 10 }}>
              <Text style={{ color: 'white', fontSize: 18 }}>{selectedGame.name}</Text>
              <Text style={{ color: 'white', marginTop: 10 }}>{selectedGame.description}</Text>
              <Text style={{ color: 'white', marginTop: 10 }}>Price: {selectedGame.price}</Text>
              <TouchableOpacity onPress={() => { /* Buy Now logic here */ }} style={{ marginTop: 20, backgroundColor: '#003e96', padding: 10, borderRadius: 5 }}>
                <Text style={{ color: 'white', textAlign: 'center' }}>Buy Now</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setModalVisible(false)} style={{ marginTop: 10, backgroundColor: '#f00', padding: 10, borderRadius: 5 }}>
                <Text style={{ color: 'white', textAlign: 'center' }}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
};

export default PSStoreScreen;
