import React, { useState, useEffect } from 'react';
import {
    Text,
    View,
    Image,
    ImageBackground,
    TouchableOpacity,
    TextInput,
    FlatList,
    Keyboard
} from 'react-native'
import { images, icon, colors, fontSizes } from '../../constants/index'
import { UIButton } from "../../components"
import Icon from 'react-native-vector-icons/FontAwesome5'
import { loadPartialConfigAsync } from '@babel/core';
import ChatItem from './ChatItem';
import { firebaseDatabase, firebaseDatabaseRef, firebaseSet, onValue } from '../../firebase/firebase';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Database } from 'firebase/database';

function Chat(props) {
    const { url, name, userId } = props.route.params.user
    const [typedText, setTypedText] = useState('')
    const [chatHistory, setChatHistory] = useState([])
    const {navigation, route} = props
    const {navigate, goBack} = navigation

    useEffect(() => {
        onValue(firebaseDatabaseRef(firebaseDatabase, 'chats'), async (snapshot) => {
            let isMounted = true
            if (snapshot.exists()) {
                let snapshotObject = snapshot.val()
                let stringUser = await AsyncStorage.getItem("user")
                let myUserId = JSON.parse(stringUser).userId
                let myFriendUserId = props.route.params.user.userId
                
                let updatedChatHistory = Object.keys(snapshotObject)
                    .filter(item => (item.includes(myUserId) && item.includes(myFriendUserId)))
                    .map(eachKey => {
                        let eachObject = snapshotObject[eachKey]
                        return {
                            ...eachObject,
                            isSender: eachKey.split('-')[0] == myUserId
                        }
                    })
                    .sort((item1, item2) => item1.timestamp - item2.timestamp)
                    
                    for (let i = 0; i < updatedChatHistory.length; i++) {
                        let item = updatedChatHistory[i]
                        item.showUrl = (i == 0) ? true : item.isSender != updatedChatHistory[i].isSender
                    }
                
                
                    setChatHistory(updatedChatHistory)
            } else {
                console.log('No data available')
            }
        })
    }, [])
    return <View style={{
        flex: 100,
        backgroundColor: '#E3E3E3'
    }}>
        <View style={{
            height: 80,
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#E3E3E3',
            paddingHorizontal: 30
        }}>
            <TouchableOpacity style={{
                width: 40,
                height: 40,
                borderRadius: 30,
                backgroundColor: 'white'
            }}
            
            onPress={() => {
                navigate('UITab')
            }} >
            <Icon name='arrow-left'
                color={colors.lightGray}
                size={20}
                style={{
                    position: 'absolute',
                    top: 10,
                    left: 10
                }}
            />
            </TouchableOpacity>
           
            <Text style={{
                fontSize: fontSizes.h4,
                color: colors.grayText,
                textAlign: 'center',
                width: '80%',
                fontFamily: 'Montserrat-Bold'
            }}>Nhân viên tư vấn</Text>
            
        </View>
        
        <View style = {{ 
            backgroundColor: 'white',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            height: 40,
            }}></View>


        <View style={{
            flex: 80,
            backgroundColor: 'white',
            
        }}>

            <FlatList
                data={chatHistory}
                renderItem={({ item }) => {
                    return <ChatItem
                        data={item}
                        key={item.timestamp}
                    />
                }}

                keyExtractor={item => item.timestamp}
            />

        </View>


        <View style={{
            height: 80,
            paddingHorizontal: 20,
            paddingVertical: 10,
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: 'white'
        }}>
            
            <TextInput
                onChangeText={(typedText) => {
                    setTypedText(typedText)
                }}
                style={{
                    height: 60,
                    backgroundColor: '#E3E3E3',
                    flex: 1,
                    marginEnd: 5,
                    borderRadius: 30,
                    opacity: 0.5,
                    paddingStart: 30,
                    color: colors.grayText
                }}

                value={typedText}
                placeholder = 'Nhập tin nhắn...'
                placeholderTextColor={colors.lightGray}
            />


            <TouchableOpacity onPress={async () => {
                if (typedText.trim().length == 0) {
                    return
                }

                let stringUser = await AsyncStorage.getItem("user")
                let myUserId = JSON.parse(stringUser).userId
                let myFriendUserId = props.route.params.user.userId
                let myTimeStamp = (new Date()).getTime()
                //save to Firebase DB
                let newMessengerObject = {
                    //fake
                    url: 'https://cdn-www.vinid.net/2019/10/an-cam-co-tac-dung-gi-nen-an-cam-luc-nao-tot-nhat-1024x682.jpg',
                    showUrl: true,
                    isSender: true,
                    messenger: typedText,
                    timestamp: myTimeStamp,
                }
                Keyboard.dismiss()
                firebaseSet(firebaseDatabaseRef(
                    firebaseDatabase,
                    'chats/' + myUserId + '-' + myFriendUserId + '-' + myTimeStamp
                ), newMessengerObject).then(() => {
                    setTypedText('')
                })

                //"id1-id2": {messenger object}
            }}
                style ={{
                    width: 60,
                    height: 60,
                    borderRadius: 60,
                    backgroundColor: '#E3E3E3'
                }} 
            >
                <Icon
                    style={{
                        position: 'absolute',
                        right: 22,
                        top: 20,
                    }}
                    name='paper-plane' size={20} color={colors.grayText} />
            </TouchableOpacity>

        </View>
    </View>
}

export default Chat