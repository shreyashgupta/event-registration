import React from 'react';
import './registrations.styles.css';
import { firestore } from '../../firebase/firebase.utils';
import { Grid, CardContent, Typography } from '@material-ui/core';
import RegistrationCard from '../../components/registraionCard/card';
let docsArrayData = [], docsArrayDataTimeStamp = [];
const Registrations = () => {
    const functionFirebase = async () => {
        const snapShot = await firestore.collection('registeredUsers').get();
        const docsArray = snapShot.docs;
        docsArrayData = docsArray.map(doc => doc.data());
        docsArrayDataTimeStamp = docsArrayData.map(docData => docData.createdAt.toDate());

    }

    functionFirebase();



    return (
        <div className='registrations'>
            <center><h2 className="tr">Total Number of Registrations: {docsArrayData.length}</h2></center>
            <div className='doc-data'>
                {
                    docsArrayData.map((docData, i) => (
                        <RegistrationCard  
                            imageUrl={docData.photoIdUrl}
                            name={docData.fullName}
                            ph= {docData.mobileNumber}
                            emailId={docData.email}
                            numTickets={docData.numberOfTickets}
                            time={docsArrayDataTimeStamp[i].toLocaleTimeString()}
                            date={docsArrayDataTimeStamp[i].toLocaleDateString()}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Registrations;