import React, {Component} from "react";

class MyDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {value: '',
                      playerName: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
    handleChange(event) {
      console.log('There was a change')
      this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        console.log("making request")
        fetch('/frontend_to_backend', {
            method:"POST",
            cache: "no-cache",
            headers:{
                "content_type":"application/json",
            },
            body:JSON.stringify(this.state.value)
            }
        )
          .then(response => {
            console.log(response)
            return response.json()
          })
          .then(json => {
          console.log=(json)
          this.setState({playerName: json[0]})
          })
    }

    render(){
      console.log('First Step', this.state.playerName)
        return(
          <div>
            <form onSubmit={this.handleSubmit} action="http://localhost:3000/frontend_to_backend" method="get">
              <label>
                Player ID:
                <input type="text" name="player_id"/>
                <input type="submit" onChange={this.handleChange} value={this.state.value} />
              </label>
            </form>
            <h1> Player Name: {this.state.playerName} </h1>
          </div>

        )
    }
}

export default MyDashboard