import {GET_RANDOMPIC, SET_RANDOMPIC, START_GET_RANDOM} from '../types';

export const start_loading_random = () => {
  return {type: START_GET_RANDOM};
};

export const call_getRandomPic_action = () => {
  return {
    type: GET_RANDOMPIC,
  };
};

export const setRandomPic_action = data => {
  return {
    type: SET_RANDOMPIC,
    payload: data,
  };
};
