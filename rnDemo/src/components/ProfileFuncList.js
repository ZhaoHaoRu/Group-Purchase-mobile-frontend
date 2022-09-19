// import {View, Dimensions} from 'react-native';
// import React from 'react';
// import {
//   Box,
//   Text,
//   Center,
//   Divider,
//   Flex,
//   Heading,
//   HStack,
//   Image,
//   VStack,
//   ZStack,
//   Button,
//   Pressable,
//   Spacer,
// } from 'native-base';
//
// const w = Dimensions.get('window').width;
// const h = Dimensions.get('window').height;
//
// const ProfileFuncList = () => {
//   return (
//     <View bg={'#fff'}>
//       <VStack>
//         <Box bg={'#fff'}>
//           <HStack mt={1} mb={1}>
//             <Heading fontSize="14" ml="4" mt="4" opacity={0.6}>
//               我的收藏
//             </Heading>
//             <Spacer />
//             <Image
//               // mt="15%"
//               mr="4"
//               mt="4"
//               opacity={0.3}
//               source={require('../image/arrowR.png')}
//               size="18px"
//               alt="arrowR"
//             />
//           </HStack>
//           <Divider
//             bg="darkText"
//             thickness="1.5"
//             alignSelf={'center'}
//             mt="3"
//             mb="0"
//             width={0.9 * w}
//             opacity={0.1}
//             orientation="horizontal"
//           />
//         </Box>
//         <Box bg={'#fff'}>
//           <HStack mt={1} mb={1}>
//             <Heading fontSize="14" ml="4" mt="4" opacity={0.6}>
//               设置
//             </Heading>
//             <Spacer />
//             <Image
//               // mt="15%"
//               mr="4"
//               mt="4"
//               opacity={0.3}
//               source={require('../image/arrowR.png')}
//               size="18px"
//               alt="arrowR"
//             />
//           </HStack>
//           <Divider
//             bg="darkText"
//             thickness="1.5"
//             alignSelf={'center'}
//             mt="3"
//             mb="0"
//             width={0.9 * w}
//             opacity={0.1}
//             orientation="horizontal"
//           />
//         </Box>
//       </VStack>
//     </View>
//   );
// };
//
// export default ProfileFuncList;

import {View, Dimensions} from 'react-native';
import React from 'react';
import {
  Box,
  Text,
  Center,
  Divider,
  Flex,
  Heading,
  HStack,
  Image,
  VStack,
  ZStack,
  Button,
  Pressable,
  Spacer,
} from 'native-base';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const ProfileFuncList = () => {
  return (
      <View bg={'#fff'}>
        <VStack>
          <Box bg={'#fff'}>
            <HStack mt={1} mb={1}>
              <Heading fontSize="14" ml="4" mt="4" opacity={0.6}>
                我的收藏
              </Heading>
              <Spacer />
              <Image
                  // mt="15%"
                  mr="4"
                  mt="4"
                  opacity={0.3}
                  source={require('../image/arrowR.png')}
                  size="18px"
                  alt="arrowR"
              />
            </HStack>
            <Divider
                bg="darkText"
                thickness="1.5"
                alignSelf={'center'}
                mt="3"
                mb="0"
                width={0.9 * w}
                opacity={0.1}
                orientation="horizontal"
            />
          </Box>
          <Box bg={'#fff'}>
            <HStack mt={1} mb={1}>
              <Heading fontSize="14" ml="4" mt="4" opacity={0.6}>
                设置
              </Heading>
              <Spacer />
              <Image
                  // mt="15%"
                  mr="4"
                  mt="4"
                  opacity={0.3}
                  source={require('../image/arrowR.png')}
                  size="18px"
                  alt="arrowR"
              />
            </HStack>
            <Divider
                bg="darkText"
                thickness="1.5"
                alignSelf={'center'}
                mt="3"
                mb="0"
                width={0.9 * w}
                opacity={0.1}
                orientation="horizontal"
            />
          </Box>
        </VStack>
      </View>
  );
};

export default ProfileFuncList;
