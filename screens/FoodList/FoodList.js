import React, { useState, useEffect } from 'react';
import {
    Text,
    View,
    Image,
    ImageBackground,
    TouchableOpacity,
    TextInput,
    Keyboard,
    KeyboardAvoidingView,
    ScrollView,
    FlatList
} from 'react-native'
import { images, icon, colors, fontSizes } from '../../constants/index'
import { UIButton } from "../components"
import Icon from 'react-native-vector-icons/FontAwesome5'
import { loadPartialConfigAsync } from '@babel/core';
import FoodItem from './FoodItem';
function FoodList(props) {
    const { navigation, route } = props
    const { navigate, goBack } = navigation
   const [foods, setFoods] = useState([
        {   
            ID: 0, 
            name: 'Bơ',
            url: 'https://vcdn1-suckhoe.vnecdn.net/2022/06/14/avocado-products-made-from-avo-2274-9899-1655197911.jpg?w=0&h=0&q=100&dpr=2&fit=crop&s=EWOaBBrQi2HZnmDaVp5uYg',
            status: 'Thực phẩm tốt cho sức khỏe mọi người',
            uses: 'normal, làm đẹp, chó'
        },
        {
            ID: 1,
            name: 'Bắp cải',
            url: 'https://suckhoedoisong.qltns.mediacdn.vn/Images/hahien/2017/11/16/homemade-cabbage-ointment.jpg',
            status: 'Một loại thực phẩm giàu chất dinh dưỡng, tốt cho sức khỏe mọi người',
            uses: 'normal, làm đẹp'

        },
        {
            ID: 2,
            name: 'Dưa chuột',
            url: 'https://cdn.tgdd.vn/2022/02/CookDishThumb/cach-chon-dua-leo-ngon-khong-bi-dang-va-cach-bao-quan-dua-leo-thumb-620x620.jpg',
            status: 'Một loại thực phẩm giàu chất dinh dưỡng, tốt cho sức khỏe mọi người',
            uses: 'normal, chó'

        },
        {
            ID: 3,
            name: 'Hành tây',
            url: 'https://photo-cms-tpo.epicdn.me/w890/Uploaded/2023/rkznae/2020_04_06/Onion_Effective_In_Facilitating_1_UHQD.jpg',
            status: 'Một loại thực phẩm giàu chất dinh dưỡng, tốt cho sức khỏe mọi người',
            uses: 'normal, chó, mèo'

        },
        {
            ID: 4,
            name: 'Cà tím',
            url: 'https://cdn.tgdd.vn/2020/09/content/5-tac-dung-cua-ca-tim-doi-voi-suc-khoe-va-cach-chon-mua-ca-tim-ngon-3-800x500.jpg',
            status: 'Một loại thực phẩm giàu chất dinh dưỡng, tốt cho sức khỏe mọi người',
            uses:'normal, món ăn, chó'
        },
        {
            ID: 5,
            name: 'Mướp đắng (khổ qua)',
            url: 'https://cdn.tgdd.vn/Files/2018/07/04/1099288/7-loi-ich-tuyet-voi-cua-trai-kho-qua-201909292236400463.jpg',
            status: 'Một loại thực phẩm giàu chất dinh dưỡng, tốt cho sức khỏe mọi người',
            uses:'normal, tim mạch, món ăn'
        },
        {
            ID: 6,
            name: 'Cam',
            url: 'https://cdn-www.vinid.net/2019/10/an-cam-co-tac-dung-gi-nen-an-cam-luc-nao-tot-nhat-1024x682.jpg',
            status: 'Một loại quả có vị chua',
            uses:'normal, làm đẹp, vệ sinh'
        },
    ])
    const [categories, setCategories] = useState([
        {
            name: 'fan',
            title: 'Đẹp',
            isSelected: false
        },
        {
            name: 'heartbeat',
            title: 'Tim',
            isSelected: false
        },
        {
            name: 'hamburger',
            title: 'Món ăn',
            isSelected: false
        },
        {
            name: 'dog',
            title: 'Chó',
            isSelected: false
        },
        {
            name: 'cat',
            title: 'Mèo',
            isSelected: false
        },
        {
            name: 'plane',
            title: 'Vệ sinh',
            isSelected: false
        },
    ])
    const [searchText, setSearchText] = useState('')
    const [searchIconText, setSearchIconText] = useState('')

    const filterFoodByName = (foods) => foods.filter(eachFood => eachFood.name.toLowerCase().includes(searchText.toLowerCase()))
    const filterFoodByIcon = (foods) => foods.filter(eachFood => eachFood.uses.toLowerCase().includes(searchIconText.toLowerCase()))
    
    function filteredFood(){
        let foodOut = filterFoodByIcon(foods);
        return filterFoodByName(foodOut); 
    }
    
   
    
    return <View style={{ flex: 1, backgroundColor: 'white' }}>
        {/* <ScrollView>
            {foods.map(food => <FoodItem food ={food} key = {food.name}/>)}
        </ScrollView> */}

        <View style={{
            paddingLeft: 30,
        }}>
            <Image style={{
                height: 100,
                width: 100,
                resizeMode: 'contain'
            }} 
                source = {images.logoblack}
            />
            <Text style={{
             
                marginTop: -20,
                paddingStart: 10,
                 color: '#183D0C',
                 fontSize: 18,
                 fontFamily: 'Montserrat-Bold'
            }}>Hỗ trợ tìm kiếm nông sản</Text>
        </View>
        <View style={{
            height: 80,
            marginHorizontal: 20,
            marginVertical: 2,
            flexDirection: 'row',
            alignItems: 'center',
        }}>
            
            <Icon name='search'
                color = {colors.lightGray}
                size={20}
                style = {{
                    position: 'absolute',
                    top: 30,
                    left: 10
                }}
            />
            <TextInput 
            onChangeText={(text)=>{
                setSearchText(text)
            }}
            placeholder='Tìm kiếm loại cây trồng...'
            placeholderTextColor={colors.lightGray}
            style={{
                height: 60,
                backgroundColor: '#E3E3E3',
                flex: 1,
                marginEnd: 5,
                borderRadius: 20,
                opacity: 0.5,
                paddingStart: 50,
                color: colors.grayText
            }} />

            <Icon name='bars'
                size={20}
                color={colors.lightGray}
                style={{
                    position: 'absolute',
                    top: 30,
                    right: 20
                }}
            />  
            
        </View>
        
        {/* Horizonal List of categories */}
       

        {/* Lists of food */}
        
           
           <FlatList
                data={filteredFood()}
                renderItem={({ item }) => {
                    return <FoodItem
                        food={item}
                        key={item.name}
                        onPress={() => {
                            navigate('FoodInfo',{ ID: [item.ID] });
                        }}
                    />
                }}
    
                keyExtractor={eachFood => eachFood.name}
            />
        
        <View style={{ height: 90,

        }}>
        
        <FlatList

            horizontal={true}
            data={categories}
            renderItem={({ item }) => {
                return <TouchableOpacity
                   
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginHorizontal: 20,
                        marginTop:8,
                        width: 50,
                        height: 50,
                        borderRadius: 20,
                        backgroundColor: item.isSelected ?  '#1F4F0F':'#E3E3E3'
                    }}
                    
                    onPress={() => {
                        
                        if (item.isSelected == false) {
                            setSearchIconText(item.title)
                            item.isSelected = true
                        }
                        else if (item.isSelected == true) {
                            setSearchIconText('normal')
                            item.isSelected = false
                        }
                    }}

                    
                    >
                    
                    <Icon name={item.name}
                        size={20}
                        style={{
                            color: item.isSelected ? 'white' : colors.lightGray,
                            position: 'absolute'
                        }}
                    />
                    <Text style={{color: colors.lightGray,
                        top: 38,
                        fontSize: fontSizes.h6,
                }}>{item.title}</Text>
                    
                </TouchableOpacity>
            }}
            keyExtractor={item => item.name}

        />
        
    </View>
    </View>
}

export default FoodList