import React from 'react';
import { connect } from 'react-redux';
import BillItem from './billItem';
import selectExpenses from '../../Selectors/expenses';

export const BillList = (props) => {
  return (
    <div>
      <div style={{display:'inline-flex', width:'100%'}}>
        <h5>Due Date</h5>
        <h5>Title</h5>
        <h5>Amount</h5>
        <h5>Category</h5>
        <h5>Paid</h5>
      </div>
      <div>
        {
          props.bills.length === 0 ? (
            <div>
              <span>No Bills</span>
            </div>
            
          ) : (
              props.bills.map((bill) => {
                return <BillItem key={bill.id} {...bill} />;
              })
            )
        }
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    bills: state.bills
  };
};

export default connect(mapStateToProps)(BillList);