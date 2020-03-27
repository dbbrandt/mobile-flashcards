import React, { Component } from "react";
import CardDetail from "./CardDetail";

class Quiz extends Component {
  handleSubmit = (card, correct) => {
    console.log(`handleSubmit Quiz correct: ${correct} card: `,card);
  };

  render() {
    const { deck } = this.props.route.params;
    console.log("Quiz deck: ", deck);
    const card = deck.questions[0];
    console.log("Quiz card: ", card);
    return (
      <CardDetail card={card} onSubmit={this.handleSubmit}/>
    )
  }
}

export default Quiz;
