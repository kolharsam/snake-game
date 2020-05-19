import React, { Component } from "react";
import Score from "./components/Score";
import SnakeGame from "./components/SnakeGame";

import "./root.css";

class Root extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentScore: 0,
      highScore: 0,
    };
  }

  updateScore = () => {
    this.setState((prevState) => ({
      currentScore: prevState.currentScore + 1,
    }));
  };

  resetScore = () => {
    const { currentScore, highScore } = this.state;

    if (currentScore > highScore) {
      this.setState({ currentScore: 0, highScore: currentScore });
      return;
    }

    this.setState({ currentScore: 0 });
  };

  render() {
    return (
      <div className="root">
        <Score
          currentScore={this.state.currentScore}
          highScore={this.state.highScore}
        />
        <SnakeGame
          size={550}
          updateScore={this.updateScore}
          resetScore={this.resetScore}
        />
      </div>
    );
  }
}

export default Root;
