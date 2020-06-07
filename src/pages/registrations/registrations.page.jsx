import React, { useEffect, useState } from 'react';
import './registrations.styles.css';
import { firestore } from '../../firebase/firebase.utils';
import { RegistrationCard } from '../../components';

const f1 = async () => {
    const snapShot = await firestore.collection('registeredUsers').get();
    const docsArray = snapShot.docs;
    const docsArrayData = docsArray.map(doc => doc.data());
    return docsArrayData;
}

const Registrations = () => {
    const [docsDataArray, setDocsDataArray] = useState([]);
    useEffect(() => {
        const functionFirebase = async () => {
            const array = await f1();
            setDocsDataArray(array); 
        }
        functionFirebase();
        
    }, [])

    const docsArrayDataTimeStamp = docsDataArray.map(docData => docData.createdAt.toDate());
    console.log(docsArrayDataTimeStamp);
    console.log(docsDataArray);

    return (
        <div className='registrations'>
            <center><h2 className="tr">Total Number of Registrations: {docsDataArray.length}</h2></center>
            <div className='doc-data'>
                {
                    docsDataArray.map((docData, i) => (
                        <RegistrationCard
                            key={i}
                            imageUrl={docData.photoIdUrl}
                            name={docData.fullName}
                            ph={docData.mobileNumber}
                            emailId={docData.email}
                            regId={docData.registrationId}
                            numTickets={docData.numberOfTickets}
                            time={docsArrayDataTimeStamp[i].toLocaleTimeString()}
                            date={docsArrayDataTimeStamp[i].toLocaleDateString()}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Registrations;