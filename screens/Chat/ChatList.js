import React, { useState, useEffect } from 'react';
import {
    Text,
    View,
    Image,
    ImageBackground,
    TouchableOpacity,
    TextInput,
    FlatList
} from 'react-native'
import { images, icon, colors, fontSizes } from '../../constants/index'
import { UIButton } from "../../components"
import Icon from 'react-native-vector-icons/FontAwesome5'
import { loadPartialConfigAsync } from '@babel/core';
import ChatItem from './ChatItem';
import {auth, 
    onAuthStateChanged,
    firebaseDatabaseRef,
    firebaseSet,
    firebaseDatabase,
    createUserWithEmailAndPassword,
    sendEmailVerification,
    child,
    get,
    onValue,
    getItem
} from '../../firebase/firebase'
import { StackActions} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function ChatList(props) {
   
    const [users, setUsers] = useState([
        // {
        //     url: 'https://randomuser.me/api/portraits/men/70.jpg',
        //     name: 'Amanda Weler',
        //     message: 'Hello, how are you ?',
        //     numberOfUnreadMessages: 3
        // },        
    ])
    const {navigation, route} = props
    const {navigate, goBack} = navigation
    useEffect(()=>{
        onValue(firebaseDatabaseRef(firebaseDatabase, 'users'), async (snapshot) => {
            
            if(snapshot.exists()) {                
                let snapshotObject = snapshot.val()
                let stringUser = await AsyncStorage.getItem("user")
                let myUserId = JSON.parse(stringUser).userId
                
                setUsers(Object.keys(snapshotObject)
                    .filter(item => item != myUserId).map(eachKey => {
                    let eachObject = snapshotObject[eachKey]
                    return {
                        //default profile url
                        url: 'https://www.w3schools.com/howto/img_avatar.png',
                        name: eachObject.userName,
                        email: eachObject.email,
                        accessToken: eachObject.accessToken,
                        numberOfUnreadMessages: 0,
                        userId: eachKey,
                    }
                }))
               
            } else {
                console.log('No data available')
            }
        })                        
    }, [])
    return <View style={{
        flex: 1,
        backgroundColor: colors.lightGray,

    }}>


        <View style={{
            height: 60,
            backgroundColor: colors.darkPrimary,
            flexDirection: 'row',
            alignItems: 'center'
        }}>
            <Text style={{
                color: colors.grayText,
                fontSize: fontSizes.h1,
                textAlign: 'center',
                marginStart: 40
            }}>CHAT LIST</Text>
            <TouchableOpacity onPress={() => {
                auth.signOut()
                navigation.dispatch(StackActions.popToTop())
            }}>
                <Icon name='arrow-right'
                    size={40}
                    color={'black'}
                    style={{
                        marginLeft: 20
                    }}
                />
            </TouchableOpacity>
        </View>

        
             <FlatList
                data={users}
                renderItem={({ item }) => {
                    return <TouchableOpacity onPress={() => {
                        navigate('Chat', {user: item})
                    }
                    }>
                    <View style={{
                        height: 60,
                        backgroundColor: 'white',
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginVertical: 2,
                    }}>
                        <Image style={{
                            width: 40,
                            height: 40,
                            resizeMode: 'cover',
                            borderRadius: 40,
                            margin: 10
                        }}
                            source={{
                                uri: 'https://i.discogs.com/57iTb7iRduipsfyksYodpaSpz_eEjtg52zPBhCwBPhI/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTY5Nzg2/ODEtMTU0OTgxMTIz/OC02NjMxLmpwZWc.jpeg',
                            }}
                        />
                        <Text style={{
                            color: colors.grayText,
                            fontSize: fontSizes.h4,
                            marginHorizontal: 20
                        }}>{item.name}</Text>
                    </View>
                    </TouchableOpacity>

                }}

                
            />
            
            
       


    </View>
}

export default ChatList