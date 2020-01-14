import React, { Component } from 'react';
import AddAppointment from './components/addAppointment';
import ListAppointment from './components/listAppointment'
import SearchAppointment from './components/searchAppointment' 
import './App.css';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      myAppointments : [],
      formDisplay: false
    };
    this.deleteAppointment = this.deleteAppointment.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount () {
    fetch("./data.json")
    .then(response => response.json())
    .then(items => {
      this.setState({myAppointments: items});
    });
  }

  handleClick(event) {
    event.preventDefault();
    this.setState({formDisplay: !this.state.formDisplay});
    console.log(this.state.formDisplay);
  }

  deleteAppointment(apt) {
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
                <AddAppointment formDisplay={this.state.formDisplay} toggleForm={this.handleClick}/>
                <SearchAppointment/>
                <ListAppointment appointments={appointments} deleteAppointment={this.deleteAppointment} />
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default App;
