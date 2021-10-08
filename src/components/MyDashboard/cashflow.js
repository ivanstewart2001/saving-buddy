import React, {Component} from 'react'
import { connect } from 'react-redux'


class CashFlow extends Component {
    constructor(props){
        super(props)

    }

    incomeTotal = () => {
        let totalIncome =  0
        this.props.income.map((income) => {
            totalIncome += income.amount/100
        })
        return totalIncome
    }

    expenseTotal = () => {
        let totalExpense =  0
        this.props.expenses.map((expense) => {
            totalExpense += expense.amount/ 100
        })
        this.props.bills.map((bill) => {
            if(bill.paid === 'yes') {
                totalExpense += bill.amount/100
            }
               
        }
        )
        return totalExpense
    }

    cashflow = () => {
        const cashflow = this.incomeTotal() - this.expenseTotal()
        console.log(cashflow)
        return cashflow
        }

    render(){

        return(
            <div>
                <h5 className =  'reminderBorder'>Cash Flow</h5>
                <p>Your cash flow is ${this.cashflow()}</p>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        expenses: state.expenses, income: state.income, bills: state.bills
    }

}
export default connect(mapStateToProps)(CashFlow)