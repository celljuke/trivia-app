// @flow

import { combineReducers } from 'redux';
import { 
  SET_USER_NAME, 
  ADD_QUESTIONS, 
  REPLY_QUESTION, 
  SET_ACTIVE_QUESTION, 
  PLAY_AGAIN
} from '../actions';

const username = (state = '', action: Action) => {
  if (action.type === SET_USER_NAME) {
    return action.payload;
  }
  return state;
};

const questions = (state = [], action: Action) => {
  if (action.type === ADD_QUESTIONS) {
    return action.payload;
  }
  return state;
};

const activeQuestion = (state = {}, action: Action) => {
  if (action.type === SET_ACTIVE_QUESTION) {
    return Object.assign({}, state, action.payload);
  }
  return state;
};

const results = (state = [], action: Action) => {
  if (action.type === REPLY_QUESTION) {
    return [...state, action.payload];
  }
  return state;
};

const appReducer = combineReducers({ username, questions, activeQuestion, results });

const rootReducer = (state, action) => {
  if (action.type === PLAY_AGAIN) {
    state.results = undefined;
    state.activeQuestion = undefined;
  }
  return appReducer(state, action)
}

export default rootReducer;