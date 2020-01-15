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
      formDisplay: false,
      orderBy: 'petName',
      searchText: '',
      orderDirection: 'asc'
    };
    this.deleteAppointment = this.deleteAppointment.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.addAppointment = this.addAppointment.bind(this);
    this.changeOrder = this.changeOrder.bind(this);
    this.textChange = this.textChange.bind(this);
  }

  componentDidMount () {
    fetch("./data.json")
    .then(response => response.json())
    .then(items => {
      this.setState({myAppointments: items});
    });
  }

  changeOrder(item, order) {
    this.setState({orderBy: item, orderDirection: order });
  }

  textChange(event) {
    this.setState({searchText: event});
  }

  handleClick(event) {
    event.preventDefault();
    this.setState({formDisplay: !this.state.formDisplay});
    console.log(this.state.formDisplay);
  }

  addAppointment(apt) {
    let appts = this.state.myAppointments;
    this.setState({myAppointments: [apt, ...appts]});
  }

  deleteAppointment(apt) {
    let appts = this.state.myAppointments;
    let updatedAppts = appts.filter((item, index) => index !== apt);
    this.setState({myAppointments: updatedAppts});
  }
 
  render () {
    let order;
    if (this.state.orderDirection === 'asc') {
      order = 1;
    } else {
      order = -1;
    }

    let appointments = this.state.myAppointments;
    appointments = appointments.sort((a,b) => {
      if (a[this.state.orderBy].toLowerCase() < b[this.state.orderBy].toLowerCase()) {
        return -1 * order;
      } else {
        return 1 * order;
      }
    }).filter(item => {
      return(
        item['petName'].includes(this.state.queryText) ||
        item['ownerName'].includes(this.state.queryText) ||
        item['aptName'].includes(this.state.queryText)
      );
    });
    return (
      <main className="page bg-white" id="petratings">
        <div className="container">
          <div className="row">
            <div className="col-md-12 bg-white">
              <div className="container">
                <AddAppointment formDisplay={this.state.formDisplay} toggleForm={this.handleClick} addAppointment={this.addAppointment}/>
                <SearchAppointment orderBy={this.state.orderBy} orderDirection={this.state.orderDirection} changeOrder={this.changeOrder} searchText={this.textChange}/>
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
