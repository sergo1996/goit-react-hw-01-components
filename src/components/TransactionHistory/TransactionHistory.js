import React from 'react';
import PropTypes from 'prop-types';
import './TransactionHistory.css';

const TransactionHistory = ({ type, amount, currency, items }) => {
 return (
  <table className="transaction-history">
   <thead>
    <tr className="table-head">
     <th> {type} </th>
     <th> {amount} </th>
     <th> {currency} </th>
    </tr>
   </thead>

   {items.map(item => {
    return (
     <tbody>
      <tr className="tbody-row" key={item.id}>
       <td> {item.type}</td>
       <td> {item.amount} </td>
       <td> {item.currency} </td>
      </tr>
     </tbody>
    );
   })}
  </table>
 );
};

TransactionHistory.protoType = {
 type: PropTypes.string.isRequired,
 amount: PropTypes.string.isRequired,
 currency: PropTypes.string.isRequired,
 item: PropTypes.arrayOf(
  PropTypes.exact({
   id: PropTypes.string.isRequired,
   type: PropTypes.string.isRequired,
   currency: PropTypes.string.isRequired,
   amount: PropTypes.string.isRequired,
  }),
 ),
};

export default TransactionHistory;
