import React from 'react';
import { connect } from 'react-redux';
import ExpenseItem from './expenseItem';
import selectExpenses from '../../Selectors/expenses';

export const ExpenseList = (props) => {
  return (
    <div>
      <div style={{display:'inline-flex', width:'100%'}}>
        <h5>Day</h5>
        <h5>Title</h5>
        <h5>Amount</h5>
        <h5>Category</h5>
      </div>
      <div>
        {
          props.expenses.length === 0 ? (
            <div>
              <span>No expenses</span>
            </div>
            
          ) : (
              props.expenses.map((expense) => {
                return <ExpenseItem key={expense.id} {...expense} />;
              })
            )
        }
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    expenses: state.expenses
  };
};

export default connect(mapStateToProps)(ExpenseList);