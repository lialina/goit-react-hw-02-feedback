import React from 'react';
import s from './Statistics.module.css';

function Statistics({ good, neutral, bad }) {
  return (
    <div className={s.container}>
      <h2>Statistics</h2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
    </div>
  );
}

export default Statistics;
