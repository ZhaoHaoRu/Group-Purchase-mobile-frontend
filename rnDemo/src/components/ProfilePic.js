// import {View, Text, ImageBackground} from 'react-native';
// import React from 'react';
// import {Box, Center, Heading, Image, ZStack} from 'native-base';
//
// const ProfilePic = () => {
//   return (
//     <View>
//       <ZStack>
//         <Image
//           source={{
//             uri: 'https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000',
//           }}
//           alt="Alternate Text"
//           size="xl"
//           width={'100%'}
//           height={'180px'}
//         />
//         <Box alignSelf={'center'} justifyItems={'center'}>
//           <Image
//             source={{
//               uri: 'https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png',
//             }}
//             style={{
//               marginTop: 50, //might need to change
//               width: 60,
//               height: 60,
//               alignItems: 'center',
//               justifyContent: 'center',
//               alignSelf: 'center',
//               borderWidth: 1,
//               borderColor: '#fff',
//               borderRadius: 50,
//               marginBottom: 10,
//             }}
//             alt="avatar"
//           />
//           <Heading padding={0} alignSelf={'center'} fontSize={15}>
//             小明
//           </Heading>
//         </Box>
//       </ZStack>
//     </View>
//   );
// };
//
// export default ProfilePic;

import {View, Text, ImageBackground} from 'react-native';
import React from 'react';
import {Box, Center, Heading, Image, ZStack} from 'native-base';

const ProfilePic = ({user}) => {
  return (
    <View>
      <ZStack>
        <Image
          source={{
            uri: 'https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000',
          }}
          alt="Alternate Text"
          size="xl"
          width={'100%'}
          height={'180px'}
        />
        <Box alignSelf={'center'} justifyItems={'center'}>
          <Image
            source={{
              uri: 'https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png',
            }}
            style={{
              marginTop: 50, //might need to change
              width: 60,
              height: 60,
              alignItems: 'center',
              justifyContent: 'center',
              alignSelf: 'center',
              borderWidth: 1,
              borderColor: '#fff',
              borderRadius: 50,
              marginBottom: 10,
            }}
            alt="avatar"
          />
          <Heading padding={0} alignSelf={'center'} fontSize={15}>
              {user.userName}
          </Heading>
        </Box>
      </ZStack>
    </View>
  );
};

export default ProfilePic;
