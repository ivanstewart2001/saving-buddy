import React, {Component} from 'react';
import { connect } from 'react-redux';
import BillItem from './billItem';
import moment from 'moment'
import { startEditBill, startRemoveBill } from '../../Actions/bills'

class BillList extends Component {
  constructor(props){
    super(props)

    this.state = {
      currentDate: moment().format().slice(0,10)
    }
  }

  formatDueDate(dueDate){
    return moment(dueDate).format().slice(0,10)
  }

  hasSevenDaysPassed(billDueDate){
    const dayDifference = moment(this.state.currentDate).diff(billDueDate, 'days')
    if (dayDifference > 7){
      return true
    } else {
      return false
    }
  }

  hasFourteenDaysPassed(billDueDate){
    const dayDifference = moment(this.state.currentDate).diff(billDueDate, 'days')
    if (dayDifference > 14){
      return true
    } else {
      return false
    }
  }

  hasThirtyDaysPassed(billDueDate){
    const dayDifference = moment(this.state.currentDate).diff(billDueDate, 'days')
    if (dayDifference > 30){
      return true
    } else {
      return false
    }
  }

  deleteAfterSevenDaysAndPaid(){
    this.props.bills.map((bill) => {
      if ((bill.paid === 'yes') && (this.hasSevenDaysPassed(this.formatDueDate(bill.dueDate))) && (bill.frequency === '' || "none")){
        this.props.startRemoveBill({ id: bill.id })
      }
    })
  }

  updatePaidIfSetToRecur(){
    this.props.bills.map((bill) => {
      if ((bill.paid === 'yes') && (bill.frequency !== '' || 'none')){
        if((bill.frequency === 'weekly') && (this.hasSevenDaysPassed(this.formatDueDate(bill.dueDate)))){
          let tempBill = Object.assign({}, bill)
          tempBill.paid = 'no'
          this.props.startEditBill(bill.id, tempBill)
        }
        if((bill.frequency === 'biWeekly') && (this.hasFourteenDaysPassed(this.formatDueDate(bill.dueDate)))){
          let tempBill = Object.assign({}, bill)
          tempBill.paid = 'no'
          this.props.startEditBill(bill.id, tempBill)
        }
        if((bill.frequency === 'monthly') && (this.hasThirtyDaysPassed(this.formatDueDate(bill.dueDate)))){
          let tempBill = Object.assign({}, bill)
          tempBill.paid = 'no'
          this.props.startEditBill(bill.id, tempBill)
        }
      }
    })
  }

  componentDidMount(){
    this.deleteAfterSevenDaysAndPaid()
    this.updatePaidIfSetToRecur()
  }

  render() {
    return (
      <div>
        <div style={{display:'inline-flex', width:'100%'}}>
          <h5>Due Date</h5>
          <h5>Title</h5>
          <h5>Amount</h5>
          <h5>Category</h5>
          <h5>Paid</h5>
        </div>
        <div>
          {
            this.props.bills.length === 0 ? (
              <div>
                <span>No Bills</span>
              </div>
              
            ) : (
                this.props.bills.map((bill) => {
                  return <BillItem key={bill.id} {...bill} />;
                })
              )
          }
        </div>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    bills: state.bills
  };
};

const mapDispatchToProps = (dispatch, props) => ({
  startEditBill: (id, bill) => dispatch(startEditBill(id, bill)),
  startRemoveBill: (data) => dispatch(startRemoveBill(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(BillList);
