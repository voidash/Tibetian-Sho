import React from 'react'
import './player.css'

interface Props {
    name: String,
    numberOfCoins: number
}

function Player(props:Props) {
    return (
        <div className="player-block">
            <h2>{props.name}</h2>
        </div>
    )
}

export default Player
