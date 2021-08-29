import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const ImageWithRefresh = ({
  onBtnPress,
  isBtnDisabled,
  imgSourceObject,
  btnText,
}) => {
  console.log('imgSourceObject', imgSourceObject);
  return (
    <View style={sty.container}>
      {imgSourceObject.uri !== '' && (
        <View>
          <Image
            style={sty.img}
            resideMode="contain"
            source={imgSourceObject}
          />
          <TouchableOpacity
            onPress={onBtnPress}
            disabled={isBtnDisabled}
            style={[
              sty.btn,
              {backgroundColor: isBtnDisabled ? 'red' : 'green'},
            ]}>
            <Text style={sty.btnText}>
              {isBtnDisabled ? 'loading...' : btnText}
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default React.memo(ImageWithRefresh);

const sty = StyleSheet.create({
  container: {
    marginBottom: 5,
  },
  dataText: {
    fontSize: 15,
    color: 'black',
  },
  btn: {
    height: 20,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 12,
  },
  img: {
    backgroundColor: 'white',
    width: 100,
    height: 100,
  },
});
