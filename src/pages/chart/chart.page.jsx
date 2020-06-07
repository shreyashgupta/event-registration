import React, { useState } from 'react';
import './chart.styles.scss';
import { firestore } from '../../firebase/firebase.utils';
import { Bar, Line } from 'react-chartjs-2';

var registrationTypeCountArray = [];

class Chart extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            registrationTypeCountArray: [0, 0, 0, 0]
        }
    }

    async componentDidMount() {
        let selfCount = 0, groupCount = 0, corporateCount = 0, othersCount = 0;
        const snapShot = await firestore.collection('registeredUsers').get();
        const docsArray = snapShot.docs;
        const docsDataArray = docsArray.map(doc => doc.data());
        docsDataArray.map(({ registrationType }, i) => {
            if (registrationType.localeCompare("self") === 0) selfCount++;
            else if (registrationType.localeCompare("group") === 0) groupCount++;
            else if (registrationType.localeCompare("corporate") === 0) corporateCount++;
            else if (registrationType.localeCompare("others") === 0) othersCount++;
        });

        this.setState({ registrationTypeCountArray: [selfCount, groupCount, corporateCount, othersCount] },
            () => console.log(this.state.registrationTypeCountArray));

    }


    render() {
        const data = {
            labels: ["Self", "Group", "Corporate", "Others"],
            datasets: [
                {
                    label: "Registration Count",
                    data: this.state.registrationTypeCountArray
                }
            ]
        }

        const options = {
            title: {
                display: true,
                text: 'Bar-Chart representing number of registrations for various types'
            },
            scales: {
                yAxes: [
                    {
                        ticks: {
                            min: 0,
                            stepSize: 1
                        }
                    }
                ]
            }
        }
        return (
            <center>
                <div className='chart'>
                    <Bar data={data} options={options} />
                </div>
            </center>
        )
    }
}

export default Chart;

