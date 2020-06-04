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
            history: props.history
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const { email, password } = this.state;

        try {
            
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' });
            alert('Logged in as admin successfully');
            this.state.history.goBack();
        } catch (error) {
            console.log(error);
            alert(error.message);
        }

    }

    handleChange = (event) => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    }


    render() {
        return (
            <center>
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
            </center>
        )
    }
}

export default AdminLogin;