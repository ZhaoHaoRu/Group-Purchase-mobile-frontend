import QRCode from 'react-native-qrcode-svg';
import React from 'react';
import {Dimensions} from 'react-native';
import {View} from 'native-base';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;
const QrCodeScreen = () => {
  return (
    <>
      <View alignItems="center" alignSelf="center" w="100%" margin="auto">
        <QRCode value={'l'} size={140} />
      </View>
    </>
  );
};

export default QrCodeScreen;
