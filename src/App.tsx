import { useState } from 'react';
import './App.css';
import Dice from './components/dice';
import Shell from './components/shell';
import Player from './components/player';

import {Position, Cell} from './types/types';


function App() {
  let players = [{
    name: 'playerA',
    noOfCoins: 9
},
{
    name: 'playerB',
    noOfCoins: 9
}
];

  let [cells, changeCellState] = useState(Array.from({ length: 64 },() => ({player: '', numberOfCoins: 0,color: '' }! as Cell)));
  let [turn, changeTurn] = useState(0);
  let [dice, rollDice] = useState(0);
  let [dice2, rollDice2] = useState(0);



  let nextPlayer = () => {
    if (turn < players.length){
      changeTurn(turn+1);
      return;
    }
    changeTurn(0);
  }


  let centerX = 385;
  let centerY = 385;


  //generate hyperbola
  // r = a+b(theta) in this case: a= 1.9 and b = 0.5
  // rsintheta = X
  // rcostheta = Y

  // generate 64 of them

  let hyperbola : Array<Position> = Array.from({length: 64}, () => ({x: 0, y: 0}));


  let generateHyperbola = () => {
  let theta = 0;
  hyperbola = hyperbola.map((value: Position) : Position => {
      const a = 80;
      const b = 0.3;
      let r = a + b * theta;


      let xx = Math.floor(Math.random() * 25) % 25;

      let rVal = {
        x: centerX +  r * 1.8 * Math.cos(theta)  ,
        y: centerY +  r * 1.8 * Math.sin(theta) 
      }
      theta+=6;

      return rVal;

    });
}

 generateHyperbola();


 let diceRollOnClick = (e: any) => {
   e.preventDefault();
   
   let x = Math.floor(Math.random() * 6) + 1;
   let y = Math.floor(Math.random() * 6) + 1;
   rollDice(x);
   rollDice2(y);


 };

 let showPositionRelativeToCurrentCell = (pos: number, inc: boolean) => {

   if (pos >= dice+dice2) {
    let c = [...cells];
    if(inc) {
      c[pos - dice - dice2].color = 'red';
    } else {
      c[pos - dice - dice2].color = '';
    }
      changeCellState(c);
  }
 }

  return (
    <div>
      <div className="main-frame">
        <Dice diceA={dice} diceB={dice2}/>
        {hyperbola.map((val: Position,index:number) =>
         <Shell key={index} 
         keyPosition={index}
         showPositionOnMouseOver={showPositionRelativeToCurrentCell}
        posX={val.x} posY={val.y} cell={cells[index]}/>)}
      </div>
      <h2 className="body-title">Tibetian Sho</h2>
       <h1 style={{"textAlign" : "center"}}>Turn of {players[turn].name}</h1> 
      <div>
        <button className="body-roll-dice" onClick={(e) => diceRollOnClick(e)}>Roll Dice</button>
      </div>
      <Player/>
    </div>

  );
}

export default App;
