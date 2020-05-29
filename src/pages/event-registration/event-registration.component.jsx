import React, { useState } from 'react';
import { auth } from '../../firebase/firebase.utils';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';

//props should comprise of event-name, event-id, event-type(indivisual or team).
//If team event max. size of team is also provided as prop
//This props should be passed from EventCard Component

// const EventRegistration = (props) => {

//     const [isLoggedIn, setIsLoggedIn] = useState(null);
//     const [userAuthState, setUserAuthState] = useState(null);
//     const [selectedTeamSize, setSelectedTeamSize] = useState(1);

//     const fun = () => {
//         auth.onAuthStateChanged(userAuth => {
//             userAuth ? setIsLoggedIn(true) : setIsLoggedIn(false);

//             setUserAuthState(userAuth);

//         });
//     }

//     fun();

//     const handleChange = async (event) => {
//         const { name, value } = event.target;
//         if (name.localeCompare("selectedTeamSize") === 0) await setSelectedTeamSize(value);


//     }

//     // if(selectedTeamSize) console.log(selectedTeamSize);

//     const handleSubmit = (event) => {

//     }

//     let maxTeamSize = 5;
//     const arrayMaxTeamSize = [];
//     for (let i = 1; i <= maxTeamSize; i++) arrayMaxTeamSize[i] = i;


//     const arraySelectedTeamSize = [];
//     for (let i = 1; i <= selectedTeamSize; i++) arraySelectedTeamSize[i] = i;



//     return (
//         isLoggedIn ?
//             <div className='event-registrtion'>
//                 <form onSubmit={handleSubmit}>
//                     <label>Choose number of members: </label>
//                     {
//                         selectedTeamSize ? console.log(selectedTeamSize) : console.log(null)
//                     }
//                     <select id='teammates' name='selectedTeamSize' onChange={handleChange}>
//                         {
//                             arrayMaxTeamSize.map(item => (
//                                 <option key={item} value={item}>{item}</option>
//                             ))
//                         }
//                         {
//                             arraySelectedTeamSize.map(item => {
//                                 <FormInput
//                                     key={item}
//                                     name='membername'
//                                     type='text'
//                                     handleChange={this.handleChange}
//                                     value={this.state.email}
//                                     label='email'
//                                     required
//                                     />
//                         })
//                         }
//                     </select>
//                 </form>
//             </div>
//             :
//             <h2>Please signin first</h2>
//     )

// }

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
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target;

        

        this.setState({ [name]: value }, () => console.log(this.state));
    }

    handleSubmit = (event) => {

    }

    componentDidMount() {
        auth.onAuthStateChanged(async userAuth => {
            userAuth ? this.setState({ isLoggedIn: true }) : this.setState({ isLoggedIn: false })
        });
    }

    render() {
        const { maxTeamSize, selectedTeamSize, isLoggedIn } = this.state;
        const arrayMaxTeamSize = [];
        for (let i = 1; i <= maxTeamSize; i++) arrayMaxTeamSize[i] = i;
        const arraySelectedTeamSize = [];
        for (let i = 1; i <= selectedTeamSize; i++) arraySelectedTeamSize[i] = i;

        return (
            isLoggedIn ?
                <div className='event-registrtion'>

                    <label>Choose number of members: </label>
                    <select id='teammates' name='selectedTeamSize' onChange={this.handleChange}>
                        {
                            arrayMaxTeamSize.map(item => (
                                <option key={item} value={item}>{item}</option>
                            ))
                        }
                    </select>

                    <form onSubmit={this.handleSubmit}>
                        {
                            arraySelectedTeamSize.map(item => (
                                <FormInput
                                    key={item}
                                    name={`member${item}`}
                                    type='text'
                                    handleChange={this.handleChange}
                                    defaultValue=''
                                    label={`member${item}`}
                                />
                            ))
                        }
                    </form>

                </div>
                :
                <h2>Please signin first</h2>
        )
    }

}

export default EventRegistration;