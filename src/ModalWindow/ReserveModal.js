import React from 'react';


class ReserveModal extends React.Component {
    render() {
        return (
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label htmlFor="clientName">Full Name</label>
                    <input type="text" className="field form-control" id="clientName"
                           placeholder="Enter name"/>
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="clientPhone">Phone number</label>
                    <input type="text" className="phoneNumber form-control" id="clientPhone"
                           placeholder="(xxx) xxx-xx-xx"/>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label className="mr-2" htmlFor="apartmentAccommodation">Accommodation type: </label>
                        <select className="sel custom-select col-md-6" id="apartmentAccommodation">
                            <option selected>Choose</option>
                            <option value="SGL">SGL</option>
                            <option value="DGL">DGL</option>
                        </select>
                    </div>
                    <div className="form-group col-md-6">
                        <label className="mr-2" htmlFor="apartmentComfortType">Comfort type: </label>
                        <select className="required sel custom-select col-md-6" id="apartmentComfortType">
                            <option>Choose</option>
                            <option value="ECONOM">ECONOM</option>
                            <option value="STANDART">STANDART</option>
                            <option value="LUX">LUX</option>
                        </select>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-3 mr-5">
                        <label htmlFor="checkInDate">Check-in date:</label>
                        <input className="form-control" type="date" id="checkInDate"/>
                    </div>
                    <div className="form-group col-md-3 mr-5">
                        <label htmlFor="checkOutDate">Check-out date:</label>
                        <span id="val">
                        <input className="form-control" type="date" id="checkOutDate"/>
                        </span>
                    </div>
                </div>
                <div className="form-row text-center">
                    <div className="col-12">
                        <button type="submit" className="btn btn-success center-block" id="reservationButton">RESERVE
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ReserveModal;