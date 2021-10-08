import React, {Component} from "react";
import MissionStatement from "./missionStatement";
import DashboardGraph from './graph'
import MyOverview from './myOverview'

class MyDashboard extends Component {
  render(){
    return (
      <div>
        <h4 className = "overview"> My Overview</h4>
        <hr/>
        <DashboardGraph />
        <hr />
        <MyOverview />
      </div>
    )
  }
}

export default MyDashboard