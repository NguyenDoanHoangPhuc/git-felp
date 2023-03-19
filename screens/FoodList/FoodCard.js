import React, { useState, useEffect } from 'react';
import {
    Text,
    View,
    Image,
    ImageBackground,
    TouchableOpacity,
    ScrollView,
    FlatList
} from 'react-native'
import { images, icon, colors, fontSizes } from '../../constants/index'
import { UIButton } from "../components"
import Icon from 'react-native-vector-icons/FontAwesome5'
import { loadPartialConfigAsync } from '@babel/core';

function FoodCard(props){
    let {title, information} = props.data
    
    return  <View>
    <View style={{
        flexDirection: 'row',
        alignItems: 'center'
    }}>
        <Icon name={'search'} size={20} color={'#D4F5E4'} />
        <Text style={{
            fontSize: fontSizes.h3,
            fontFamily: 'Montserrat-Bold',
            color: '#D4F5E4',
            marginBottom: 5,
            marginLeft: 15
        }}>{title}</Text>
    </View>

    
    <View style={{ height: 1, backgroundColor: '#D4F5E4' }}></View>
    <Text style={{
        fontSize: fontSizes.h4,
        color: 'white',
        textAlign: 'justify',
        marginTop: 12,
        lineHeight: 25
    }}>{information}</Text>
</View>
}

export default FoodCard