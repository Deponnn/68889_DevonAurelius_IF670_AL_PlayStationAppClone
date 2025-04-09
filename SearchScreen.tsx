import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';


const gamesData = [
  { name: 'Fortnite' },
  { name: 'Watchdogs 2' },
  { name: 'Uncharted 4' },
  { name: 'Assassin Creed: Unity' },
  { name: 'Resident Evil: Biohazard' },
  { name: 'Grand Theft Auto V' },
  { name: 'Apex Legends' },
  { name: 'FIFA 22' },
  { name: 'Red Dead Redemption II' },
  { name: 'It Takes Two' },
];

const SearchScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredGames, setFilteredGames] = useState(gamesData);

  // Filter the games based on the search query
  const handleSearch = (query) => {
    setSearchQuery(query);
    const filtered = gamesData.filter(game => game.name.toLowerCase().includes(query.toLowerCase()));
    setFilteredGames(filtered);
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#1e1e1e' }}>
      {/* Custom Header */}
      <View style={styles.header}>
        <Image source={require('./assets/ps-logo.png')} style={styles.headerLogo} />
        <View style={styles.headerIcons}>
          <TouchableOpacity onPress={() => navigation.navigate('Chat')} style={styles.icon}>
            <Image source={require('./assets/chat-icon.png')} style={styles.iconImage} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Friend List')} style={styles.icon}>
            <Image source={require('./assets/friendlist-icon.png')} style={styles.iconImage} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search for a game"
          placeholderTextColor="#b0b0b0"
          value={searchQuery}
          onChangeText={handleSearch}
        />
      </View>

      {/* Display the filtered games */}
      <FlatList
        data={filteredGames}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.gameCard}>
            <Text style={styles.gameName}>{item.name}</Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.gameList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#003366',
  },
  headerLogo: {
    width: 40,
    height: 40,
  },
  headerIcons: {
    flexDirection: 'row',
  },
  icon: {
    marginRight: 20,
  },
  iconImage: {
    width: 30,
    height: 30,
  },
  searchContainer: {
    padding: 10,
  },
  searchBar: {
    backgroundColor: '#2c2c2c',
    padding: 10,
    borderRadius: 5,
    color: 'white',
  },
  gameCard: {
    marginBottom: 15,
    backgroundColor: '#2c2c2c',
    borderRadius: 10,
    padding: 15,
    marginHorizontal: 5,
  },
  gameName: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  gameList: {
    paddingBottom: 20,
  },
});

export default SearchScreen;
