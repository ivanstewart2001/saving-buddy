import React, {Component} from "react";
import ExpenseList from './expenseList';
import { connect } from 'react-redux';

class Expenses extends Component {
    currentTotalExpenses = 0

    render(){
        this.props.expenses.map((expense) => {
            this.currentTotalExpenses += expense.amount
        })
        return(
            <div>
                <h1>Expenses</h1>
                <h3>Month:</h3>
                <ExpenseList />
                <h3>Total: ${this.currentTotalExpenses/100}</h3>
                <a href="/addExpense">Add Expense</a>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      expenses: state.expenses
    };
};

export default connect(mapStateToProps)(Expenses);