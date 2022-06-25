import QRCode from 'react-native-qrcode-svg';
import React from 'react';
import {Dimensions} from 'react-native';
import {View, Button} from 'native-base';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;
const QrCodeScreen = ({navigation}) => {
  return (
    <>
      <View alignItems="center" alignSelf="center" w="100%" margin="auto">
        <QRCode value={'detail'} size={0.5 * w} />
      </View>
      <Button
        size="sm"
        // variant="outline"
        colorScheme="danger"
        width={0.5 * w}
        margin={'auto'}
        onPress={() => {
          // navigation.dispatch(StackActions.popToTop());
          navigation.replace('TabWrapper');
        }}>
        回到主页
      </Button>
    </>
  );
};

export default QrCodeScreen;
