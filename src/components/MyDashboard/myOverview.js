import React, {Component} from "react";
import BillReminders from "./billReminders";
import BucketReminders from "./bucketReminders";
import Cashflow from "./cashflow";

class MyOverview extends Component {
  render(){
    return (
      <div>
          <h4 className = "overview"> My Overview</h4>
          <div>
            <BillReminders />
            <BucketReminders/>
            <Cashflow/>
          </div>
      </div>
    )
  }
}

export default MyOverview