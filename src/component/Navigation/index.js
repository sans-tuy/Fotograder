import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import SvgHome from '../../assets/icon/Home.svg';
import SvgProfile from '../../assets/icon/Profile.svg';

export default function Navigation({onProfile, onHome}) {
  return (
    <View style={styles.navigator}>
      <TouchableOpacity
        style={{alignItems: 'center', justifyContent: 'center'}}
        onPress={onHome}>
        <SvgHome />
        <Text style={styles.navigatorTitle}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{alignItems: 'center', justifyContent: 'center'}}
        onPress={onProfile}>
        <SvgProfile />
        <Text style={styles.navigatorTitle2}>Profil</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  navigator: {
    height: 56,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    justifyContent: 'space-around',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  navigatorTitle: {
    color: '#114393',
    fontSize: 10,
    fontFamily: 'Roboto',
  },
  navigatorTitle2: {
    color: 'black',
    fontSize: 10,
    fontFamily: 'Roboto',
  },
});
