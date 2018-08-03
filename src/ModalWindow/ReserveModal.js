import React from 'react';

class ReserveModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reservation :{
                clientName: "",
                clientPhone: "",
                accommodation: this.props.apartment.accommodation,
                comfort: this.props.apartment.comfort,
                checkInDate: this.props.filterDates.checkIn,
                checkOutDate: this.props.filterDates.checkOut,
            }
        }
    }

    handleUserInput(e) {
        const name = e.target.id;
        const value = e.target.value;
        let newState = {...this.state.reservation};
        newState[name] = value;
        this.setState({reservation: newState});
    }

    addNewReservation = () => {
        this.props.addNew(this.state.reservation)
    };

    render() {
        return (
            <form className="form-row" onSubmit={this.addNewReservation}>
                <div className="form-group col-md-6">
                    <label htmlFor="clientName">Full Name</label>
                    <input name='clientName' type="text" onChange={(event) => this.handleUserInput(event)} value={this.state.reservation.clientName}
                           className="field form-control" id="clientName"
                           placeholder="Enter name" required/>
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="clientPhone">Phone number</label>
                    <input required type="text" onChange={(event) => this.handleUserInput(event)} value={this.state.reservation.clientPhone}
                           className="phoneNumber form-control" id="clientPhone"
                           placeholder="(xxx) xxx-xx-xx"/>
                </div>
                <div className="form-group col-md-6">
                    <label className="mr-2" htmlFor="accommodation">Accommodation: </label>
                    <select className="sel custom-select" disabled
                            id="accommodation">
                        <option selected
                                value={this.state.accommodation}>{this.state.reservation.accommodation}</option>
                    </select>
                </div>
                <div className="form-group col-md-6">
                    <label className="mr-2" htmlFor="comfort">Comfort: </label>
                    <select className="required sel custom-select" disabled
                            id="comfort">
                        <option selected value={this.state.comfort}>{this.state.reservation.comfort}</option>
                    </select>
                </div>
                <div className="form-group col-md-6 mr-6">
                    <label htmlFor="checkInDate">Check-in date:</label>
                    <input className="form-control"
                           value={this.props.filterDates.checkIn} disabled  type="date" id="checkInDate" required/>
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="checkOutDate">Check-out date:</label>
                    <input className="form-control"
                           value={this.props.filterDates.checkOut} disabled type="date" id="checkOutDate" required/>
                </div>
                <div className="form-row col-md-12 text-center">
                    <div className="col-12">
                        <button type="submit"
                                className="btn btn-success center-block"
                                id="reservationButton">RESERVE
                        </button>
                    </div>
                </div>
            </form>
        )
    };
}

export default ReserveModal;