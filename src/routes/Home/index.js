// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RouterHistory } from 'react-router-dom';
import { setUserName, getQuestions } from '../../actions/actionCreators';
import { FlexDiv, HighLightedText } from '../../components';

import './home.css';

class Home extends Component {

  props: {
    username: string,
    handleUserNameChange: Function,
    getQuestions: Function,
    history: RouterHistory
  };

  goToQuestions = event => {
    event.preventDefault();

    if (this.props.username) {
      this.props.getQuestions()
        .then(() => this.props.history.push('/questions'));
    }
  }

  render() {
    return (
      <div className="home-page">
        <FlexDiv align="center" direction="column" justify="center">
          <h1 className="page-title">WELCOME TO THE TRIVIA CHALLENGE</h1>
          <p>
            You will be presented with <HighLightedText>10</HighLightedText>
            <HighLightedText backgroundColor="#00ca5b">True</HighLightedText>
            or
            <HighLightedText backgroundColor="#e60000">False</HighLightedText>
            questions.
          </p>
          <p>Can you score 100%?</p>
        </FlexDiv>
        <div className="begin-form">
          <form onSubmit={this.goToQuestions}>
            <input
              type="text"
              placeholder="username"
              value={this.props.username}
              onChange={this.props.handleUserNameChange} />
            <input type="button" className="begin-button" onClick={this.goToQuestions} value="BEGIN"/>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  username: state.username
});

const mapDispatchToProps = (dispatch: Function) => ({
  handleUserNameChange(event) {
    dispatch(setUserName(event.target.value));
  },
  getQuestions() {
    return dispatch(getQuestions());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
