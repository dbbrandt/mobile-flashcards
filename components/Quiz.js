import React, { Component } from "react";
import { connect } from "react-redux";
import CardDetail from "./CardDetail";
import { clearLocalNotification, setLocalNotification } from "../utils/helpers";
import { completeQuiz, startQuiz } from "../actions/quiz";

const InitalData = {
  current: 0,
  totalCards: 0,
  answeredCount: 0,
  correctCount: 0,
  currentTitle: "",
  answerList: []
};

class Quiz extends Component {
  state = InitalData;

  componentDidMount() {
    this.handleInitQuiz();
    // When a user takes a quiz clear and reset their notification alert.
    clearLocalNotification().then(setLocalNotification());
  }

  handleInitQuiz = () => {
    const { deck } = this.props.route.params;
    const { dispatch } = this.props;
    dispatch(startQuiz());
    this.setState({
      ...InitalData,
      currentTitle: deck.title,
      totalCards: deck.questions.length
    });
  };

  handleSubmit = (card, correct) => {
    const { dispatch } = this.props;
    const { navigate } = this.props.navigation;
    const { deck } = this.props.route.params;
    const {
      current,
      totalCards,
      answeredCount,
      correctCount,
      answerList
    } = this.state;

    if (current + 1 >= totalCards) {
      dispatch(completeQuiz());
      navigate("Quiz Results", {
        deck,
        answered: answeredCount + 1,
        correct: correctCount + (correct ? 1 : 0)
      });
      this.handleInitQuiz();
    } else {
      this.setState({
        current: current + 1,
        answeredCount: answeredCount + 1,
        correctCount: correctCount + (correct ? 1 : 0),
        questionsAnswered: answerList.push(card)
      });
    }
  };

  render() {
    const { deck } = this.props.route.params;
    const { completed } = this.props.quiz;
    const { current, totalCards } = this.state;
    const card = deck.questions[current];
    if (completed) {
    }
    return (
      <CardDetail
        card={card}
        completed={completed}
        current={current}
        totalCards={totalCards}
        onSubmit={this.handleSubmit}
      />
    );
  }
}

export default connect(({ quiz }) => ({ quiz }))(Quiz);
