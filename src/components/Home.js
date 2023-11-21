import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        let user = document.querySelector('#username');
        let name = user.value;
        setUsername(name);
        return navigate('/dogs');
    };

    return (
        <div className='sign-in'>
            <h1>Enter your dog name to sign in!</h1>
            <form onSubmit={handleSubmit}>
                <input type='text' id='username' placeholder='Your dog name'></input>
                <button type='submit'>Sign in</button>
            </form>
        </div>
    );
};

export default Home;