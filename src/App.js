import React, { Component } from 'react';
import Container from 'components/Container/Container.js';
import Feedback from 'components/Feedback/Feedback';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleBtnClick = option => {
    this.setState(state => ({
      [option]: state[option] + 1,
    }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = total => {
    return Math.round((this.state.good * 100) / total);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const percentage = this.countPositiveFeedbackPercentage(total);
    const options = Object.keys(this.state);

    return (
      <Container>
        <Feedback
          goodFeedback={good}
          neutralFeedback={neutral}
          badFeedback={bad}
          total={total}
          percentage={percentage}
          handleBtnClick={this.handleBtnClick}
          options={options}
        />
      </Container>
    );
  }
}

export default App;
