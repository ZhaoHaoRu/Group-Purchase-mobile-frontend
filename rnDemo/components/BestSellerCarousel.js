import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import * as React from 'react';
import {Text, View, Dimensions, StyleSheet} from 'react-native';
import {Box} from 'native-base';
import {HStack} from 'native-base';
const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

class BestSellerCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // 这个就是传入的数据，如果是请求后台的数据的话，只要和下面这个对象数组格式保持一致就好
      entries: [
        {
          title: '团购标题',
          subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
          illustration:
            'http://cf.dtcj.com/richeditor/e15f4895-3f10-4d0e-845d-997dc1c23637.jpg',
        },
        {
          title: '团购标题',
          subtitle: 'Lorem ipsum dolor sit amet',
          illustration:
            'https://img.zcool.cn/community/01b0e45e120106a80120a895a2e9af.jpg@1280w_1l_2o_100sh.jpg'
        },
        {
          title: '团购标题',
          subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
          illustration:
            'http://seopic.699pic.com/photo/50050/6251.jpg_wh1200.jpg'
        },
      ],
    };
  }

  _renderItem({item, index}, parallaxProps) {
    return (
      <View style={styles.item}>
        <ParallaxImage
          source={{uri: item.illustration}}
          containerStyle={styles.imageContainer}
          style={styles.image}
          parallaxFactor={0.4}
          {...parallaxProps}
        />
        <Text style={styles.title} numberOfLines={2}>
          {item.title}
        </Text>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.carousel_container}>
        <Box ml={0.1 * w}>
          <Text style={styles.title_2}>
            今日热门团购
          </Text>
        </Box>
        <Carousel
          sliderWidth={w}
          sliderHeight={w * 0.6}
          itemWidth={w - 60}
          data={this.state.entries}
          renderItem={this._renderItem}
          hasParallaxImages={true}
        />
        <Box ml={0.1 * w} width={w}>
          <Text style={styles.date}>
            今日日期
          </Text>
        </Box>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  carousel_container: {
    marginTop: -0.08 * h,
    height: 0.4 * h,
    // backgroundColor: '#9f1239',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: w - 60,
    height: w * 0.6,
  },
  title: {
    display: 'flex',
    position: 'absolute',
    bottom: 10,
    color: 'white',
    width: '100%',
    height: 45,
    lineHeight: 45,
    fontSize: 20,
    paddingLeft: 10,
    borderWidth: 5,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderLeftWidth: 5,
    borderRightWidth: 0,
    borderLeftColor: '#9f1239',
  },
  title_2: {
    display: 'flex',
    ml: 0.15 * w,
    color: '#9f1239',
    width: '100%',
    height: 45,
    lineHeight: 45,
    fontSize: 20,
  },
  imageContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
  date: {
    display: 'flex',
    ml: 0.15 * w,
    color: '#9f1239',
    width: '100%',
    height: 45,
    lineHeight: 45,
    fontSize: 12,
  }
});

export default BestSellerCarousel;
