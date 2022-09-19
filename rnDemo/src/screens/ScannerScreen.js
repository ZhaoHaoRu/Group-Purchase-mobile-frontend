import React, {Component} from 'react';
import {
  View,
  Animated,
  Easing,
  Image,
  TouchableOpacity,
  StyleSheet,
  Text,
} from 'react-native';
import {RNCamera} from 'react-native-camera';
import ImagePicker from 'react-native-image-crop-picker';
import LocalBarcodeRecognizer from 'react-native-local-barcode-recognizer';
import {getCollectedGroups, getGroupById} from '../service/groupService';
import {storage} from '../utils/storage';

export default class ScannerScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moveAnim: new Animated.Value(0),
      data: '',
      group: {},
      userId: '',
    };
  }
  componentDidMount() {
    storage.load('userId', data => {
      this.setState({userId: data});
      console.log('userId:', data);
    });
    this.startAnimation();
  }
  startAnimation = () => {
    this.state.moveAnim.setValue(0);
    Animated.timing(this.state.moveAnim, {
      toValue: -200,
      duration: 1500,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => this.startAnimation());
  };
  //  识别二维码
  onBarCodeRead = result => {
    if (this.state.data) {
      const {data} = result;
      alert('扫描结果:' + data);
      if (data === 'detail') {
        this.setState({data});
      }
    }
  };

  _pickerImg() {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: false,
      includeBase64: true,
    }).then(image => {
      this._handleImage(image);
    });
  }
  _handleImage(image) {
    if (image.data) {
      this.recognize(image.data);
    }
  }
  recognize = async data => {
    let result = await LocalBarcodeRecognizer.decode(
      data.replace('data:image/jpeg;base64,', ''),
      {codeTypes: ['ean13', 'qr']},
    );
    // alert('识别结果：' + result);
    getGroupById(parseInt(result), result => {
      this.setState({group: result.data});
      this.props.navigation.replace('Detail', {
        props: this.state.group,
        userId: this.state.userId,
      });
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          onBarCodeRead={this.onBarCodeRead}>
          <View style={styles.rectangleContainer}>
            <View style={styles.rectangle} />
            <Animated.View
              style={[
                styles.border,
                {transform: [{translateY: this.state.moveAnim}]},
              ]}
            />
            <Text style={styles.rectangleText}>
              将二维码放入框内，即可自动扫描
            </Text>
          </View>
          <TouchableOpacity
            style={styles.btnView}
            onPress={() => this._pickerImg()}>
            <Text style={styles.btnText}>相册</Text>
          </TouchableOpacity>
        </RNCamera>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  btnText: {color: 'white', fontSize: 16},
  btnView: {position: 'absolute', right: 30, top: 50},
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  rectangleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  rectangle: {
    height: 200,
    width: 200,
    borderWidth: 1,
    borderColor: '#00FF00',
    backgroundColor: 'transparent',
  },
  rectangleText: {
    flex: 0,
    color: '#fff',
    marginTop: 10,
  },
  border: {
    flex: 0,
    width: 200,
    height: 2,
    backgroundColor: '#00FF00',
  },
});
