import React from 'react';
import './homepage.styles.css';
import Hometop from '../../components/hometop/hometop.component';
import EventCard from '../../components/event-card/event-card.component'
const HomePage = () =>{
    const arr=[["https://img.theweek.in/content/dam/week/leisure/lifestyle/images/2018/4/8/sadhguru-jaggi.jpg",
                " Sadhguru",
                "Sadguru jaggi vasudev is a mystic ,philanthropist and guru."],
                ["https://www.yogaiya.in/wp-content/uploads/2020/03/Kamlesh-D.-Patel.jpg",
                "Kamlesh D.Patel",
                "Kamlesh D.Patel is the fourth spiritual Guide in the Sahaj Marg system of Raj Yoga meditation."],
                ["https://patch.com/img/cdn20/users/22943115/20170621/120441/styles/raw/public/article_images/sister_shivani_1-1498060899-8434.jpg",
                "Shivani Verma",
                "Shivani Verma is a Brahma Kumaris teacher at the Brahma  Kumaris World Spiritual University."
                ]
                ];
    return(
    	<div>
    	<Hometop/>
            <div className="about">
            <header>About the Event</header>
            <p>
            During these tough times, keeping one’s composure and calm isn't
            easy. Meditation has always been proven helpfull in coping with stress and
            anxiety. To help you meditate Sri yoganand Ashram has come up with 3 day
            meditation event. It has been designed for beginners and intermediate yoga
            practitioners. World Renouned Gurus and masters will be taking meditation sessions.
            </p>
            <p className="online">Entire Workshop will be <b><b>online</b></b> keeping in mind current situation
            Details for usage will be provided on registration</p></div>
            <div className="ed">
                <p>Date: <b>2nd-July-2020 to 4th-July-2020</b></p>
                <p>Timinigs: <b>7 AM - 9 AM</b></p>
            </div>
            <div className='gurus'>
                <h2>Who will be with us ?</h2>
                <div className="guru">
                <div><EventCard i={arr[0][0]} name={arr[0][1]} info={arr[0][2]} /></div>
                <div><EventCard i={arr[1][0]} name={arr[1][1]} info={arr[1][2]} /></div>
                <div><EventCard i={arr[2][0]} name={arr[2][1]} info={arr[2][2]} /></div>
                </div>
            </div>
            <header>Why Meditate?</header>
            <div className="benefits">
            <div>
                <p>
                    Meditation is the art of looking inside and 
                    discovering one’s own inner being. Meditation leads
                    us not only to totally new inner experiences, but 
                    helps us also to transform our day-to-day life into a
                    better, more meaningful and more fulfilling existence.
                </p>
                <p>
                    Few benefits of meditation are:
                </p>
                <div>
                <ul className="custom-list">
                     <li>creates mental clarity and calmness</li>
                    <li>Increased muscle strength and tone</li>
                    <li>Helps to manage stress</li>
                    <li>relieves chronic stress patterns</li>
                    <li>increases body awareness</li>
                    <li>Developing coping skills</li>
                </ul>
                </div>
            </div>
            <div>
            <button>Register here</button>
            </div>
        </div>
        </div>
    )
}

export default HomePage;