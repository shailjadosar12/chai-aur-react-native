import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const FlatCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>FlatCards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text>blue</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text>green</Text>
        </View>
      </View>
    </View>
  );
};

export default FlatCards;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  container: {
    flex: 1,
    flexDirection: 'row-reverse',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  card: {
    height: 100,
    width: 100,
    borderRadius: 5,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  cardOne: {
    backgroundColor: '#EF5354',
  },
  cardTwo: {
    backgroundColor: '#42e6f5',
  },
  cardThree: {
    backgroundColor: '#42f587',
  },
});
