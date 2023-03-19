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
import {auth, 
        onAuthStateChanged,
        firebaseDatabaseRef,
        firebaseSet,
        firebaseDatabase
    } from '../firebase/firebase'
import AsyncStorage from '@react-native-async-storage/async-storage';

function Welcome(props) {
    const [accountTypes, setAccountTypes] = useState([
        {
            name: 'Influencer',
            isSelected: true,
        },
        {
            name: 'Business',
            isSelected: false,
        },
        {
            name: 'Individual',
            isSelected: false,
        },
    ])

    const { navigation, route } = props
    const { navigate, goBack } = navigation
    useEffect(() => {
        onAuthStateChanged(auth, (responseUser) => {
            
            if(responseUser) {                                
                //save data to Firebase                
                let user = {
                    userId: responseUser.uid,                
                    email: responseUser.email,
                    emailVerified: responseUser.emailVerified,
                    accessToken: responseUser.accessToken
                }
                firebaseSet(firebaseDatabaseRef(
                    firebaseDatabase,
                    `users/${responseUser.uid}`
                ), user)
              
                //save user to local storage
                AsyncStorage.setItem("user", JSON.stringify(user))                
                navigate('UITab')                
            } 
        })
    })
    return <ImageBackground source={images.background}
        resizeMode="cover"
        style={{
            flex: 100
        }}>
        <View style={{
            flex: 100,
            backgroundColor: 'rgba(0,0,0,0.7)'
        }}>

                <View style={{
                    flex: 20,
                }}>
                   
                </View>
                <View style={{
                    flex: 20,
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center'

                }}>
                    <Text
                        style={{
                            marginBottom: 7
                            , color: 'white',
                 fontFamily: 'Montserrat-Bold'

                        }}
                    >Chào mừng bạn đến với</Text>
                    <Image style ={{
                        width: 200,
                        height: 200,
                        resizeMode: 'contain',
                        
                    }} 
                    source={images.logonobackground}
                    
                    />
            
                   
                </View>
                <View style={{
                    flex: 40,
                    marginRight: 20,
                    marginLeft: 25,
                    paddingTop: 20
                }}>
                    {/* {accountTypes.map(accountType =>
                        <UIButton onPress={() => {
                            let newAccountTypes = accountTypes.map(eachAccountType => {
                                return {
                                    ...eachAccountType,
                                    isSelected: eachAccountType.name == accountType.name
                                }
                            })
                            setAccountTypes(newAccountTypes);
                        }}
                            title={accountType.name}
                            isSelected={accountType.isSelected}
                        />)
                    } */}
                    
                        <View style={{
                            marginVertical: 10,
                        }}>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center'
                            }}>
                            <Icon name='tree' size={20} color={'#12C996'}/>
                            <Text style={{
                                fontSize: fontSizes.h5,
                                color: 'white',
                                marginLeft: 20,
                 fontFamily: 'Montserrat-Bold'

                            }}>Tìm kiếm thông tin</Text>
                            </View>
                            
                            <Text style={{
                                marginTop: 5,
                                fontSize: fontSizes.h6,
                                textAlign: 'justify',
                                color: colors.lightGray
                            }}>App sẽ hỗ trợ tìm kiếm các tính chất và đặc điểm của các loại nông sản. </Text>
                        </View>
                
                        <View style={{
                            marginVertical: 10
                        }}>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center'
                            }}>
                            <Icon name='map' size={20} color={'#0DC5FF'}/>
                            <Text style={{
                                fontSize: fontSizes.h5,
                                color: 'white',
                                marginLeft: 20,
                 fontFamily: 'Montserrat-Bold'

                            }}>Bản đồ nông sản</Text>
                            </View>
                            
                            <Text style={{
                                marginTop: 5,
                                fontSize: fontSizes.h6,
                                textAlign: 'justify',
                                color: colors.lightGray
                            }}>Bản đồ phân phối nông sản khắp cả nước giúp người nông dân tính toán được nên lựa chọn loại nông sản để đầu tư.</Text>
                        </View>
                
                        <View style={{
                            marginVertical: 10
                        }}>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center'
                            }}>
                            <Icon name='question' size={20} color={'#FFC156'}/>
                            <Text style={{
                                fontSize: fontSizes.h5,
                                color: 'white',
                                marginLeft: 20,
                 fontFamily: 'Montserrat-Bold'

                            }}>Hỗ trợ khách hàng</Text>
                            </View>
                            
                            <Text style={{
                                marginTop: 5,
                                fontSize: fontSizes.h6,
                                textAlign: 'justify',
                                color: colors.lightGray
                            }}>Giải đáp các thắc mắc hay hỗ trợ giải quyết những khó khăn mà người nông dân gặp phải trong quá trình chọn lựa cho đến thu hoạch.</Text>
                        </View>
                
                </View>
                <View style={{
                    flex: 20
                }}> 
                    <TouchableOpacity 
                
                onPress={() => {
                    navigate('Login')
                }}
                style={{
                
                    borderWidth: 1,
                    borderColor: '#C7FFEB',
                    height: 40,
                    borderRadius: 20,
                    marginHorizontal: 40,
                    marginVertical: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor:  null 
                }}>
                    
                    <Text style={{
                        color: '#C7FFEB',
                        fontSize: fontSizes.h5,
                        fontFamily: 'Montserrat-Bold'
                    }}>ĐĂNG NHẬP</Text> 
                </TouchableOpacity>
                    
                <TouchableOpacity 
                
                onPress={() => {
                    navigate('Register')
                }}
                style={{
                
                    borderWidth: 1,
                    borderColor: 'white',
                    height: 40,
                    borderRadius: 20,
                    marginHorizontal: 40,
                    marginVertical: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor:  null 
                }}>
                    
                    <Text style={{
                        color: 'white',
                        fontSize: fontSizes.h5,
                        fontFamily: 'Montserrat-Bold'
                    }}>ĐĂNG KÝ</Text> 
                </TouchableOpacity>
                    





                </View>



            </View>

    </ImageBackground>

}

export default Welcome;