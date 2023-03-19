import React, { useState, useEffect } from 'react';
import {
    Text,
    View,
    Image,
    ImageBackground,
    TouchableOpacity,
    TextInput,
    Keyboard,
    KeyboardAvoidingView
} from 'react-native'
import { images, icon, colors, fontSizes } from '../constants/index'
import { UIButton } from "../components"
// import Icon from 'react-native-vector-icons/FontAwesome5'
import { loadPartialConfigAsync } from '@babel/core';
import {
    auth,
    firebaseDatabase,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    firebaseDatabaseRef,
    firebaseSet,
    signInWithEmailAndPassword,
    sendEmailVerification
} from '../firebase/firebase'
import Icon from 'react-native-vector-icons/FontAwesome5'

function RegisterInput(props){
 
    const {onChangeText, title, name, placeholder, secure} = props

    return <View style={{
        marginTop: 10
    }}>

    <View style={{
        flexDirection: 'row'
    }}>

    <Icon name = {name}
            size = {20}
            style={{
                paddingRight: 15
            }}
            color = {'white'}
    />
    <Text style={{
        color: 'white',
        fontSize: fontSizes.h5,
        fontFamily: 'Montserrat-Bold'
    }} >{title}</Text>
    </View>
    <TextInput
        onChangeText={onChangeText}
        style={{
            color: 'white'
        }}
        
        placeholder = {placeholder}
        placeholderTextColor={colors.placeholder}
        secureTextEntry={secure}
    />
    <View style={{
        width: '90%',
        height: 1,
        position: 'absolute',
        top: 60,
        backgroundColor: colors.lightGray
    }}></View>
    </View>

}

export default RegisterInput