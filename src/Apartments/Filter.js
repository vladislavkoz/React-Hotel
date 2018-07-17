import React,{Component} from 'react'
import './Apartments.css';

class Filter extends Component{
    render(){
        return(
            <div className={"filter"}>
                <div className={"options"}>
                    <div className={"option"}>
                        <label className={"label"} htmlFor="apartmentAccommodation">Accommodation: </label>
                        <select className={"custom-select"} name="accommodation" id="accommodation">
                            <option selected value="">All</option>
                            <option value="SGL">SGL</option>
                            <option value="DGL">DGL</option>
                        </select>
                    </div>
                    <div className={"option"}>
                        <label className={"label"} htmlFor="apartmentComfortType">Comfort: </label>
                        <select className={"custom-select"} name="comfort" id="comfort">
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
                        <input className="form-control" type="date" id="checkInDate"/>
                    </div>
                    <div className="option">
                        <label className={"label"} htmlFor="checkOutDate">Check-out date:</label>
                        <span id="val">
                        <input className="form-control" type="date" id="checkOutDate"/>
                        </span>
                    </div>
                </div>
                <div className={"filterButton"}>
                    <button type="submit" className="btn btn-success center-block">Filter</button>
                </div>
            </div>
        );
    }
}

export default Filter;