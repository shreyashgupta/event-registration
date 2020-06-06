import React from 'react';
import './registrations.styles.scss';
import { firestore } from '../../firebase/firebase.utils';
import { Grid, CardContent, Typography } from '@material-ui/core';
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
            <center><h2>Total Number of Registrations: {docsArrayData.length}</h2></center>
            <div className='doc-data'>
                {
                    docsArrayData.map((docData, i) => (
                        <Grid key={i} item className='grid-item'>
                            <CardContent>
                                <Typography>
                                    Full Name: {docData.fullName}
                                </Typography>
                                <Typography>
                                    Mobile Number: {docData.mobileNumber}
                                </Typography>
                                <Typography>
                                    Email ID: {docData.email}
                                </Typography>
                                <Typography component={'span'}>
                                    Photo ID
                                    <center>
                                        <img src={docData.photoIdUrl} className='photoId' alt={`${docData.fullName}'s photo ID`} />
                                    </center>
                                </Typography>
                                <Typography>
                                    Registration Type: {docData.registrationType}
                                </Typography>
                                <Typography>
                                    Number of Tickets: {docData.numberOfTickets}
                                </Typography>
                                <Typography>
                                    Date: {docsArrayDataTimeStamp[i].toLocaleDateString()}
                                </Typography>
                                <Typography>
                                    Time: {docsArrayDataTimeStamp[i].toLocaleTimeString()}
                                </Typography>
                            </CardContent>
                        </Grid>
                    ))
                }
            </div>
        </div>
    )
}

export default Registrations;