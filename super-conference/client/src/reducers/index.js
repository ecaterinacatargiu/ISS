import { combineReducers} from "redux";
import conferenceReducer from './conferenceReducer';
import proposalReducers from './proposalReducers'

export default combineReducers({
    conference: conferenceReducer,
    proposal: proposalReducers
})
