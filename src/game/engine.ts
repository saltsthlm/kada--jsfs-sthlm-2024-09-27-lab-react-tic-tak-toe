import { GameState } from "./types";

function initialState() {
  const stepNumber = 0;
  const xIsNext = true;
  const squares: string[] = Array(9).fill(null);
  const history = [
    {
      squares,
    },
  ];
  return { history, stepNumber, xIsNext };
}
function currentMove(s: GameState){
  return s.history[s.stepNumber]
}

function move(pm: number, s: GameState): GameState {
  const newHistory = [...s.history];
  const curretSquare = newHistory[s.stepNumber].squares.slice();
  curretSquare[pm] = s.xIsNext ? "X" : "O";
  newHistory.push({
    squares: curretSquare,
    id: newHistory.length,
  });
  return {
    history: newHistory,
    stepNumber: s.stepNumber + 1,
    xIsNext: !s.xIsNext,
  };
}
function calculateWinner(s: Array<string>){
  if(s.length === 0){
    return null
  }
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < winningCombinations.length; i++){
    const [a, b, c] = winningCombinations[i];
    if(s[a] && s[a] === s[b] && s[a] === s[c]){
      return s[a];
    }
  }
  return null;
} 
function jumpTo(step:number, currentS:GameState){
  currentS.stepNumber = step
  return currentS
}

export { initialState, calculateWinner, currentMove, move, jumpTo };
