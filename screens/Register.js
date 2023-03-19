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
import { UIButton, RegisterInput } from "../components"
// import Icon from 'react-native-vector-icons/FontAwesome5'
import { loadPartialConfigAsync } from '@babel/core';
import {
    auth,
    firebaseDatabase,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    firebaseDatabaseRef,
    firebaseSet,
    signInWithEmailAndPassword,
    sendEmailVerification
} from '../firebase/firebase'
import Icon from 'react-native-vector-icons/FontAwesome5'


function Register(props) {

    const [keyboardIsShown, setKeyboardIsShown] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState()
    const [checkPassword, setCheckPassword] = useState(false)

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
            backgroundColor: 'white'
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
                    backgroundColor: 'rgba(0, 0, 0, 0.5)'
                }}>

                <View style={{
                    flex: 30,
                    alignItems: 'center',
                    justifyContent: 'flex-end'
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
                    >ĐĂNG KÝ</Text>
                </View>

                <View style={{
                    flex: 55,

                }}>
                    <View style={{
                       
                        margin: 20,
                        height: 'auto',
                       
                    }}>
                       

                        <View style={{
                            marginStart: 20,
                            marginTop: 20
                        }}>
                            

                            <RegisterInput 
                                onChangeText = {(text) => {
                                setUsername(text)}} 
                                title = 'Tên người dùng'
                                name = 'user'
                                placeholder = 'Nhập tên người dùng...'
                            /> 

                            <RegisterInput 
                                onChangeText = {(text) => {
                                    let fixedText = text.trim()
                                    setEmail(fixedText)}} 
                                title = 'Email'
                                name = 'envelope'
                                placeholder = 'Nhập email...'
                            /> 

                            <RegisterInput 
                                onChangeText = {(text) => {
                                    setPassword(text)}} 
                                title = 'Mật khẩu'
                                name = 'lock'
                                placeholder = 'Nhập mật khẩu...'
                                secure = {true}
                            /> 
                            
                            <RegisterInput 
                                onChangeText = {(text) => {
                                    if (text == password) {
                                        setCheckPassword(true)
                                    } else {
                                        setCheckPassword(false)
                                    }}} 
                                title = 'Nhập lại mật khẩu'
                                name = 'lock'
                                placeholder = 'Nhập lại mật khẩu...'
                                secure = {true}
                            /> 

                        </View>

                        {checkPassword ? <TouchableOpacity
                            onPress={() => {
                                //alert(`Email = ${email}, password = ${password}`)
                                createUserWithEmailAndPassword(auth, email, password)
                                    .then((userCredential) => {
                                        const user = userCredential.user

                                        firebaseSet(firebaseDatabaseRef(
                                            firebaseDatabase,
                                            `users/${user.uid}`
                                        ), {
                                            email: user.email,
                                            accessToken: user.accessToken,
                                            userId: user.uid,
                                            userName: username
                                        })
                                        navigate('UITab')
                                    }).catch((error) => {
                                        alert(`Đăng ký thất bại!, mã lỗi: ${error.message}`)
                                    })
                            }}
                            style={{
                                marginTop: 20,
                                
                                height: 40,
                                borderRadius: 20,
                                marginVertical: 10,
                                marginHorizontal: 20,
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: 'white',
                            }}>
                            <Text style={{ color: '#16380B',
                                    fontSize: fontSizes.h4,
                                    fontFamily: 'Montserrat-Bold'}}>ĐĂNG KÝ</Text>
                        </TouchableOpacity> 

                        

                        :

                        <View style={{
                            marginTop: 20,
                                
                            height: 40,
                            borderRadius: 20,
                            marginVertical: 10,
                            marginHorizontal: 20,
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: '#A0A1A1',
                        }}>
                            <Text style={{ color: '#7F7F80',
                                    fontSize: fontSizes.h4,
                                    fontFamily: 'Montserrat-Bold'}}>ĐĂNG KÝ</Text>
                        </View>}


                    </View>

                </View>

                {keyboardIsShown == false &&
                    <View style={{
                        flex: 15,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Text style={{
                            color: 'white'
                        }}>Đã có tài khoản?   </Text>
                        <TouchableOpacity onPress={()=>{
                            navigate('Login')
                        }}><Text style={{
                            color: colors.primary,
                            textDecorationLine: 'underline',
                            fontWeight: 'bold'
                        }}>Đăng nhập ngay</Text></TouchableOpacity>
                    </View>}

                </View>

            </ImageBackground>

        </View>
    </KeyboardAvoidingView>
}

export default Register