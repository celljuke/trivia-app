// @flow

import axios from 'axios';
import { 
  SET_USER_NAME, 
  ADD_QUESTIONS, 
  REPLY_QUESTION, 
  SET_ACTIVE_QUESTION, 
  PLAY_AGAIN 
} from './index';

export function setUserName(username: string) {
  return { type: SET_USER_NAME, payload: username };
}

export function setActiveQuestion(question: Show) {
  return { type: SET_ACTIVE_QUESTION, payload: question };
}

export function addQuestions(questions: Show) {
  return { type: ADD_QUESTIONS, payload: questions };
}

export function addReply(reply: Show) {
  return { type: REPLY_QUESTION, payload: reply };
}

export function resetGame(reply: Show) {
  return { type: PLAY_AGAIN };
}

export function playAgain() {
  return (dispatch: Function) => {
    dispatch(resetGame());
    return dispatch(getQuestions());
  };
}

export function getQuestions() {
  return (dispatch: Function) => {
    return axios
      .get('https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean')
      .then(response => {
        let questions = response.data.results
        dispatch(addQuestions(questions));

        let firstQuestion = questions[0];
        dispatch(setActiveQuestion(firstQuestion));
      })
      .catch(error => {
        console.error('axios error', error); // eslint-disable-line no-console
      });
  };
}