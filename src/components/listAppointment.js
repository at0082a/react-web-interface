import React, {Component} from 'react';
import { FaTimes } from 'react-icons/fa';
import Moment from 'react-moment';

export default class ListAppointment extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="appointment-list item-list mb-3">
        
      {this.props.appointments.map((item, i) => {
          return (
        <div key={i} onClick={(e) => {this.props.deleteAppointment(i)}} className="pet-item col media py-3">
          <div className="mr-3">
              <button className="pet-delete btn btn-sm btn-danger" >
                <FaTimes/>
              </button>
          </div>

          <div className="pet-info media-body">
              <div className="pet-head d-flex">
                <span className="pet-name">{item.petName}</span>
                <span className="apt-date ml-auto">
                  <Moment parse="YYYY/MM/DD h:mma">
                    {item.aptDate}
                  </Moment> 
                </span>
              </div>

              <div className="owner-name">
                  <span className="label-item">Owner: </span>
                  <span>{item.ownerName}</span>
              </div>
            <div className="apt-notes">{item.aptNotes}</div>
          </div>
        </div>
          )
      })} 
      </div>
    )
  }
}