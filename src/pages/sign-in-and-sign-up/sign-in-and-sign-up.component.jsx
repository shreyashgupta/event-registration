import React, { useEffect, useState } from 'react';
import './sign-in-and-sign-up.styles.scss';
import SignIn from '../../components/signin/signin.component';
import SignUp from '../../components/signup/signup.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';


function signInAndSignUpPage({ history }) {
    const historyProp = history;
    return (
        <div className='sign-in-and-sign-up'>
            <SignIn historyProp={historyProp} />
            <SignUp historyProp={historyProp} />
        </div>
    )

}
    

export default signInAndSignUpPage;
