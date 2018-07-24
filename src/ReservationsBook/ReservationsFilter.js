import React, {Component} from 'react'
import '../Apartments/Apartments.css';

class ReservationsFilter extends Component {

    constructor(props) {
        super(props);
    }


    clearFilter = (e) => {
        e.preventDefault();
        this.refs.filterForm.reset();
    };

    filter = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target)
        let filter = {};
        for (let entry of formData.entries()) {
            if(entry[1] != ""){
                filter[entry[0]] = entry[1];
            }
        }
        this.props.getFilteredReservations();
    };

    render() {
        return (
            <form ref="filterForm" className={"form form-row"} onSubmit={this.filter} id="filterForm">
                <div className={"options"}>
                    <div className="option form-group">
                        <label htmlFor="clientName">Full Name</label>
                        <input name='clientName' type="text"
                               className="field form-control" id="clientName"
                               placeholder="Enter name"/>
                    </div>
                    <div className="option form-group">
                        <label htmlFor="clientPhone">Phone number</label>
                        <input type="text" name="clientPhone"
                               className="phoneNumber form-control" id="clientPhone"
                               placeholder="(xxx) xxx-xx-xx"/>
                    </div>
                </div>
                <div className={"options"}>
                    <div className={"option"}>
                        <label className={"label"} htmlFor="apartmentAccommodation">Accommodation: </label>
                        <select  className={"custom-select"} name="accommodation" id="accommodation">
                            <option selected value="">All</option>
                            <option value="SGL">SGL</option>
                            <option value="DGL">DGL</option>
                        </select>
                    </div>
                    <div className={"option"}>
                        <label className={"label"} htmlFor="apartmentComfortType">Comfort: </label>
                        <select  className={"custom-select"} name="comfort" id="comfort">
                            <option selected value="">All</option>
                            <option value="ECONOM">ECONOM</option>
                            <option value="STANDART">STANDART</option>
                            <option value="LUX">LUX</option>
                        </select>
                    </div>
                </div>
                <div className="options">
                    <div className="option">
                        <label className={"label"} htmlFor="checkInDate">Check-in date:</label>
                        <input name="checkInDate" className="form-control" type="date" id="checkInDate"/>
                    </div>
                    <div className="option">
                        <label className={"label"} htmlFor="checkOutDate">Check-out date:</label>
                        <input name="checkOutDate" className="form-control" type="date" id="checkOutDate"/>
                    </div>
                </div>

                <div className={"button filterResetButton"}>
                    <button className="btn btn-success" onClick={this.clearFilter.bind(this)}>Clear filter
                        <i className="fas fa-eraser ml-2"/>
                    </button>
                </div>
                <div className={"button filterButton"}>
                    <button type="submit" className="btn btn-success">Find
                        <i className="fas fa-search ml-2"/>
                    </button>
                </div>

            </form>
        );
    }
}

export default ReservationsFilter;