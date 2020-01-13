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
  }

  componentDidMount () {
    fetch("./data.json")
    .then(response => response.json())
    .then(items => {
      this.setState({myAppointments: items});
    });
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
                  <ListAppointment appointments={appointments}/>
                </div>
              </div>
            </div>
          </div>
        </main>
    );
  }
}

export default App;
