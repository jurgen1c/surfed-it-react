import { combineReducers } from 'redux';
import boardsReducer from './board';
import locationReducer from './location';
import userReducer from './user';


const rootReducer = combineReducers({
  user: userReducer,
  locations: locationReducer,
  boards: boardsReducer,
});

export default rootReducer;