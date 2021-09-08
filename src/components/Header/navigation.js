import React, {Component} from 'react'
import { Route, Switch, Redirect, BrowserRouter} from 'react-router-dom';
import Bills from '../Bills/bills'
import Buckets from '../Buckets/buckets'
import Calendar from '../Calendar/calendar'
import Expenses from '../Expenses/expenses'
import MyDashboard from '../MyDashboard/myDashboard'
import Tips from '../Tips/tips'
import AddBucket from '../Buckets/addBucket'
import UpdateBucket from '../Buckets/updateBucket'
import AddExpense from '../Expenses/addExpense'
import UpdateExpense from '../Expenses/updateExpense'
import AddBill from '../Bills/addBill'
import UpdateBill from '../Bills/updateBill'

class Header extends Component {
    render() {
        let routes = (
            <BrowserRouter>
                <Switch>
                    <Route path="/myDashboard" exact component={MyDashboard} />
                    <Route path="/bills" exact component={Bills} />
                    <Route path="/buckets" exact component={Buckets} />
                    <Route path="/calendar" exact component={Calendar} />
                    <Route path="/expenses" exact component={Expenses} />
                    <Route path="/tips" exact component={Tips} />
                    <Route path="/addBucket" exact component={AddBucket} />
                    <Route path="/updateBucket" exact component={UpdateBucket} />
                    <Route path="/addExpense" exact component={AddExpense} />
                    <Route path="/updateExpense" exact component={UpdateExpense} />
                    <Route path="/addBill" exact component={AddBill} />
                    <Route path="/updateBill" exact component={UpdateBill} />
                    <Redirect to="/myDashboard" />
                </Switch>           
            </BrowserRouter>
        )

        return (
            <div>{routes}</div>
        )
    }
}

export default Header