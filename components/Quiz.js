import React, { Component } from "react";
import CardDetail from "./CardDetail";

class Quiz extends Component {
  state = {
    current: 0,
    totalCards: 0,
    completed: false,
    answeredCount: 0,
    correctCount: 0,
    currentTitle: "",
    answerList: []
  };

  componentDidMount() {
    const { deck } = this.props.route.params;
    this.setState({currentTitle: deck.title, totalCards: deck.questions.length});
  }

  handleSubmit = (card, correct) => {
    const { current, totalCards, answeredCount, correctCount, answerList } = this.state;
    this.setState({
      current: current + 1,
      completed: current + 1 >= totalCards,
      answeredCount: answeredCount + 1,
      correctCount: correctCount + ( correct ? 1 : 0 ),
      questionsAnswered: answerList.push(card)
    });
  };

  render() {
    const { deck } = this.props.route.params;
    const { navigate } = this.props.navigation;
    const { current, completed, totalCards, correctCount, answeredCount } = this.state;
    const card = deck.questions[completed ? totalCards - 1 : current];
    if (completed) {
      navigate('Quiz Results', {
        correct: correctCount,
        answered: answeredCount,
        completed: completed
      });
    }
    return (
      <CardDetail
        card={card}
        completed={completed}
        current={current}
        totalCards={totalCards}
        onSubmit={this.handleSubmit}
      />
    )
  }
}

export default Quiz;
