import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SvgHome from '../../assets/icon/Home.svg';
import SvgProfile from '../../assets/icon/Profile.svg';

export default function Navigation() {
  return (
    <View style={styles.navigator}>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <SvgHome />
        <Text style={styles.navigatorTitle}>Home</Text>
      </View>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <SvgProfile />
        <Text style={styles.navigatorTitle2}>Profil</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navigator: {
    height: 56,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
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
