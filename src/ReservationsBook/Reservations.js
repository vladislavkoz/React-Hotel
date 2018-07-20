import React, {Component} from 'react';
import Reservation from './Reservation';
import './Reservations.css'
import Filter from '../Apartments/Filter';
import '../Apartments/Filter.css'
import Modal from "react-modal";
import EditModal from "../ModalWindow/EditModal";
import DeleteModal from "../ModalWindow/DeleteModal";

const customStyles = {
    content: {
        width:'65%',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

const reservationsUrl = "http://localhost:3005/reservations";

const numberFormater = (n) =>{
    return n < 10 ? "0"+n : n;
};

const dateFormater = (date) => {
    let dat = new Date(date);
    var result = numberFormater(dat.getFullYear()+ "-" + numberFormater(dat.getMonth()+1) + "-" + numberFormater(dat.getDate()));
    return result;
};


class Reservations extends  Component{
    constructor(props) {
        super(props);
        this.state = {
            reservations:[],
            isOpenEditModal: false,
            isOpenDeleteModal: false,
            selectedReservation:''
        }
    }

    componentWillMount() {
        this.getAllReservations();
    }

    async getAllReservations(){
        let reservations = await fetch(reservationsUrl)
            .then(response => response.json())
        reservations.forEach(res =>{
            res.checkInDate = dateFormater(res.checkInDate);
            res.checkOutDate = dateFormater(res.checkOutDate);
        });
        this.setState({reservations:reservations});
    }

    async handleUpdate(reservationForUpdate){
        let updated = await fetch(reservationsUrl + '/' + reservationForUpdate._id,{
            method: 'PATCH',
            body: JSON.stringify({
                clientName: reservationForUpdate.clientName,
                clientTelephone: reservationForUpdate.clientPhone,
                apartmentAccommodation: reservationForUpdate.accommodation,
                apartmentComfortType: reservationForUpdate.comfort,
                checkInDate: reservationForUpdate.checkInDate,
                checkOutDate: reservationForUpdate.checkOutDate
            }),
            headers:{
                'Accept': 'application/json, text/plain,*/*',
                'Content-Type': 'application/json'
            }
        }).then(res => res.json());

        updated.checkInDate = dateFormater(updated.checkInDate);
        updated.checkOutDate = dateFormater(updated.checkOutDate);


        let reservations = this.state.reservations;
        reservations.map(reservation => {
            if (reservation._id == reservationForUpdate._id) {
                this.updateReservationFields(reservation,updated)
            }
        });
        this.setState({reservations:reservations});

        this.closeEditModal();
    };



    updateReservationFields(oldReservation,newReservation){
        oldReservation.clientName = newReservation.clientName;
        oldReservation.clientPhone = newReservation.clientPhone;
        oldReservation.accommodation = newReservation.accommodation;
        oldReservation.comfort = newReservation.comfort;
        oldReservation.checkInDate = newReservation.checkInDate;
        oldReservation.checkOutDate = newReservation.checkOutDate;
    }

    closeEditModal = () => {
        this.setState({
            isOpenEditModal: !this.state.isOpenEditModal
        });
    };

    openEditModal = (reservation) =>{
        this.setState({
            isOpenEditModal: true,
            selectedReservation:reservation
        });
    };

    closeDeleteModal = () => {
        this.setState({
            isOpenDeleteModal: false
        });
    };

    openDeleteModal = (reservation) =>{
        this.setState({
            isOpenDeleteModal: true,
            selectedReservation:reservation
        });
    };

    async deleteReservation(id){
        let res =  await fetch(reservationsUrl + '/' + id,{
            method: 'delete'
        });
        if (res.status == 204){
            this.getAllReservations();
        }
        this.closeDeleteModal();
    }

    render(){
        return(
            <div>
                <Filter/>
                <hr/>
                <div className={"reservations"}>
                    {this.state.reservations.map(reservation =>{return(
                            <Reservation
                                id={reservation._id}
                                clientName={reservation.clientName}
                                clientPhone={reservation.clientPhone}
                                accommodation={reservation.accommodation}
                                comfort={reservation.comfort}
                                checkInDate={reservation.checkInDate}
                                checkOutDate={reservation.checkOutDate}
                                editModal={e => this.openEditModal(reservation)}
                                deleteModal={e => this.openDeleteModal(reservation)}
                            />
                        )}
                    )}
                </div>
                <div className={"editModal"}>
                    <Modal
                        isOpen={this.state.isOpenEditModal}
                        onRequestClose={this.closeEditModal}
                        style={customStyles}>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.closeEditModal}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <EditModal
                            reservation={this.state.selectedReservation}
                            onChange={this.handleUpdate.bind(this)}
                        />
                    </Modal>
                </div>
                <div>
                    <Modal
                        isOpen={this.state.isOpenDeleteModal}
                        onRequestClose={this.closeDeleteModal}
                        style={customStyles}
                        >
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.closeDeleteModal}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <DeleteModal
                            reservation={this.state.selectedReservation}
                            deleteReservation={this.deleteReservation.bind(this)}
                            />
                    </Modal>
                </div>
            </div>
        );
    }
}

export default Reservations