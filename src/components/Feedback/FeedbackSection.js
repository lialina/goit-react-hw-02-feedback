import React from 'react';
import s from './FeedbackSection.module.css';

function FeedbackSection({ onGoodBtnClick }) {
  return (
    <div className={s.container}>
      <h2>Please leave feedback</h2>
      <button type="button" onClick={onGoodBtnClick}>
        Good
      </button>
      <button type="button">Neutral</button>
      <button type="button">Bad</button>
    </div>
  );
}

export default FeedbackSection;
