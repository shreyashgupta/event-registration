import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component.jsx';
import EventList from './pages/event-list/event-list.component';
import Header from './components/header/header.component';
import signInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import EventRegistration from './pages/event-registration/event-registration.component';
import Events from './pages/Events/events.component';
import Register from './pages/register/register.component';
import AdminLogin from './pages/admin-login/admin-login.component';
import Registrations from'./pages/registrations/registrations.component';

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            currentUser: null
        }
    }

    unsubscribeFromAuth = null;

    async componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = createUserProfileDocument(userAuth);

                (await userRef).onSnapshot(snapShot => {
                    this.setState({
                        currentUser: {
                            id: snapShot.id,
                            ...snapShot.data()
                        }
                    }, () => console.log(this.state))
                })
            }

            this.setState({currentUser: userAuth});         //else currentUser is null
        })
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div className="app-js" >
                <Header currentUser={this.state.currentUser} />
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    {/* <Route path='/eventlist' component={EventList} /> */}
                    {/* <Route path='/signin' component={signInAndSignUpPage} /> */}
                    {/* <Route path='/eventregistration' component={EventRegistration} /> */}
                    {/* <Route path='/events' component={Events} /> */}
                    <Route path='/register'component={Register} />
                    <Route path='/admin' component={AdminLogin} />
                    <Route path='/registrations' component={Registrations} />
                </Switch>
            </div>

        )
    }
}

export default App;