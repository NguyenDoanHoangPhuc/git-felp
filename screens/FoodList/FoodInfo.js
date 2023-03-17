import React, { useState, useEffect } from 'react';
import {
    Text,
    View,
    Image,
    ImageBackground,
    TouchableOpacity,
    ScrollView,
    FlatList
} from 'react-native'
import { images, icon, colors, fontSizes } from '../../constants/index'
import { UIButton } from "../../components"
import Icon from 'react-native-vector-icons/FontAwesome5'
import { loadPartialConfigAsync } from '@babel/core';
import FoodCard from './FoodCard';
import UIModal from '../../components/UIModal';
const FoodInfo = ({ navigation, route }) => {
    const [infos, setInfos] = useState([
        {
            name: 'Bơ',
            url: 'https://benhvienk.vn/data/media/1601/images/Untitled-1-1200x676-20.jpg',
            scienceName: 'Persea americana',
            appearance: 'Trái của cây bơ hình như cái bầu nước, dài 7–20 cm, nặng 100g-1 kg. Vỏ mỏng, hơi cứng, màu xanh lục đậm, có khi gần như màu đen. Hột trái bơ hình tựa quả trứng, dài 5 – 6 cm, nằm trong trung tâm, màu nâu đậm, và rất cứng. Khi chín, bên trong thịt mềm, màu vàng nhạt, giống như chất bơ, có vị ngọt nhạt.',
            weather: 'Cây bơ không hợp trồng ở vùng lạnh, chỉ phát triển ở vùng nhiệt đới và ôn đới.',
            benefit: 'Thịt trái bơ thường được dùng làm nguyên liệu cho các món sinh tố giải khát, làm salad, sushi hoặc có thể dùng để ăn với bánh mì bằng cách quết lên bánh và rắc thêm một chút đường. Ngoài ra, bơ cũng được dùng trong việc chăm sóc da.'
        },
        {
            name: 'Bắp cải',
            url: 'https://suckhoedoisong.qltns.mediacdn.vn/Images/hahien/2017/11/16/homemade-cabbage-ointment.jpg',
            scienceName: 'Persea americana',
            appearance: 'Trái của cây bơ hình như cái bầu nước, dài 7–20 cm, nặng 100g-1 kg. Vỏ mỏng, hơi cứng, màu xanh lục đậm, có khi gần như màu đen. Hột trái bơ hình tựa quả trứng, dài 5 – 6 cm, nằm trong trung tâm, màu nâu đậm, và rất cứng. Khi chín, bên trong thịt mềm, màu vàng nhạt, giống như chất bơ, có vị ngọt nhạt.',
            weather: 'Cây bơ không hợp trồng ở vùng lạnh, chỉ phát triển ở vùng nhiệt đới và ôn đới.',
            benefit: 'Thịt trái bơ thường được dùng làm nguyên liệu cho các món sinh tố giải khát, làm salad, sushi hoặc có thể dùng để ăn với bánh mì bằng cách quết lên bánh và rắc thêm một chút đường. Ngoài ra, bơ cũng được dùng trong việc chăm sóc da.'
        },
        {
            name: 'Dưa chuột',
            url: 'https://benhvienk.vn/data/media/1601/images/Untitled-1-1200x676-20.jpg',
            scienceName: 'Persea americana',
            appearance: 'Trái của cây bơ hình như cái bầu nước, dài 7–20 cm, nặng 100g-1 kg. Vỏ mỏng, hơi cứng, màu xanh lục đậm, có khi gần như màu đen. Hột trái bơ hình tựa quả trứng, dài 5 – 6 cm, nằm trong trung tâm, màu nâu đậm, và rất cứng. Khi chín, bên trong thịt mềm, màu vàng nhạt, giống như chất bơ, có vị ngọt nhạt.',
            weather: 'Cây bơ không hợp trồng ở vùng lạnh, chỉ phát triển ở vùng nhiệt đới và ôn đới.',
            benefit: 'Thịt trái bơ thường được dùng làm nguyên liệu cho các món sinh tố giải khát, làm salad, sushi hoặc có thể dùng để ăn với bánh mì bằng cách quết lên bánh và rắc thêm một chút đường. Ngoài ra, bơ cũng được dùng trong việc chăm sóc da.'
        },
        
    ])
    const [grownData, setGrownData] = useState([
     ['Đất trồng cây bơ phải có tính chất:','Mềm, thấm nước','Mịn, không quá khô','Đủ chất dinh dưỡng'],
     ['Đất trồng cây bơ phải đáp ứng các điều kiện như:','Tối thiểu khoảng 2m','Nếu ở vùng nhiều mưa dễ gây ngập úng tối thiểu khoảng 1,5m','Ở vùng mưa trung bình; tối thiểu 1,0m', 'Ở vùng khí hậu bán khô hạn Không có tầng sét, tầng kết von quá cạn; tầng đất quá mỏng kém thoát nước có thể lên luống'],
         [],
         [],
        
    ])
    
    const ID = route.params.ID[0]

    const [data, setData] = useState([
        {
            title:'Vẻ ngoài và mùi vị',
            information: infos[ID].appearance
        },
        {
            title:'Thời tiết và nơi trồng',
            information: infos[ID].weather
        },
        {
            title:`Các lợi ích từ ${infos[ID].name}`,
            information: infos[ID].benefit
        },

    ])
    return <View style={{backgroundColor: '#12290B', flex:1 }}>

        <ScrollView>
            <View style={{
                height: 200,
            }}>
                <ImageBackground source={{uri: infos[ID].url}}
                    resizeMode="cover"
                    style={{
                        flex: 1,
                    }}>
                    <View style={{
                        flex: 100,
                        backgroundColor: 'rgba(0,0,0,0.5)'
                    }}>
                        <View style={{
                            position: 'absolute',
                            bottom: 20,
                            left: 20,

                        }}>
                            <Text style={{
                                fontSize: 30,
                                fontWeight: 'bold',
                                color: 'white'
                            }}>{infos[ID].name}</Text>
                            <Text style={{color: 'white'}}>Tên khoa học: {infos[ID].scienceName}</Text>
                        </View>
                        <Icon name='heart' size={30} color={'white'} style={{
                            position: 'absolute',
                            top: 20,
                            right: 20
                        }} />

                    </View>
                </ImageBackground>
            </View>
            <View style={{
                paddingHorizontal: 30,
                paddingVertical: 20,
                backgroundColor: '#12290B'
            }}>

                <FoodCard data ={data[0]}/>
                <FoodCard data ={data[1]}/>
                <FoodCard data ={data[2]}/>
                
                

            </View>
            
            <UIModal data={grownData[0]}/>
        </ScrollView>
    </View>
}

export default FoodInfo