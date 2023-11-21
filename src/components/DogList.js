import React from 'react';
import dogs from "../db.js"
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import NavBar from './NavBar.js';

const DogList = () => {
    const navigate = useNavigate();

    const handleClick = (e) => {
        let dogName = e.target.innerText;
        dogs.forEach((dog) => {
            if (dog.name === dogName) {
                return navigate(`/dogs/${dogName}`);
            };
        });
    };

    return (
        <>
            <NavBar />
            <h1>Friends List</h1>
            {dogs.map((d) =>
                <h2 className='dog-name'
                    onClick={handleClick}
                    key={uuidv4()}>
                    {d.name}
                </h2>
            )}
        </>
    )
}

export default DogList;