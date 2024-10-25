const calculateWinner = () => {throw new Error('Not implemented');}
const move = () => {throw new Error('Not implemented');}
const currentMove = () => {throw new Error('Not implemented');}
const jumpTo = () => {throw new Error('Not implemented');}



function initialState(){
  const stepNumber = 0;
  const squares = Array(9).fill(null);
  const history = [{
    squares
  }]
  return {history, stepNumber};
}











export {
  initialState, calculateWinner, currentMove, move, jumpTo,
};