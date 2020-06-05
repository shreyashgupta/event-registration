import React from 'react';
import './header.styles.css';
import { Link, NavLink } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';


const Header = ({ currentUser }) => (
    
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo" />
            </Link>
            <div className="options">
                <NavLink to className="option"exact to="/">Home</NavLink>
                {
                    currentUser ? <div className="option2">
                    <NavLink to className="option" to="/Registrations">View Registrations</NavLink>
                    <div className="option" onClick={ () => auth.signOut()}>SIGN OUT</div></div>
                    :
                    <div className="option2">
                    <NavLink to className="option" to="/register">Register</NavLink>
                    <NavLink to className="option admin" to='/admin'>Admin</NavLink>
                    </div>
                }
            </div>
        </div>
    )


export default Header;