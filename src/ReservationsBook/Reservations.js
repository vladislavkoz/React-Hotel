import React, {Component} from 'react';
import Reservation from './Reservation';
import './Reservations.css'

class Reservations extends  Component{
    state = {
       reservations: [
           {clientName:"Vova",clientPhone:"0685954166",accommodation:"SGL",comfort:"LUX",checkInDate:"2018-07-14",checkOutDate:"2018-07-16"}
            ]
    };

    render(){
        return(
            <div>
                <div>
                    <div id={"clientName"}>
                        <label htmlFor="clientName">Client Name:</label>
                        <input type="text" id={"clientName"}/>
                    </div>
                </div>
                <hr/>
                <div className={"reservations"}>
                    <Reservation
                        clientName={this.state.reservations[0].clientName}
                        clientPhone={this.state.reservations[0].clientPhone}
                        accommodation={this.state.reservations[0].accommodation}
                        comfort={this.state.reservations[0].comfort}
                        checkInDate={this.state.reservations[0].checkInDate}
                        checkOutDate={this.state.reservations[0].checkOutDate}
                    />
                    <Reservation
                        clientName={this.state.reservations[0].clientName}
                        clientPhone={this.state.reservations[0].clientPhone}
                        accommodation={this.state.reservations[0].accommodation}
                        comfort={this.state.reservations[0].comfort}
                        checkInDate={this.state.reservations[0].checkInDate}
                        checkOutDate={this.state.reservations[0].checkOutDate}
                    />
                </div>
            </div>
        );
    }
}

export default Reservations