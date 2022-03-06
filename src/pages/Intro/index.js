// React Native View Pager with 3 Different Indicators
// https://aboutreact.com/react-native-view-pager/

// import React in our code
import React from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';

// import {
//   PagerTabIndicator,
//   IndicatorViewPager,
//   PagerTitleIndicator,
//   PagerDotIndicator,
// } from 'rn-viewpager';

import {
  PagerTabIndicator,
  IndicatorViewPager,
  PagerTitleIndicator,
  PagerDotIndicator,
} from '@shankarmorwal/rn-viewpager';

const Intro = ({onSignInPembeli, onSignInFotografer}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <IndicatorViewPager
          style={styles.pagerStyle}
          indicator={
            <PagerDotIndicator
              pageCount={4}
              dotStyle={{backgroundColor: '#161853'}}
              selectedDotStyle={{backgroundColor: '#114393'}}
            />
          }>
          <View style={styles.background1}>
            <View style={styles.imagePager}>
              <Image source={require('../../assets/images/1.png')} />
            </View>
            <Text style={styles.textStyle}>Selamat datang di</Text>
            <Text style={styles.textStyle2}>FOTOGRADER</Text>
          </View>
          <View style={styles.background2}>
            <View style={styles.imagePager}>
              <Image source={require('../../assets/images/2.png')} />
            </View>

            <Text style={styles.textStyle}>
              Sign in sebagai{' '}
              <Text
                style={{color: '#161853', fontWeight: 'bold', fontSize: 16}}>
                fotografer
              </Text>{' '}
              untuk {'\n'}menjemput pelangganmu
            </Text>
          </View>
          <View style={styles.background3}>
            <View style={styles.imagePager}>
              <Image source={require('../../assets/images/3.png')} />
            </View>

            <Text style={styles.textStyle}>
              Sign In sebagai{' '}
              <Text
                style={{color: '#161853', fontWeight: 'bold', fontSize: 16}}>
                pembeli
              </Text>{' '}
              untuk{'\n'} mengabadikan momenmu dalam lensa
            </Text>
          </View>
          <View style={styles.background3}>
            <View style={styles.imagePager}>
              <Image source={require('../../assets/images/4.png')} />
            </View>
            <TouchableOpacity style={styles.button} onPress={onSignInPembeli}>
              <Text style={styles.textButton}>Sebagai Pembeli</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button2}
              onPress={onSignInFotografer}>
              <Text style={styles.textButton2}>Sebagai Fotografer</Text>
            </TouchableOpacity>
          </View>
        </IndicatorViewPager>
      </View>
    </SafeAreaView>
  );
};

export default Intro;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  background2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  background3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  textStyle: {
    color: '#114393',
    fontSize: 16,
    fontFamily: 'robot',
    textAlign: 'center',
  },
  textStyle2: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 27,
    fontFamily: 'Red Hat Display',
  },
  pagerStyle: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: 'white',
  },
  imagePager: {
    marginTop: -70,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#2A3D5B',
    width: 320,
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button2: {
    marginTop: 20,
    backgroundColor: 'white',
    width: 320,
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButton: {
    color: 'white',
    fontFamily: 'roboto',
    fontWeight: 'bold',
  },
  textButton2: {
    color: '#114393',
    fontFamily: 'roboto',
    fontWeight: 'bold',
  },
});
