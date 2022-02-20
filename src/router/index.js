import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Text, Button, View} from 'react-native';
import Home from '../pages/Home';
import Intro from '../pages/Intro';
import SignInFotografer from '../pages/SignInFotografer';
import SignInPembeli from '../pages/SignInPembeli';
import SignUpFotografer from '../pages/SignUpFotografer';
import SignUpPembeli from '../pages/SignUpPembeli';
import Profile from '../pages/Profile';

const Stack = createNativeStackNavigator();

function HomeScreen({navigation}) {
  return (
    <Home
      onDetails={() => navigation.navigate('Profile')}
      onProfile={() => navigation.navigate('Profile')}
      onHome={() => navigation.navigate('Home')}
    />
  );
}

function OnBoarding({navigation}) {
  return <Intro onPress={() => navigation.navigate('HomeScreen')} />;
}

function SignInBeli({navigation}) {
  return <SignInPembeli onPress={() => navigation.navigate('HomeScreen')} />;
}

function SignInFoto({navigation}) {
  return <SignInFotografer onPress={() => navigation.navigate('HomeScreen')} />;
}

function SignUpBeli({navigation}) {
  return <SignUpPembeli onPress={() => navigation.navigate('HomeScreen')} />;
}

function SignUpFoto({navigation}) {
  return <SignUpFotografer onPress={() => navigation.navigate('HomeScreen')} />;
}

function Profil({navigation}) {
  return <Profile onPress={() => navigation.navigate('HomeScreen')} />;
}

function Router(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Profile"
          component={Profil}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
