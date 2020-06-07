import React from 'react';
import './homepage.styles.css';
import Hometop from '../../components/hometop/hometop.component';
import EventCard from '../../components/event-card/event-card.component'
import ImageCard from '../../components/imageCard/event-card.component'
const HomePage = () =>{
    return(
    	<div>
    	<Hometop/>
            <div className="meditation">
            <header>What is Meditation?</header>
            <p>
            Meditation is the art of looking inside and discovering one’s own 
            inner being. Meditation leads us not only to totally new inner experiences, 
            but helps us also to transform our day-to-day life into a better, more meaningful
             and more fulfilling existence.
            </p></div>
            <div className="about">
            <header>About the Event</header>
            lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
            lorem ipsumlorem ipsumlorem ipsumlorem ipsumvlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
            lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
            lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
            lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
            </div>
            <div className='gurus'>
                <h2>Who will be with us:</h2>
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