import React, {Component} from 'react';
import Reservation from './Reservation';
import './Reservations.css'
import '../Apartments/Filter.css'
import Modal from "react-modal";
import EditModal from "../ModalWindow/EditModal";
import DeleteModal from "../ModalWindow/DeleteModal";
import ReservationsFilter from "./ReservationsFilter";
import { connect } from 'react-redux'
import { getReservations,getFiteredReservations,deleteReservation,updateReservation } from '../actions/reserveActions'

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

class Reservations extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpenEditModal: false,
            selectedReservation: '',
            index: ""
        }
    }
    componentDidMount(){
        Modal.setAppElement('body')
    }

    componentWillMount() {
        this.getAllReservations();
    }

    getAllReservations() {
        this.props.getReservations()
    }

    handleUpdate(reservationForUpdate) {
        this.props.updateReservation(reservationForUpdate);
        this.closeEditModal();
    };

    deleteReservation(id, index) {
        this.props.deleteReservation(id,index)
    }

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

    getFilteredReservations(filter) {
        this.props.getFiteredReservations(filter);
    };

    render() {
        return (
            <div>
                <ReservationsFilter
                    getFilteredReservations={this.getFilteredReservations.bind(this)}
                    getAllReservations={this.getAllReservations.bind(this)}
                />
                <hr/>
                <div className={"reservations"}>
                    {this.props.reservations.map((reservation, index) => {
                        return (<Reservation
                                key={index}
                                id={reservation._id}
                                clientName={reservation.clientName}
                                clientPhone={reservation.clientPhone}
                                accommodation={reservation.accommodation}
                                comfort={reservation.comfort}
                                checkInDate={reservation.checkInDate}
                                checkOutDate={reservation.checkOutDate}
                                editModal={e => this.openEditModal(reservation, index)}
                                deleteReservation = {this.deleteReservation.bind(this)}
                                deleteModal={e => this.openDeleteModal(reservation, index)}
                            />
                        )
                    })}
                </div>
                <hr/>
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
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    reservations: state.reservationsBook.reservations
});

export default connect(mapStateToProps,{getReservations,getFiteredReservations,deleteReservation,updateReservation}) (Reservations)