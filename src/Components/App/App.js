import React from 'react';
import Header from './Header';
import Game from './Game';
import Rules from './Rules';
import Results from './Results';
import './styles.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={<Game/>}/>
                <Route path='/results' element={<Results/>}/>
            </Routes>
            <Rules/>
        </BrowserRouter>
    )

}

export default App;