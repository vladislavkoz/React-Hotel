import React from 'react';

class EditModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id:this.props.reservation._id,
            clientName: this.props.reservation.clientName,
            clientPhone: this.props.reservation.clientPhone,
            accommodation: this.props.reservation.accommodationType,
            comfort: this.props.reservation.comfortType,
            checkInDate: this.props.reservation.checkInDate,
            checkOutDate: this.props.reservation.checkOutDate,
            reserve: this.props.reservation,
        };
    }

    handleChange(e) {
        const name = e.target.id;
        const value = e.target.value;
        this.setState({[name]: value});
    }

    updateReservation(){
        this.setState({
                reserve: {
                    _id:this.state.id,
                    clientName: this.state.clientName,
                    clientPhone: this.state.clientPhone,
                    accommodation: this.state.accommodation,
                    comfort: this.state.comfort,
                    checkInDate: this.state.checkInDate,
                    checkOutDate: this.state.checkOutDate,
                }
            },() =>{
            this.props.onChange(this.state.reserve);
            }
        );
    }



    render() {
        return (
            <div className="form-row" id="form">
                <div className="form-group col-md-6">
                    <label htmlFor="clientName">Full Name</label>
                    <input type="text" className="field form-control" id="clientName"
                           placeholder="Enter name" onChange={(event) => this.handleChange(event)}
                           value={this.state.clientName}/>
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="clientPhone">Phone number</label>
                    <input type="text" value={this.state.clientPhone} className="phoneNumber form-control"
                           id="clientPhone"
                           onChange={(event) => this.handleChange(event)}
                           placeholder="(xxx) xxx-xx-xx"/>
                </div>
                <div className="form-group col-md-6">
                    <label className="mr-2" htmlFor="apartmentAccommodation">Accommodation: </label>
                    <select value={this.state.accommodation}
                            onChange={(event) => this.handleChange(event)}
                            className="sel custom-select "
                            id="apartmentAccommodation">
                        <option value="SGL">SGL</option>
                        <option value="DGL">DGL</option>
                    </select>
                </div>
                <div className="form-group col-md-6">
                    <label className="mr-2" htmlFor="apartmentComfortType">Comfort: </label>
                    <select value={this.state.comfort}
                            onChange={(event) => this.handleChange(event)}
                            className="required sel custom-select "
                            id="apartmentComfortType">
                        <option value="ECONOM">ECONOM</option>
                        <option value="STANDART">STANDART</option>
                        <option value="LUX">LUX</option>
                    </select>
                </div>
                <div className="form-group col-md-6 mr-6">
                    <label htmlFor="checkInDate">Check-in date:</label>
                    <input className="form-control" type="date" id="checkInDate"
                           onChange={(event) => this.handleChange(event)}
                           value={this.state.checkInDate}/>
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="checkOutDate">Check-out date:</label>
                    <input className="form-control" type="date" id="checkOutDate"
                           onChange={(event) => this.handleChange(event)}
                           value={this.state.checkOutDate}/>
                </div>
                <div className="form-row col-md-12 text-center">
                    <div className="col-12">
                        <button type="submit"
                                onClick={this.updateReservation.bind(this)} className="btn btn-success center-block">Confirm
                        </button>
                    </div>
                </div>
            </div>
        )
    };
}

export default EditModal;