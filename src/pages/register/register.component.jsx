import React from 'react';
import './register.styles.css';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import { storage } from '../../firebase/firebase.utils';
import { firestore } from '../../firebase/firebase.utils';


class Register extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            fullName: '',
            mobileNumber: '',
            email: '',
            registrationType: 'self',
            numberOfTickets: 1,
            file: null,
            photoIdUrl: ''
        }
    }

    handleSubmit = async (event) => {
        const { fullName, mobileNumber, email, photoIdUrl, registrationType, numberOfTickets, file } = this.state;
        console.log(this.state);
        if (!file) {
            alert("Upload image first");
            return;
        }
        else if (numberOfTickets <= 0) {
            alert("Enter positive value for number of tickets");
        }
        else if (!(fullName.length > 0 && mobileNumber.length > 0 && email.length > 0)) {
            alert("Enter all the details");
            return;
        }
        else {
            const userRef = firestore.doc(`registeredUsers/${fullName}`);
            const createdAt = new Date();
            const registeredUser = { fullName, mobileNumber, email, photoIdUrl, registrationType, numberOfTickets, createdAt };

            
            try {
                await userRef.set(registeredUser);
                alert("Registration Successful");
                this.setState({
                    fullName: '',
                    mobileNumber: '',
                    email: '',
                    registrationType: 'self',
                    numberOfTickets: 1,
                    file: null,
                    photoIdUrl: ''
                })
            } catch (error) {
                console.log(error);
                alert(error.message);
            }
        }
    }



    handleFileUpload = (event) => {
        const { file } = this.state;
        if (!file) {
            alert("Upload image and then click on upload button");
        } else {

            const uploadTask = storage.ref(`userPhotoIds/${file.name}`).put(file);

            uploadTask.on('state_changed',
                (snapShot) => { alert("uploading in progress") },
                (error) => { console.log(error) },
                () => {
                    storage
                        .ref('userPhotoIds')
                        .child(file.name)
                        .getDownloadURL()
                        .then(url => {
                            alert("Image_uploaded");
                            console.log("image uploaded");
                            this.setState({ photoIdUrl: url }, () => console.log(this.state));
                        })
                });
        }
    }



    handleFileChange = (event) => {
        if (event.target.files[0]) {
            this.setState({ file: event.target.files[0] });
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target;

        this.setState({ [name]: value });
        if (this.state.registrationType === 'self' || this.state.numberOfTickets <= 0) {
            this.setState({ numberOfTickets: 1 });
        }

    }

    render() {
        return (
            <center>
                <div className='registration'>
                    <h1>Register here!</h1>
                    <form onSubmit={this.handleSubmit}>
                        <FormInput
                            name='fullName'
                            type='text'
                            handleChange={this.handleChange}
                            value={this.state.fullName}
                            label='fullName'
                            required
                        />
                        <FormInput
                            name='mobileNumber'
                            type='text'
                            handleChange={this.handleChange}
                            value={this.state.mobileNumber}
                            label='mobileNumber'
                            required
                        />
                        <FormInput
                            name='email'
                            type='email'
                            handleChange={this.handleChange}
                            value={this.state.email}
                            label='email'
                            required
                        />
                        <input type='file' onChange={this.handleFileChange} />
                        <button type='button' onClick={this.handleFileUpload}> Upload </button><br /><br />
                        <label>Registration type: </label>
                        <select onChange={this.handleChange} name='registrationType' id='registrationType'>
                            <option value='self'>Self</option>
                            <option value='group'>Group</option>
                            <option value='corporate'>Corporate</option>
                            <option value='others'>Others</option>
                        </select>
                        <FormInput
                            name='numberOfTickets'
                            type='number'
                            handleChange={this.handleChange}
                            value={this.state.registrationType === 'self' ? 1 : this.state.numberOfTickets}
                            label='numberOfTickets'
                            required
                        />
                        <CustomButton type='button' onClick={this.handleSubmit}> Register </CustomButton>

                    </form>
                </div>
            </center>
        )
    }

}

export default Register;