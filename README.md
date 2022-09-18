# README
### 项目实现的功能
* **创建与修改团购：** APP使用者可以自由创建与修改团购，并且生成团购的二维码进行分享
* **浏览与参与团购：** APP使用者可以浏览附近的团购（支持非登录浏览），根据类别浏览特定团购，参与普通团购和团购秒杀
* **查询团购：** 提供基于团长名称和团购名称的团购查询、基于团购类别和团购开始时间等多种筛选，基于团购开始时间和团购名称的多种排序
* **个人中心：** 用户可以查看个人团购订单和订单详情，支持取消订单，团长也可以查看团购销售订单，取消团购或订单，也可以查看个人钱包、历史地址等多种信息
* **收藏团购：** 支持用户收藏和取消收藏团购，收藏的团购会出现在用户主页上，便于用户查看
* **团购推荐：** 根据用户的历史信息和团购本身的特点，在首页向用户进行团购的个性化推荐，用户可以点击查看详情
* **团长数据分析：** 为团长提供各种销售数据：总销售金额、总退款金额、订单数、下单人数、历史订单概况等


### 项目使用的所有模块
```shell
@babel/core@7.18.5                               
@babel/runtime@7.18.3                            
@expo/vector-icons@13.0.0                        
@native-base/icons@0.0.11                        
@react-native-async-storage/async-storage@1.17.7 
@react-native-community/eslint-config@2.0.0      
@react-native-community/masked-view@0.1.11       
@react-navigation/bottom-tabs@6.3.1              
@react-navigation/drawer@6.4.2
@react-navigation/native-stack@6.6.2
@react-navigation/native@6.0.10
babel-jest@26.6.3
eslint@7.32.0
jest@26.6.3
metro-react-native-babel-preset@0.67.0
native-base@3.4.7
react-native-camera@4.2.1
react-native-countdown-component@2.7.1
react-native-date-picker@4.2.2
react-native-datepicker@1.7.2
react-native-gesture-handler@2.5.0
react-native-image-crop-picker@0.37.3
react-native-image-picker@4.8.4
react-native-local-barcode-recognizer@0.0.2
react-native-qrcode-svg@6.1.2
react-native-reanimated@2.8.0
react-native-safe-area-context@4.3.1
react-native-screens@3.13.1
react-native-snap-carousel@3.9.1
react-native-storage@1.0.1
react-native-svg@12.3.0
react-native-vector-icons@9.1.0
react-native@0.68.2
react-navigation@4.4.4
react-test-renderer@17.0.2
react@17.0.2
save@2.5.0
```

### 安装与运行
```shell
git clone https://github.com/ZhaoHaoRu/Group-Purchase-mobile-frontend.git
# 打开项目所在文件夹
cd rnDemo
# 安装相关模块
npm install
npx react-native start
# 另开terminal并运行一下语句
npx react-native run-android
```
如果在运行过程中出现了红屏错误，可以尝试：
1. 对于`unable resolve module`，直接删掉`node_module`，然后重新运行`npm intall`
2. 对于`unable to load script`,可以重新运行`npx react-native start`和`npx react-native run-android`两条命令
3. 还可以尝试清除缓存，停止正在运行的`npx react-native start`,运行`npx react-native start --reset-cache`

### About
如果对于项目有任何问题的话，欢迎提交issue或者与我们联系。