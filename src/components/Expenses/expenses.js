import React, {Component} from "react";

class Expenses extends Component {
    dummyData = [{
        "id":1,
        "date": "Jan 1, 2021",
        "title": "Expense1",
        "amount": "$123",
        "category": "clothes"
    }, {
        "id":2,
        "date": "Jan 2, 2021",
        "title": "Expense2",
        "amount": "$456",
        "category": "books"
    }, {
        "id":3,
        "date": "Jan 3, 2021",
        "title": "Expense3",
        "amount": "$789",
        "category": "toys"
    }]

    renderTableData(){
        return this.dummyData.map((data, index) => {
            const { id, date, title, amount, category } = data
            return (
                <tr key={id}>
                    <td>{date}</td>
                    <td>{title}</td>
                    <td>{amount}</td>
                    <td>{category}</td>
                </tr>
            )
        })
    }

    render(){
        return(
            <div>
                <h1>Expenses</h1>
                <table id="data">
                    <tr>
                        <th>Day</th>
                        <th>Title</th>
                        <th>Amount</th>
                        <th>Category</th>
                    </tr>
                    <tbody>
                        {this.renderTableData()}
                    </tbody>
                </table>
                <br />
                <h3>Total:</h3>
                <a href="/addExpense">Add Expense</a>
            </div>
        )
    }
}

export default Expenses