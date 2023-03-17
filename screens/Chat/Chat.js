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
                setChatHistory(updatedChatHistory)
            } else {
                console.log('No data available')
            }
        })
    }, [])
    return <View style={{
        flex: 100
    }}>
        <View style={{
            height: 60,
            flexDirection: 'row',
            alignItems: 'center',
        }}>
            <TouchableOpacity onPress={() => {
                navigate('ChatList')
            }} >
            <Icon name='arrow-left'
                color={'black'}
                size={20}
                style={{
                    marginHorizontal: 20
                }}
            />
            </TouchableOpacity>
           
            <Text style={{
                fontSize: fontSizes.h4,
                color: colors.grayText,
                fontWeight: 'bold'
            }}>Nhân viên tư vấn</Text>
            <Icon name='ellipsis-h'
                size={30}
                color={'black'}
                style={{
                    marginHorizontal: 20,
                    position: 'absolute',
                    right: 20
                }}
            />
        </View>
        
        <View style = {{flex: 5, backgroundColor: colors.darkPrimary}}></View>
        <View style={{
            flex: 90,
            backgroundColor: colors.darkPrimary
        }}>

            <FlatList
                data={chatHistory}
                renderItem={({ item }) => {
                    return <ChatItem
                        data={item}
                        key={item.timestamp}
                    />
                }}

                keyExtractor={eachFood => eachFood.name}
            />

        </View>


        <View style={{
            height: 40,
            marginHorizontal: 10,
            marginVertical: 10,
            flexDirection: 'row',
            alignItems: 'center',
        }}>
            <Icon name='images'
                color={'black'}
                size={20}
                style={{
                    marginHorizontal: 10
                }}
            />
            <TextInput
                onChangeText={(typedText) => {
                    setTypedText(typedText)
                }}
                style={{
                    height: 40,
                    backgroundColor: colors.lightGray,
                    flex: 1,
                    marginEnd: 5,
                    borderRadius: 10,
                    opacity: 0.5,
                    paddingStart: 20
                }}

                value={typedText}

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
            }}>
                <Icon
                    style={{
                        padding: 10,
                    }}
                    name='paper-plane' size={20} color={colors.darkPrimary} />
            </TouchableOpacity>

        </View>
    </View>
}

export default Chat