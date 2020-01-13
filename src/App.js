import React, { Component } from 'react';
import AddAppointment from './components/addAppointment';
import ListAppointment from './components/listAppointment'
import SearchAppointment from './components/searchAppointment' 
import './App.css';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      myAppointments : []
    };
    this.deleteAppointment = this.deleteAppointment.bind(this);
  }

  componentDidMount () {
    fetch("./data.json")
    .then(response => response.json())
    .then(items => {
      this.setState({myAppointments: items});
    });
  }

  deleteAppointment(apt) {
    console.log(apt);
    let appts = this.state.myAppointments;
    let updatedAppts = appts.filter((item, index) => index !== apt);
    this.setState({myAppointments: updatedAppts});
  }
 
  render () {
    let appointments = this.state.myAppointments;

    return (
      <main className="page bg-white" id="petratings">
        <div className="container">
          <div className="row">
            <div className="col-md-12 bg-white">
              <div className="container">
                <AddAppointment/>
                <SearchAppointment/>
                <ListAppointment appointments={appointments} deleteAppointment={this.deleteAppointment}/>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default App;
