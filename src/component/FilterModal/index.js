import React, {Component} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TextInput,
} from 'react-native';
import SvgFilter from '../../assets/icon/Filter.svg';

function FilterModal({modalVisible, onModal}) {
  return (
    <View>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.lines}></View>
            <View style={styles.iconWrapper2}>
              <SvgFilter style={styles.iconSearch} />
            </View>
            <Text style={styles.modalText}>Harga</Text>
            <View style={styles.inputFilter}>
              <View style={{width: '50%', paddingRight: 40}}>
                <Text>Min</Text>
                <TextInput style={styles.filterForm} />
              </View>
              <View style={{width: '50%', paddingLeft: 40}}>
                <Text>Max</Text>
                <TextInput style={styles.filterForm} />
              </View>
            </View>
            <Text style={styles.modalText}>Jarak</Text>
            <View style={styles.inputFilter}>
              <View style={{width: '50%', paddingRight: 40}}>
                <Text>Min</Text>
                <TextInput style={styles.filterForm} />
              </View>
              <View style={{width: '50%', paddingLeft: 40}}>
                <Text>Max</Text>
                <TextInput style={styles.filterForm} />
              </View>
            </View>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={onModal}>
              <Text style={styles.textStyle}>Konfirmasi</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    marginTop: 22,
    justifyContent: 'flex-end',
  },
  modalView: {
    backgroundColor: 'white',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2A3D5B',
    marginTop: 20,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    marginTop: 20,
    fontSize: 16,
    color: '#114393',
  },
  inputFilter: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  filterForm: {
    borderBottomWidth: 2,
  },
  lines: {
    // justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#A5A5A5',
    height: 3,
    width: 62,
    borderRadius: 4,
  },
});

export default FilterModal;
