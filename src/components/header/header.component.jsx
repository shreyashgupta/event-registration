import React from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom';
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
                <div className='option'>Hi! {currentUser.displayName}</div>
                :null
                }
                <Link to className="option" to="/eventlist">EVENT-LIST</Link>
                <Link to className="option" to="/eventregistration">EVENT-REGISTRATION</Link>

                {/* <Link to className="option" to="/signin">SIGN IN</Link> */}
                {
                    currentUser ? 
                    <div className='option' onClick={ () => auth.signOut()}>SIGN OUT</div>
                    :
                    <Link className='option' to='/signin'>SIGN IN</Link>
                }
            </div>
        </div>
    )


export default Header;