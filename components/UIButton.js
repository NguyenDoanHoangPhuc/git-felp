import { TouchableOpacity,Text } from "react-native"
import React, {Component} from "react"
import Icon from 'react-native-vector-icons/FontAwesome5'
import {images, icon, colors, fontSizes} from '../constants/index'

function UIButton(props) {
    const {onPress, title, isSelected} = props
    return <TouchableOpacity 
                
    onPress={onPress}
    
    style={{
        borderColor: 'white',
        borderWidth: 0.5,
        height: 40,
        borderRadius: 5,
        marginHorizontal: 15,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: isSelected == true ? 'white' : null
    }}>
        {isSelected == true && <Icon name = {"check"}
        size ={20}
                style ={{
                    color: 'green',
                    position: 'absolute',
                    left: 10,
                    top: 10,
                }} />}
        <Text style={{
            color: colors.primary,
            fontSize: fontSizes.h6
        }}>{title}</Text> 
    </TouchableOpacity>
}

export default UIButton