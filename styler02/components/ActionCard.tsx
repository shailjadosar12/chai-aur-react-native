import {
  Image,
  Linking,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const ActionCard = () => {
  function openWebsite(url: string) {
    Linking.openURL(url);
  }
  const openAppSettings = () => {
    Linking.openSettings();
  };
  return (
    <View>
      <Text style={styles.heading}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View>
          <Text style={styles.blogHeading}>
            What's new in Javascript 21 - ES12
          </Text>
        </View>
        <Image
          source={{
            uri: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQQZA8s3i80S9sJnQwPMBucnYOuPjOsPWuuWKP272agfS60vRU_0o1Vzv_6W03OySwua1OyWOjO2wlK9hVL2lzOgQ',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text numberOfLines={3}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit enim,
            vero modi incidunt nisi reiciendis cum. Culpa est earum quam
            similique, deleniti harum debitis atque ullam cum expedita nulla
            quod.
          </Text>
          <View style={styles.footerContainer}>
            <TouchableOpacity
              onPress={() =>
                openWebsite(
                  'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQQZA8s3i80S9sJnQwPMBucnYOuPjOsPWuuWKP272agfS60vRU_0o1Vzv_6W03OySwua1OyWOjO2wlK9hVL2lzOgQ',
                )
              }>
              <Text style={styles.socialLinks}>Read more</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={openAppSettings}>
              <Text style={styles.socialLinks}>App Info</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ActionCard;

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  blogHeading: {
    textAlign: 'center',
    color: 'black',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 8,
    marginTop: 8,
  },
  card: {
    backgroundColor: '#383837',
    height: 340,
    width: 380,
    marginHorizontal: 15,
    marginVertical: 10,
    borderRadius: 5,
  },
  elevatedCard: {
    backgroundColor: '#E07C24',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.4,
  },
  cardBody: {flex: 1, flexGrow: 1, paddingHorizontal: 5},
  cardImage: {
    height: 180,
    margin: 5,
    borderRadius: 8,
  },

  socialLinks: {
    backgroundColor: '#ffffff',
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderRadius: 3,
    marginHorizontal: 5,
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 8,
  },
});
