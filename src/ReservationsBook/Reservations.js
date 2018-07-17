import React, {Component} from 'react';
import Reservation from './Reservation';
import './Reservations.css'
import Filter from '../Apartments/Filter';
import '../Apartments/Filter.css'
import Modal from "react-modal";
import EditModal from "../ModalWindow/EditModal";

const customStyles = {
    content: {
        width:'60%',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

class Reservations extends  Component{
    state = {
       reservations: [
           {
               id:1,
               clientName:"Vova",
               clientPhone:"0685954166",
               accommodation:"SGL",
               comfort:"LUX",
               checkInDate:"2018-07-14",
               checkOutDate:"2018-07-16"
           },
           {id:2,clientName:"Vova",clientPhone:"0685954166",accommodation:"SGL",comfort:"STANDART",checkInDate:"2018-07-14",checkOutDate:"2018-07-16"},
           {id:3,clientName:"Vova",clientPhone:"0685954166",accommodation:"DGL",comfort:"LUX",checkInDate:"2018-07-14",checkOutDate:"2018-07-16"},
           {id:4,clientName:"Vova",clientPhone:"0685954166",accommodation:"SGL",comfort:"ECONOM",checkInDate:"2018-07-14",checkOutDate:"2018-07-16"}
       ],
        isOpen: false,
        selectedReservation:'',
    };

    handleChange = (e) => {
        alert("value" + e.target.value);
        this.state.reservations.map(reservation => {
           if (reservation.id == e.target.id){
              //change reservation in state here
           }

        });
        // this.setState({name: e.target.value});
        // this.setState({selectedReservation:
        //         {
        //             clientName:e.target.value,
        //             clientPhone:"0685954166",
        //             accommodation:"SGL",
        //             comfort:"LUX",
        //             checkInDate:"2018-07-14",
        //             checkOutDate:"2018-07-16"
        // }
        //     });
        // alert(this.state.selectedReservation.clientName)
        this.closeModal();
    };

    closeModal = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    openModal = (reservation) =>{
        this.setState({
            isOpen: true,
            selectedReservation:reservation
        });
    };

    render(){
        return(
            <div>
                <Filter/>
                <hr/>
                <div className={"reservations"}>
                    {this.state.reservations.map(reservation =>{return(
                            <Reservation
                                id={reservation.id}
                                clientName={reservation.clientName}
                                clientPhone={reservation.clientPhone}
                                accommodation={reservation.accommodation}
                                comfort={reservation.comfort}
                                checkInDate={reservation.checkInDate}
                                checkOutDate={reservation.checkOutDate}
                                modal={e => this.openModal(reservation)}
                            />
                        )}
                    )}
                </div>
                <div className={"editModal"}>
                    <Modal
                        isOpen={this.state.isOpen}
                        onRequestClose={this.closeModal}
                        style={customStyles}>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.closeModal}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <EditModal
                            reservation={this.state.selectedReservation}
                            change={e => this.handleChange}
                        />
                    </Modal>
                </div>
                <div className={"removeModasl"}>

                </div>
            </div>
        );
    }
}

export default Reservations