import React, {Component} from "react";
import ProgressBar from 'react-bootstrap/ProgressBar'

class  Bills extends Component {
    dummyData = [{
        "id":1,
        "date": "Jan 1, 2021",
        "title": "Bill1",
        "amount": 163,
        "category": "rent",
        "paid": true
    }, {
        "id":2,
        "date": "Jan 2, 2021",
        "title": "Bill2",
        "amount": 456,
        "category": "car",
        "paid":true
    }, {
        "id":3,
        "date": "Jan 3, 2021",
        "title": "Bill3",
        "amount": 789,
        "category": "phone",
        "paid":false
    }]

    currentBillTotal = 0
    currentPaidBillTotal = 0

    renderTableData(){
        return this.dummyData.map((data, index) => {
            const { id, date, title, amount, category, paid } = data
            if (paid){
                this.currentPaidBillTotal += amount
            }
            this.currentBillTotal += amount
            return (
                <tr key={id}>
                    <td>{date}</td>
                    <td>{title}</td>
                    <td>${amount}</td>
                    <td>{category}</td>
                    <input type="checkbox" id={id} checked={paid}/>
                </tr>
            )
        })
    }

    render(){
        return(
            <div>
                <h1>Bills</h1>
                <h3>Month:</h3>
                <table id="data">
                    <tr>
                        <th>Day</th>
                        <th>Title</th>
                        <th>Amount</th>
                        <th>Category</th>
                        <th>Paid</th>
                    </tr>
                    <tbody>
                        {this.renderTableData()}
                    </tbody>
                </table>
                <br />
                <ProgressBar now={this.currentPaidBillTotal} max={this.currentBillTotal} label={`$${this.currentPaidBillTotal}`} />
                <p style={{marginLeft:'90%'}}>Total: {this.currentBillTotal}</p>
                <a href="/addBill">Add Bill</a>
            </div>
        )
    }
}

export default Bills