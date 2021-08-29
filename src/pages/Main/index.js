import React, {useEffect, useCallback} from 'react';
import {StyleSheet, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import ImageWithRefresh from '../../components/ImageWithRefresh';
import {
  some_call_api_TestAction,
  start_loading,
} from '../../store/actions/dogActions';
import {
  call_getRandomPic_action,
  start_loading_random,
} from '../../store/actions/randomPicActions';

export default () => {
  const dispatch = useDispatch();

  const {dogUrlObject, loading} = useSelector(state => {
    return state.dogReducer;
  });

  const {randomPicObject, isRandomLoading} = useSelector(state => {
    return state.randomPicReducer;
  });

  const getANewDog = useCallback(() => {
    dispatch(start_loading());
    setTimeout(() => {
      dispatch(some_call_api_TestAction());
    }, 1000);
  }, []);

  const getNewRandom = useCallback(() => {
    dispatch(start_loading_random());
    dispatch(call_getRandomPic_action());
  }, []);

  useEffect(() => {
    if (dogUrlObject.uri === '') {
      getANewDog();
    }

    if (randomPicObject.uri === '') {
      getNewRandom();
    }
  }, []);

  return (
    <View style={sty.container}>
      <ImageWithRefresh
        btnText={'Another dog'}
        imgSourceObject={dogUrlObject}
        onBtnPress={getANewDog}
        isBtnDisabled={loading}
      />
      <ImageWithRefresh
        btnText={'Another Random'}
        imgSourceObject={randomPicObject}
        onBtnPress={getNewRandom}
        isBtnDisabled={isRandomLoading}
      />
    </View>
  );
};

const sty = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'beige',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dataText: {
    fontSize: 15,
    color: 'black',
  },
  img: {
    width: 100,
    height: 100,
  },
});
