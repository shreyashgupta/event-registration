import React from 'react';
import './events.css';
import Filter from  '../../components/Filter/Filter.js';

const Events = () =>{
    return(
        <div className='events'>
            <h1>This is Events page</h1>
            <div className='search'>
                <div className='filter'>
                    <Filter/>
                </div>
                <div className='filtered-list'>
                    <h1>Here will be filtered cards</h1>
                </div>
            </div>
        </div>
    )
}

export default Events;