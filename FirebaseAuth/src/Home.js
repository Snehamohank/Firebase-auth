/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignContent:'center'
  },
  text:{
    color:'black',
    alignSelf:'center',
    fontSize:25,
    fontWeight:'bold'
  }
})