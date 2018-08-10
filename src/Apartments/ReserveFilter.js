import React, {Component} from 'react'
import './Filter.css';
class ReserveFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            today:  new Date (new Date().toLocaleDateString())
        }
    }

    clearFilter = () => {
        this.props.removeApartments();
    };

    createQuery = (formData) => {
        this.props.setDates(formData);
        let filter = "";
        for (let entry of formData.entries()) {
            if (entry[1] !== "") {
                filter = filter + entry[0] + "=" + entry[1] + "&";
            }
        }
        return filter;
    };

    filter = (e) => {
        e.preventDefault();
        let formData = new FormData(e.target);
        let checkIn = new Date(new Date( formData.get('checkInDate')).toLocaleDateString());
        let checkOut = new Date( new Date( formData.get('checkOutDate')).toLocaleDateString());
        if(checkIn.getTime() <= checkOut.getTime()) {
            if (checkIn.getTime() < this.state.today.getTime() || (checkOut.getTime() < this.state.today.getTime())) {
                this.props.removeApartments();
            } else {
                let filterQuery = this.createQuery(formData);
                this.props.getFilteredApartment(filterQuery);
                this.clearFilter();
            }
        }else{
            this.props.removeApartments();
        }
    };

    render() {
        return (
            <form ref="filterForm" className={"form form-row"} onSubmit={this.filter} id="filterForm">
                <div className="options">
                    <div className="option">
                        <label className={"label"} htmlFor="checkInDate">Check-in date:</label>
                        <input required name="checkInDate"  className="form-control" type="date" id="checkInDate"/>
                    </div>
                    <div className="option">
                        <label className={"label"} htmlFor="checkOutDate">Check-out date:</label>
                        <input required  name="checkOutDate"  className="form-control" type="date" id="checkOutDate"/>
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