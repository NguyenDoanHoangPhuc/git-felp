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

function FoodItem(props) {
    let { name, price, socialNetworks, status, url, website } = props.food
    const { onPress } = props;

    return <TouchableOpacity
        style={{
            borderRadius: 20
        }}
        onPress={onPress}>

        <View style={{
            height: 100,
            marginVertical: 2,
            marginLeft: 20,
            marginRight: 20,
            flexDirection: 'row',
        }}>
            <ImageBackground style={{
                width: '100%',
                resizeMode: 'cover',
                height: '100%'
                
            }}
                source={{
                    uri: url
                }}
                imageStyle={{ borderRadius: 20}}
            >
                <View style={{
                    flex: 1,
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    padding: 12,
                    justifyContent: 'flex-end',
                    borderRadius: 20
                }}>
                    <Text style={{
                        fontSize: fontSizes.h5,
                        color: 'white',
                        fontFamily: 'Montserrat-Bold',
                        paddingVertical: 10,
                    }}>{name}</Text>

                    
                        
                        <Text style={{
                            color: 'white',
                            fontSize: 10,
                            overflow: 'hidden',
                            fontFamily: 'Montserrat-Bold'
                        }}>{status}</Text>
                    




                </View>
            </ImageBackground>

        </View>
    </TouchableOpacity>


}

export default FoodItem