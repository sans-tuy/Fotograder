import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
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

function OnBoardingScreen({navigation}) {
  return (
    <Intro
      onSignInPembeli={() => navigation.navigate('SignInPembeli')}
      onSignInFotografer={() => navigation.navigate('SignInFotografer')}
    />
  );
}

function SignInBeliScreen({navigation}) {
  return (
    <SignInPembeli
      onHome={() => navigation.navigate('Home')}
      onSignUpPembeli={() => navigation.navigate('SignUpPembeli')}
    />
  );
}

function SignInFotoScreen({navigation}) {
  return (
    <SignInFotografer
      onHome={() => navigation.navigate('Home')}
      onSignUpFotografer={() => navigation.navigate('SignUpFotografer')}
    />
  );
}

function SignUpBeliScreen({navigation}) {
  return <SignUpPembeli onHome={() => navigation.navigate('Home')} />;
}

function SignUpFotoScreen({navigation}) {
  return <SignUpFotografer onHome={() => navigation.navigate('Home')} />;
}

function ProfilScreen({navigation}) {
  return <Profile onBoarding={() => navigation.navigate('OnBoarding')} />;
}

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="OnBoarding">
        <Stack.Screen
          name="OnBoarding"
          component={OnBoardingScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignInPembeli"
          component={SignInBeliScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUpPembeli"
          component={SignUpBeliScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignInFotografer"
          component={SignInFotoScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUpFotografer"
          component={SignUpFotoScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Profile"
          component={ProfilScreen}
          options={{
            headerStyle: {
              backgroundColor: 'white',
              elevation: 0,
              shadowOpacity: 0, // remove shadow on iOS
              borderBottomWidth: 0,
            },
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
