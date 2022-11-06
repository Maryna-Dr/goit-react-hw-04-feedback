import PT from 'prop-types';

import css from './Statistics.module.css';

export default function Statistics({
  good,
  neutral,
  bad,
  getCountTotal,
  getPositiveFeedbackPercentage,
}) {
  return (
    <ul className={css.list}>
      <li>
        Good: <span className={css.countFeedback}>{good}</span>
      </li>
      <li>
        Neutral: <span className={css.countFeedback}>{neutral}</span>
      </li>
      <li>
        Bad: <span className={css.countFeedback}>{bad}</span>
      </li>
      <li>
        Total: <span className={css.countFeedback}>{getCountTotal()}</span>
      </li>
      <li>
        Positive Feedback:{' '}
        <span className={css.countFeedback}>
          {getPositiveFeedbackPercentage()} %
        </span>
      </li>
    </ul>
  );
}

Statistics.propTypes = {
  good: PT.number.isRequired,
  neutral: PT.number.isRequired,
  bad: PT.number.isRequired,
  getCountTotal: PT.func.isRequired,
  getPositiveFeedbackPercentage: PT.func.isRequired,
};
