import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import SvgSearch from '../../assets/icon/Search.svg';
import SvgFilter from '../../assets/icon/Filter.svg';
import FilterModal from '../FilterModal';

export default function SearchBar({onModal, modalVisible}) {
  return (
    <View>
      <View style={styles.searchBar}>
        <View style={styles.searchInput}>
          <TextInput style={styles.inputSearch} placeholder="Wedding" />
          <View style={styles.iconWrapper}>
            <SvgSearch width={17} height={17} style={styles.iconSearch} />
          </View>
        </View>
        <Pressable onPress={onModal} style={styles.iconWrapper2}>
          <SvgFilter style={styles.iconSearch} />
        </Pressable>
      </View>
      <FilterModal modalVisible={modalVisible} onModal={onModal} />
    </View>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    backgroundColor: 'white',
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconSearch: {
    width: undefined,
    height: undefined,
    flex: 1,
    resizeMode: 'contain',
  },
  iconWrapper: {
    position: 'absolute',
    left: 20,
    top: 9,
  },
  iconWrapper2: {
    width: 22,
    height: 22,
    marginHorizontal: 20,
  },
  inputSearch: {
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 50,
    paddingRight: 20,
    color: '#114393',
    height: 35,
    padding: 2,
  },
  searchInput: {
    marginLeft: 22,
    position: 'relative',
    flex: 1,
  },
});
