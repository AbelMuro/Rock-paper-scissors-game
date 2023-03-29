import {configureStore} from '@reduxjs/toolkit';
import RootReducer from './Reducers';
import {                
    persistStore,                                                                   
    persistReducer,                                                                                                                                      
    PERSIST,                                                                        
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';                                    //using the local storage to store the state

const persistConfig = {key: 'root', storage};
const persistedReducer = persistReducer(persistConfig, RootReducer);   

export const Store = configureStore({               
    reducer: persistedReducer,
    middleware : getDefaultMiddleware => getDefaultMiddleware({serializableCheck: {ignoredActions: [PERSIST]}})
})
export const PersistedStore = persistStore(Store);