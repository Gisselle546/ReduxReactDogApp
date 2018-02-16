import { combineReducers } from 'redux';
import puppyReducer from './reducer_puppy';

const rootReducer= combineReducers({
  puppy:puppyReducer
});
export default rootReducer;
