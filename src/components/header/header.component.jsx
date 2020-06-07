import React from 'react';
import './header.styles.css';
import { Link, NavLink, withRouter } from 'react-router-dom';


import { auth } from '../../firebase/firebase.utils';
import logo from '../../assets/logo.svg';



class Header extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            currentUser: null,
            history: props.history
        }
    }

    handleSignOut = (event) => {
        auth.signOut();
        alert("Logged out successfully");
        window.location.assign(`http://${window.location.hostname}:${window.location.port}/`);
    }

    componentDidMount() {
        auth.onAuthStateChanged(userAuth => {
            this.setState({ currentUser: userAuth });
        })
    }


    render() {
        console.log(this.state.history);
        return (
            <div className="header">
                <Link className="logo-container" to="/">
                   <img src={logo}/>
                </Link>
                <div className="options">
                    <NavLink to className="option" exact to="/">Home</NavLink>
                    {
                        this.state.currentUser ?
                            <div className="option2">
                                <NavLink to className="option" to="/registrations">View Registrations</NavLink>
                                <div className="option" onClick={this.handleSignOut}>SIGN OUT</div>
                            </div>
                            :
                            <div className="option2">
                                <NavLink to className="option" to="/register">Register</NavLink>
                                <NavLink to className="option" to='/admin'>Admin</NavLink>
                            </div>
                    }
                </div>
            </div>
        )
    }

}

export default withRouter(Header);