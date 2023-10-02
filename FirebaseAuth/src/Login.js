/* eslint-disable prettier/prettier */
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const Loginuser = () => {
    if (email !== '' && password !== '') {
      auth().signInWithEmailAndPassword(email, password)
        .then(res => {
          const user = res.user;
          navigation.navigate('Home');
        })
        .catch(error => alert("Incorrect email and password"))
    } else {
      alert('Both fields are required')
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login</Text>
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
      <TouchableOpacity style={styles.button} onPress={Loginuser} >
        <Text style={styles.buttontxt}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttontxt} onPress={() => navigation.navigate('Signup')}>Signup</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Login

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