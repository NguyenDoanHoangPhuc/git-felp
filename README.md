# git-felp
* Hướng dẫn đăng nhập, đăng ký:
- Hiện tại chưa có xác thực nên có thể đăng ký như bình thường, email không cần phải tồn tại, chỉ cần đúng định dạng example@gmail.com
- Nếu không đăng ký được, có thể dùng tài khoản: khach@gmail.com / 121203

* Hướng dẫn cách hiện screen mới lên màn hình:
- Trong folder navigate:
  + trong App.js, thêm màn hình:
   <Stack.Screen name={"Tên màn hình"} component ={Tên màn hình} />
   trong thẻ <Stack.Navigator>
 + Trong UITab.js, thêm:
    <Tab.Screen name={'Tên màn hình'} component={Tên màn hình}/>
    trong thẻ <Tab.Navigator>
    - reload app
