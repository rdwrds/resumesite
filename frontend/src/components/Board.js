import React, {Component} from 'react';

let wPawns = Array(8).fill("♙");
let bPawns = Array(8).fill("♟︎");
let empty1 = Array(8).fill(".");
let empty2 = Array(8).fill(".");
let empty3 = Array(8).fill(".");
let empty4 = Array(8).fill(".");
let wBackRow = ["♖","♘","♗","♕","♔","♗","♘","♖"];
let bBackRow = ["♜","♞","♝","♛","♚","♝","♞","♜"]


//TODO: create default board layout
class Board extends React.Component
{
  constructor(props)
  {
    super(props);
    this.drop = this.drop.bind(this);
    this.drag = this.drag.bind(this);
    this.state = {
      text: "",
      board: [bBackRow, bPawns, empty1, empty2, empty3, empty4, wPawns, wBackRow],
    }
  }

  allowDrop(e)
  {
    e.preventDefault();
  }

  drag(ev)
  {
    ev.dataTransfer.setData("text", ev.target.id);
  }

  drop(ev)
  {
    //swap the text values of the grid
    ev.preventDefault();
    let data = ev.dataTransfer.getData("text");
    let elm = document.getElementById(data);
    let temp = ev.target.textContent;
    
    ev.target.textContent = elm.textContent;
    elm.textContent = temp;
  }

  getButtons()
  {
    let buttons = [];
    //makes id = square1, square2, etc.
    //inits default board for use
    //TODO 2/28/23: Figure out why dragging from home row copies clones pawn icon, then switches back to X
    
    let cnt = 1;
    for(let square in this.state.board)
    {
      for(let j in this.state.board[square])
      {
        let id = "square" + cnt;
        buttons.push(<button id={id} className="square" draggable='true' onDragStart={(e) => this.drag(e)}>{this.state.board[square][j]}</button>);
        cnt+=1;
      }
    } 
    return <div className='buttons' onDragOver={(e) => this.allowDrop(e) } onDrop={(e) => this.drop(e)} >{buttons}</div>;
  }

  

  render()
  {
    return <div className='Board'>{this.getButtons()}</div>;
  }
}

export default Board;