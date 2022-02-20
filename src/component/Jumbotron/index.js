import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SvgJumbotron from '../../assets/images/Jumbotron.svg';

export default function Jumbotron() {
  return (
    <View style={{alignItems: 'center'}}>
      <SvgJumbotron style={styles.jumbotron} />
    </View>
  );
}

const styles = StyleSheet.create({});
