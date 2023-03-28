import {configureStore} from '@reduxjs/toolkit';
import ScoreReducer from './Reducers';

const Store = configureStore({                      //this will create the store with a reducer
    reducer: ScoreReducer
})

export default Store;