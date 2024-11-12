import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>IPTV Smarters</Text>
      </View>

      {/* Features Grid */}
      <View style={styles.featuresContainer}>
        <TouchableOpacity style={styles.featureBox} onPress={() => navigation.navigate('LiveTV')}>
          <Image
            source={require('../../assets/live-tv-icon.png')} // Replace with your asset
            style={styles.featureIcon}
          />
          <Text style={styles.featureText}>Live TV</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.featureBox} onPress={() => navigation.navigate('Movies')}>
          <Image
            source={require('../../assets/movies-icon.png')} // Replace with your asset
            style={styles.featureIcon}
          />
          <Text style={styles.featureText}>Movies</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.featureBox} onPress={() => navigation.navigate('Series')}>
          <Image
            source={require('../../assets/series-icon.png')} // Replace with your asset
            style={styles.featureIcon}
          />
          <Text style={styles.featureText}>Series</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.featureBox} onPress={() => navigation.navigate('Favorites')}>
          <Image
            source={require('../../assets/favorites-icon.png')} // Replace with your asset
            style={styles.featureIcon}
          />
          <Text style={styles.featureText}>Favorites</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a', // Dark theme
  },
  header: {
    height: 200,
    backgroundColor: '#292929',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerText: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
  },
  featuresContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  featureBox: {
    width: '40%',
    backgroundColor: '#333',
    margin: 10,
    borderRadius: 10,
    alignItems: 'center',
    padding: 20,
  },
  featureIcon: {
    width: 60,
    height: 60,
    marginBottom: 10,
  },
  featureText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default HomeScreen;
