import React from 'react';
import './event-list.styles.css';
import EventCard from '../../components/event-card/event-card.component.jsx.js';

const EventList = () => {
    return (
        <div>
            <header>Trending Events</header>
            <div className='event-list'>
                <div><EventCard /></div>
                <div><EventCard /></div>
                <div><EventCard /></div>
                <div><EventCard /></div>
                <div><EventCard /></div>
                <div><EventCard /></div>
            </div>
        </div>
    )
}

export default EventList;