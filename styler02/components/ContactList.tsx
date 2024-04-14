import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ContactList = () => {
  const contacts = [
    {
      uid: 1,
      name: 'Hitesh Choudhary',
      status: 'Just an extra ordinary teacher',
      imageUrl: 'https://avatars.githubusercontent.com/u/11613311?v=4',
    },
    {
      uid: 2,
      name: 'Anurag Tiwari',
      status: 'I ❤️ To Code and Teach!',
      imageUrl: 'https://avatars.githubusercontent.com/u/94738352?v=4',
    },
    {
      uid: 3,
      name: 'Sanket Singh',
      status: 'Making your GPay smooth',
      imageUrl: 'https://avatars.githubusercontent.com/u/29747452?v=4',
    },
    {
      uid: 4,
      name: 'Anirudh Jwala',
      status: 'Building secure Digital banks',
      imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
    },
  ];
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map(contact => (
          <View style={styles.userCard} key={contact.uid}>
            <Image source={{uri: contact.imageUrl}} style={styles.image} />
            <View>
              <Text style={styles.text}>{contact.name}</Text>
              <Text style={styles.text}>{contact.status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default ContactList;

const styles = StyleSheet.create({
  headingText: {
    paddingHorizontal: 8,
    fontSize: 24,
    fontWeight: 'bold',
  },
  container: {
    marginBottom: 4,
  },
  userCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2B2B52',
    marginHorizontal: 15,
    borderRadius: 5,
    marginBottom: 3,
    padding: 15,
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 30,
  },
  text: {color: '#ffffff', paddingHorizontal: 15},
});
