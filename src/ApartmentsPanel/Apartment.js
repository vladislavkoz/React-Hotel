import React from 'react';

const apartment = (props) => {
    return (
        <div className="card col-md-4 mt-3" id="apartmentCard">
            <div className="card-body">
                <div className="list-group col-md-12 flex-row">
                    <p className="card-text mr-2">Accommodation:</p>
                    <p className="card-text" id="accommodationType">{props.accommodation}</p>
                </div>
                <div className="list-group col-md-12 flex-row">
                    <p className="card-text mr-2">Comfort:</p>
                    <p className="card-text" id="comfortType">{props.comfort}</p>
                </div>
                <div className="text-center">
                    <button onClick={props.modal} className="btn btn-outline-success" id="apartmentReservationButton"
                    >
                        <i className="fas fa-bed m-2 fa-2x"></i>
                        <i className="fas fa-plus fa-2x"></i>
                    </button>
                </div>
            </div>
        </div>
    )
};


export default apartment;
