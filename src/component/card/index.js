import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Svgheart from '../../assets/icon/Heart.svg';
import SvgStar from '../../assets/icon/Star.svg';

export default function Card(props) {
  return (
    <View style={styles.card}>
      <View>
        <Image
          style={{width: '100%'}}
          source={require('../../assets/images/unsplash_8CqDvPuo_kI.png')}
        />
      </View>
      <View style={{paddingHorizontal: 6, marginTop: 5}}>
        <Text>{props.title}</Text>
        <Text style={styles.price}>RP {props.price},00</Text>
        <View style={styles.reaction}>
          <View style={styles.star}>
            <SvgStar />
            <SvgStar />
            <SvgStar />
            <SvgStar />
            <SvgStar />
          </View>
          <View style={styles.likes}>
            <Svgheart />
            <Text style={{color: '#EB5757', fontSize: 10}}> + </Text>
            <Text style={{color: '#EB5757', fontSize: 10}}>{props.likes}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  star: {
    flexDirection: 'row',
  },
  likes: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  reaction: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  card: {
    backgroundColor: 'white',
    width: '90%',
    borderRadius: 10,
    marginBottom: 15,
  },
  price: {
    color: '#114393',
    fontWeight: 'bold',
    fontSize: 14,
    marginTop: 5,
    marginBottom: 5,
  },
});
