import React, {Component} from 'react'
import './Filter.css';

class ApartmentsFilter extends Component {

    clearFilter = (e) => {
        e.preventDefault();
        this.refs.filterForm.reset();
        this.props.getAllApartments();
    };

    render() {
        return (
            <form ref="filterForm" className={"form form-row"} onSubmit={this.filter} id="filterForm">
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
                <div className={"button"}>
                    <button className="btn btn-success" onClick={this.clearFilter.bind(this)}>Clear filter
                        <i className="fas fa-eraser ml-2"/>
                    </button>
                </div>
                <div className={"button"}>
                    <button type="submit" className="btn btn-success">Find
                        <i className="fas fa-search ml-2"/>
                    </button>
                </div>
            </form>
        );
    }
}

export default ApartmentsFilter;