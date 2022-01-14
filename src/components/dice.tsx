import './dice.css';

interface Face {
    diceA: number,
    diceB: number
}

function Dice(props: Face) {
    return (
        <div className="dice">
            <div className="dice-box">{props.diceA}</div>
            <div className="dice-box">{props.diceB}</div>
        </div>
    )
}

export default Dice
