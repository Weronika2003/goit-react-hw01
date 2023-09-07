import PropTypes from 'prop-types';
import css from './Stats.module.css';

export const Stats = ({ followers, views, likes }) => {
  return (
    <ul className={css.stats}>
      <li className={css.stats__item}>
        <span className={css.stats__label}>Followers</span>
        <span className={css.stats__quantity}>{followers}</span>
      </li>
      <li className={css.stats__item}>
        <span className={css.stats__label}>Views</span>
        <span className={css.stats__quantity}>{views}</span>
      </li>
      <li className={css.stats__item}>
        <span className={css.stats__label}>Likes</span>
        <span className={css.stats__quantity}>{likes}</span>
      </li>
    </ul>
  );
};

Stats.propTypes = {
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};