import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseItem = ({ id, title, amount, endDate, category }) => (
    <Link to={`/updateExpense/${id}`}>
      <div style={{display:'inline-flex'}}>
        <span>{moment(endDate).format('MMMM Do, YYYY')}</span>
        <h3>{title}</h3>
        <h3>{numeral(amount / 100).format('$0,0.00')}</h3>
        <h3>{category}</h3>
      </div>
    </Link>
);

export default ExpenseItem;