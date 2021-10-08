import React, {Component} from 'react'
import { connect } from 'react-redux'
import Chart from "react-google-charts";

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
        return cashflow
        }

    render(){
        console.log(this.incomeTotal(),this.expenseTotal())

        return(
            <div>
                <h5 className =  'reminderBorder'><i class="bi bi-arrow-down-up"></i> Cash Flow</h5>
                <p><strong>${this.cashflow()}</strong></p>

                {
                    this.incomeTotal === 0 && this.expenseTotal() === 0 ? (
                        null
                    ) : (
                        <Chart
                            width={'500px'}
                            height={'300px'}
                            chartType="BarChart"
                            loader={<div>Loading Chart</div>}
                            data={[
                                [
                                'Element',
                                'Density',
                                { role: 'style' },
                                {
                                    sourceColumn: 0,
                                    role: 'annotation',
                                    type: 'string',
                                    calc: 'stringify',
                                },
                                ],
                                ['Income', this.incomeTotal(), 'blue', null],
                                ['Expenses+Bills', this.expenseTotal(), 'red', null]
                            ]}
                            options={{
                                width: 600,
                                height: 400,
                                bar: { groupWidth: '95%' },
                                legend: { position: 'none' },
                            }}
                            // For tests
                            rootProps={{ 'data-testid': '6' }}
                        />
                    )
                }
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