import React, { useState, useEffect } from 'react';
import {
    Text,
    View,
    Image,
    ImageBackground,
    TouchableOpacity,
} from 'react-native'
import { images, icon, colors, fontSizes } from '../constants/index'
import { UIButton } from "../components"
import Icon from 'react-native-vector-icons/FontAwesome5'
import { loadPartialConfigAsync } from '@babel/core';

function Map(){
    return <ImageBackground source={images.map}
                    resizeMode="cover"
                    style={{
                        flex: 1,
                    }}>
           <Icon name={'map-marker-alt'} size={30} color={'#73342F'}
           style={{
            position: 'absolute',
            right: 50,
            bottom: 200
           }}/>

        <Icon name={'map-marker-alt'} size={30} color={'#73342F'}
           style={{
            position: 'absolute',
            alignSelf: 'center',
            top: 200
           }}/>
        <Icon name={'map-marker-alt'} size={30} color={'#73342F'}
           style={{
            position: 'absolute',
            right: 150,
            top: 50
           }}/>
        </ImageBackground>
   
}

export default Map