const [foods, setFoods] = useState([
    {   
        ID: 0,
        name: 'Bơ',
        url: 'https://benhvienk.vn/data/media/1601/images/Untitled-1-1200x676-20.jpg',
        status: 'Một loại thực phẩm giàu chất dinh dưỡng, tốt cho sức khỏe mọi người',
        uses: 'normal, làm đẹp'
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
        uses:'normal, làm đẹp'
    },
])
const [categories, setCategories] = useState([
    {
        name: 'fan',
        title: 'Làm đẹp',
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
        name: 'cat',
        title: 'Vệ sinh',
        isSelected: false
    },
])

//THÔNG TIN CHI TIẾT TỪNG LOẠI THỨC ĂN

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
     ['Đất trồng cây bơ phải có tính chất:','Mềm, thấm nước','Mịn, không quá khô','Đủ chất dinh dưỡng'], //Bơ
     [], //bắp cải
     [], //...
    
])