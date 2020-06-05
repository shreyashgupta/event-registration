import React from 'react';
import './register.styles.css';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
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
        const { fullName, mobileNumber, email, registrationType, photoIdUrl, numberOfTickets, file } = this.state;
        if(numberOfTickets<=0){
            alert("Enter proper value for numberOfTickets");
            console.log(this.state);
        }
        else {
            if (!file) {
                alert("Upload image");
            }
            else if (!(mobileNumber.length===10 && fullName.length && email.length && photoIdUrl.length && numberOfTickets > 0)) {
                alert("Enter all the details properly");
            }
            else {
                const createdAt = new Date();
                console.log(this.state);
                const userRef = firestore.collection('registeredUsers').doc(`${fullName}`);
    
                try {
                    await userRef.set({
                        fullName,
                        mobileNumber,
                        email,
                        photoIdUrl,
                        registrationType,
                        numberOfTickets,
                        createdAt
                    })
                } catch (error) {
                    console.log("Error in sending the data to firebase");
                }
    
                alert("Registration successful");
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
                        <CustomButton type='submit' > Register </CustomButton>

                    </form>
                </div>
            </center>
        )
    }

}

export default Register;