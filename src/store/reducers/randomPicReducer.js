import {START_GET_RANDOM, SET_RANDOMPIC} from '../types';

const initState = {
  isRandomLoading: false,
  randomPicObject: {uri: ''},
};

export const randomPicReducer = (state = initState, action) => {
  switch (action.type) {
    case START_GET_RANDOM:
      return {
        ...state,
        isRandomLoading: true,
      };
    case SET_RANDOMPIC:
      console.log('hi', action);
      return {
        ...state,
        randomPicObject: {uri: action.payload},
        isRandomLoading: false,
      };
    default:
      return state;
  }
};
