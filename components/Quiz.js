import React, { Component } from "react";
import CardDetail from "./CardDetail";
import { clearLocalNotification, setLocalNotification } from "../utils/helpers";
import {initialize} from "expo/build/Payments";


const InitalData = {
  current: 0,
  totalCards: 0,
  completed: false,
  answeredCount: 0,
  correctCount: 0,
  currentTitle: "",
  answerList: []
};

class Quiz extends Component {
  state = InitalData;

  componentDidMount() {
    this.handleStartQuiz();
    // When a user takes a quiz clear and reset their notification alert.
    clearLocalNotification()
      .then(setLocalNotification())
  }

  handleStartQuiz = () => {
    const { deck } = this.props.route.params;
    this.setState({
      ...InitalData,
      currentTitle: deck.title,
      totalCards: deck.questions.length
    });
  };

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
        deck,
        handleRestart: this.handleStartQuiz,
        correct: correctCount,
        answered: answeredCount,
        completed: completed
      });
    }
    return (
      <CardDetail
        card={card}
        completed={false}
        current={current}
        totalCards={totalCards}
        onSubmit={this.handleSubmit}
      />
    )
  }
}

export default Quiz;
