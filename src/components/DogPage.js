import React from 'react';
import { useParams } from 'react-router-dom';
import dogs from '../db.js';
import NavBar from './NavBar.js';

const DogPage = () => {
    const params = useParams();
    let dogObj;
    let dogImg;
    let dogFacts;

    dogs.forEach((dog) => {
        if (dog.name === params.name) {
            console.log(dog);
            dogObj = dog;
            dogImg = dog.src;
            dogFacts = dog.facts;
        };
    });

    return (
        <>
            <NavBar />
            <h1>{dogObj.name}</h1>
            <img src={`../${dogImg}.jpg`} height={"300em"} alt='dog-img' />
            <h2>AGE: {dogObj.age}</h2>
            <ol>
                {dogFacts.map((fact) => <li>{fact}</li>)}
            </ol>
        </>
    );
};

export default DogPage;