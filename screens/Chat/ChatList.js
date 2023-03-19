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
import {
    auth,
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
import { StackActions } from '@react-navigation/native';
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
    const { navigation, route } = props
    const { navigate, goBack } = navigation
    
    useEffect(() => {
        onValue(firebaseDatabaseRef(firebaseDatabase, 'users'), async (snapshot) => {

            if (snapshot.exists()) {
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
            flex: 100,
            backgroundColor: '#224E4F',

        }}>


            <View style={{
                height: 200,
                paddingTop: 30,
                backgroundColor: '#224E4F',
                alignItems: 'center',
            }}>
                <Text style={{
                    color: 'white',
                    fontSize: fontSizes.h1,
                    textAlign: 'center',
                    paddingHorizontal: 10,
                    fontFamily: 'Montserrat-Black',
                    paddingVertical: 10
                }}>Nhân viên tư vấn</Text>

                <Text style= {{
                    fontFamily: 'Montserrat-Black',
                    fontSize: fontSizes.h5,
                    color: '#E3E3E3',
                }}>Xin chào, </Text>
                <Text style= {{
                    fontFamily: 'Montserrat-Black',
                    fontSize: fontSizes.h6,
                    color: '#E3E3E3'
                }}>Đây là những người có thể tư vấn cho bạn</Text>


                <TouchableOpacity onPress={() => {
                    auth.signOut()
                    navigation.dispatch(StackActions.popToTop())
                }}>
                    <View style={{
                        flexDirection: 'row',
                        width: 160,
                        height: 30,
                        backgroundColor: 'white',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 30,
                        marginTop: 20
                    }}>
                    <Text style= {{
                        color: '#224E4F',
                        fontFamily: 'Montserrat-Bold'
                    }}>Đăng xuất  </Text>
                    <Icon name='arrow-right'
                        size={20}
                        color={'#224E4F'}
                        style={{

                        }}
                    />
                   
    
                    </View>
                    
                </TouchableOpacity>
            </View>



            <View style={{
                backgroundColor: 'white',
                flex: 100,
                borderRadius: 30,
                paddingTop: 30,
                
            }}>

                <FlatList
                    data={users}
                    renderItem={({ item }) => {
                        return <TouchableOpacity onPress={() => {
                            navigate('Chat', { user: item })
                        }
                        }>
                            <View style={{
                                height: 60,
                                backgroundColor: 'white',
                                flexDirection: 'row',
                                alignItems: 'center',
                                marginVertical: 2,
                                marginHorizontal: 20,
                                maxWidth: '100%'
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
                                <View>
                                    <Text style={{
                                        color: colors.grayText,
                                        fontSize: fontSizes.h5,
                                        marginHorizontal: 10,
                                        fontFamily: 'Montserrat-Bold',
                                        overflow: 'hidden'
                                    }}>{item.name}</Text>

                                </View>
                            </View>
                            <View style={{
                                marginHorizontal: 30,
                                backgroundColor: '#E3E3E3',
                                width: '80%',
                                height: 1
                            }}>

                            </View>
                        </TouchableOpacity>

                    }}


                />
            </View>





        </View>
    
}

export default ChatList