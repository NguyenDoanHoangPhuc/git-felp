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
import { images, icon, colors, fontSizes } from '../../constants/index'
import { UIButton } from "../components"
import Icon from 'react-native-vector-icons/FontAwesome5'
import { loadPartialConfigAsync } from '@babel/core';

function FoodItem(props){
    let {name, price, socialNetworks, status, url, website} = props.food
    const {onPress} = props;
    
    return <TouchableOpacity 
    onPress = {onPress}
    
    style={{
        height: 150,
        paddingTop: 20,
        paddingLeft: 10,
        flexDirection: 'row'
    }}>
        <Image style={{
            width: 100,
            height: 100,
            resizeMode: 'cover',
            borderRadius: 10,
            marginRight: 15
        }}
            source={{
                uri: url
            }}
        />
        <View style={{
            flex: 1,
            marginRight: 10
        }}>
            <Text style={{
                fontSize: fontSizes.h5,
                color: colors.success,
                fontWeight: 'bold'
            }}>{name}</Text>
            <View style={{
                height: 1,
                backgroundColor: 'black'
            }}></View>
            <View style={{  }}>
                <Text style={{
                    fontSize: fontSizes.h6,
                    color: 'black',
                    fontWeight: 'bold'
                }}>Giới thiệu chung: </Text>
                <Text style={{
                    color: colors.grayText,
                    fontSize: fontSizes.h6
                }}>{status}</Text>
            </View>

    
            

        </View>

    </TouchableOpacity>
   

}

export default FoodItem