import React, {Component} from "react";

class Expenses extends Component {
    dummyData = [{
        "date": "Jan 1, 2021",
        "title": "Expense1",
        "amount": "$123",
        "category": "clothes"
    }, {
        "date": "Jan 2, 2021",
        "title": "Expense2",
        "amount": "$456",
        "category": "books"
    }, {
        "date": "Jan 3, 2021",
        "title": "Expense3",
        "amount": "$789",
        "category": "toys"
    }]

    render(){
        return(
            <div>
                <table></table>
            </div>
        )
    }
}

export default Expenses