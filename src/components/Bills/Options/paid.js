import React, { Component } from "react";
import { connect } from 'react-redux';
import BillItem from "../billItem";
import filterBills from '../../../Filters/bills'

export class Paid extends Component {
    constructor (props){
        super(props)

        this.state = {
            filter : this.props.filterBy
        }
    }

    render() {
        const bills = filterBills(this.state.filter, this.props.bills)
        return (
            <div>
                {
                    bills.length === 0 ? 
                        <div>No Bills Match this Filter</div>
                    
                    : 
                        bills.map((bill) => {
                            return <BillItem key={bill.id} {...bill} />;
                        })
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      bills: state.bills
    }
  }
  
export default connect(mapStateToProps)(Paid);