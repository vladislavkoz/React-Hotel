import { combineReducers } from '../../../../.cache/typescript/2.9/node_modules/redux'
import reserveReducer from './reserveReducer';
import authReducer from './authReducer';
import errorsReducer from './errorsReducer'
import apartmentsReducer from './apartmentsReducer'

export default combineReducers({
    auth: authReducer,
    apartments: apartmentsReducer,
    errors: errorsReducer,
    reservationsBook: combineReducers({
        reservations: reserveReducer
    })
});