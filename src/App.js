import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { HomePage, Register, Registrations, AdminLogin, Chart } from './pages';
import { Header } from './components';
import { auth } from './firebase/firebase.utils';

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            currentUser: null
        }
    }

    unsubscribeFromAuth=null;


    async componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                this.setState({currentUser:userAuth});
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
                <Header />
                    <Switch>
                    <Route exact path='/' component={HomePage} />
                    {
                        !this.state.currentUser ?
                        <Route path='/register'component={Register} />
                        :
                        <>
                        <Route path='/registrations' component={Registrations} />
                        <Route path='/chart' component={Chart} />
                        </>
                    }
                    <Route path='/admin' component={AdminLogin} />
                    </Switch>
            </div>
        )
    }
}

export default App;