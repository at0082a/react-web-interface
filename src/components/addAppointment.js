import React, {Component} from 'react';
import {FaPlus} from "react-icons/fa"

export default class AddAppointment extends Component {

  constructor(props) {
    super(props);
    this.state = {
      petName: '',
      ownerName: '',
      aptDate: '',
      aptTime: '',
      aptNotes: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;
    console.log(value);
    const field = event.target.name;
    this.setState({ [field]: value });
  }

  handleSubmit(event) {
    event.preventDefault(); 
    const newApt = {
      petName: this.state.petName,
      ownerName: this.state.ownerName,
      aptDate: this.state.aptDate + " " + this.state.aptTime,
      aptNotes: this.state.aptNotes
    };

    this.props.addAppointment(newApt);

    this.setState({
      petName: '',
      ownerName: '', 
      aptDate: '',
      aptTime: '',
      aptNotes: ''
    });
    
  }

  render() {
    return (
      <div className={
        "card textcenter mt-3 " +
        (this.props.formDisplay ? "" : "add-appointment")
      }>
          <div className="apt-addheading card-header bg-primary text-white" onClick={this.props.toggleForm} >
            <FaPlus/> Add Appointment
          </div>

          <div className="card-body" >
            <form id="aptForm" noValidate onSubmit={this.handleSubmit}>
              <div className="form-group form-row">
                <label
                  className="col-md-2 col-form-label text-md-right"
                  htmlFor="petName"
                  readOnly
                >
                  Pet Name
                </label>
                <div className="col-md-10">
                  <input
                    type="text"
                    className="form-control"
                    name="petName"
                    placeholder="Pet's Name"
                    onChange={this.handleChange}
                    value={this.state.petName}
                  />
                </div>
              </div>
              <div className="form-group form-row">
                <label
                  className="col-md-2 col-form-label text-md-right"
                  htmlFor="ownerName"
                >
                  Pet Owner
                </label>
                <div className="col-md-10">
                  <input
                    type="text"
                    className="form-control"
                    name="ownerName"
                    placeholder="Owner's Name"  
                    onChange={this.handleChange}
                    value={this.state.petOwner}
                  />
                </div>
              </div>

              <div className="form-group form-row">
                <label
                  className="col-md-2 col-form-label text-md-right"
                  htmlFor="aptDate"
                >
                  Date
                </label>
                <div className="col-md-4">
                  <input
                    type="date"
                    className="form-control"
                    name="aptDate"
                    id="aptDate"
                    onChange={this.handleChange}
                    value={this.state.aptDate}
                  />
                </div>
                <label
                  className="col-md-2 col-form-label text-md-right"
                  htmlFor="aptTime"
                  onChange={this.handleChange}
                  value={this.state.aptTime}
                >
                  Time
                </label>
                <div className="col-md-4">
                  <input
                    type="time"
                    className="form-control"
                    name="aptTime"
                    id="aptTime"
                    value={this.state.date}
                    onChange={this.handleChange}
                  />
                </div>
              </div>

              <div className="form-group form-row">
                <label className="col-md-2 text-md-right" htmlFor="aptNotes">
                  Apt. Notes
                </label>
                <div className="col-md-10">
                  <textarea
                    className="form-control"
                    rows="4"
                    cols="50"
                    name="aptNotes"
                    id="aptNotes"
                    placeholder="Appointment Notes"
                    value={this.state.aptNotes}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="form-group form-row mb-0">
                <div className="offset-md-2 col-md-10">
                  <button
                    type="submit"
                    className="btn btn-primary d-block ml-auto"
                  >
                    Add Appointment
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
    )
  }
}