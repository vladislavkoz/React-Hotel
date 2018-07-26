import React, {Component} from 'react'
import './Filter.css';

class ReserveFilter extends Component {

    clearFilter = () => {
        this.props.removeApartments();
    };

    createQuery = (formData) => {
        let filter = "";
        for (let entry of formData.entries()) {
            if (entry[1] != "") {
                filter = filter + entry[0] + "=" + entry[1] + "&";
            }
        }
        return filter;
    };

    filter = (e) => {
        e.preventDefault();
        let formData = new FormData(e.target);
        let filterQuery = this.createQuery(formData);
        this.props.getFilteredApartment(filterQuery);
    };

    render() {
        return (
            <form ref="filterForm" className={"form form-row"} onSubmit={this.filter} id="filterForm">
                <div className="options">
                    <div className="option">
                        <label className={"label"} htmlFor="checkInDate">Check-in date:</label>
                        <input required name="checkInDate" className="form-control" type="date" id="checkInDate"/>
                    </div>
                    <div className="option">
                        <label className={"label"} htmlFor="checkOutDate">Check-out date:</label>
                        <input required  name="checkOutDate" className="form-control" type="date" id="checkOutDate"/>
                    </div>
                </div>
                <div className={"button"}>
                    <button type="reset" className="btn btn-outline-success" onClick={this.clearFilter.bind(this)}>Clear filter
                        <i className="fas fa-eraser ml-2"/>
                    </button>
                </div>
                <div className={"button"}>
                    <button type="submit" className="btn btn-outline-success">Find
                        <i className="fas fa-search ml-2"/>
                    </button>
                </div>
            </form>
        );
    }
}

export default ReserveFilter;