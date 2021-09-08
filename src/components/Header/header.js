import React, {Component} from "react";
import { a, BrowserRouter } from "react-router-dom";

class Header extends Component {
    render(){
        return(
            <div>
                <a href="/myDashboard">My Dashboard</a>
                <a href="/bills">Bills</a>
                <a href="/buckets">Buckets</a>
                <a href="/calendar">Calendar</a>
                <a href="/expenses">Expenses</a>
                <a href="/tips">Tips</a>
            </div>
        )
    }
}

export default Header