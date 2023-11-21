import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import NoPage from './NoPage';
import DogPage from './DogPage';
import DogList from './DogList';

const RoutesList = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/dogs' element={<DogList />} />
            <Route path='/dogs/:name' element={<DogPage />} />
            <Route path='*' element={<NoPage />} />
        </Routes>
    );
};

export default RoutesList;