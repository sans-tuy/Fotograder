import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Intro from './src/pages/Intro';
import Home from './src/pages/Home';
import SignInPembeli from './src/pages/SignInPembeli';
import SignInFotografer from './src/pages/SignInFotografer';
import SignUpFotografer from './src/pages/SignUpFotografer';
import SignUpPembeli from './src/pages/SignUpPembeli';

export default function App() {
  return (
    <View style={{color: '#ffff', flex: 1}}>
      {/* <Intro /> */}
      <View>
        <SignUpFotografer />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
