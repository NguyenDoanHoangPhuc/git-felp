import React, { useState, useEffect } from 'react';
import {
    Text,
    View,
    Image,
    ImageBackground,
    TouchableOpacity,
    TextInput
} from 'react-native'
import { images, icon, colors, fontSizes } from '../../constants/index'
import { UIButton } from "../../components"
import Icon from 'react-native-vector-icons/FontAwesome5'
import { loadPartialConfigAsync } from '@babel/core';

function ChatItem(props){
    const {url, showUrl, isSender, messenger, timestamp} = props.data;
    
    return <View style = {{
        flexDirection: 'row',
        marginHorizontal: 10,
        marginVertical: 5,
        justifyContent: isSender ? 'flex-end' : 'flex-start'
    }}>
        {!isSender && <Image style={{
            width: 40,
            height: 40,
            resizeMode: 'cover',
            borderRadius: 40,
            margin: 10
        }}
            source={{
                uri: showUrl ? url : 'abcd' 
            }}
        />}
        
        <Text style={{
            fontSize: fontSizes.h4,
            color: colors.grayText,
            paddingVertical: 8,
            paddingHorizontal: 10,
            paddingStart: 15,
            maxWidth: 300,
            minWidth: 80,
            backgroundColor: isSender ? '#BDF2E0' : '#A5E4F7',
            borderRadius: 20,
            textAlign: 'left',
            alignSelf: 'center'
        }}>{messenger}</Text>

        {isSender && <View style={{
            width: 10,
            height: 10,
        }}
        />}
    </View>
}

export default ChatItem