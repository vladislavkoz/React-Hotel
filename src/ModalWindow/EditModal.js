import React from 'react';

class EditModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            reservation:{
                index: this.props.index,
                id: this.props.reservation._id,
                clientName: this.props.reservation.clientName,
                clientPhone: this.props.reservation.clientPhone,
                accommodation: this.props.reservation.accommodation,
                comfort: this.props.reservation.comfort,
                checkInDate: this.props.reservation.checkInDate,
                checkOutDate: this.props.reservation.checkOutDate,
                reserve: this.props.reservation
            }
        };
    }

    handleChange(e) {
        const name = e.target.id;
        const value = e.target.value;
        let newState = {...this.state.reservation};
        newState[name] = value;
        this.setState({reservation: newState});
    }

    updateReservation (e){
        e.preventDefault();
        this.props.onChange(this.state.reservation);
    };

    render() {
        return (
            <form className="form form-row" id="form" onSubmit={this.updateReservation.bind(this)}>
                <div className="form-group col-md-6">
                    <label htmlFor="clientName">Full Name</label>
                    <input required type="text" className="field form-control" id="clientName"
                           placeholder="Enter name" onChange={(event) => this.handleChange(event)}
                           value={this.state.reservation.clientName}/>
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="clientPhone">Phone number</label>
                    <input required type="text" value={this.state.reservation.clientPhone} className="phoneNumber form-control"
                           id="clientPhone"
                           onChange={(event) => this.handleChange(event)}
                           placeholder="(xxx) xxx-xx-xx"/>
                </div>
                <div className="form-group col-md-6">
                    <label className="mr-2" htmlFor="apartmentAccommodation">Accommodation: </label>
                    <select required value={this.state.reservation.accommodation}
                            onChange={(event) => this.handleChange(event)}
                            className="sel custom-select "
                            id="accommodation">
                        <option value="SGL">SGL</option>
                        <option value="DGL">DGL</option>
                    </select>
                </div>
                <div className="form-group col-md-6">
                    <label className="mr-2" htmlFor="apartmentComfortType">Comfort: </label>
                    <select required value={this.state.reservation.comfort}
                            onChange={(event) => this.handleChange(event)}
                            className="required sel custom-select "
                            id="comfort">
                        <option value="ECONOM">ECONOM</option>
                        <option value="STANDART">STANDART</option>
                        <option value="LUX">LUX</option>
                    </select>
                </div>
                <div className="form-group col-md-6 mr-6">
                    <label htmlFor="checkInDate">Check-in date:</label>
                    <input required className="form-control" type="date" id="checkInDate"
                           onChange={(event) => this.handleChange(event)}
                           value={this.state.reservation.checkInDate}/>
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="checkOutDate">Check-out date:</label>
                    <input required className="form-control" type="date" id="checkOutDate"
                           onChange={(event) => this.handleChange(event)}
                           value={this.state.reservation.checkOutDate}/>
                </div>
                <div className="form-row col-md-12 text-center">
                    <div className="col-12">
                        <button type="submit"
                                className="btn btn-success center-block">Confirm
                        </button>
                    </div>
                </div>
            </form>
        )
    };
}

export default EditModal;