import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ElevatedCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Cards</Text>
      <ScrollView horizontal={true}>
        <View style={styles.container}>
          <View style={[styles.elevatedCard, styles.cardOne]}>
            <Text>Tap</Text>
          </View>
          <View style={[styles.elevatedCard, styles.cardOne]}>
            <Text>Tap</Text>
          </View>
          <View style={[styles.elevatedCard, styles.cardOne]}>
            <Text>Tap</Text>
          </View>
          <View style={[styles.elevatedCard, styles.cardOne]}>
            <Text>Tap</Text>
          </View>
          <View style={[styles.elevatedCard, styles.cardOne]}>
            <Text>Tap</Text>
          </View>
          <View style={[styles.elevatedCard, styles.cardOne]}>
            <Text>Tap</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ElevatedCards;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  elevatedCard: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

    height: 100,
    width: 100,
    margin: 8,
    borderRadius: 5,
  },
  cardOne: {
    backgroundColor: '#CAD5E2',
    elevation: 5,
  },
});
