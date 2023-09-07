import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  let statusClass = isOnline
    ? css.item__status_online
    : css.item__status_offline;

  return (
    <li className={css.item}>
      <span className={`${css.item__status} ${statusClass}`}></span>
      <img
        className={css.item__avatar}
        src={avatar}
        alt={`User ${name} avatar`}
        width="100"
        height="100"
      />
      <p className={css.item__name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};