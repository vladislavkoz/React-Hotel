import React from 'react';

const reserveModal = (props) => {
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
            <div className="form-group col-md-6">
                <label className="mr-2" htmlFor="apartmentAccommodation">Accommodation: </label>
                <select className="sel custom-select " id="apartmentAccommodation">
                    <option selected value={props.apartment.accommodationType}>{props.apartment.accommodationType}</option>
                    <option value="SGL">SGL</option>
                    <option value="DGL">DGL</option>
                </select>
            </div>
            <div className="form-group col-md-6">
                <label className="mr-2" htmlFor="apartmentComfortType">Comfort: </label>
                <select className="required sel custom-select " id="apartmentComfortType">
                    <option selected value={props.apartment.comfortType}>{props.apartment.comfortType}</option>
                    <option value="ECONOM">ECONOM</option>
                    <option value="STANDART">STANDART</option>
                    <option value="LUX">LUX</option>
                </select>
            </div>
            <div className="form-group col-md-6 mr-6">
                <label htmlFor="checkInDate">Check-in date:</label>
                <input className="form-control" type="date" id="checkInDate"/>
            </div>
            <div className="form-group col-md-6">
                <label htmlFor="checkOutDate">Check-out date:</label>
                <input className="form-control" type="date" id="checkOutDate"/>
            </div>
            <div className="form-row col-md-12 text-center">
                <div className="col-12">
                    <button type="submit" className="btn btn-success center-block" id="reservationButton">RESERVE
                    </button>
                </div>
            </div>
        </div>
    )
};

export default reserveModal;