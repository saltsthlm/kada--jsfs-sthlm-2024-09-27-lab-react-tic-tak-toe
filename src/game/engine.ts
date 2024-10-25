import { GameState } from "./types";
const calculateWinner = () => {throw new Error('Not implemented');}
const currentMove = () => {throw new Error('Not implemented');}
const jumpTo = () => {throw new Error('Not implemented');}


function initialState(){
  const stepNumber = 0;
  const xIsNext = true;
  const squares: string[] = Array(9).fill(null);
  const history = [{
    squares
  }]
  return {history, stepNumber,xIsNext};
}

function move(pm: number, s: GameState): GameState{
  const newHistory = [...s.history];
  const curretSquare = newHistory[s.stepNumber].squares.slice();

  curretSquare[pm] = s.xIsNext ? "X" : "O"
  newHistory.push({
    squares: curretSquare,
    id: newHistory.length,
  });
  return{
    history: newHistory,
    stepNumber: s.stepNumber +1,
    xIsNext: !s.xIsNext,

  }}

    





/*
  if (pm === 0){
    s.stepNumber ++;
    s.stepNumber ++;
  }
  if (pm %2 === 0){
    s.stepNumber ++;
  }
  else{
    s.stepNumber  --;
  }
  return s

*/


export {
  initialState, calculateWinner, currentMove, move, jumpTo,
};