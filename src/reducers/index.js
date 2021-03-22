import { combineReducers } from 'redux';
import userReducer from './user';


const rootReducer = combineReducers({
  user: userReducer,
  locations: locationReducer,
});

export default rootReducer;