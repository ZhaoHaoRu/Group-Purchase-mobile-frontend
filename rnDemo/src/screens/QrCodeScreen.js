import QRCode from 'react-native-qrcode-svg';
import React from 'react';
import {Dimensions} from 'react-native';
import {View, Button, Box, Text, VStack} from 'native-base';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;
const QrCodeScreen = ({route, navigation}) => {
  console.log('QRCode:', route.params.props);
  // console.log("QRCode data:", route.params.props.groupId);
  return (
    <>
      <Box
        lignItems="center"
        alignSelf="center"
        margin={'auto'}
        w={'90%'}
        h={'60%'}
        backgroundColor={'white'}
        borderRadius={'lg'}>
        <VStack>
          <View alignItems="center" alignSelf="center" w="100%" mt={'20%'}>
            <QRCode
              value={route.params.props.groupId.toString()}
              size={0.5 * w}
            />
          </View>
          <Box
            alignContent={'center'}
            alignSelf="center"
            w="100%"
            h={0.1 * h}
            mt={0.1 * h}>
            <Text color={'gray.400'} size={'xs'} alignSelf="center">
              扫一扫上面的二维码图案，获取这个团购。
            </Text>
            <Button
              size="sm"
              // variant="outline"
              colorScheme="danger"
              width={0.5 * w}
              alignSelf="center"
              mt={-0.35 * h}
              onPress={() => {
                // navigation.dispatch(StackActions.popToTop());
                navigation.replace('TabWrapper');
              }}>
              回到主页
            </Button>
          </Box>
        </VStack>
      </Box>
    </>
  );
};

export default QrCodeScreen;
