import React, {Component} from "react";

class AddBucket extends Component {
  render(){
    return (
      <div>
        <h1>Add Bucket</h1>
        <form>
          <label for="title">Title:</label>
          <input type="text" id="title" name="title"/>
          <br />
          <label for="startDate"> Start Date:</label>
          <input type="date" id="startDate" name="startDate"/>
          <br />
          <label for="endDate">End Date:</label>
          <input type="date" id="endDate" name="endDate"/>
          <br />
          <label for="amount">Amount:</label>
          <input type="number" id="amount" name="amount"/>
          <br />
          <label for="frequency">Frequency:</label>
          <select name="frequency" id="frequency">
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="biWeekly">Bi Weekly</option>
            <option value="monthly">Monthly</option>
          </select>
          <br />
          <label for="notes">Notes:</label>
          <textarea type="text" id="notes" name="notes"/>
          <br />
        </form>
      </div>
    )
  }
}

export default AddBucket