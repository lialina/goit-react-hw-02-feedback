import React, { Component } from 'react';
import s from './Feedback.module.css';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Statistics from 'components/Statistics/Statistics';
import Section from 'components/Section/Section';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercentage: 0,
  };

  handleGoodBtnClick = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  handleNeutralBtnClick = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  handleBadBtnClick = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  countTotalFeedback = () => {
    this.setState(prevState => ({
      total: prevState.good + prevState.neutral + prevState.bad,
    }));
  };

  countPositiveFeedbackPercentage = () => {
    this.setState(prevState => ({
      positivePercentage: Math.round((prevState.good * 100) / prevState.total),
    }));
  };

  onLeaveGoodFeedback = () => {
    this.handleGoodBtnClick();
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  onLeaveNeutralFeedback = () => {
    this.handleNeutralBtnClick();
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  onLeaveBadFeedback = () => {
    this.handleBadBtnClick();
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  render() {
    return (
      <div className={s.container}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onLeaveGoodFeedback={this.onLeaveGoodFeedback}
            onLeaveNeutralFeedback={this.onLeaveNeutralFeedback}
            onLeaveBadFeedback={this.onLeaveBadFeedback}
          />
        </Section>
        <Section title="Statistics">
          {this.state.good === 0 &&
          this.state.neutral === 0 &&
          this.state.bad === 0 ? (
            <p>No feedback given</p>
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.state.total}
              positivePercentage={this.state.positivePercentage}
            />
          )}
        </Section>
      </div>
    );
  }
}

export default Feedback;
