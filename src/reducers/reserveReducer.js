import { RESERVE, GET_RESERVATIONS, GET_FILTERED_RESERVATIONS, DELETE_RESERVATION, UPDATE_RESERVATION } from "../actions/types";

const initialState = []

export default function(state = initialState,action){
    switch(action.type){
        case RESERVE:
            return [...state,action.payload];
        case GET_RESERVATIONS: 
            return action.payload
        case GET_FILTERED_RESERVATIONS:
            return action.payload
        case DELETE_RESERVATION:
            let newState = [...state];
            newState.splice(action.payload.index, 1);
            return newState;
        case UPDATE_RESERVATION:
            let newReservations = [...state];
            newReservations[action.payload.index] = action.payload.data;            
            return newReservations;
        default:
            return state;
    }
}