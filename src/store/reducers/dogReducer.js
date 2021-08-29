import {SET_TEST_DATA, START_GET_DATA} from '../types';

const initState = {
  loading: false,
  dogUrlObject: {uri: ''},
};

export const dogReducer = (state = initState, action) => {
  switch (action.type) {
    case START_GET_DATA:
      return {
        ...state,
        loading: true,
      };
    case SET_TEST_DATA:
      return {
        ...state,
        dogUrlObject: {uri: action.payload},
        loading: false,
      };
    default:
      return state;
  }
};
