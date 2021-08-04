import React from 'react';
import s from './FeedbackOptions.module.css';

function FeedbackOptions({
  onLeaveGoodFeedback,
  onLeaveNeutralFeedback,
  onLeaveBadFeedback,
}) {
  return (
    <div className={s.container}>
      <button type="button" onClick={onLeaveGoodFeedback}>
        Good
      </button>
      <button type="button" onClick={onLeaveNeutralFeedback}>
        Neutral
      </button>
      <button type="button" onClick={onLeaveBadFeedback}>
        Bad
      </button>
    </div>
  );
}

export default FeedbackOptions;
