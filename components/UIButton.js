import { TouchableOpacity,Text } from "react-native"
import React, {Component} from "react"
import Icon from 'react-native-vector-icons/FontAwesome5'
import {images, icon, colors, fontSizes} from '../constants/index'

function UIButton(props) {
    const {onPress, title, isSelected} = props
    return <TouchableOpacity 
                
    onPress={onPress}
    
    style={{
        height: 40,
        borderRadius: 20,
        marginHorizontal: 40,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:  'white' 
    }}>
        
        <Text style={{
            color: '#1F4F0F',
            fontSize: fontSizes.h5,
            fontFamily: 'Montserrat-Black'
        }}>{title}</Text> 
    </TouchableOpacity>
}

export default UIButton