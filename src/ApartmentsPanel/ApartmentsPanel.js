import React, {Component} from 'react'
import '../Apartments/Filter.css'
import {BootstrapTable, TableHeaderColumn} from "react-bootstrap-table";
import axios from 'axios';
const apartmentUrl = "/api/apartments";

async function onAfterDeleteRow(rowKeys) {
   await fetch(apartmentUrl + '/' + rowKeys, {
        method: 'delete'
    });
}

const options = {
    afterDeleteRow: onAfterDeleteRow
};

const selectRowProp = {
    mode: 'checkbox'
};
class ApartmentsPanel extends Component {
    constructor() {
        super();
        this.state = {
            apartments: [],
        }
    }

   addNewApartment = (e) => {
        e.preventDefault();
        let apartment = {};
        const formData = new FormData(e.target);
        for (let entry of formData.entries()) {
            apartment[entry[0]] = entry[1];
        }
        this.addApartmentInDB(apartment);
        this.getAllApartments().then();
    };

    componentWillMount() {
        this.getAllApartments();
    }

    async getAllApartments() {
        let apartments = await fetch(apartmentUrl)
            .then(response =>
                response.json());
        this.setState({apartments: apartments});
    }

    addApartmentInDB  (apartment)  {
     axios
    .post(apartmentUrl, apartment)
    .then(res => this.setNewApartmentInState(res.data))

    };

    setNewApartmentInState(apartment){
        let state = [...this.state.apartments,apartment];
        this.setState({apartments:state})
    }

    render() {
        return (
            <div>
                <button className="filterCollapse bg-dark text-white btn " type="button" data-toggle="collapse"
                        data-target="#addNewApartment" aria-expanded="false"
                        aria-controls="addNewApartment">Tools
                    <i className="fas fa-angle-double-down ml-2"/>
                </button>
                <form onSubmit={this.addNewApartment.bind(this)} className="collapse multi-collapse" id="addNewApartment">
                    <div className="options">
                        <div className="option">
                            <label className="mr-2" htmlFor="apartmentAccommodation">Accommodation: </label>
                            <select required
                                    className="sel custom-select "
                                    id="accommodation"
                                    name="accommodation">
                                <option selected></option>
                                <option value="SGL">SGL</option>
                                <option value="DGL">DGL</option>
                            </select>
                        </div>
                        <div className="option">
                            <label className="mr-2" htmlFor="apartmentComfortType">Comfort: </label>
                            <select required
                                    className="required sel custom-select "
                                    id="comfort"
                                    name="comfort">
                                <option selected></option>
                                <option value="ECONOM">ECONOM</option>
                                <option value="STANDART">STANDART</option>
                                <option value="LUX">LUX</option>
                            </select>
                        </div>
                    </div>
                    <div className="options">
                        <div className="option">
                            <label className="mr-2" htmlFor="count">Count: </label>
                            <input className="form-control" name="count" type="number" id='count'/>
                        </div>
                    </div>
                    <button type="submit" className="button btn btn-outline-success">Add New Apartments</button>
                </form>

                <BootstrapTable deleteRow={ true }  options={ options } selectRow={ selectRowProp }    className="mt-4" data={ this.state.apartments }>
                    <TableHeaderColumn width='150' dataAlign="center" hidden isKey  dataField='_id' >id</TableHeaderColumn>
                    <TableHeaderColumn width='150' dataAlign="center"  dataField='accommodation' >Accommodation</TableHeaderColumn>
                    <TableHeaderColumn width='120' dataAlign="center" dataField='comfort'>Comfort</TableHeaderColumn>
                    <TableHeaderColumn width='80' dataAlign="center" dataField='count'>Count</TableHeaderColumn>
                </BootstrapTable>
            </div>
        );
    }
}

export default ApartmentsPanel;