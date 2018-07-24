import React, {Component} from 'react';
import Reservation from './Reservation';
import './Reservations.css'
import ApartmentsFilter from '../Apartments/ApartmentsFilter';
import '../Apartments/Filter.css'
import Modal from "react-modal";
import EditModal from "../ModalWindow/EditModal";
import DeleteModal from "../ModalWindow/DeleteModal";
import ReservationsFilter from "./ReservationsFilter";

const customStyles = {
    content: {
        width: '65%',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

const reservationsUrl = "http://localhost:3005/reservations";

const numberFormater = (n) => {
    return n < 10 ? "0" + n : n;
};

const dateFormater = (date) => {
    let dat = new Date(date);
    var result = numberFormater(dat.getFullYear() + "-" + numberFormater(dat.getMonth() + 1) + "-" + numberFormater(dat.getDate()));
    return result;
};

class Reservations extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reservations: [],
            isOpenEditModal: false,
            isOpenDeleteModal: false,
            selectedReservation: '',
            index: ""
        }
    }

    componentWillMount() {
        this.getAllReservations();
    }

    async getAllReservations() {
        let reservations = await fetch(reservationsUrl)
            .then(response => response.json());
        reservations.forEach(res => {
            res.checkInDate = dateFormater(res.checkInDate);
            res.checkOutDate = dateFormater(res.checkOutDate);
        });
        this.setState({reservations: reservations});
    }

    async handleUpdate(reservationForUpdate) {
        let updated = await fetch(reservationsUrl + '/' + reservationForUpdate.id, {
            method: 'PATCH',
            body: JSON.stringify({
                clientName: reservationForUpdate.clientName,
                clientTelephone: reservationForUpdate.clientPhone,
                apartmentAccommodation: reservationForUpdate.accommodation,
                apartmentComfortType: reservationForUpdate.comfort,
                checkInDate: reservationForUpdate.checkInDate,
                checkOutDate: reservationForUpdate.checkOutDate
            }),
            headers: {
                'Accept': 'application/json, text/plain,*/*',
                'Content-Type': 'application/json'
            }
        }).then(res => res.json());

        if (updated.status != 500){
            this.setUpdatedReservationInState(updated,reservationForUpdate.index);
        }
        this.closeEditModal();
    };

    setUpdatedReservationInState = (updated,index) =>{
        updated.checkInDate = dateFormater(updated.checkInDate);
        updated.checkOutDate = dateFormater(updated.checkOutDate);

        let reservations = [...this.state.reservations];
        reservations[index] = updated;
        this.setState({reservations: reservations});
    };

    async deleteReservation(id, index) {
        let res = await fetch(reservationsUrl + '/' + id, {
            method: 'delete'
        });
        if (res.status == 204) {
            this.deleteReservationFromState(index);
        }
        this.closeDeleteModal();
    }

    deleteReservationFromState = (index) =>{
        var reservations = [...this.state.reservations];
        reservations.splice(index, 1);
        this.setState({ reservations })
    };

    closeEditModal = () => {
        this.setState({
            isOpenEditModal: !this.state.isOpenEditModal
        });
    };

    openEditModal = (reservation, i) => {
        this.setState({
            isOpenEditModal: true,
            selectedReservation: reservation,
            index: i
        });
    };

    closeDeleteModal = () => {
        this.setState({
            isOpenDeleteModal: false
        });
    };

    openDeleteModal = (reservation, i) => {
        this.setState({
            isOpenDeleteModal: true,
            selectedReservation: reservation,
            index: i
        });
    };

    getFilteredReservations = () =>{
        alert("filter")
    };

    render() {
        return (
            <div>
                <ReservationsFilter getFilteredReservations={this.getFilteredReservations}/>
                <hr/>
                <div className={"reservations"}>
                    {this.state.reservations.map((reservation, index) => {
                        return (<Reservation
                                id={reservation._id}
                                clientName={reservation.clientName}
                                clientPhone={reservation.clientPhone}
                                accommodation={reservation.accommodation}
                                comfort={reservation.comfort}
                                checkInDate={reservation.checkInDate}
                                checkOutDate={reservation.checkOutDate}
                                editModal={e => this.openEditModal(reservation, index)}
                                deleteModal={e => this.openDeleteModal(reservation, index)}
                            />
                        )
                    })}
                </div>
                <div className={"editModal"}>
                    <Modal
                        isOpen={this.state.isOpenEditModal}
                        onRequestClose={this.closeEditModal}
                        style={customStyles}>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close"
                                onClick={this.closeEditModal}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <EditModal
                            reservation={this.state.selectedReservation}
                            index={this.state.index}
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
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close"
                                onClick={this.closeDeleteModal}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <DeleteModal
                            index={this.state.index}
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