import React from 'react';
import './homepage.styles.css';
import { Link } from 'react-router-dom';

const HomePage = () =>{
    return(
        <center>
            <h1>WELCOME TO RVCE EVENT MANAGER APPLICATION</h1>
            <Link to='/register'>Click here to register...</Link>
        </center>
    )
}

export default HomePage;