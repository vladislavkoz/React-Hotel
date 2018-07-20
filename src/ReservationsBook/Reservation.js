import React from 'react'

const reservation = (props) => {
    return (
        <div className="card col-md-4" id={props.id} >
            <div className="card-body col pl-4">
                <div className="list-group col-md-12 flex-row">
                    <label className="mr-2" htmlFor="name">Client Name:</label>
                    <p id="name">{props.clientName}</p>
                </div>
                <div className="flex-row  col-md-12 list-group">
                    <label className="mr-2" htmlFor="telephone">Telephone:</label>
                    <p id="telephone">{props.clientPhone}</p>
                </div>
                <div className="flex-row  col-md-12 list-group">
                    <label className="mr-2" htmlFor="accommodation">Accommodation:</label>
                    <p id="accommodation">{props.accommodation}</p>
                </div>
                <div className="flex-row  col-md-12 list-group">
                    <label className="mr-2" htmlFor="comfort">Comfort:</label>
                    <p id="comfort">{props.comfort}</p>
                </div>
                <div className="flex-row  col-md-12 list-group">
                    <label className="mr-2" htmlFor="checkIn">Check-in date:</label>
                    <p id="checkIn">{props.checkInDate}</p>
                </div>
                <div className="flex-row  col-md-12 list-group">
                    <label className="mr-2" htmlFor="checkOut">Check-out date:</label>
                    <p id="checkOut">{props.checkOutDate}</p>
                </div>
                <div className="flex-row">
                    <button type="button"
                            className="btn mr-2 btn-outline-primary"
                            onClick={props.editModal}>
                        Edit
                    </button>
                    <button type="button" onClick={props.deleteModal} className="btn btn-outline-danger">
                        Delete
                    </button>
                </div>
            </div>
        </div>
    )
};

export default reservation;
