import React, {Component} from 'react';
import './App.css';
import Apartments from './Apartments/Apartments';
import Reservations from './ReservationsBook/Reservations';
import Header from './Header/Header';
import Home from './HomePage/Home'
import {BrowserRouter as Router, Route} from 'react-router-dom'
// import ReserveModal from "./ModalWindow/ReserveModal";
import Modal from 'react-modal';
import ReserveModal from "./ModalWindow/ReserveModal";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { isOpen: false };
    }

    toggleModal = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    componentWillMount(){
        Modal.setAppElement('body');
    }

    render() {
        return (
            <div className={"j"}>
                <button className={"btn "} onClick={this.toggleModal}>
                    Open the modal
                </button>

                <Modal isOpen={this.state.isOpen}
                       onRequestClose={this.toggleModal}>
                    <button onClick={this.toggleModal}>Close</button>
                    <ReserveModal/>
                </Modal>
            </div>

            //
            // <Router>
            //     <div className={"container"}>
            //         <Header/>
            //         <hr/>
            //         <Route exact path="/" component={Home}/>
            //         <Route path="/reservations" component={Reservations}/>
            //         <Route path="/apartments" component={Apartments}/>
            //     </div>
            // </Router>
        );
    }
}

export default App;
