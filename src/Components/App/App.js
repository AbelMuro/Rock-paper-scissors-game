import React from 'react';
import Header from './Header';
import Game from './Game';
import Rules from './Rules';
import Results from './Results';
import './styles.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import Store from './Store';

function App() {
    return(
        <Provider store={Store}>
            <BrowserRouter>
                <Header/>                  
                <Routes>
                    <Route path='/' element={<Game/>}/>
                    <Route path='/results' element={<Results/>}/>
                </Routes>
            </BrowserRouter>                  
            <Rules/>          
        </Provider>
    )

}

export default App;