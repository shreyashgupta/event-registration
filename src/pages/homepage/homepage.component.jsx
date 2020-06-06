import React from 'react';
import './homepage.styles.css';
import { Link } from 'react-router-dom';
import Hometop from '../../components/hometop/hometop';
import EventCard from '../../components/event-card/event-card.component'
const HomePage = () =>{
    return(
    	<div>
    	<Hometop/>
    	<header>Some Stuff</header>
            <div className='artists'>
                <div><EventCard /></div>
                <div><EventCard /></div>
                <div><EventCard /></div>
                <div><EventCard /></div>
                <div><EventCard /></div>
                <div><EventCard /></div>
            </div>
            <header>Some More Stuff</header>
            <div className="memories">
                <div><EventCard /></div>
                <div><EventCard /></div>
                <div><EventCard /></div>
            </div>
        </div>
    )
}

export default HomePage;