import React from 'react';
import s from './Feedback.module.css';
import FeedbackSection from './FeedbackSection.js';
import Statistics from './Statistics';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleGoodBtnClick = () => {
    // const { target } = event;
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  render() {
    return (
      <div className={s.container}>
        <FeedbackSection onGoodBtnClick={this.handleGoodBtnClick} />

        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
        />
      </div>
    );
  }
}

export default Feedback;
