import React, { Component } from 'react';
import './result-message.css';

class ResultMessage extends Component {
  
  props: {
    score: string
  }

  getMessage = () => {
    const score = this.props.score;
    
    return score <= 5 ? 'Come on dude! Ignorence is not bliss.'
      : score > 5 && score < 9 ? 'Not bad! You should read more.'
      : 'Great Job! You are a genius.'
  }

  render() {
    return (
      <h1 className="result-message">
        {this.getMessage()}
      </h1>
    );
  }
}

export default ResultMessage;