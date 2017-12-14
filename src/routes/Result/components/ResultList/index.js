import React from 'react';
import ResultItem from './ResultItem';
import PropTypes from 'prop-types';
import './result-list.css';

const ResultList = ({ results }) => (
  <ul className="result-list">
    {results.map((result, index) => (
      <ResultItem key={index} {...result} />
    ))}
  </ul>
)

ResultList.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
      isTrue: PropTypes.bool.isRequired
    }).isRequired
  ).isRequired
}

export default ResultList;
