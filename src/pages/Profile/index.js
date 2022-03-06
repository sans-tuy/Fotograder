import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import SvgProfile from '../../assets/images/unsplash_8a95EVm0ovQ.svg';
import SvgPortofolio1 from '../../assets/images/unsplash__kd5cxwZOK4.svg';
import SvgPortofolio2 from '../../assets/images/unsplash_CTd5_C7p__8.svg';
import SvgPortofolio3 from '../../assets/images/unsplash_gJWjS_NAjM0.svg';
import SvgPlus from '../../assets/icon/Plus.svg';
import SvgArrow from '../../assets/images/Arrow.svg';
import SelectDropdown from 'react-native-select-dropdown';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

export default function Profile({onBoarding}) {
  const hari = ['senin-jumat', 'senin-kamis', 'preorder', '24/7'];
  const isOpens = ['Buka', 'Tutup'];
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleConfirm = Time => {
    console.warn('A Time has been picked: ', Time);
    hideTimePicker();
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}></View>

        <View style={styles.iconProfile}>
          <SvgProfile />
        </View>
        <View style={styles.form}>
          <Text style={styles.labelProfile}>Nama</Text>
          <TextInput
            placeholder="Adelyne Courtmant"
            style={styles.inputProfile}
          />
          <Text style={styles.labelProfile}>Email</Text>
          <TextInput
            placeholder="adelynecourt@gmail.com"
            style={styles.inputProfile}
          />
          <Pressable onPress={() => alert('maaf fitur belum tersedia')}>
            <Text style={{fontSize: 12, marginTop: 20}}>Ganti Password</Text>
          </Pressable>
          <Text style={{fontWeight: 'bold', marginTop: 20}}>Potografer</Text>
          <View>
            <Text style={styles.labelProfile}>Nama Usaha</Text>
            <TextInput
              placeholder="The Shazz capture"
              style={styles.inputProfile}
            />
            <Text style={styles.labelProfile}>No Telp</Text>
            <TextInput
              placeholder="6285698763678"
              style={styles.inputProfile}
              keyboardType="phone-pad"
            />
            <Text style={styles.labelProfile}>Harga</Text>
            <TextInput
              placeholder="350.000 -  2.000.000"
              style={styles.inputProfile}
            />
            <Text style={styles.labelProfile}>Hari</Text>
            <SelectDropdown
              data={hari}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                return item;
              }}
              dropdownStyle={{borderRadius: 8}}
              buttonStyle={{borderRadius: 8}}
            />
            <Text style={[styles.labelProfile]}>Jam Tutup</Text>
            <Button title="Show Time Picker" onPress={showTimePicker} />
            <DateTimePickerModal
              isVisible={isTimePickerVisible}
              mode="time"
              onConfirm={handleConfirm}
              onCancel={hideTimePicker}
            />
            <Text style={[styles.labelProfile]}>Jam Buka</Text>
            <Button title="Show Time Picker" onPress={showTimePicker} />
            <DateTimePickerModal
              isVisible={isTimePickerVisible}
              mode="time"
              onConfirm={handleConfirm}
              onCancel={hideTimePicker}
            />
            <Text style={{fontWeight: 'bold', marginTop: 20}}>Portofolio</Text>
            <View style={styles.portofolio}>
              <SvgPortofolio1 style={{marginLeft: -10}} />
              <SvgPortofolio2 style={{marginLeft: -10}} />
              <SvgPortofolio3 />
              <View style={styles.border}>
                <SvgPlus
                  style={{position: 'absolute', left: '40%', top: '40%'}}
                />
              </View>
            </View>
            <Text style={[styles.labelProfile]}>Status</Text>
            <SelectDropdown
              data={isOpens}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                return item;
              }}
              dropdownStyle={{borderRadius: 8}}
              buttonStyle={{borderRadius: 8}}
            />
            <Pressable onPress={onBoarding}>
              <Text style={{fontSize: 12, marginVertical: 20}}>Sign Out</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  iconProfile: {
    alignItems: 'center',
  },
  inputProfile: {
    borderBottomWidth: 1,
    color: '#ADBFDD',
  },
  form: {
    marginHorizontal: 20,
  },
  labelProfile: {
    color: '#114393',
    fontSize: 14,
    marginTop: 20,
  },
  portofolio: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
    alignItems: 'center',
  },
  border: {
    borderColor: '#114393',
    borderWidth: 0.2,
    borderRadius: 10,
    width: 93,
    height: 93,
    position: 'relative',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
