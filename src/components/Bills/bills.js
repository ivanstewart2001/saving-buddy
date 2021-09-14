import React, {Component} from "react";
import ProgressBar from 'react-bootstrap/ProgressBar'
import BillList from "./billList";
import { connect } from 'react-redux';

class Bills extends Component {
    constructor(){
        super()

        this.state = {
            currentBillTotal : 0,
            currentPaidBillTotal : 0
        }
    }

    render() {
        this.state.currentBillTotal = 0
        this.state.currentPaidBillTotal = 0

        this.props.bills.map((bill) => {
            this.state.currentBillTotal += (bill.amount /100)
            if (bill.paid === 'yes') {
                this.state.currentPaidBillTotal += (bill.amount /100)
            }
        })
        
        return(
            <div>
                <h1>Bills</h1>
                <h3>Month:</h3>
                <BillList />
                {
                    this.props.bills.length > 0 ? 
                        <div>
                            <ProgressBar now={this.state.currentPaidBillTotal} max={this.state.currentBillTotal} label={`$${this.state.currentPaidBillTotal}`} />
                            <p style={{marginLeft:'90%'}}>Total: ${this.state.currentBillTotal}</p>
                        </div>
                    :
                        <p></p>
                }

                <a href="/addBill">Add Bill</a>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      bills: state.bills
    };
};
  
export default connect(mapStateToProps)(Bills);
