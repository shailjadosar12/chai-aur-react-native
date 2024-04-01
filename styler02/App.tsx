import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FlatCards from './components/FlatCards';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <FlatCards />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
