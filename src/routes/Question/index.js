import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RouterHistory } from 'react-router-dom';
import _ from 'lodash';
import { setActiveQuestion, addReply } from '../../actions/actionCreators';
import './question.css';
import { Button, FlexDiv } from '../../components';

class Question extends Component {

  props: {
    username: string,
    activeQuestion: object,
    questions: array,
    handleSetActiveQuestion: Function,
    handleAddReply: Function,
    history: RouterHistory
  };

  getNextQuestion = nextIndex => {
    const nextQuestion = this.props.questions[nextIndex];
    this.props.handleSetActiveQuestion(nextQuestion);
  }

  handleAnswer = answer => {
    const activeIndex = _.findIndex(this.props.questions, this.props.activeQuestion);

    const result = {
      question: this.props.activeQuestion.question,
      isTrue: this.props.activeQuestion.correct_answer === answer
    }

    this.props.handleAddReply(result);

    const nextIndex = activeIndex + 1;
    if (nextIndex < this.props.questions.length) {
      this.getNextQuestion(nextIndex);
    } else {
      this.props.history.push('/result');
    }
  }

  render() {
    return (
      <div className="question-page">
        <FlexDiv align="center" direction="column" justify="center">
          <div className="category">
            <p>Category</p>
            <h1>{this.props.activeQuestion.category}</h1>
          </div>
          <div className="question" dangerouslySetInnerHTML={{ __html: this.props.activeQuestion.question }}></div>
          <div className="buttons">
            <Button className="true" onClick={() => this.handleAnswer('True')} width="10rem" height="5rem">True</Button>
            <Button className="false" onClick={() => this.handleAnswer('False')} width="10rem" height="5rem">False</Button>
          </div>
        </FlexDiv>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  username: state.username,
  activeQuestion: state.activeQuestion,
  questions: state.questions
});

const mapDispatchToProps = (dispatch: Function) => ({
  handleSetActiveQuestion(question) {
    dispatch(setActiveQuestion(question));
  },
  handleAddReply(result) {
    dispatch(addReply(result));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Question);
