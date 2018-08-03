import { combineReducers } from '../../../../.cache/typescript/2.9/node_modules/redux'
import reserveReducer from './reserveReducer';
import authReducer from './authReducer';
import errorsReducer from './errorsReducer'

export default combineReducers({
    auth: authReducer,
    errors: errorsReducer,
    reservationsBook: combineReducers({
        reservations: reserveReducer
    })
});