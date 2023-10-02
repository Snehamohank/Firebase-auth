/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, Animation } from 'react-native'
import React from 'react'

const Animations = () => {
    return (
        <View style={styles.container}>
            <Text style={{ color: 'black' }}>Animation</Text>
            <View style={styles.animation}>
                <Animation.View style={{ position: 'absolute', left: 100, right: 100, bottom: 100, top: 100 }}  >
                 <View>
                    <Text></Text>
                 </View>
                </Animation.View>
            </View>
        </View>
    )
}

export default Animations;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    animation: {
        width: '100%',
        height: '50%',
        backgroundColor: 'red',
    },

})