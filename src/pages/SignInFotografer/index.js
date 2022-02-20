import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useState} from 'react/cjs/react.development';

export default function SignInFotografer() {
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const [view, setview] = useState(true);
  const [secureText, setsecureText] = useState(true);

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.imageWrapper}>
          <Image
            style={styles.image}
            source={require('../../assets/images/2.png')}
          />
        </View>
        <View style={styles.formLogin}>
          <Text style={styles.labelForm}>Username</Text>
          <TextInput
            onChange={username => setusername(username)}
            placeholder="Input Username"
            style={styles.inputForm}
          />
          <Text style={styles.labelForm}>Password</Text>
          <TextInput
            onChange={password => setpassword(password)}
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
      <View style={styles.buttonWrapper}>
        <View>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>SIGN UP</Text>
          </Pressable>
          <Pressable style={styles.button2}>
            <Text style={styles.buttonText}>SIGN IN</Text>
          </Pressable>
        </View>
      </View>
    </View>
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
    height: 167,
    width: 260,
    alignSelf: 'center',
    marginBottom: 48,
    marginTop: 20,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#A5A5A5',
    width: 320,
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button2: {
    marginTop: 20,
    backgroundColor: '#2A3D5B',
    width: 320,
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
  },
  buttonWrapper: {
    marginTop: 60,
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
