//props should comprise of event-name, event-id, event-type(indivisual or team).
//If team event max. size of team is also provided as prop
//This props should be passed from EventCard Component

import React from 'react';
import { auth, addEventDetailsForUser } from '../../firebase/firebase.utils';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import './event-registration.styles.scss';


class EventRegistration extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: null,
            userAuthState: null,
            maxTeamSize: 4,
            selectedTeamSize: 1,
            member1: '',
            member2: '',
            member3: '',
            member4: '',
            phoneNumber: '',
            eventName: '',
            eventId: ''
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target;

        this.setState({ [name]: value });
    }

    handleSubmit = async (event) => {

        const { eventId, eventName, phoneNumber, member1, member2, member3, member4 } = this.state;

        let members = [];
        if (member1.length) members[0] = member1;
        if (member2.length) members[1] = member2;
        if (member3.length) members[2] = member3;
        if (member4.length) members[3] = member4;

        auth.onAuthStateChanged(async userAuth => {
            if(userAuth)
            await addEventDetailsForUser(userAuth, eventId, eventName, phoneNumber, members);
        })

        console.log("Event Details added successfully for the user");

        await this.setState({
            eventId: '',
            eventName: '',
            member2: '',
            member3: '',
            member4: ''
        });

    }

    componentDidMount() {
        auth.onAuthStateChanged(async userAuth => {
            userAuth ? this.setState({ isLoggedIn: true }) : this.setState({ isLoggedIn: false })
        });
    }

    render() {
        const { maxTeamSize, selectedTeamSize, isLoggedIn, phoneNumber, eventName, eventId } = this.state;
        const arrayMaxTeamSize = [];
        for (let i = 1; i <= maxTeamSize; i++) arrayMaxTeamSize[i] = i;
        const arraySelectedTeamSize = [];
        for (let i = 1; i <= selectedTeamSize; i++) arraySelectedTeamSize[i] = i;

        return (
            isLoggedIn ?
                <div className='event-registration'>
                    <h2> Register for the event</h2>
                    <span>We have got some of the wondeful events</span><br />
                    <div className='drop-down-menu'>
                        <label><big>Choose number of tickets: </big></label>
                        <select id='teammates' name='selectedTeamSize' onChange={this.handleChange}>
                            {
                                arrayMaxTeamSize.map(item => (
                                    <option key={item} value={item}>{item}</option>
                                ))
                            }
                        </select>
                    </div>

                    <form className='form-input' onSubmit={this.handleSubmit}>
                        {
                            arraySelectedTeamSize.map(item => (
                                <FormInput
                                    key={item}
                                    name={`member${item}`}
                                    type='text'
                                    handleChange={this.handleChange}
                                    defaultValue=''
                                    label={`member${item}`}
                                    required
                                />
                            ))
                        }
                        <FormInput
                            name='phoneNumber'
                            type='text'
                            handleChange={this.handleChange}
                            value={phoneNumber}
                            label='phone number'
                            required
                        />
                        <FormInput
                            name='eventName'
                            type='text'
                            handleChange={this.handleChange}
                            value={eventName}
                            label='event name'
                            required
                        />
                        <FormInput
                            name='eventId'
                            type='text'
                            handleChange={this.handleChange}
                            value={eventId}
                            label='event id'
                            required
                        />
                    </form>
                    <CustomButton type='submit' onClick={this.handleSubmit}>BUY TICKET(s)</CustomButton>
                </div>
                :
                <h2>Please signin first before registering</h2>
        )
    }

}

export default EventRegistration;