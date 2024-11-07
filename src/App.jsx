import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import HomePage from "./Pages/HomePage";
import ByCategoryPage from './Pages/ByCategoryPage';
import DetailsPage from './Pages/DetailsPage';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/byCategory/:categoryID" element={<ByCategoryPage/>}/>
                <Route path="/details/:postID" element={<DetailsPage/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
