import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

export default function SignUpPembeli({onHome}) {
  const [name, setname] = useState('');
  const [telepon, settelepon] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [passConfirm, setpassConfirm] = useState('');
  const [view, setview] = useState(true);
  const [view2, setview2] = useState(true);
  const [secureText, setsecureText] = useState(true);
  const [secureText2, setsecureText2] = useState(true);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <View style={styles.imageWrapper}>
            <Image
              style={styles.image}
              source={require('../../assets/images/3.png')}
            />
          </View>
          <View style={styles.formLogin}>
            <Text style={styles.labelForm}>Name</Text>
            <TextInput
              onChange={name => setname(name)}
              placeholder="Input name"
              style={styles.inputForm}
            />
            <Text style={styles.labelForm}>Number Telpon</Text>
            <TextInput
              onChange={telepon => settelepon(telepon)}
              placeholder="Input nomer telepon"
              style={styles.inputForm}
              keyboardType="phone-pad"
            />
            <Text style={styles.labelForm}>Email</Text>
            <TextInput
              onChange={email => setemail(email)}
              placeholder="Input email"
              style={styles.inputForm}
              keyboardType="email-address"
            />
            <View>
              <Text style={styles.labelForm}>Password</Text>
              <TextInput
                onChange={password => setpassword(password)}
                secureTextEntry={secureText2}
                placeholder="Input Password"
                style={styles.inputForm}
              />
              <TouchableOpacity
                style={styles.view}
                onPress={() => {
                  setview2(!view2);
                  setsecureText2(!secureText2);
                }}>
                {view2 ? (
                  <Image
                    source={require('../../assets/icon/view.png')}
                    style={styles.iconView}
                  />
                ) : (
                  <Image
                    source={require('../../assets/icon/hidden.png')}
                    style={styles.iconView}
                  />
                )}
              </TouchableOpacity>
            </View>
            <View>
              <Text style={styles.labelForm}>Konfirmasi Password</Text>
              <TextInput
                onChange={passConfirm => setpassConfirm(passConfirm)}
                secureTextEntry={secureText}
                placeholder="Input Password"
                style={styles.inputForm}
              />
              <TouchableOpacity
                style={styles.view}
                onPress={() => {
                  setview(!view);
                  setsecureText(!secureText);
                }}>
                {view ? (
                  <Image
                    source={require('../../assets/icon/view.png')}
                    style={styles.iconView}
                  />
                ) : (
                  <Image
                    source={require('../../assets/icon/hidden.png')}
                    style={styles.iconView}
                  />
                )}
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.buttonWrapper}>
          <View>
            <Pressable style={styles.button2} onPress={onHome}>
              <Text style={styles.buttonText}>SIGN UP</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
  },
  labelForm: {
    color: '#114393',
    fontFamily: 'Roboto',
    fontSize: 14,
  },
  inputForm: {
    borderColor: '#ADBFDD',
    borderBottomWidth: 2,
  },
  inputForm2: {
    borderColor: '#ADBFDD',
    borderBottomWidth: 2,
    position: 'relative',
  },
  image: {
    width: undefined,
    height: undefined,
    resizeMode: 'cover',
    flex: 1,
  },
  imageWrapper: {
    height: 127,
    width: 220,
    alignSelf: 'center',
    marginBottom: 10,
    marginTop: 20,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#A5A5A5',
    width: '100%',
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button2: {
    marginTop: 20,
    backgroundColor: '#2A3D5B',
    width: '100%',
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
  },
  buttonWrapper: {
    marginTop: 20,
    width: '98%',
    alignSelf: 'center',
    marginBottom: 20,
  },
  view: {
    width: 25,
    height: 25,
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
  iconView: {
    width: undefined,
    height: undefined,
    resizeMode: 'contain',
    flex: 1,
  },
});
