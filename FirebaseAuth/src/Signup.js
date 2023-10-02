/* eslint-disable prettier/prettier */
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

const Signup = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

    const signUp = () => {
        if (email !== '' && password !== '') {
            auth().createUserWithEmailAndPassword(email, password)
                .then(res => {
                    const user = res.user;
                    console.log(user.email);
                    console.log(user.password);
                    navigation.navigate('Login')

                })
                .catch(error => alert(error.message))
        } else {
            alert('Both fields are required')
        }

    }
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Signup</Text>
            <TextInput
                placeholder=' Email id'
                placeholderTextColor="black"
                style={styles.input}
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                placeholder=' Password'
                placeholderTextColor="black"
                style={styles.input}
                value={password}
                onChangeText={setPassword}
            />
            <TextInput
                placeholder=' Phonenumber'
                placeholderTextColor="black"
                style={styles.input}
                value={phone}
                onChangeText={setPhone}
            />
            <TouchableOpacity style={styles.button} onPress={signUp} >
                <Text style={styles.buttontxt}>Signup</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Signup

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
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