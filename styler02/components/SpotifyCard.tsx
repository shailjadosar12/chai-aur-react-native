import {
  Image,
  Linking,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
} from 'react-native';
import React from 'react';

const SpotifyCard = () => {
  const openSpotifyApp = async () => {
    try {
      const initialURL = await Linking.getInitialURL();
      if (initialURL && initialURL.includes('spotify.com/track')) {
        // Spotify app is installed, handle the deep link
        // Example: Extract track ID and play the track
        // ...
        if (initialURL) playSpotifyTrack(`6rPO02ozF3bM7NnOV4h6s2`);
      } else {
        // Spotify app is not installed, redirect to app store
        const spotifyAppStoreURL = Platform.select({
          ios: 'https://apps.apple.com/us/app/spotify-music/id324684580',
          android:
            'https://play.google.com/store/apps/details?id=com.spotify.music',
        });
        if (spotifyAppStoreURL) Linking.openURL(spotifyAppStoreURL);
      }
    } catch (error) {
      console.error('Error checking initial URL:', error);
    }
  };
  const playSpotifyTrack = (trackId: string) => {
    const spotifyTrackURL = `https://open.spotify.com/track/${trackId}`;
    if (spotifyTrackURL) Linking.openURL(spotifyTrackURL);
  };
  return (
    <View>
      <Text style={styles.heading}>Spotify Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View>
          <Text style={styles.blogHeading}>Latest Spotify Track 2024</Text>
        </View>
        <Image
          source={{
            uri: 'https://images.pexels.com/photos/1876279/pexels-photo-1876279.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
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
            <TouchableOpacity onPress={openSpotifyApp}>
              <Text style={styles.socialLinks}>Play Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SpotifyCard;

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
    backgroundColor: '#1287A5',
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
