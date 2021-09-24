import React, { Component } from "react";
import { connect } from 'react-redux';
import BillItem from "../billItem";

export class None extends Component {
    render(){
        return (
            <div>
                {
                    this.props.bills.map((bill) => {
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
  
export default connect(mapStateToProps)(None);