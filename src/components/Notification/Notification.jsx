import { MdAnnouncement } from 'react-icons/md';
import PT from 'prop-types';

import css from './Notification.module.css';

export default function Notification({ message }) {
  return (
    <div className={css.box}>
      <p className={css.message}>{message}</p>
      <MdAnnouncement />
    </div>
  );
}

Notification.propTypes = {
  message: PT.string.isRequired,
};
