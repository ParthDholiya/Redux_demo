import currentUser from "./currentUser"
import counter from "./Counter"
import { combineReducers } from 'redux'


const rootReducers = combineReducers({
    currentUser,
    counter
});
export default rootReducers;