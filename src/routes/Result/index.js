import React, { Component } from 'react';
import { FlexDiv, HighLightedText, Button } from '../../components';
import { connect } from 'react-redux';
import { RouterHistory } from 'react-router-dom';
import ResultMessage from './components/ResultMessage';
import ResultList from './components/ResultList';
import _ from 'lodash';
import './result.css';
import { playAgain } from '../../actions/actionCreators';

class Result extends Component {
  props: {
    results: Array,
    questions: Array,
    handleResetGame: Function,
    history: RouterHistory
  };

  getScore = () => {
    return _.filter(this.props.results, (item) => item.isTrue).length;
  }

  handlePlayAgain = () => {
    this.props.handleResetGame().then(() => this.props.history.push('/questions'));
  }

  render() {
    return (
      <div className="result-page">
        <FlexDiv align="center" direction="column" justify="center">
          <div className="score">
            You scored <HighLightedText backgroundColor="#00ca5b">{this.getScore()}</HighLightedText> / <HighLightedText>{this.props.questions.length}</HighLightedText>
          </div>
          <ResultMessage score={this.getScore()} />
          <ResultList results={this.props.results} />
          <div className="play-again">
            <Button
              onClick={() => this.handlePlayAgain()}
              height="5rem"
              width="20rem"
              background="#e02365"
            >
              PLAY AGAIN?
            </Button>
          </div>
        </FlexDiv>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  results: state.results,
  questions: state.questions
});

const mapDispatchToProps = (dispatch: Function) => ({
  handleResetGame() {
    return dispatch(playAgain());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Result);
