import React from 'react';
import './admin-login.styles.scss';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import { auth } from '../../firebase/firebase.utils';

class AdminLogin extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            currentUser: null,
            history: props.history
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            alert('Logged in as admin successfully');
            this.setState({
                password: ''
            }, () => window.location.assign(`http://${window.location.hostname}:${window.location.port}/registrations`))

        } catch (error) {
            console.log(error);
            alert(error.message);
        }

    }

    handleChange = (event) => {
        const { value, name } = event.target;

        this.setState({ [name]: value }, () => console.log(this.state.history));
    }

    componentDidMount() {
        auth.onAuthStateChanged(userAuth => {
            this.setState({ currentUser: userAuth });
        })
    }


    render() {
        console.log(window.location.hostname);
        console.log(window.location.port);
        return (
            <center>
                {
                    this.state.currentUser ?
                        <h2 className='logged-in'>admin logged in</h2>
                        :
                        <div className="admin-login">

                            <h2 className='title'>Admin Login</h2>
                            <span>Log in with your email and password</span>
                            <form onSubmit={this.handleSubmit}>
                                <FormInput
                                    name='email'
                                    type='email'
                                    handleChange={this.handleChange}
                                    value={this.state.email}
                                    label='email'
                                    required
                                />
                                <FormInput
                                    name='password'
                                    type='password'
                                    handleChange={this.handleChange}
                                    value={this.state.password}
                                    label='password'
                                    required
                                />
                                <div className='buttons'>
                                    <CustomButton type='submit'> SIGN IN </CustomButton>
                                </div>
                            </form>
                        </div>
                }
            </center>
        )




    }
}

export default AdminLogin;