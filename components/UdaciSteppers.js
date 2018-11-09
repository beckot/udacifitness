import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native'
import { FontAwesome, Entypo } from '@expo/vector-icons';
import { white, purple } from '../utils/colors'

export default function UdacitySteppers({ max, unit, step, value, onIncrement, onDecrement }) {

    return (
        <View style={[styles.row, { justifyContent: 'space-between'}]}>
            <View style={ {flexDirection: 'row'}}>
                <TouchableOpacity 
                    style={ Platform.OS === 'ios' 
                        ? [styles.iosBtn, { borderTopRightRadius: 0, borderBottomRightRadius: 0 }] 
                        : [styles.androidBtn, , { borderTopRightRadius: 0, borderBottomRightRadius: 0 }] }
                    onPress={onDecrement} >
                    <FontAwesome name='minus' size={30} color={'black'} />
                </TouchableOpacity>
                <TouchableOpacity 
                    style={ Platform.OS === 'ios' 
                    ? [styles.iosBtn, { borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }] 
                    : [styles.androidBtn, , { borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }] }
                    onPress={onIncrement} >
                    <FontAwesome name='plus' size={30} color={'black'} />
                </TouchableOpacity>
            </View>
            <View>
                <Text>{value}</Text>
                <Text>{unit}</Text>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
    },
    iosBtn: {
        backgroundColor: white,
        borderColor: purple,
        borderWidth: 1,
        borderRadius: 3,
        padding: 5,
        paddingLeft: 25,
        paddingRight: 25,
    },
    androidBtn: {
        backgroundColor: white,
        borderColor: purple,
        borderWidth: 1,
        borderRadius: 3, 
        padding: 5,
        paddingLeft: 25,
        paddingRight: 25,
    },
})