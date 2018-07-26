import React, {Component} from 'react';
import Apartment from '../ApartmentsPanel/Apartment';
import '../ApartmentsPanel/Apartments.css';
import ReserveFilter from "./ReserveFilter";
import Modal from "react-modal";
import './Filter.css'
import ReserveModal from "../ModalWindow/ReserveModal";

const customStyles = {
    content: {
        width: '60%',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};
const apartmentUrl = "http://localhost:3005/apartments";
const reserveUrl = 'http://localhost:3005/reservations';

class ReservePanel extends Component {
    constructor() {
        super();
        this.state = {
            apartments: [],
            selectedApartment:"",
            isOpenReserveModal: false
        }
    }

    closeReserveModal = () => {
        this.setState({
            isOpenReserveModal: false
        });
    };

    async getAllApartments() {
        let apartments = await fetch(apartmentUrl)
            .then(response =>
                response.json());
        this.setState({apartments: apartments});
    }

    async getFilteredApartments(filter){
        let apartments = await fetch(apartmentUrl + "/by/?" + filter )
            .then(response => response.json());
        this.setState({apartments: apartments});
    };

    openReserveModal = (apartment) => {
        this.setState({
            isOpenReserveModal: true,
            selectedApartment: apartment
        });
    };

    addNewReservation = (reservation) => {
        this.closeReserveModal();
        return fetch(reserveUrl, {
            method: "POST",
            body: JSON.stringify({
                entity: reservation
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
    };

    removeApartments = () =>{
        this.setState({apartments:[]})
    };

    render() {
        return (
            <div>
                <br/>
                <h1 className="text-sm-center">Choose dates of reservation</h1>
                <ReserveFilter
                removeApartments= {this.removeApartments.bind(this)}
                getFilteredApartment = {this.getFilteredApartments.bind(this)}
                />
                <div className={'cards-Container'}>
                    {this.state.apartments.map(apartment => {
                            return (
                                <Apartment
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
                        />
                    </Modal>
                </div>
            </div>

        );
    }
}

export default ReservePanel;