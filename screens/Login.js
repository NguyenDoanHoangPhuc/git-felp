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
import { images, icon, colors, fontSizes } from '../constants/index'
import { UIButton } from "../components"
// import Icon from 'react-native-vector-icons/FontAwesome5'
import { loadPartialConfigAsync } from '@babel/core';
import {
    auth,
    firebaseDatabase,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    firebaseDatabaseRef,
    firebaseSet,
    signInWithEmailAndPassword
} from '../firebase/firebase'
import Icon from 'react-native-vector-icons/FontAwesome5'


function Login(props) {
    const [keyboardIsShown, setKeyboardIsShown] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        const xx = auth
        Keyboard.addListener('keyboardDidShow', () => {
            setKeyboardIsShown(true)
        })

        Keyboard.addListener('keyboardDidHide', () => {
            setKeyboardIsShown(false)
        })

    })


    const { navigation, route } = props
    const { navigate, goBack } = navigation

    return <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={{
            flex: 100,
            backgroundColor: 'green',
            // paddingVertical: 50,
            // paddingHorizontal: 20
        }}
    >

        <View style={{
            backgroundColor: 'white',
            flex: 100,
        }}>
                <ImageBackground source={images.loginScreen}
                resizeMode="cover"
                style={{
                    flex: 100
                }}>

                <View style={{
                    flex: 1,
                    backgroundColor: 'rgba(0,0,0,0.5)'
                
                   
                }}>

                    <View style={{
                        flex: 30,
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        overflow: 'hidden',
                        paddingTop: 40
                    }}>
                        <Image style={{
                            width: 200,
                            height: 200,
                            resizeMode: 'contain'
                        }}
                            source={images.logonobackground}

                        />
                        <Text style={{
                            color: 'white',
                            fontSize: fontSizes.h4,
                            fontFamily: 'Montserrat-Bold',
                           
                        }}
                        >ĐĂNG NHẬP</Text>
                    </View>

                    <View style={{
                        flex: 55,

                    }}>
                        <View style={{
                           
                            margin: 20,
                            height: 'auto',
                            borderRadius: 10
                        }}>

                            <View style={{
                                marginStart: 20,
                                marginTop: 20
                            }}>
                                <View style = {{
                                    width: 60,
                                    height: 60,
                                    borderRadius: 60,
                                    backgroundColor: 'white',
                                    zIndex: 2,
                                }}>

                                <Icon name = {'envelope'}
                                        color = {colors.lightGray}
                                        style ={{
                                            position: 'absolute',
                                            top: 20,
                                            left: 20,
                                        }}
                                        size = {20}
                                 />
                                </View>
                                <TextInput
                                    onChangeText={(text) => {
                                        let fixedText = text.trim()
                                        setEmail(fixedText)
                                    }}
                                    style={{
                                        color: 'black',
                                        width: '90%',
                                        height: 50,
                                        borderRadius: 25,
                                        backgroundColor: 'rgba(255, 255, 255, 0.6)',
                                        paddingStart: 60,
                                        position: 'absolute',
                                        left: 20,
                                        top: 5,
                                        zIndex: 1
                                    }}
                                    value={email}
                                    placeholder='Nhập email...'
                                    placeholderTextColor={colors.grayText}
                                />

                            </View>

                            <View style={{
                                marginStart: 20,
                                marginTop: 20
                            }}>
                                <View style = {{
                                    width: 60,
                                    height: 60,
                                    borderRadius: 60,
                                    backgroundColor: 'white',
                                    zIndex: 2,
                                }}>

                                <Icon name = {'lock'}
                                        color = {colors.lightGray}
                                        style ={{
                                            position: 'absolute',
                                            top: 20,
                                            left: 20,
                                        }}
                                        size = {20}
                                 />
                                </View>
                                <TextInput
                                    onChangeText={(text) => {

                                        setPassword(text)
                                    }}
                                    style={{
                                        color: 'black',
                                        width: '90%',
                                        height: 50,
                                        borderRadius: 25,
                                        backgroundColor: 'rgba(255, 255, 255, 0.6)',
                                        paddingStart: 60,
                                        position: 'absolute',
                                        left: 20,
                                        top: 5,
                                        zIndex: 1
                                    }}
                                    value={password}
                                    secureTextEntry={true}
                                    placeholder='Nhập mật khẩu...'
                                    placeholderTextColor={colors.grayText}
                                />

                            </View>
                            <TouchableOpacity

                                onPress={() => {
                                    //alert(`Email = ${email}, password = ${password}`)
                                    signInWithEmailAndPassword(auth, email, password)
                                        .then((userCredential) => {
                                            const user = userCredential.user

                                            navigate('UITab')
                                        }).catch((error) => {

                                            alert(`Cannot signin, error: ${error.message}`)
                                        })
                                }}
                                style={{
                                    marginTop: 20,
                            
                                    height: 60,
                                    borderRadius: 30,
                                    marginVertical: 10,
                                    marginHorizontal: 20,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColor: 'white',
                                }}>
                                <Text style={{ color: '#16380B',
                                    fontSize: fontSizes.h4,
                                    fontFamily: 'Montserrat-Bold'
                            
                            }}>ĐĂNG NHẬP</Text>
                            </TouchableOpacity>

                            <View>
                               
                                <View style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    alignSelf: 'center',
                                    marginVertical: 20,
                                    justifyContent: 'space-evenly',
                                    width: '60%'
                                }}>
                                    {/* <Icon name={"facebook"}
                                size={30}
                                >
                            </Icon>
                            <Icon name={"google"}
                                size={30}>
                            </Icon>
                            <Icon name={"twitter"}
                                size={30}>
                            </Icon> */}
                                </View>
                            </View>


                        </View>

                    </View>

                    {keyboardIsShown == false &&
                        <View style={{
                            flex: 15,
                            paddingHorizontal: 20,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Text style={{
                                color: 'white'
                            }}>Hoặc bạn có thể</Text>
                            <TouchableOpacity 
                            onPress = {() => {
                                navigate('Register')
                            }}
                            
                            
                            style={{
                                 marginTop: 20,
                                 height: 40,
                                 width: '80%',
                                 borderRadius: 20,
                                 marginVertical: 10,
                                 marginHorizontal: 20,
                                 justifyContent: 'center',
                                 alignItems: 'center',
                                borderWidth: 1,
                                borderColor: 'white'
                                 
                            }}>
                               <Text style={{ color: 'white',
                                    fontSize: fontSizes.h4,
                                    fontFamily: 'Montserrat-Bold'
                            
                            }}>TẠO TÀI KHOẢN</Text>
                            </TouchableOpacity>
                        </View>}
                </View>
           
                </ImageBackground>


        </View>
    </KeyboardAvoidingView>

}

export default Login