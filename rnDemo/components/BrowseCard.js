import React, {Component} from 'react';
import {Box, Image, AspectRatio, Text} from 'native-base';
import {Dimensions} from 'react-native';
import {Link} from '@react-navigation/native';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const BrowseCard = () => {
  return (
    <Box width={0.45 * w} direction="column" margin={0.01 * w} height={0.4 * w}>
      <AspectRatio w="100%" ratio={{base: 4 / 3, md: 4 / 3}}>
        <Image
          source={{
            uri: 'https://img.zcool.cn/community/01dec05680a3f26ac7251bb6972995.jpg@1280w_1l_2o_100sh.jpg',
          }}
          alt="image"
          borderRadius="lg"
        />
      </AspectRatio>
      <Link to={{screen: 'Detail', initial: false}}>
        <Text mt={0.02 * w} color="#71717a" bold size="xl">
          团购名称
        </Text>
      </Link>
    </Box>
  );
};

export default BrowseCard;
