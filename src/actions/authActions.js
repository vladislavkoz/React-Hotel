import axios from 'axios';
import setAuthToken from '../utils/setAuthToken'
import jwtDecode from 'jwt-decode'
import { GET_ERROR,SET_CURRENT_USER } from './types'
const loginUrl = '/api/users/login';

export const loginUser = (userData) => dispatch => {
    axios
        .post(loginUrl, userData)
        .then(res =>{
            const { token } = res.data;
            localStorage.setItem('jwtToken',token);
            setAuthToken(token);
            const decodedUser = jwtDecode(token);
            dispatch(setCurrentUser(decodedUser));
        })
        .catch(err =>{
            dispatch({
                type: GET_ERROR,
                payload: err.response.data
            })
        })
};

export const logoutUser = () => dispatch => {
    localStorage.removeItem('jwtToken');
    setAuthToken(false);
    dispatch(setCurrentUser({}));

};

export const setCurrentUser = (decodedUser) => {
    return {
        type:SET_CURRENT_USER,
        payload: decodedUser
    }
}
