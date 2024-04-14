import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FlatCards from './components/FlatCards';
import ElevatedCards from './components/ElevatedCards';
import LayoutFlexCards from './components/LayoutFlexCards';
import FancyCards from './components/FancyCards';
import ActionCard from './components/ActionCard';
import SpotifyCard from './components/SpotifyCard';
import ContactList from './components/ContactList';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <FlatCards />
          <ElevatedCards />
          <FancyCards />
          <ActionCard />
          <ContactList />
          <SpotifyCard />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
