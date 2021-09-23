import React from 'react';
import { connect } from 'react-redux';
import IncomeItem from './incomeItem';
//import selectIncome from '../../Selectors/income';

export const IncomeList = (props) => {
  return (
    <div>
      <div style={{display:'inline-flex', width:'100%'}}>
        <h5>Day</h5>
        <h5>Description</h5>
        <h5>Amount</h5>
      </div>
      <div>
        {
          props.income.length === 0 ? (
            <div>
              <span>No income</span>
            </div>
            
          ) : (
              props.income.map((income) => {
                return <IncomeItem key={income.id} {...income} />;
              })
            )
        }
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    income: state.income
  };
};

export default connect(mapStateToProps)(IncomeList);