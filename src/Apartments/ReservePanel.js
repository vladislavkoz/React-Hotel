import React, {Component} from 'react';
import Apartment from '../ApartmentsPanel/Apartment';
import '../ApartmentsPanel/Apartments.css';
import ReserveFilter from "./ReserveFilter";
import Modal from "react-modal";
import './Filter.css'
import ReserveModal from "../ModalWindow/ReserveModal";
import { connect } from 'react-redux';
import { reserve } from '../actions/reserveActions';
import axios from 'axios';
const customStyles = {
    content: {
        width: '60%',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        overflow: 'auto'
    }
};
const apartmentUrl = "/api/apartments";

class ReservePanel extends Component {
    constructor() {
        super();
        this.state = {
            apartments: [],
            selectedApartment:"",
            isOpenReserveModal: false,
            filterDates:[]
        }
    }
    
    componentDidMount(){
        Modal.setAppElement('body')
    }

    closeReserveModal = () => {
        this.setState({
            isOpenReserveModal: false
        });
    };

    setDatesFromFilterForm (formData){
        let checkIn = formData.get('checkInDate');
        let checkOut = formData.get('checkOutDate');
        this.setState({
            filterDates: {
                    checkIn:checkIn,
                    checkOut:checkOut
                }
        })
    };

    getFilteredApartments(filter){
        axios
        .get(apartmentUrl + "/by/?" + filter )
        .then(response => {this.setState({apartments: response.data})})
    };

    openReserveModal = (apartment) => {
        this.setState({
            isOpenReserveModal: true,
            selectedApartment: apartment
        });
    };

    addNewReservation = (reservation) => {
        this.closeReserveModal();
        this.props.reserve(reservation);
        this.setState({apartments:[]})
    };

    removeApartments = () =>{
        this.setState({apartments:[]})
    };

    render() {
        return (
            <div>
                <br/>
                <h1 className="text-sdemoву-center">Choose dates of reservation</h1>
                <ReserveFilter
                removeApartments= {this.removeApartments.bind(this)}
                getFilteredApartment = {this.getFilteredApartments.bind(this)}
                setDates = {this.setDatesFromFilterForm.bind(this)}
                />
                <div className={'cards-Container'}>
                    {this.state.apartments.map((apartment,index) => {
                            return (
                                <Apartment
                                key= {index}
                                    accommodation={apartment.accommodation}
                                    comfort={apartment.comfort}
                                    modal={e => this.openReserveModal(apartment)}
                                    reserve={e => this.reserve(apartment)}
                                />
                            )
                        }
                    )}
                </div>
                <div>
                    <Modal
                        isOpen={this.state.isOpenReserveModal}
                        onRequestClose={this.closeReserveModal}
                        style={customStyles}>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close"
                                onClick={this.closeReserveModal}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <ReserveModal
                            apartment={this.state.selectedApartment}
                            addNew={this.addNewReservation}
                            filterDates={this.state.filterDates}
                        />
                    </Modal>
                </div>
            </div>
        );
    }
}

export default connect(null, {reserve}) (ReservePanel);