import React, { useEffect, useState } from 'react';
import BidList from '../BidList/BidList';
import Players from '../Players/Players';
import './BidPlace.css';

const BidPlace = () => {
    const [players, setPlayers] = useState([]);
    useEffect( () => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setPlayers(data))
            .catch(err => console.log(err))
    }, []);
    return (
        <div className='bidPlaceContainer'>
            <div className="playersContainer">
                {
                    players.map(player =>  <Players key={player._id} player = {player} />)
                }
            </div>
            <div className="bidListContainer">
                <BidList />
            </div>
        </div>
    );
};

export default BidPlace;