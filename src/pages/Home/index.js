import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Alert,
  Modal,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Navigation from '../../component/Navigation';
import SearchBar from '../../component/SearchBar';
import Jumbotron from '../../component/Jumbotron';
import Card from '../../component/card';

export default function Home({onProfile, onDetails, onHome}) {
  const data = {
    card: [
      {
        id: 1,
        title: 'sanusi',
        price: '50000',
        likes: '500',
      },
      {
        title: 'anwar',
        price: '25000',
        likes: '200',
        id: 2,
      },
      {
        title: 'sanusi kun',
        price: '125000',
        likes: '100',
        id: 3,
      },
      {
        title: 'sans',
        price: '75000',
        likes: '350',
        id: 4,
      },
    ],
  };
  const [items, setitems] = useState(data);
  const [modalVisible, setmodalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <SearchBar
          onModal={() => setmodalVisible(!modalVisible)}
          modalVisible={modalVisible}
        />
        <ScrollView>
          <View style={styles.jumbotron}>
            <Jumbotron />
          </View>
          <View style={styles.card}>
            {data.card.map(item => (
              <View style={{width: '50%'}} key={item.id}>
                <Card
                  title={item.title}
                  price={item.price}
                  likes={item.likes}
                />
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
      <Navigation onProfile={onProfile} onHome={onHome} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  card: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
    alignItems: 'flex-start',
    width: '90%',
    alignSelf: 'center',
  },
  jumbotron: {
    width: '90%',
    alignSelf: 'center',
  },
});
