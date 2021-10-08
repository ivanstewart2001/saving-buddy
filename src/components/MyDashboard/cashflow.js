// import React, {Component} from 'react'
// import { connect } from 'react-redux'


// class CashFlow extends Component {
// constructor(props){
//     super(props)

// }

// incomeTotal = () => {
//     const totalIncome =  0
//     this.props.income.map((income) => {
//         const totalIncome = ++income.amount
//     })
//     return totalIncome
// }

// expenseTotal = () => {
//     const totalExpense =  0
//     this.props.expenses.map((expense) => {
//         const totalExpense = ++expense.amount
//     })
//     return totalExpense
// }

// // cashflow = () => {
// //      const cashflow = incomeTotal() - expenseTotal()
// //      return <p>Total: {cashflow} </p>
// //      }

// render(){

//     const {data: chartData} = this.state
//     return(
//         <div>
//             <h5 className =  'reminderBorder'>Cash Flow</h5>


//         </div>
//     )
// }
// }

// const mapStateToProps = (state) => {
//     return{
//         expenses: state.expenses, income: state.income
//     }

// }
// export default connect(mapStateToProps)(CashFlow)