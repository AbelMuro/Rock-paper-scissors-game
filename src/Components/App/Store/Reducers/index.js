import ScoreReducer from './Reducers';
import { combineReducers } from 'redux';

const RootReducer = combineReducers({
    score: ScoreReducer
})

export default RootReducer;