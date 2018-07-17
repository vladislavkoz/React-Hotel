import React, {Component} from 'react';
import Apartment from './Apartment';
import './Apartments.css';
import Filter from "./Filter";
import Modal from "react-modal";
import './Filter.css'
import ReserveModal from "../ModalWindow/ReserveModal";

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

class Apartments extends Component {
    state = {
        apartments: [
            {accommodationType: 'SGL', comfortType: 'LUX'},
            {accommodationType: 'DGL', comfortType: 'ECONOM'},
            {accommodationType: 'DGL', comfortType: 'STANDART'},
            {accommodationType: 'SGL', comfortType: 'ECONOM'},
            {accommodationType: 'SGL', comfortType: 'STANDART'},
            {accommodationType: 'DGL', comfortType: 'LUX'}
        ],
        isOpen: false,
        selectedApartment:''
    };

    closeModal = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    openModal = (apartment) =>{
      this.setState({
          isOpen: true,
          selectedApartment:apartment
      });
    };

    componentWillMount() {
        Modal.setAppElement('body');
    }

    render() {
        return (
            <div>
                <Filter/>
                <hr/>
                <div className={'cards-Container'}>
                    {this.state.apartments.map(apartment =>{return(
                            <Apartment
                                accommodation={apartment.accommodationType}
                                comfort={apartment.comfortType}
                                modal={e => this.openModal(apartment)}
                            />
                        )}
                    )}
                    </div>
                <div>
                    <Modal
                        isOpen={this.state.isOpen}
                           onRequestClose={this.closeModal}
                           style={customStyles}>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.closeModal}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <ReserveModal apartment={this.state.selectedApartment}/>
                    </Modal>
                </div>
            </div>

        );
    }

}

export default Apartments;