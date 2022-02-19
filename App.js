import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Intro from './src/pages/Intro';
import Home from './src/pages/Home';
import SignInPembeli from './src/pages/SignInPembeli';

export default function App() {
  return (
    <View>
      {/* <Intro /> */}
      <View>
        <SignInPembeli />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
