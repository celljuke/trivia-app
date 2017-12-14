import React from 'react';
import PropTypes from 'prop-types';
import { MdCheck, MdClear } from 'react-icons/lib/md';

const ResultItem = ({ question, isTrue }) => (
  <li className="result-item">
    <div className="icon">{isTrue ? <MdCheck color="#00ca5b" size={50}/> : <MdClear color="#e60000" size={50}/>}</div>
    <span dangerouslySetInnerHTML={{ __html: question }}></span>
  </li>
)

ResultItem.propTypes = {
  question: PropTypes.string.isRequired,
  isTrue: PropTypes.bool.isRequired
}

export default ResultItem;