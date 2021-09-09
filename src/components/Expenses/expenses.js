import React, {Component} from "react";
import ExpenseList from './expenseList';

class Expenses extends Component {
    currentTotalExpenses = 0

    render(){
        return(
            <div>
                <h1>Expenses</h1>
                <h3>Month:</h3>
                <ExpenseList />
                <h3>Total: ${this.currentTotalExpenses}</h3>
                <a href="/addExpense">Add Expense</a>
            </div>
        )
    }
}

export default Expenses