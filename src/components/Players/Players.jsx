import React from 'react';
import './Players.css';

const Players = (props) => {
    const {_id, name, age, picture, gender, balance} = props.player;

    return (
        <div className='singlePlayer'>
            <img src={picture} alt="" />
            <div className="playerInfo">
                <h1>{name}</h1>
                <p>Gender: {gender} <br /> Age: {age}</p>
                <p className="balance">Yearly: ${balance}</p>
            </div>
            <button className='addPlayerBtn'>Add to List</button>
        </div>
    );
};

export default Players;