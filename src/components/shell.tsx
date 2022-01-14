import pista from "../assets/pista.png";
import {Cell} from '../types/types';

interface Props {
    posX: number,
    posY: number
    cell: Cell,
    keyPosition: number,
    showPositionOnMouseOver: (a:number, b: boolean) => void,
}

export default function Shell({posX, posY,cell,keyPosition,showPositionOnMouseOver}: Props) {
    let cellRect = cell.numberOfCoins === 0 ? (
        <img alt="pista" src={pista} 
        onMouseOver={(e) => {
          e.preventDefault();
          showPositionOnMouseOver(keyPosition,true);
        }}
        onMouseOut={(e) => {
          e.preventDefault();
          showPositionOnMouseOver(keyPosition,false);
        }}
        style = {{
          position : "absolute",
          top: `${posX}px`,
          left: `${posY}px`,
          width:"30px",
          height:"30px",
          backgroundColor: `${cell.color}`
        }}/>
    ):
    (
        <div 

        onMouseOver={(e) => {
          e.preventDefault();
          showPositionOnMouseOver(keyPosition,true);
        }}
        onMouseOut={(e) => {
          e.preventDefault();
          showPositionOnMouseOver(keyPosition,false);
        }}
        style = {{
          position : "absolute",
          top: `${posX}px`,
          left: `${posY}px`,
          width:"30px",
          height:"30px",
          color: `${cell.color}`,
          textAlign: "center",
          border: "1px solid black",
          borderRadius: "20px",
        }}>{cell.numberOfCoins}</div>
    );


     return cellRect;
}

