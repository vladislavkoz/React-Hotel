import React from 'react';

class ReserveModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clientName: "",
            clientPhone: "",
            accommodation: this.props.apartment.accommodationType,
            comfort: this.props.apartment.comfortType,
            checkInDate: "",
            checkOutDate: "",
            newReservation:""
        }
    }

    handleUserInput(e) {
        const name = e.target.id;
        const value = e.target.value;
        this.setState({[name]: value});
    }

    createNewReservation = () => {
        this.setState({
                newReservation: {
                    clientName: this.state.clientName,
                    clientPhone: this.state.clientPhone,
                    accommodation: this.state.accommodation,
                    comfort: this.state.comfort,
                    checkInDate: this.state.checkInDate,
                    checkOutDate: this.state.checkOutDate,
                }
            },() =>{
            this.addNewReservation();
            }
        );
    };

    addNewReservation = () => {
        this.props.addNew(this.state.newReservation)
    };

    render() {
        return (
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label htmlFor="clientName">Full Name</label>
                    <input type="text" onChange={(event) => this.handleUserInput(event)} value={this.state.clientName}
                           className="field form-control" id="clientName"
                           placeholder="Enter name"/>
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="clientPhone">Phone number</label>
                    <input type="text" onChange={(event) => this.handleUserInput(event)} value={this.state.clientPhone}
                           className="phoneNumber form-control" id="clientPhone"
                           placeholder="(xxx) xxx-xx-xx"/>
                </div>
                <div className="form-group col-md-6">
                    <label className="mr-2" htmlFor="accommodation">Accommodation: </label>
                    <select className="sel custom-select" onChange={(event) => this.handleUserInput(event)}
                            id="accommodation">
                        <option selected
                                value={this.state.accommodation}>{this.state.accommodation}</option>
                        <option value="SGL">SGL</option>
                        <option value="DGL">DGL</option>
                    </select>
                </div>
                <div className="form-group col-md-6">
                    <label className="mr-2" htmlFor="comfort">Comfort: </label>
                    <select className="required sel custom-select" onChange={(event) => this.handleUserInput(event)}
                            id="comfort">
                        <option selected value={this.state.comfort}>{this.state.comfort}</option>
                        <option value="ECONOM">ECONOM</option>
                        <option value="STANDART">STANDART</option>
                        <option value="LUX">LUX</option>
                    </select>
                </div>
                <div className="form-group col-md-6 mr-6">
                    <label htmlFor="checkInDate">Check-in date:</label>
                    <input className="form-control" onChange={(event) => this.handleUserInput(event)}
                           value={this.state.checkInDate} type="date" id="checkInDate"/>
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="checkOutDate">Check-out date:</label>
                    <input className="form-control" onChange={(event) => this.handleUserInput(event)}
                           value={this.state.checkOutDate} type="date" id="checkOutDate"/>
                </div>
                <div className="form-row col-md-12 text-center">
                    <div className="col-12">
                        <button type="submit" onClick={this.createNewReservation} className="btn btn-success center-block"
                                id="reservationButton">RESERVE
                        </button>
                    </div>
                </div>
            </div>
        )
    };
}

export default ReserveModal;