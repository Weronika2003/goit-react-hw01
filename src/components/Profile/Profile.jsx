import PropTypes from 'prop-types';
import css from './Profile.module.css';
import { Stats } from 'components/Stats/Stats';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div key={tag} className={css.profile}>
      <div className={`${css.profile__description} ${css.description}`}>
        <img
          src={avatar}
          alt="User avatar"
          className={css.description__avatar}
          width="100"
          height="100"
        />
        <div className={css.description__info}>
          <p className={css.description__title}>{username}</p>
          <p className={`${css.description__text} ${css.description__textTag}`}>
            {tag}
          </p>
          <p className={css.description__text}>{location}</p>
        </div>
      </div>
      <Stats {...stats} />
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};