import {View, Dimensions, StyleSheet, TextInput} from 'react-native';
import React, {useState} from 'react';
import {
  Box,
  Divider,
  Heading,
  HStack,
  VStack,
  Spacer,
  FormControl,
  Input,
} from 'native-base';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

function GrpDetailsForm() {
  const [formData, setData] = React.useState({});
  const [errors, setErrors] = React.useState({});

  const validate = () => {
    if (formData.name === undefined) {
      setErrors({...errors, name: '请填写团购名称'});
      return false;
    } else if (formData.name.length < 3) {
      setErrors({...errors, name: '团购名称太短'});
      return false;
    }

    return true;
  };

  return (
    // <VStack width="90%" mx="3" maxW="300px">
    <FormControl isRequired>
      {/* <FormControl.Label _text={{
        bold: true
      }}>Name</FormControl.Label> */}
      <Input
        placeholder="团购名称"
        variant="unstyled"
        borderColor={'transparent'}
        onChangeText={value => setData({...formData, name: value})}
      />
      {/* <FormControl.HelperText
          _text={{
            fontSize: 'xs',
          }}>
          请输入团购名称
        </FormControl.HelperText> */}
      <FormControl.ErrorMessage
        _text={{
          fontSize: 'xs',
        }}>
        Error
      </FormControl.ErrorMessage>
    </FormControl>
    // </VStack>
  );
}

const GroupDetailsForm = () => {
  const [text, setText] = useState('');
  const [formData, setData] = React.useState({});
  return (
    <Box bg={'#fff'} borderRadius={15} height={'auto'} pb="2" m="2">
      <VStack>
        <HStack mt={1} mb={1}>
          <Heading fontSize="14" ml="4" mt="4" opacity={0.6}>
            团购介绍
          </Heading>
          <Spacer />
          {/* <Image
                // mt="15%"
                mr="4"
                mt="4"
                opacity={0.3}
                source={require('../image/arrowR.png')}
                size="18px"
                alt="map"
              /> */}
        </HStack>
        <Divider
          bg="darkText"
          thickness="1.5"
          alignSelf={'center'}
          mt="3"
          mb="0"
          width={0.9 * w}
          opacity={0.3}
          orientation="horizontal"
        />
        <GrpDetailsForm />
        <Divider
          bg="darkText"
          thickness="1.5"
          alignSelf={'center'}
          width={0.9 * w}
          opacity={0.05}
          orientation="horizontal"
        />
        <FormControl isRequired>
          <Input
            placeholder="描述"
            variant="unstyled"
            borderColor={'transparent'}
            onChangeText={value => setData({...formData, name: value})}
          />
        </FormControl>
        {/* <TextInput
              style={{height: 40}}
              placeholder="Type here to translate!"
              onChangeText={newText => setText(newText)}
              defaultValue={text}
            /> */}
      </VStack>
    </Box>
  );
};

const styles = StyleSheet.create({
  dividerH: {
    bg: 'darkText',
    thickness: '1.5',
    alignSelf: 'center',
    mt: '3',
    mb: '0',
    width: 0.9 * w,
    opacity: 0.1,
    orientation: 'horizontal',
  },
});

export default GroupDetailsForm;
