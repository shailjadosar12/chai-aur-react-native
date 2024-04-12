import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const FancyCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQQZA8s3i80S9sJnQwPMBucnYOuPjOsPWuuWKP272agfS60vRU_0o1Vzv_6W03OySwua1OyWOjO2wlK9hVL2lzOgQ',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Hawa Mahal</Text>
          <Text style={styles.cardLabel}>Pink City, jaipur</Text>
          <Text style={styles.cardDescription}>
            The Hawa Mahal is a palace in the city of Jaipur, India. Built from
            red and pink sandstone, it is on the edge of the City Palace.
          </Text>
          <Text style={styles.cardFooter}>12 mins away</Text>
        </View>
      </View>
    </View>
  );
};

export default FancyCards;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  card: {
    backgroundColor: '#383837',
    height: 360,
    width: 380,
    marginHorizontal: 15,
    marginVertical: 10,
    borderRadius: 5,
  },
  cardElevated: {
    // backgroundColor: 'grey',
    elevation: 3,
    shadowOffset: {
      height: 5,
      width: 5,
    },
  },
  cardImage: {
    height: 180,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 5,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    margin: 5,
  },
  cardLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    margin: 3,
    color: 'white',
  },
  cardDescription: {
    fontSize: 10,

    margin: 3,
    color: 'white',
  },
  cardFooter: {
    color: 'white',
    margin: 3,
    alignSelf: 'flex-start',
    marginTop: 30,
  },
});
