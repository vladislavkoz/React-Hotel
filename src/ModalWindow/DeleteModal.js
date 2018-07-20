import React from "react";

class DeleteModal extends React.Component {

    handlerCancel = () => {
        this.props.deleteReservation(this.props.reservation._id)
    };

    render() {
        return (
            <div className="text-center">
                <p>Are you sure you want to delete?</p>
                <div className="border">
                    <p>{this.props.reservation._id}</p>
                    <p>Reservation for {this.props.reservation.clientName}</p>
                    <p>Accommodation: {this.props.reservation.accommodation}</p>
                    <p>Comfort: {this.props.reservation.comfort}</p>
                </div>
                <button onClick={this.handlerCancel} className="btn btn-danger center-block">Confirm
                </button>
            </div>
        )
    };
}

export default DeleteModal;