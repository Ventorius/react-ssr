import {combineReducers} from 'redux'
import usersReducer from './usersReducer'
import authReducer from './authReducer'
import adminsReducers from './adminsReducer'

export default combineReducers({
    users: usersReducer,
    auth: authReducer,
    admins: adminsReducers
})
