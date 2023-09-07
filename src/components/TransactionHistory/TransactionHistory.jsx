import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ transactions }) => {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr className={css.tableHead}>
          <th className={css.tableHeadItem}>Type</th>
          <th className={css.tableHeadItem}>Amount</th>
          <th className={css.tableHeadItem}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(({ id, type, amount, currency }) => (
          <tr key={id} className={css.tableRow}>
            <td className={`${css.tableItem} ${css.type}`}>{type}</td>
            <td className={`${css.tableItem} ${css.amount}`}>{amount}</td>
            <td className={`${css.tableItem} ${css.currency}`}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,      
      amount: PropTypes.string.isRequired,   
      currency: PropTypes.string.isRequired  
    })
  )
};