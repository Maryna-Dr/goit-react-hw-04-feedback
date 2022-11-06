import { useReducer } from 'react';

import { Section, FeedbackOptions, Statistics, Notification } from 'components';

function addFeedback(feedback, action) {
  switch (action.type) {
    case 'good':
      return { ...feedback, good: feedback.good + action.payload };

    case 'neutral':
      return { ...feedback, neutral: feedback.neutral + action.payload };

    case 'bad':
      return { ...feedback, bad: feedback.bad + action.payload };

    default:
      throw new Error(`Unsuported action type ${action.type}`);
  }
}

export default function App() {
  const [feedback, dispatch] = useReducer(addFeedback, {
    good: 0,
    neutral: 0,
    bad: 0,
  });

  function leaveFeedback(text) {
    dispatch({ type: text, payload: 1 });
  }

  function countTotalFeedback() {
    const { good, neutral, bad } = feedback;
    const total = good + neutral + bad;
    return total;
  }

  function countPositiveFeedbackPercentage() {
    const totalCount = countTotalFeedback();

    if (totalCount === 0) return 0;

    return Math.round((feedback.good / totalCount) * 100);
  }

  const btnList = Object.keys(feedback);
  const { good, neutral, bad } = feedback;

  return (
    <Section title="Please, leave your feedback!">
      <FeedbackOptions options={btnList} onLeaveFeedback={leaveFeedback} />
      {good !== 0 || neutral !== 0 || bad !== 0 ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          getCountTotal={countTotalFeedback}
          getPositiveFeedbackPercentage={countPositiveFeedbackPercentage}
        />
      ) : (
        <Notification message="There is no feedback now" />
      )}
    </Section>
  );
}
