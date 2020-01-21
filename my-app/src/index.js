import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) {
  return (
    <button className={props.value.winner ? "square-winner" : "square"} onClick={props.onClick}>
      {props.value.player}
    </button>
  )
}

class Board extends React.Component {

  renderSquare(i) {
    const square = this.props.squares[i];
    return (
      <Square value={square}
              onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      history: [{
        squares: Array(9).fill({player: null, winner: false}),
      }],
      stepNumber: 0,
      nextPlayer: 'X'
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.map(x => ({...x}));
    if (calculateWinner(squares) || calculateDraw(squares) || squares[i].player) {
      return;
    }
    squares[i].player = this.state.nextPlayer;
    this.setState({
      history: history.concat([{
        squares: squares,
      }]),
      stepNumber: history.length,
      nextPlayer: this.state.nextPlayer === 'X' ? 'O' : 'X'
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      nextPlayer: ((step % 2) === 0) ? 'X' : 'O'
    })
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);
    const draw = calculateDraw(current.squares);

    const moves = this.state.history.map((step, move) => {
      console.log('step# ' + move + ' ' + step.squares.map(x => x.player || '_'));
      const desc = move ?
        'Go to move #' + move :
        'Go to game start';
      return (
        <li key={move}>
          <div>
            <button onClick={() => this.jumpTo(move)}>{desc}</button>
            <Board
              squares={step.squares}
              onClick={i => console.log(i)}
            />
          </div>
        </li>
      )
    });
    let status;
    if (draw) {
      status = 'Cats Game!'
    } else if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + this.state.nextPlayer;
    }
    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={i => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game/>,
  document.getElementById('root')
);


function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a].player && squares[a].player === squares[b].player && squares[a].player === squares[c].player) {
      squares[a].winner = true;
      squares[b].winner = true;
      squares[c].winner = true;
      return squares[a].player;
    }
  }
  return null;
}

function calculateDraw(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  let count = 0;
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    let xs = false;
    let os = false;
    if (squares[a].player === 'X' || squares[b].player === 'X' || squares[c].player === 'X') xs = true;
    if (squares[a].player === 'O' || squares[b].player === 'O' || squares[c].player === 'O') os = true;
    if (xs && os) count++;
  }
  return count === lines.length;
}

