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
                {
                    currentUser ?
                <div className='option2'>Hi! {currentUser.displayName}</div>
                :null
                }
                <NavLink to className="option" to="/eventlist">HOME</NavLink>
                <NavLink to className="option" to="/events">EVENTS</NavLink>

                {/* <NavLink to className="option" to="/signin">SIGN IN</NavLink> */}
                {
                    currentUser ? 
                    <div className="option" onClick={ () => auth.signOut()}>SIGN OUT</div>
                    :
                    <NavLink className="option" to='/signin'>SIGN IN</NavLink>
                }
            </div>
        </div>
    )


export default Header;