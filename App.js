import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Intro from './src/pages/Intro';
import Home from './src/pages/Home';
import SignInPembeli from './src/pages/SignInPembeli';
import SignInFotografer from './src/pages/SignInFotografer';
import SignUpFotografer from './src/pages/SignUpFotografer';
import SignUpPembeli from './src/pages/SignUpPembeli';
import Router from './src/router';
import FilterModal from './src/component/FilterModal';
import Profile from './src/pages/Profile';

export default function App() {
  return <Router />;
}

const styles = StyleSheet.create({});
