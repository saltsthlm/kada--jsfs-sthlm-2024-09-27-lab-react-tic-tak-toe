import { assert } from 'console';
import {
  initialState, move, jumpTo, currentMove, calculateWinner,
} from './engine';
import { GameState, SquareArray } from './types';

describe('Tic Tac Toe', () => {
  describe('initial state', () => {
    test('initialize history with one record', () => {
      const { history } = initialState();
      expect(history.length).toEqual(1);
    });

    test('initial history state should be an empty board', () => {
      const { history } = initialState();
      expect(history[0].squares).toEqual(Array(9).fill(null));
    });

    test('initial step number must be 0', () => {
      const { stepNumber } = initialState();
      expect(stepNumber).toEqual(0);
    });

    test('game should start with player X', () => {
      expect(initialState().xIsNext).toBeTruthy();
    });
  });

  describe('making a move', () => {
    let s0 : GameState, s1 : GameState, s2 : GameState;

    beforeEach(() => {
      s0 = initialState();
      s1 = move(0, s0);
      s2 = move(5, s1);
    });

    test('increment stepNumber', () => {
      expect(s1.stepNumber).toEqual(1);
      expect(s2.stepNumber).toEqual(2);
    });

    test('swap "next player"', () => {
      expect(s1.xIsNext).toBeFalsy();
      expect(s2.xIsNext).toBeTruthy();
    });

    test('build squares array', () => {
      const currentBoard = s2.history[s2.stepNumber].squares;
      expect(currentBoard[0]).toEqual('X');
      expect(currentBoard[5]).toEqual('O');
    });

    test('show current move', () => {
      expect(currentMove(s2)).toEqual(s2.history[s2.stepNumber]);
    });

    test('history has unique ids', () => {
      // arrange
      const ids = s2.history.map(hist => hist.id);

      // act
      // get a set of ids - which makes it unique
      const set = new Set(ids);

      // assert
      // a set is unique
      expect(ids.length).toEqual(set.size);
    });
  });

  describe('calculate the winner', () => {
    const playSequence = (seq : number[]) => {
      const game = seq.reduce((a, b) => move(b, a), initialState());
      return currentMove(game).squares;
    };

    test('no winner in empty game', () => {
      const emptyGameSequence : SquareArray = Array(0).fill(null);
      expect(calculateWinner(emptyGameSequence)).toBeNull();
    });

    test('return "null" while there is no winner', () => {
      const currentGame = playSequence([0, 4, 3, 1, 7]);
      expect(calculateWinner(currentGame)).toBeNull();
    });

    test('return the player who as three in a row', () => {
      const rowSeq = playSequence([0, 3, 1, 4, 2]);
      expect(calculateWinner(rowSeq)).toEqual('X');
    });

    test('return the player who has three in a column', () => {
      const columnSeq = playSequence([0, 1, 6, 4, 2, 7]);
      expect(calculateWinner(columnSeq)).toEqual('O');
    });

    test('return the player who has three in a diagonal', () => {
      const diagSeq = playSequence([0, 3, 4, 2, 8]);
      expect(calculateWinner(diagSeq)).toEqual('X');
    });
  });

  describe('timetraveling', () => {
    let s0 : GameState; let s1 : GameState; let s2 : GameState; let t1 : GameState;

    beforeEach(() => {
      s0 = initialState();
      s1 = move(0, s0);
      s2 = move(1, s1);
      t1 = jumpTo(s1.stepNumber, s2);
    });

    test('turn back stepNumber', () => {
      expect(t1.stepNumber).toEqual(s1.stepNumber);
    });

    test.skip('keep history', () => {
      expect(t1.history).toEqual(s2.history);
    });

    test.skip('show current move', () => {
      expect(currentMove(t1)).toEqual(s1.history[s1.stepNumber]);
    });
  });
});