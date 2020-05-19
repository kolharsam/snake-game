import React, { Component, Fragment, createRef } from "react";
import { isEqual, diff, getNextFoodSpot, isValidCell, bitMe } from "./utils";
import { DIRECTION, STATUS, CELL_SIZE } from "./constants";
import Grid from "./components/Grid";
import Overlay from "./components/Overlay";

import "./App.css";

class SnakeGame extends Component {
  constructor(props) {
    super(props);

    this.state = {
      snake: [],
      food: [],
      status: STATUS.TO_START,
      direction: DIRECTION.RIGHT,
    };

    this.numCells = Math.floor(props.size / CELL_SIZE);
    this.gridStyle = {
      width: `${props.size}px`,
      height: `${props.size}px`,
    };
    this.cellSize = props.size / this.numCells;
    this.snakeRef = createRef();
  }

  componentDidMount() {
    console.log(this.cellSize, this.gridStyle, this.numCells);
  }

  moveFood = () => {
    const food = getNextFoodSpot(this.numCells);

    this.setState({ food });
  };

  setDirection = ({ keyCode }) => {
    // Ignore event if the same key is pressed
    // or if the reverse direction key is pressed.

    let changeDirection = true;

    [
      [DIRECTION.UP, DIRECTION.DOWN],
      [DIRECTION.LEFT, DIRECTION.RIGHT],
    ].forEach((dir) => {
      if (dir.indexOf(this.state.direction) > -1 && dir.indexOf(keyCode) > -1) {
        changeDirection = false;
      }
    });

    if (changeDirection) {
      this.setState({ direction: keyCode });
    }
  };

  moveSnake = () => {
    const newSnake = [];
    const { snake, direction } = this.state;

    const [x, y] = snake[0];

    // disabling eslint for no default case
    // eslint-disable-next-line
    switch (direction) {
      case DIRECTION.DOWN:
        newSnake[0] = [x, y + 1];
        break;
      case DIRECTION.UP:
        newSnake[0] = [x, y - 1];
        break;
      case DIRECTION.RIGHT:
        newSnake[0] = [x + 1, y];
        break;
      case DIRECTION.LEFT:
        newSnake[0] = [x - 1, y];
        break;
    }

    // each cell follows the other, so we shift each cell
    // starting from the second element we change their
    // positions to the first cells latest position
    [].push.apply(
      newSnake,
      snake.slice(1).map((_, i) => {
        return snake[i];
      })
    );

    this.setState({ snake: newSnake });

    this.checkIfAteFood(newSnake);

    if (!isValidCell(newSnake[0], this.numCells) || bitMe(newSnake)) {
      this.endGame();
    }
  };

  checkIfAteFood = (snake) => {
    if (!isEqual(snake[0], this.state.food)) {
      return;
    }

    let newSnakeCell;
    const lastCell = snake[snake.length - 1];

    let lastCellOps = [
      [-1, 0],
      [0, -1],
      [1, 0],
      [0, 1],
    ];

    // get new snake cells and add the appropriate last cell
    // after the food was eaten by the snake
    if (snake.length > 1) {
      lastCellOps[0] = diff(lastCell, snake[snake.length - 2]);
    }

    for (let iter = 0; iter < lastCellOps.length; iter++) {
      const [last_x, last_y] = lastCell;
      const [x, y] = lastCellOps[iter];

      newSnakeCell = [last_x + x, last_y + y];

      if (isValidCell(newSnakeCell, this.numCells)) {
        break;
      }
    }

    this.setState({
      snake: snake.concat([newSnakeCell]),
      food: [],
    });
    // set new position for food
    this.moveFood();
  };

  startGame = () => {
    this.removeTimer();
    this.moveSnakeInterval = setInterval(this.moveSnake, 90);
    this.moveFood();

    this.setState({
      status: STATUS.PLAYING,
      snake: [[1, 3]],
      food: [12, 8],
      direction: DIRECTION.RIGHT,
    });

    // set focus on the grid
    this.snakeRef.current.focus();
  };

  removeTimer = () => {
    if (this.moveSnakeInterval) {
      clearInterval(this.moveSnakeInterval);
    }
  };

  endGame = () => {
    this.removeTimer();
    this.setState({
      status: STATUS.OVER,
    });
  };

  componentWillUnmount() {
    this.removeTimer();
  }

  render() {
    return <Fragment>{this.renderGame()}</Fragment>;
  }

  renderOverlay = () => {
    const { status, snake } = this.state;

    if (status === STATUS.TO_START) {
      return (
        <Overlay heading="SNAKE GAME">
          <button onClick={this.startGame}>Click To Start</button>
        </Overlay>
      );
    }

    if (status === STATUS.OVER) {
      return (
        <Overlay heading="Game Over!">
          <div className="mb-1">Your score: {snake.length - 1} </div>
          <button onClick={this.startGame}>Retry?</button>
        </Overlay>
      );
    }
  };

  renderGame = () => {
    const { snake, food } = this.state;

    return (
      <div
        className="game-board"
        onKeyDown={this.setDirection}
        style={this.gridStyle}
        ref={this.snakeRef}
        tabIndex={-1}
      >
        {this.renderOverlay()}
        <Grid
          currentSnake={snake}
          currentFood={food}
          numCells={this.numCells}
          gridStyle={this.gridStyle}
          size={this.cellSize}
        />
      </div>
    );
  };
}

export default SnakeGame;
