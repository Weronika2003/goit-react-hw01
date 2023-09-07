import PropTypes from 'prop-types'; 
import css from './Statistics.module.css';
import { setColorClass } from 'utils/class-utils';

export const Statistics = ({ stats, title = null }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.list}>
        {stats.map(item => {
          const colorClass = setColorClass(item.percentage);
          return (
            <li key={item.id} className={`${css.item} ${colorClass}`}>
              <span className={css.label}>{item.label}</span>
              <span className={css.percentage}>{item.percentage}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
  title: PropTypes.string,
};