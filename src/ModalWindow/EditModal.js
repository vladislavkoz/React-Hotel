import React from 'react';

class EditModal extends React.Component {

    constructor(props, context) {

        super(props, context);
        this.state = {
            reserve: this.props.reservation,
        };
    }

    handleChange = (e) => {
        let form = e.target.parentNode.parentElement;
        // alert(form.id);
        // alert(this.state.reserve.id);
        let id = this.state.reserve.id;
        let clientName = form.querySelector('#clientName').value;
        let clientPhone = form.querySelector('#clientPhone').value;
        let accommodation = form.querySelector('#apartmentAccommodation').value;
        let comfort = form.querySelector('#apartmentComfortType').value;
        let checkInDate = form.querySelector('#checkInDate').value;
        let checkOutDate = form.querySelector('#checkOutDate').value;

        this.setState({
            reserve:
                {
                    id: id,
                    clientName: clientName,
                    clientPhone: clientPhone,
                    accommodation: accommodation,
                    comfort: comfort,
                    checkInDate: checkInDate,
                    checkOutDate: checkOutDate
                }

        });
    };

    render() {
        return (
            <div className="form-row" id="form">
                <div className="form-group col-md-6">
                    <label htmlFor="clientName">Full Name</label>
                    <input type="text" className="field form-control" id="clientName"
                           placeholder="Enter name" onChange={this.handleChange}
                           value={this.state.reserve.clientName}/>
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="clientPhone">Phone number</label>
                    <input type="text" value={this.state.reserve.clientPhone} className="phoneNumber form-control"
                           id="clientPhone"
                           placeholder="(xxx) xxx-xx-xx"/>
                </div>
                <div className="form-group col-md-6">
                    <label className="mr-2" htmlFor="apartmentAccommodation">Accommodation: </label>
                    <select value={this.state.reserve.accommodation} className="sel custom-select "
                            id="apartmentAccommodation">
                        <option value="SGL">SGL</option>
                        <option value="DGL">DGL</option>
                    </select>
                </div>
                <div className="form-group col-md-6">
                    <label className="mr-2" htmlFor="apartmentComfortType">Comfort: </label>
                    <select value={this.state.reserve.comfort} className="required sel custom-select "
                            id="apartmentComfortType">
                        <option value="ECONOM">ECONOM</option>
                        <option value="STANDART">STANDART</option>
                        <option value="LUX">LUX</option>
                    </select>
                </div>
                <div className="form-group col-md-6 mr-6">
                    <label htmlFor="checkInDate">Check-in date:</label>
                    <input className="form-control" type="date" id="checkInDate"
                           value={this.state.reserve.checkInDate}/>
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="checkOutDate">Check-out date:</label>
                    <input className="form-control" type="date" id="checkOutDate"
                           value={this.state.reserve.checkOutDate}/>
                </div>
                <div className="form-row col-md-12 text-center">
                    <div className="col-12">
                        <button type="submit" value={this.state.reserve.clientName} id={this.props.reservation.id}
                                onClick={this.props.change()} className="btn btn-success center-block">RESERVE
                        </button>
                    </div>
                </div>
            </div>
        )
    };
}


export default EditModal;