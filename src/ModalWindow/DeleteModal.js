import React from "react";

class DeleteModal extends React.Component {

    handlerCancel = (e) => {
        e.preventDefault();
        this.props.deleteReservation(this.props.reservation._id,this.props.index)
    };

    render() {
        return (
            <form className="text-center" onSubmit={this.handlerCancel}>
                <p>Are you sure you want to delete?</p>
                <div className="border">
                    <p>Reservation for {this.props.reservation.clientName}</p>
                    <p>Accommodation: {this.props.reservation.accommodation}</p>
                    <p>Comfort: {this.props.reservation.comfort}</p>
                </div>
                <button  className="btn btn-danger center-block">Confirm
                </button>
            </form>
        )
    };
}

export default DeleteModal;