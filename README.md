# &lt;/salt&gt;

## Salt :: Tic Tac Toe

This is a variant of the [official React Tic Tac Toe tutorial](https://reactjs.org/tutorial/tutorial.html).
But at &lt;/salt&gt; we are turning it up a notch, so you will develop the game using TDD practices and
linter rules based on the Airbnb config.

### Linter

The default linter shipped with `create-react-app` is very forgiving, so instead we will use a linter based on the rules from Airbnb.
However, since this exercise is based on a turorial with looser rules, we will disable the rule `react/no-array-index-key`.
If this was a project we designed completely from scratch, we would not disable that rule.
Instead we would let the rule guide us towards a better design.

### TDD

Yes - today we will do TDD and write the tests first.

To do that efficiently, we will break out the engine into an vanilla JS module with pure functions so that we test it in isolation.

We will develop the game engine of this game using TDD, and there are some starter tests for your in `./src/game/`

Again, the use of TDD is forcing us towards a better design - one that even let us replace the frontend framework and still keep our core game untouched!

### UI

The resulting HTML for this game should look something like this

```html
<!-- Game component -->
<div class="game">
  <div class="game-board">
    <!-- Board component -->
    <div>
      <div class="board-row">
        <!-- Square components -->
        <button type="submit" class="square"></button>
        <button type="submit" class="square"></button>
        <button type="submit" class="square"></button>
      </div>
      <div class="board-row">
        <!-- Square components -->
        <button type="submit" class="square"></button>
        <button type="submit" class="square"></button>
        <button type="submit" class="square"></button>
      </div>
      <div class="board-row">
        <!-- Square components -->
        <button type="submit" class="square"></button>
        <button type="submit" class="square"></button>
        <button type="submit" class="square"></button>
      </div>
    </div>
  </div>
  <div class="game-info">
    <div>Next player: X</div>
    <ol>
      <li>
        <button type="submit">Go to game start</button>
      </li>
    </ol>
  </div>
</div>
```

## Notes

We will end up with a lot of prop-drilling here. That is ok for this solution as we have not yet learned about `<Context>` or Redux.

We are also using PropType, when probably TypeScript is a better way to do it. That's another exercise that might be useful. PropTypes are still used out there. They are pretty weird, but it's used out there.

## Extra assignments

- Can you build a "Restart game" button that only is enabled when there is a winner?
- Can you list the history and allow the user to jump to an early state?
  - If you did that - how did that work? Is there anything in the `history`-management you want to change?
  - If you change it - remember to change the tests as well.
- Can you break out the `proptypes` to a separate file so that you don't need to repeat the definitions of it.
