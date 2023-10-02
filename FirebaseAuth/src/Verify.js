/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Verify = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Mobilenumber</Text>
             <View style={styles.box}>
               <Text>Verify</Text>
            </View>
        </View>
    )
}

export default Verify

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
    },
    text: {
        color: 'black'
    },
    box: {
        width: '60%',
        height: 60,
        borderWidth: 1,
        borderColor: 'black',
    },
});