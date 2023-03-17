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
import {auth, 
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

    useEffect(()=>{
        const xx = auth
        Keyboard.addListener('keyboardDidShow', ()=>{
            setKeyboardIsShown(true)
        })

        Keyboard.addListener('keyboardDidHide', ()=>{
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
                flex: 30,
                alignItems: 'center',
                justifyContent: 'flex-end'
            }}>
                <Icon name={"cloud"}
                    size={80}
                    style={{
                        color: 'white',
                    }}
                />
                <Text style={{
                    color: 'white',
                    fontSize: fontSizes.h3
                }}
                >YOUR LOGO</Text>
            </View>

            <View style={{
                flex: 55,

            }}>
                <View style={{
                    backgroundColor: 'white',
                    margin: 20,
                    height: 'auto',
                    borderRadius: 10
                }}>
                    <Text style={{
                        color: colors.grayText,
                        alignSelf: 'center',
                        marginTop: 10,
                        fontWeight: 'bold',
                        fontSize: fontSizes.h4
                    }}>Hello
                    </Text>

                    <Text style={{
                        color: colors.lightGray,
                        alignSelf: 'center',
                        fontWeight: 'bold',
                        fontSize: fontSizes.h6
                    }}>Already have an account?
                    </Text>

                    <View style={{
                        marginStart: 20,
                        marginTop: 20
                    }}>
                        <Text style={{
                            color: colors.darkPrimary,
                            fontSize: fontSizes.h5
                        }} >Email</Text>
                        <TextInput
                            onChangeText={(text)=>{
                                let fixedText = text.trim()
                               setEmail(fixedText)    
                            }}
                            style={{
                                color: 'black'
                            }}
                            value={email}
                            placeholder='example@gmail.com'
                            placeholderTextColor={colors.placeholder}
                        />

                    </View>

                    <View style={{
                        marginStart: 20,
                        marginTop: 20
                    }}>
                        <Text style={{
                            color: colors.darkPrimary,
                            fontSize: fontSizes.h5
                        }} >Password</Text>
                        <TextInput
                            onChangeText={(text)=>{
                               
                                setPassword(text)    
                            }}
                            style={{
                                color: 'black'
                            }}
                            value={password}
                            secureTextEntry={true}
                            placeholder='Enter your password'
                            placeholderTextColor={colors.placeholder}
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
                        borderColor: 'white',
                        borderWidth: 0.5,
                        height: 40,
                        borderRadius: 20,
                        marginVertical: 10,
                        marginHorizontal: 20,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: colors.darkPrimary,
                    }}>
                        <Text style={{ color: 'white' }}>Login</Text>
                    </TouchableOpacity>

                    <View>
                        <Text style={{
                            color: colors.lightGray,
                            fontSize: fontSizes.h6,
                            alignSelf: 'center'
                        }}>Or Login using social media</Text>

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
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Text style={{
                    color: 'white'
                }}>Don't have account? </Text>
                <TouchableOpacity><Text style={{
                    color: colors.primary,
                    textDecorationLine: 'underline',
                    fontWeight: 'bold'
                }}>Register now</Text></TouchableOpacity>
            </View>}


        </ImageBackground>

    </View>
    </KeyboardAvoidingView>
}

export default Login