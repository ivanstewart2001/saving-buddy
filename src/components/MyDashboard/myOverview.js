import React, {Component} from "react";
import BillReminders from "./billReminders";
import BucketReminders from "./bucketReminders";
import Cashflow from "./cashflow";

class MyOverview extends Component {
  render(){
    return (
      <div>
          <BillReminders />
          <BucketReminders/>
          <Cashflow/>
      </div>
    )
  }
}

export default MyOverview