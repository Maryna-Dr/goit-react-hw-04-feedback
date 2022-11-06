import PT from 'prop-types';

import css from './FeedbackOptions.module.css';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div>
      {options.map(it => (
        <button
          key={it}
          className={`${css.btn} ${css[it]}`}
          type="button"
          onClick={() => onLeaveFeedback(it)}
        >
          {it}
        </button>
      ))}
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PT.arrayOf(PT.string.isRequired),
};
