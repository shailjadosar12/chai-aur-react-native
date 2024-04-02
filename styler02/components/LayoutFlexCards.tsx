import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const LayoutFlexCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>Layout With Flex Cards</Text>
      <View style={styles.container}>
        <View style={[styles.card, {backgroundColor: '#afedea'}]} />
        <View style={[styles.card, {backgroundColor: 'skyblue'}]} />
        <View style={[styles.card, {backgroundColor: 'steelblue'}]} />
      </View>
    </View>
  );
};

export default LayoutFlexCards;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  container: {
    flex: 1,
    margin: 8,
  },
  card: {
    flex: 1,
    height: 100,
    width: 100,
  },
});
