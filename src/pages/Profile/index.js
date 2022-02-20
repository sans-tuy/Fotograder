import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import SvgProfile from '../../assets/images/unsplash_8a95EVm0ovQ.svg';
import SvgArrow from '../../assets/images/Arrow.svg';

export default function Profile() {
  return (
    <View>
      <ScrollView>
        <View style={styles.header}>
          <SvgArrow />
          <Text style={{marginLeft: 20, fontWeight: 'bold', fontSize: 18}}>
            Profil
          </Text>
        </View>

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
          <Text style={{fontSize: 12}}>Ganti Password</Text>
          <Text style={{fontWeight: 'bold'}}>Potografer</Text>
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
            <DropDownPicker
              items={[
                {label: 'Senin - Jumat', value: 'Senin - Jumat'},
                {label: 'Senin - Minggu', value: 'Senin - Minggu'},
              ]}
              defaultIndex={0}
              placeholder="pilih hari kerja"
              containerStyle={{height: 30}}
              onChangeItem={item => console.log(item.label, item.value)}
            />
            <Text style={[styles.labelProfile]}>Jam Kerja</Text>
            <DropDownPicker
              items={[
                {label: '08.00 - 17.00', value: '08.00 - 17.00'},
                {label: '24 jam', value: '24 jam'},
              ]}
              defaultIndex={0}
              placeholder="pilih jam kerja"
              containerStyle={{height: 30}}
              onChangeItem={item => console.log(item.label, item.value)}
            />
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
});
