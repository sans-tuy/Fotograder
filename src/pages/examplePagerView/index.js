// React Native View Pager with 3 Different Indicators
// https://aboutreact.com/react-native-view-pager/

// import React in our code
import React from 'react';

// import all the components we are going to use
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';

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

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <IndicatorViewPager
          style={styles.pagerStyle}
          indicator={<PagerDotIndicator pageCount={3} />}>
          <View style={styles.background1}>
            <Text style={styles.textStyle}>One</Text>
          </View>
          <View style={styles.background2}>
            <Text style={styles.textStyle}>Two</Text>
          </View>
          <View style={styles.background3}>
            <Text style={styles.textStyle}>Three</Text>
          </View>
        </IndicatorViewPager>

        <IndicatorViewPager
          style={styles.pagerStyle}
          indicator={<PagerTitleIndicator titles={['one', 'two', 'three']} />}>
          <View style={styles.background1}>
            <Text style={styles.textStyle}>One</Text>
          </View>
          <View style={styles.background2}>
            <Text style={styles.textStyle}>Two</Text>
          </View>
          <View style={styles.background3}>
            <Text style={styles.textStyle}>Three</Text>
          </View>
        </IndicatorViewPager>

        <IndicatorViewPager
          style={styles.pagerStyle}
          indicator={
            <PagerTabIndicator
              tabs={[
                {
                  text: 'Home',
                  // iconSource:
                  //   require('./resources/home.png'),
                  // selectedIconSource:
                  //   require('./resources/home_selected.png'),
                },
                {
                  text: 'Message',
                  // iconSource:
                  //     require('./resources/message.png'),
                  // selectedIconSource:
                  //     require('./resources/message_selected.png'),
                },
                {
                  text: 'Profile',
                  // iconSource:
                  //   require('./resources/profile.png'),
                  // selectedIconSource:
                  //    require('./resources/profile_selected.png'),
                },
              ]}
            />
          }>
          <View style={styles.background1}>
            <Text style={styles.textStyle}>Home</Text>
          </View>
          <View style={styles.background2}>
            <Text style={styles.textStyle}>Message</Text>
          </View>
          <View style={styles.background3}>
            <Text style={styles.textStyle}>Profile</Text>
          </View>
        </IndicatorViewPager>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C70039',
  },
  background2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF5733',
  },
  background3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFC300',
  },
  textStyle: {
    color: 'white',
    fontSize: 30,
  },
  pagerStyle: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: 'white',
  },
});
