import {
    RESERVE,
    GET_RESERVATIONS,
    GET_FILTERED_RESERVATIONS,
    DELETE_RESERVATION,
    UPDATE_RESERVATION
} from './types'
import axios from 'axios';
import dateFormater from '../utils/dateUtils'
const reserveUrl = "/api/reservations";

export const reserve = (reserveData) => dispatch => {
    axios
        .post(reserveUrl, reserveData)
        .then(res => dispatch({
            type: RESERVE,
            payload: res.data
        }))
};

export const getReservations = () => dispatch => {
    axios
        .get(reserveUrl)
        .then(response => {
            response.data.forEach(res => {
                res.checkInDate = dateFormater(res.checkInDate);
                res.checkOutDate = dateFormater(res.checkOutDate);
            });
            return response.data
        }).then(data => dispatch({
            type: GET_RESERVATIONS,
            payload: data
        }))
};

export const getFiteredReservations = (filter) => dispatch => {
    axios
        .get(reserveUrl + "/by/?" + filter)
        .then(response => {
            response.data.forEach(res => {
                res.checkInDate = dateFormater(res.checkInDate);
                res.checkOutDate = dateFormater(res.checkOutDate);
            });
            return response.data
        }).then(data => dispatch({
            type: GET_FILTERED_RESERVATIONS,
            payload: data
        }))
};

export const deleteReservation = (id, index) => dispatch => {
    axios
        .delete(reserveUrl + "/" + id)
        .then(response => {
            if (response.status === 204) {
                dispatch({
                    type: DELETE_RESERVATION,
                    payload: {index}
                })
            }
        })
};

export const updateReservation = (reservationForUpdate) => dispatch => {
    axios
        .patch(reserveUrl + '/' + reservationForUpdate.id, reservationForUpdate)
        .then(res => {
            let index = reservationForUpdate.index;
            let data = res.data;
            data.checkInDate = dateFormater(data.checkInDate);
            data.checkOutDate = dateFormater(data.checkOutDate);
            dispatch({
                type: UPDATE_RESERVATION,
                payload: {data,index}
            })
            
        })
};
