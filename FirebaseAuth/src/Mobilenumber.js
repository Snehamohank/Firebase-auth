/* eslint-disable prettier/prettier */
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import auth from '@react-native-firebase/auth';


const Mobilenumber = () => {
    const navigation = useNavigation();
    const [phone, setPhone] = useState('')
    const [code, setCode] = useState('')
    const [confirm, setConfirm] = useState(null)

    const mobileNumber = async phone => {
        auth()
            .signInWithPhoneNumber('+91 9207242757')
            .then(res => {
                console.log('response', res);
                setConfirm(res);
            })
            .catch(err => {
                console.log(err);
            });
    };
    const confirmVerification = async code => {
        try {
          await confirm.confirm(code);
          auth().onAuthStateChanged(user => {
            if (user) {
              setConfirm(null);
              navigation.navigate('Home');
            } else {
              if (confirm) {
                alert('Authentication failed');
              }
            }
          });
        } catch (err) {
          console.log(err);
          alert('Invalid code');
        }
      };
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Verify</Text>
            <TextInput
                placeholder=" Phonenumber"
                placeholderTextColor="black"
                style={styles.input}
                value={phone}
                onChangeText={setPhone}
            />
            <TextInput
                placeholder=" OTP"
                placeholderTextColor="black"
                style={styles.input}
                value={code}
                onChangeText={setCode}
            />
             <TouchableOpacity style={styles.button} onPress={confirmVerification}>
                <Text style={styles.buttontxt}>confirm</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={mobileNumber}>
                <Text style={styles.buttontxt}>Verify</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Mobilenumber

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
        marginVertical: 10
    },
    input: {
        width: '80%',
        height: 55,
        borderColor: 'black',
        borderWidth: 2,
        color: 'black',
        marginVertical: 5,
        borderRadius: 10
    },
    button: {
        width: '80%',
        height: 55,
        backgroundColor: 'black',
        marginVertical: 5,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttontxt: {
        color: 'white',
        fontSize: 17,
        fontWeight: '500'
    }
})