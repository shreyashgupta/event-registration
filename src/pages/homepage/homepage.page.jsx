import React from 'react';
import './homepage.styles.css';
import Hometop from '../../components/hometop/hometop.component';
import EventCard from '../../components/event-card/event-card.component';
//import ImageCard from '../../components/image-card/image-card.component';
const HomePage = () =>{
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
                <p>Timinigs:<b>7 AM - 9 AM</b></p>
            </div>
            <div className='gurus'>
                <h2>Who will be with us ?</h2>
                <div className="guru">
                <div><EventCard /></div>
                <div><EventCard /></div>
                <div><EventCard /></div>
                </div>
            </div>
            <header>Why Meditate?</header>
            <div className="benefits">
            <div>
            Meditation is the art of looking inside and discovering one’s own 
            inner being. Meditation leads us not only to totally new inner experiences, 
            but helps us also to transform our day-to-day life into a better, more meaningful
             and more fulfilling existence.
            </div>
            </div>
            <div>
            <button>Register here</button>
            </div>
        </div>
    )
}

export default HomePage;