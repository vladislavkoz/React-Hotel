import React from 'react';
const apartment = (props) => {
    return (
        <div className="card col-md-4" id="apartmentCard">
            <div className="card-body">
                <h5 className="card-title" id="id"/>
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
                            >Reserve
                    </button>
                </div>
            </div>
        </div>
    )
};


export default apartment;
